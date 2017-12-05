
const request = require("request");

function simpleGet(callback) {

//   perform a query on https://postman-echo.com/get & execute the callback by passing only the result of the query
  request.get("https://postman-echo.com/get", function (error, response, body) {
    callback(body);
  });
}

function displayResult(body) {
  console.log("This is the result :",body);
}

//simpleGet(displayResult);


function simpleGetWithParams(callback) {

  request.get("https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis", function (error, response, body) {
    const result = JSON.parse(body);
    callback(result.args);
  });

}

//simpleGetWithParams(displayResult);


function validateTimestamp(callback) {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
  console.log(formattedDate);
  request.get(`https://postman-echo.com/time/valid?timestamp=${formattedDate}`, function (error, response, body) {
    callback(body);
  });

}


validateTimestamp(displayResult);

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
