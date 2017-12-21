const express = require("express");
const nunjucks = require("nunjucks");
const port = process.env.PORT || 3000;
const fetch = require("node-fetch");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", "./views");
app.set("view engine", "njk");

app.use(express.static("images"));
app.use(express.static("css"));


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
    .catch((error) => {
      console.warn(error);
      return error;
    });
}

function fetchProductsByCategory(category) {
  return fetch(
    `https://decath-product-api.herokuapp.com/categories/${category.id}/products`,
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
//     .then((products) => {
//       return products.map(product => product.categoryId=category.id);
//     })
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

app.get("/categories", function(request, result) {
  return fetchCategories()
    .then((categories) => {
      result.render("categories", {categories:categories});
    });
});

app.get("/categories/:categoryId", function(request, result) {
  const categoryId = request.params.categoryId;

  return fetchCategory(categoryId)
    .then((category) => {
      return fetchProductsByCategory(category)
    })
    .then((products) => {
      result.render("products", {products:products});
    });
});

app.get("/products/:productId", function(request, result) {
  const productId = request.params.productId;
  console.log(productId);

  return fetchProduct(productId)
    .then((product) => {
      result.render("product", {product:product});
    });
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
