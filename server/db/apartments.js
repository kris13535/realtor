const connection = require('./config');
const Builder = require('./builders/apartmentsBuilder');

function getAllapartments({
    apartmentId,
    property_type,
    city,
    country,
    minPrice,
    maxPrice,
    minRoom,
    maxRoom,
    minBath,
    maxBath,
    sale_status,
    page = 1,
    size = 12
}) {
    return new Promise((resolve, reject) => {
        try {
            const { query, params } = Builder.allApartments(page, size)
                .apartmentId(apartmentId)
                .property_type(property_type)
                .city(city)
                .country(country)
                .minPrice(minPrice)
                .maxPrice(maxPrice)
                .minRoom(minRoom)
                .maxRoom(maxRoom)
                .minBath(minBath)
                .maxBath(maxBath)
                .sale_status(sale_status)
                .group_by()
                .limit()
                .build();
            connection.query(query, params, (error, results, fields) => {
                if (error) {
                    reject(error);
                    return;
                }
                console.log(query);
                resolve(results);
            });
        } catch (error) {
            console.log(error);
        }
    });
}
function getLastFourApartments() {
    return new Promise((resolve, reject) => {
        try {
            const {query, params} = Builder.allApartments().group_by().build();
            let que = query;
            que += ' ORDER BY created_on DESC LIMIT 0, 4 ';
            connection.query(que, params, (error, results, fields) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        } catch (error) {
            console.log(error);
        }
    });
}

function getApartmentById(apartmentId) {
    return new Promise((resolve, reject) => {
        try {
            const { query, params } = Builder.allApartments().apartmentId(apartmentId).group_by().build();
            connection.query(query, params, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results[0]);
            });
        } catch (error) {
            console.log(error);
        }
    });
}

function addApartment(newApartnemt){
    const {address, city, price, number_of_room, number_of_bath, sqft, description, sale_status, property_type, main_image} = data;
    const availability = "available";
    const user_id = 1;
    const status = "pending";
    console.log(data, userPasswordHashed);
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users (user_id, status, availability, address, city_id, price, number_of_room, number_of_bath, sqft, description, sale_status, property_type, main_image)
                            VALUES (${user_id} ,${status},${availability}, ${address}, ${city}, ${price}, ${number_of_room}, ${number_of_bath}, ${sqft}, ${description}, ${sale_status}, ${property_type}, ${main_image})`, (error, results, fields) => {
                                                    
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}



module.exports = {
    getAllapartments,
    getApartmentById,
    getLastFourApartments,
    addApartment,

};