const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

//Fetch brands
function fetchBrands (callback) {

  request(
    {
      url: "https://decath-product-api.herokuapp.com/brands",
      method: "GET"
    },
    function(errorAPI, responseAPI, resultAPI) {

      if (errorAPI) {
        console.log("error:", errorAPI); // Print the error if one occurred
      } else {

        const brands = JSON.parse(resultAPI);
        console.log("Nb of brands fetched : " + brands.length);
        callback(brands);
      }
    }
  );
}

function importBrands(brands) {
  pool.connect(
    (err, client, done) => {
      if (err) {
        done();
        return console.error("Error acquiring client", err.stack);
      } else {
        deleteBrands(client, done, brands, insertBrands);
      }
    }
  );
}

function deleteBrands(client, done, brands, callback) {
  //delete from table
  client.query(
    "DELETE FROM brands;",
    [],
    function(errorDB) {
      if (errorDB) {
        console.warn(errorDB);
      } else {
        callback(client, done, brands);
      }
    }
  );
}


function insertBrands(client, done, brands) {

  let nbOfInserts=0;
  brands.map( brand =>
    client.query(
      "INSERT INTO brands (id, title) VALUES ($1::uuid,$2::text);",
      [brand.id, brand.title],
      function(errorDB) {
        if (errorDB) {
          console.warn(errorDB);
        } else {
          //console.log(resultDB);
          nbOfInserts++;
          if (nbOfInserts===brands.length) {
            console.log("Brands import done : nbOfInserts: "+nbOfInserts);
            done();
          }
        }
      }
    )
  );
}


fetchBrands(importBrands);



module.exports = {
  fetchBrands: fetchBrands,
  importBrands:importBrands,
  deleteBrands:deleteBrands
};
