const request = require("request");
//const { Pool } = require("pg");
//const pool = new Pool();


//Fetch products
function fetchProductsForOneCategory (category, callback) {
  request(
    {
      url: `https://decath-product-api.herokuapp.com/categories/${category.id}/products`,
      method: "GET"
    },
    function(errorAPI, responseAPI, resultAPI) {

      if (errorAPI) {
        console.log("error:", errorAPI); // Print the error if one occurred
      } else {

        const productsForOneCategory = JSON.parse(resultAPI);
        console.log(`Nb of products fetched for category ${category.label}: ${productsForOneCategory.length}`);
        callback(category, productsForOneCategory);
      }
    }
  );
}


// create table products_by_category (
// products_id     uuid 		PRIMARY KEY REFERENCES products(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
// category_id     uuid        REFERENCES products(id) ON DELETE RESTRICT ON UPDATE RESTRICT
// )


//
// function importProducts(products) {
//   pool.connect(
//     (err, client, done) => {
//       if (err) {
//         done();
//         return console.error("Error acquiring client", err.stack);
//       } else {
//         deleteProducts(client, done, products, insertProducts);
//       }
//     }
//   );
// }
//
// function deleteProducts(client, done, products, callback) {
//   //delete from table
//   client.query(
//     "DELETE FROM products;",
//     [],
//     function(errorDB) {
//       if (errorDB) {
//         console.warn(errorDB);
//       } else {
//         callback(client, done, products);
//       }
//     }
//   );
// }
//
//
// function insertProducts(client, done, products) {
//
//   let nbOfInserts=0;
//   products.map( product =>
//     client.query(
//       "INSERT INTO products VALUES ($1::uuid,$2::integer,$3::text,$4::text,$5::uuid,$6::float,$7::float,$8::float,$9::float,$10::text,$11::float);",[
//         product.id,
//         product.decathlon_id,
//         product.title,
//         product.description,
//         product.brand_id,
//         product.min_price ,
//         product.max_price,
//         product.crossed_price,
//         product.percent_reduction,
//         product.image_path,
//         product.rating
//       ],
//       function(errorDB) {
//         if (errorDB) {
//           console.warn(errorDB);
//         } else {
//           //console.log(resultDB);
//           nbOfInserts++;
//           if (nbOfInserts===products.length) {
//             console.log("Products import done : nbOfInserts: "+nbOfInserts);
//             done();
//           }
//         }
//       }
//     )
//   );
// }

const category = {
  id:"00024d84-ed1f-408f-96f1-2c839d03064a",
  decathlon_id: 590616,
  label : "Appâts, amorces, accessoires"
};

fetchProductsForOneCategory(category,console.log);
//fetchProducts(importProducts);


// id: 'cbed3205-8a13-4f6d-a5d5-32c764eae9d3',
//    decathlon_id: 313366,
//    label: 'Protections et casques roller' }
