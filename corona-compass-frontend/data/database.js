module.exports = async function () {
    // use .env keys
    const env = require('dotenv');
    env.config();
    
    // Connect airtable
    const Airtable = require('airtable');
    Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
    const db = Airtable.base(process.env.AIRTABLE_BASE);
    // Load data
    const retrieveBucket = (bucketName) => {
        return new Promise((resolve, reject) => {
            let results = [];
            db(bucketName).select().eachPage((records, fetchNextPage) => {
                records.forEach(function (record) {
                    let props = record['_rawJson'];
                    results.push(props.fields);
                });
                fetchNextPage();
            }, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
    initiatives = await retrieveBucket('Initiatives');
    // Clean data
    const extract = (str, sep = '|') => {
        if (!str) {
            return [];
        }
        return str.split(sep);
    }
    initiatives = initiatives
    .filter(initiative => initiative['DisplayOnCoronaCompass'])
    .map(initiative => {
        // make first letter of key lower case
        Object.keys(initiative).map(key => {
            initiative[key.charAt(0).toLowerCase() + key.slice(1)] = initiative[key];
            delete initiative[key];
        });
        // delete references and non-public data
        delete initiative['beneficiaryTypes'];
        delete initiative['contactArrangementType'];
        delete initiative['helperRequirementType'];
        delete initiative['subCategories'];
        delete initiative['serviceProvisionType'];
        delete initiative['localFilterForState'];
        delete initiative['localFilterForProvince'];
        delete initiative['localFilterForCommunity'];
        delete initiative['localFilterForCity'];
        delete initiative['localFilterForZIP'];
        delete initiative['registrantEmail'];
        delete initiative['registrantConfirmationLink'];
        delete initiative['displayOnCoronaCompass'];
        // Split arrays into real arrays
        ['beneficiaryTypesNames', 'subCategoriesParentsNames', 'subCategoriesNames', 
        'contactArrangementTypesNames', 'helperRequirementTypesNames', 'serviceProvisionTypesNames']
        .map(toSplit => initiative[toSplit] = extract(initiative[toSplit]));
        // Join and minify zips
        let zips = [
            ...extract(initiative['zIP2ZIP'], ','), 
            ...extract(initiative['city2ZIP'], ','), 
            ...extract(initiative['state2ZIP'], ','), 
            ...extract(initiative['province2ZIP'], ','), 
            ...extract(initiative['community2ZIP'], ',')
        ].map(zip => zip.trim());
        initiative['zips'] = [...new Set(zips)];
        delete initiative['zIP2ZIP'];
        delete initiative['city2ZIP'];
        delete initiative['state2ZIP'];
        delete initiative['province2ZIP'];
        delete initiative['community2ZIP'];
        return initiative;
    });
    // generate slugs
    const slugify = (text) => {
        const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
        const to = "aaaaaeeeeeiiiiooooouuuunc------";
        const newText = text.split('').map(
          (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))
        return newText
          .toString()                     // Cast to string
          .toLowerCase()                  // Convert the string to lowercase letters
          .trim()                         // Remove whitespace from both sides of a string
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/&/g, '-y-')           // Replace & with 'and'
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-');        // Replace multiple - with single -
    }
    initiatives.map(i => i['slug'] = slugify(i['name']));
    return initiatives;
};
