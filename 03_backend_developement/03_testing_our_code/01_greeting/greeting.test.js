const greeting = require("./greeting");

test("It should greet a name in upperCase", function() {
  expect(greeting("Virginie")).toBe("Hello VIRGINIE!");
});

test("If no name, it should say greet world", function() {
  expect(greeting("")).toBe("Hello WORLD!");
});

test("If name null or undefined, it should say greet world", function() {
  expect(greeting(null)).toBe("Hello WORLD!");
  expect(greeting(undefined)).toBe("Hello WORLD!");
});
