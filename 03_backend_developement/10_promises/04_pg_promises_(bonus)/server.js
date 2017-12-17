const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const PG = require("pg");

// "/categories" -> return all categories
app.get("/categories", function(request, result) {
  getCategories(result);
});

function getCategories (result) {
  const client = new PG.Client();
  client.connect();

  return client.query("SELECT * FROM categories;")
    .then(resultDB => {
      client.end();
      return resultDB.rows;
    })
    .then(categories => {
      return result.json(categories);
    })
    .catch(errorDB => {
      client.end();
      console.warn(errorDB);
      return result.send(errorDB);
    });
}

// "/categories/:id" -> return a specific category
app.get("/categories/:categoryId", function(request, result) {
  const categoryId = request.params.categoryId;
  getCategoriesById(categoryId,result);
});

function getCategoriesById (categoryId,result) {
  const client = new PG.Client();
  client.connect();

  return client.query(
    "SELECT * FROM categories where id=$1::uuid;",
    [categoryId]
  )
    .then(resultDB => {
      client.end();
      return resultDB.rows;
    })
    .then(category => {
      return result.json(category);
    })
    .catch(errorDB => {
      client.end();
      console.warn(errorDB);
      return result.send(errorDB);
    });
}

// "/brands" -> return all brands
app.get("/brands", function(request, result) {
  getBrands(result);
});

function getBrands (result) {
  const client = new PG.Client();
  client.connect();

  client.query("SELECT * FROM brands;")
    .then(resultDB => {
      client.end();
      return resultDB.rows;
    })
    .then(brands => {
      return result.json(brands);
    })
    .catch(errorDB => {
      client.end();
      console.warn(errorDB);
      return result.send(errorDB);
    });
}

// "/brands/:id" -> return a specific brand
app.get("/brands/:brandId", function(request, result) {
  const brandId = request.params.brandId;
  getBrandsById(brandId,result);
});

function getBrandsById (brandId,result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands where id=$1::uuid;",
    [brandId]
  )
    .then(resultDB => {
      client.end();
      return resultDB.rows;
    })
    .then(brand => {
      return result.json(brand);
    })
    .catch(errorDB => {
      client.end();
      console.warn(errorDB);
      return result.send(errorDB);
    });
}

// "/products" -> return all products

app.get("/products", function(request, result) {
  getProducts(result);
});

function getProducts (result) {
  const client = new PG.Client();
  client.connect();

  client.query("SELECT * FROM products;")
    .then(resultDB => {
      client.end();
      return resultDB.rows;
    })
    .then(products => {
      return result.json(products);
    })
    .catch(errorDB => {
      client.end();
      console.warn(errorDB);
      return result.send(errorDB);
    });
}

// "/products/:id" -> return a specific product
app.get("/products/:productId", function(request, result) {
  const productId = request.params.productId;
  getProductsById(productId,result);
});

function getProductsById (productId,result) {
  const client = new PG.Client();
  client.connect();

  client.query(
    "SELECT * FROM products where id=$1::uuid;",
    [productId]
  )
    .then(resultDB => {
      client.end();
      return resultDB.rows;
    })
    .then(product => {
      return result.json(product);
    })
    .catch(errorDB => {
      client.end();
      console.warn(errorDB);
      return result.send(errorDB);
    });
}

// "/categories/:id/products" -> return all products from a specific category
app.get("/categories/:id/products", function(request, result) {
  const categoryId = request.params.id;
  getProductsByCategoryId(categoryId,result);
});

function getProductsByCategoryId (categoryId,result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    `SELECT categories.label, products.* FROM products
    INNER JOIN products_by_category on (products_by_category.product_id=products.id)
    INNER JOIN categories on (category_id=products_by_category.category_id)
    where products_by_category.category_id=$1::uuid
    order by categories.label;`,
    [categoryId]
  )
    .then(resultDB => {
      client.end();
      return resultDB.rows;
    })
    .then(products => {
      return result.json(products);
    })
    .catch(errorDB => {
      client.end();
      console.warn(errorDB);
      return result.send(errorDB);
    });
}

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
