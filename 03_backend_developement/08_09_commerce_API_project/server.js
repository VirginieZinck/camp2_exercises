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
  client.query(
    "SELECT * FROM categories;",
    [],
    function(errorDB, resultDB) {
      if (errorDB) {
        console.warn(errorDB);
        result.send(errorDB);
      } else {
        result.json(resultDB.rows);
      }
      client.end();
    }
  );
}

// "/categories/:id" -> return a specific category
app.get("/categories/:categoryId", function(request, result) {
  const categoryId = request.params.categoryId;
  getCategoriesById(categoryId,result);
});

function getCategoriesById (categoryId,result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories where id=$1::uuid;",
    [categoryId],
    function(errorDB, resultDB) {
      if (errorDB) {
        console.warn(errorDB);
        result.send(errorDB);
      } else {
        result.json(resultDB.rows);
      }
      client.end();
    }
  );
}

// "/brands" -> return all brands
app.get("/brands", function(request, result) {
  getBrands(result);
});

function getBrands (result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands;",
    [],
    function(errorDB, resultDB) {
      if (errorDB) {
        console.warn(errorDB);
        result.send(errorDB);
      } else {
        result.json(resultDB.rows);
      }
      client.end();
    }
  );
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
    [brandId],
    function(errorDB, resultDB) {
      if (errorDB) {
        console.warn(errorDB);
        result.send(errorDB);
      } else {
        result.json(resultDB.rows);
      }
      client.end();
    }
  );
}

// "/products" -> return all products

app.get("/products", function(request, result) {
  getProducts(result);
});

function getProducts (result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products;",
    [],
    function(errorDB, resultDB) {
      if (errorDB) {
        console.warn(errorDB);
        result.send(errorDB);
      } else {
        result.json(resultDB.rows);
      }
      client.end();
    }
  );
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
    [productId],
    function(errorDB, resultDB) {
      if (errorDB) {
        console.warn(errorDB);
        result.send(errorDB);
      } else {
        result.json(resultDB.rows);
      }
      client.end();
    }
  );
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
    [categoryId],
    function(errorDB, resultDB) {
      if (errorDB) {
        console.warn(errorDB);
        result.send(errorDB);
      } else {
        result.json(resultDB.rows);
      }
      client.end();
    }
  );
}

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
