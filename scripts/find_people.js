const pg = require("pg");
const settings = require("../settings");//settings.js

const client = new pg.Client({
  user      : settings.user,
  password  : settings.password,
  database  : settings.database,
  host      : settings.hostname,
  port      : settings.port,
  ssl       : settings.ssl
});

const inputParam = process.argv[2];
const query = `
  SELECT *
  FROM famous_people
  WHERE last_name = '${inputParam}';
  `;

const printResult =  (result) => {
  console.log(`Found ${result.rows.length} person(s) by the name '${result.rows[0].last_name}:`)
  console.log(`- ${result.rows[0].id} ${result.rows[0].first_name} ${result.rows[0].last_name}, born '${result.rows[0].birthdate}'`);
};

client.connect( (err) => {
  if(err) {
    return console.error("Connection Error: ", err);
  }
  client.query(query, [], (err, result) => {
    if(err) {
      return console.error("error running querry", err);
    }
    printResult(result);
  });
});