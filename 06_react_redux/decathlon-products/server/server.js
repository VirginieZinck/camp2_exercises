const express = require("express");
const port = process.env.PORT || 4000;
const fetch = require("node-fetch");

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function fetchCategories() {
  return fetch(
    "https://decath-product-api.herokuapp.com/categories",
    {
      method: "GET"
    })
    .then((result) => {
      const categories= result.json();
      return categories;
    })
    .then((categories) => {

      return categories.sort(
        function(a,b) {
          if (a.label < b.label) { return -1; }
          else if (a.label > b.label) { return 1; }
          else { return 0; }
        });

    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

function fetchProductsByCategory(categoryId) {
  return fetch(
    `https://decath-product-api.herokuapp.com/categories/${categoryId}/products`,
    {
      method: "GET"
    })
    .then((result) => {
      return products = result.json();
    })
    .then((products) => {
      console.log(products[0]);
      return products;
    })
    .then((products) => {
      return products.sort(function(a,b) {
        if (a.title < b.title) { return -1; }
        else if (a.title > b.title) { return 1; }
        else { return 0; }
      });
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

function fetchCategory(categoryId) {
  return fetch(
    `https://decath-product-api.herokuapp.com/categories/${categoryId}`,
    {
      method: "GET"
    })
    .then((result) => {
      const category= result.json();
      return category;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

function fetchProduct(productId) {
  return fetch(
    `https://decath-product-api.herokuapp.com/products/${productId}`,
    {
      method: "GET"
    })
    .then((result) => {
      const product= result.json();
      return product;
    })
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

app.get("/", function(request, result) {
  return fetchCategories()
    .then((categories) => {
      result.json(categories);
    });
});

app.get("/categories/:categoryId", function(request, result) {
  const categoryId = request.params.categoryId;

  Promise.all(
    [
      fetchCategory(categoryId),
      fetchCategories(),
      fetchProductsByCategory(categoryId)
    ]
  )
    .then(function(promiseAllResult) {
      result.json({
        category : promiseAllResult[0],
        categories : promiseAllResult[1],
        products : promiseAllResult[2]
      });
    });
});

app.get("/products/:productId", function(request, result) {
  const productId = request.params.productId;

  Promise.all(
    [
      fetchProduct(productId),
      fetchCategories()
    ]
  )
    .then(function(promiseAllResult) {
      result.json({
        product : promiseAllResult[0],
        categories : promiseAllResult[1]
      });
    });
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
