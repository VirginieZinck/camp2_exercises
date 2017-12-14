
const importBrands = require('../importBrands');
const PG = require("pg");

describe('#fetchBrands()', () => {

  test("it should have been called once", () => {
    const logSpy = jest.spyOn(importBrands.fetchBrands, 'get').mockImplementation();

    importBrands.fetchBrands();

    expect(logSpy).toHaveBeenCalledTimes(1);
    logSpy.mockRestore()
  });

});


describe('#deleteBrands()', () => {

  test("it should have been called once", () => {
    const logSpy = jest.spyOn(importBrands.fetchBrands, 'get').mockImplementation();

    importBrands.deleteBrands();

    expect(logSpy).toHaveBeenCalledTimes(1);
    logSpy.mockRestore()
  });

  test("it should have deleted all table", () => {
    importBrands.deleteBrands();
    const client = new PG.Client();
    client.connect();
    client.query(
      "SELECT count(*) FROM brands;",
      [],
      function(errorDB, resultDB) {
        if (errorDB) {
          console.log(errorDB);
        } else {
          console.log(resultDB.rows);
        }
        client.end();
      }
    );

  });

});
