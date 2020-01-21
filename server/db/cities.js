const connection = require('./config');

function getcities() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT name, id FROM realtor.cities;`, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}


module.exports = {
    getcities
};