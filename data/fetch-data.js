(async function () {
    try {
        let data = await require('./database.js')();
        require('fs').writeFile("./src/data.json", JSON.stringify(data, null, 4), function (err) {
            if (err) console.error('Error writing data.json to filesystem: ' + err);
        });
    } catch (ex) {
        console.error('Error fetching data from airtable: ' + ex);
    }
})();