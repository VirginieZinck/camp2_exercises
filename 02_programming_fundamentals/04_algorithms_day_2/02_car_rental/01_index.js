const driver = {
  driverLicense: "D",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car

function canRentACar(aDriver) {
  let canRentACar;
  if ((aDriver.driverLicense === "B" || aDriver.driverLicense === "B1") &&
      aDriver.licenseIssued <= 2015 &&
      (aDriver.numberOfAccident===0 || aDriver.bonus >= 0.7 )) {
    canRentACar = true;
  } else {
    canRentACar = false;
  }
  console.log(aDriver);
  console.log(canRentACar);
  return canRentACar;
}


canRentACar(driver);


// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
