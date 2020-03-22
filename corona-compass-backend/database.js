module.exports = async function () {
    // Connect airtable
    const Airtable = require('airtable');
    const db = Airtable.base(process.env.AIRTABLE_BASE);
    // Load data
    const retrieveBucket = (bucketName) => {
        return new Promise((resolve, reject) => {
            let results = [];
            db(bucketName).select().eachPage((records, fetchNextPage) => {
                records.forEach(function(record) {
                    let props = record['_rawJson'];            
                    results.push(props.fields);
                });
                fetchNextPage();
            }, (err) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
    initiatives = await retrieveBucket('Initiatives');
    // Clean data
    const extract = (str, sep) => {
        if(!str) {
            return [];
        }
        return str.split(sep);
    }
    initiatives.map(initiative => {
        initiative['BeneficiaryTypes'] = extract(initiative['BeneficiaryTypesNames'], '|');
        initiative['Categories'] = extract(initiative['CategoriesNames'], '|');
        initiative['Cities'] = extract(initiative['CitiesNames'], '|').map(city => city.trim());
        initiative['CommunicationTypes'] = extract(initiative['CommunicationTypesNames'], '|');
        initiative['Zips'] = extract(initiative['Zips'], ', ');
        let categories = [];
        const subCategoryNames = extract(initiative['SubCategoriesNames'], '|');
        const mainCategoryNames = extract(initiative['SubCategoriesParents'], '|');
        mainCategoryNames.map((value, index) => {
            let category = categories.find(c => c.name == value);
            if(!category) {
                category = { 'name': value, children: [] };
                categories.push(category);
            }
            category.children.push({ 'name': subCategoryNames[index] });
        });
        initiative['Categories'] = categories;
        initiative['IsForHelpers'] = !!initiative['IsForHelpers'];
        initiative['IsForHelpees'] = !!initiative['IsForHelpees'];
        delete initiative['BeneficiaryTypesNames'];
        delete initiative['CategoriesNames'];
        delete initiative['CitiesNames'];
        delete initiative['CommunicationTypesNames'];
        delete initiative['SubCategoriesParents'];
        delete initiative['SubCategoriesNames'];
        delete initiative['SubCategories'];
        Object.keys(initiative).map(key => {
            initiative[key.charAt(0).toLowerCase() + key.slice(1)] = initiative[key];
            delete initiative[key];
        });
        return initiative;
    });
    return initiatives;
};