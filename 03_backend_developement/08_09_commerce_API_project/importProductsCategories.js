const request = require("request");
const { Pool } = require("pg");
const pool = new Pool();

let countCategories=0;


function importProductsCategories(callback) {
  pool.connect(
    (err, client, done) => {
      if (err) {
        done();
        return console.error("Error acquiring client", err.stack);
      } else {
        callback(client, done, fetchCategories);
      }
    }
  );
}

function deleteProductsCategories(client, done, callback) {
  //delete from table
  client.query(
    "DELETE FROM products_by_category;",
    [],
    function(errorDB) {
      if (errorDB) {
        console.warn(errorDB);
      } else {
        callback(client, done);
      }
    }
  );
}

//Fetch products
function fetchCategories (client, done) {
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
        const totalCategories = categories.length;

        let batchCount=0;
        for (let i=0;i<totalCategories;i++) {
          if (i%100===0) {
            batchCount++;
          }
          setTimeout(
            function () {
              fetchProductsByCategory(client, done, categories[i], totalCategories, insertProductsByCategory);
            },
            batchCount*1000
          );
        }
      }
    }
  );
}

//Fetch products
function fetchProductsByCategory (client, done, category, totalCategories, callback) {
  request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${category.id}/products`,
      method: "GET"
    },
    function(errorAPI, responseAPI, resultAPI) {

      if (errorAPI) {
        console.log("Error in function fetchProductsByCategory:", errorAPI); // Print the error if one occurred
      } else {
        const productsByCategory = JSON.parse(resultAPI);

        if (productsByCategory.length===0) {
          countCategories++;
          console.log("No products categories for this category :"+category.label);
        } else {
          callback(client, done, category, totalCategories, productsByCategory);
        }
      }
    }
  );
}

function insertProductsByCategory (client, done, category, totalCategories, productsByCategory) {

  let nbOfInserts=0;
  productsByCategory.map( product => {
    return client.query(
      "INSERT INTO products_by_category (product_id, category_id) VALUES ($1::uuid,$2::uuid);",[
        product.id,
        category.id
      ],
      function(errorDB) {
        if (errorDB) {
          console.warn("Error in function insertProductsByCategory : "+errorDB+" =>>product:" + product);
        } else {
          //console.log(resultDB);
          nbOfInserts++;
          if (nbOfInserts===productsByCategory.length) {
            countCategories++;
            console.log(countCategories+ "-- Products Category : "+category.label+" => nbOfInserts: "+nbOfInserts);
            if (countCategories ===totalCategories) {
              console.log("Import done : Nb of Categories imported : "+countCategories);
              done();
            }
          }
        }
      }
    );
  });
}



importProductsCategories(deleteProductsCategories);


//fetchProductsByCategory(category,console.log);
//fetchProducts(importProducts);


// id: 'cbed3205-8a13-4f6d-a5d5-32c764eae9d3',
//    decathlon_id: 313366,
//    label: 'Protections et casques roller' }
