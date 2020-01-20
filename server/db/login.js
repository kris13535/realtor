const crypto = require('crypto');
const connection = require('./config');

function getUser(data) {
    const { email, password } = data;
    const token = crypto.pbkdf2Sync(password, 'realtor', 10000, 64, 'sha512');
    const userPasswordHashed = token.toString('base64');
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users WHERE email = '${email}' AND password ='${userPasswordHashed}'`, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}


module.exports = {
    getUser
};