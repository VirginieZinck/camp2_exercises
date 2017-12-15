const fetch_dkt_api = require("../fetch_dkt_api");

// 1. Let's get a product with its id: efe288cb-fb63-4b23-b8df-529f04b8b02b.
// Start by ending your request by displaying the JavaScript resulting.
// 2. On the same chain of promises, get the title of the brand of this product


test("it should fetch a product and its brand", (done) => {
  expect.assertions(1);
  const productId = "74f8deaa-64a5-49dd-8feb-a1d94805d982";
  return fetch_dkt_api.fetchProductAndBrand(productId)
    .then (brandTitle => {
      expect(brandTitle).toEqual("BABOLAT");
      done();
    });
});

test("it should handle errors when fetching a product or its brand", () => {
  const productId = "123/id";
  return fetch_dkt_api.fetchProductAndBrand(productId)
    .then (error => {
      expect(error.name).toEqual("FetchError");
    });
});
