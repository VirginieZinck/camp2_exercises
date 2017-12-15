const fetch = require("node-fetch");

// 1. Let's get a product with its id: efe288cb-fb63-4b23-b8df-529f04b8b02b.
// Start by ending your request by displaying the JavaScript resulting.
// 2. On the same chain of promises, get the title of the brand of this product


function fetchProductAndBrand(productId) {

  return fetch(`https://decath-product-api.herokuapp.com/products/${productId}`)
    .then(result => {
      const product = result.json();
      return product;
    })
    .then(product => {
      console.log(product);
      return product.brand_id;
    })
    .then(brand_id => {
      return fetch(`https://decath-product-api.herokuapp.com/brands/${brand_id}`);
    })
    .then(result => {
      const brand = result.json();
      return brand;
    })
    .then(brand => {
      console.log(brand.title);
      return brand.title;
    })
    .catch(error => {
      console.warn(error);
      return error;
    });
}

const productId = "efe288cb-fb63-4b23-b8df-529f04b8b02b";
fetchProductAndBrand(productId);

module.exports = {fetchProductAndBrand:fetchProductAndBrand};
