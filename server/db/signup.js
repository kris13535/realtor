const crypto = require('crypto');
const connection = require('./config');

function testingIfUserExisting(data){
   
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users WHERE email = '${data}'`, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            } 
            resolve(results);
        });
    });
}


function createNewUser(data) {
    const {first_name, last_name, email, password, phone } = data;
    const token = crypto.pbkdf2Sync(password, 'realtor', 10000, 64, 'sha512');
    const userPasswordHashed = token.toString('base64');
    const role_id = 2;
    const status = "active";
    console.log(data, userPasswordHashed);
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users (role_id, first_name, last_name, email, password, phone, status)
                            VALUES ('${role_id}', '${first_name}', '${last_name}', '${email}', '${userPasswordHashed}', '${phone}', '${status}')`, (error, results, fields) => {
                                                    
            if (error) {
                reject(error);
                return;
            }console.log(`INSERT INTO users (role_id, first_name, last_name, email, password, phone, status)
            VALUES (${role_id}, ${first_name}, ${last_name}, ${email}, ${userPasswordHashed}, ${phone}, ${status})`);
            console.log("tefgthrefvetbvf",results);
            resolve(results);
        });
    });
}


module.exports = {
    testingIfUserExisting,
    createNewUser
};