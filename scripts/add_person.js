 // script that takes in the first name, last name and date
 // of a famous person as three command line arguments
 // and uses Knex to perform an insert.

const settings = require("../settings");//settings.js

const knex = require("knex")({
  client: 'pg',
  connection: {
    user      : settings.user,
    password  : settings.password,
    database  : settings.database,
    host      : settings.hostname,
    port      : settings.port,
    ssl       : settings.ssl
    }
});

const inputParam  = process.argv.slice(2,5);
  let firstName   = inputParam[0];
  let lastName    = inputParam[1];
  let bday        = inputParam[2];

knex('famous_people')
  .returning('id')
  .insert({
    first_name: firstName,
    last_name: lastName,
    birthdate: bday
  }).then((id) => {
    console.log(id);
  });


