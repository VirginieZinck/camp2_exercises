const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

//Fetch categories
function fetchCategories (callback) {

  request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET"
    },
    function(errorAPI, responseAPI, resultAPI) {

      if (errorAPI) {
        console.log("error:", errorAPI); // Print the error if one occurred
      } else {

        const categories = JSON.parse(resultAPI);
        console.log("Nb of categories fetched : " + categories.length);
        callback(categories);
      }
    }
  );
}

function importCategories(categories) {
  pool.connect(
    (err, client, done) => {
      if (err) {
        done();
        return console.error("Error acquiring client", err.stack);
      } else {
        deleteCategories(client, done, categories, insertCategories);
      }
    }
  );
}

function deleteCategories(client, done, categories, callback) {
  //delete from table
  client.query(
    "DELETE FROM categories;",
    [],
    function(errorDB) {
      if (errorDB) {
        console.warn(errorDB);
      } else {
        callback(client, done, categories);
      }
    }
  );
}


function insertCategories(client, done, categories) {

  let nbOfInserts=0;
  categories.map( category =>
    client.query(
      "INSERT INTO categories (id, decathlon_id, label) VALUES ($1::uuid,$2::integer,$3::text);",
      [category.id, category.decathlon_id, category.label],
      function(errorDB) {
        if (errorDB) {
          console.warn(errorDB);
        } else {
          //console.log(resultDB);
          nbOfInserts++;
          if (nbOfInserts===categories.length) {
            console.log("Categories import done : nbOfInserts: "+nbOfInserts);
            done();
          }
        }
      }
    )
  );
}


fetchCategories(importCategories);


// id: 'cbed3205-8a13-4f6d-a5d5-32c764eae9d3',
//    decathlon_id: 313366,
//    label: 'Protections et casques roller' }
