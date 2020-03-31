class Database {

    /* instantiates a new instance */
    constructor(data) {
        if(data) {
            this.data = data;
        } else {
            this.data = require('../data.json');
        }
    }

    /* returns a filtered view on the database */
    filtered(filter) {
        return new Database(this.data.filter(filter));
    }

    /* gets one initiative by its slug */
    getOneBySlug(slug) {
        let result = this.filtered(i => i['slug'] == slug).get();
        if (result.length == 1) {
            return result[0];
        }
        return null;
    }

    /* selects only initiatives for helpees */
    forHelpee() {
        return this.filtered(i => i['isForHelpeesGeneral']);
    }

    /* selects only initiatives for helpers */
    forHelper() {
        return this.filtered(i => i['isForHelpers']);
    }

    /* gets the data from the database */
    get() {
        return this.data;
    }

    /* limits to initiatives that are not specific to an area */
    onlyForGlobal() {
        return this.filtered(i => !i['zips'] || i['zips'] && 0 == i.zips.length);
    }
    
    /* limits initiatives to an area */
    onlyForZip(zip) {
        return this.filtered(i => !!i['zips'] && -1 != i.zips.indexOf(zip));
    }

}

module.exports = new Database();