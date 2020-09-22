const host = 'lallah.db.elephantsql.com';
const database = 'mjvhvozk';
const user = 'mjvhvozk';
const password = 'GcvVCOnIPaxW5hUKuBcImpPwRfJpuAbI';

const pgp = require('pg-promise')({
    query: function(e) {
        console.log("Query: ", e.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
}

const db = pgp(options);

module.exports = db;