const connection = require('./config');

function getCities() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT name, id FROM cities;`, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}



function getCitiesByCountry(country) {
    // console.log(country);
    return new Promise((resolve, reject) => {
        
        connection.query(`SELECT cities.name FROM apartments join cities on apartments.city_id = cities.id join countries on cities.country_id = countries.id 
                            where ? group by cities.name;`,[country], (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            console.log(results),
            resolve(results);
        });
    });
}
// `SELECT cities.name FROM cities join countries ON cities.country_id = countries.id Where ?`

module.exports = {
    getCities,
    getCitiesByCountry,

};