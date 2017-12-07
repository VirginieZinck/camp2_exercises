const toWords = require("./to_words");

test("It should split a sentence with a mix of separators within ?.,;: -!", function() {
  expect(toWords("Hello you , how are you ? ")).toEqual([ "Hello", "you", "how", "are", "you" ]);
  expect(toWords("Hello you : hey you !! ... ")).toEqual([ "Hello", "you", "hey", "you" ]);
  expect(toWords("Hello you;; hey you Jean-baptiste ... ")).toEqual([ "Hello", "you", "hey", "you", "Jean", "baptiste" ]);
});

test("It should return an empty array when the sentence is empty", function() {
  expect(toWords("")).toEqual([]);
});

test("It should return an empty array when the sentence is null", function() {
  expect(toWords(null)).toEqual([]);
});

test("It should return an empty array when the sentence is undefined", function() {
  expect(toWords(undefined)).toEqual([]);
});

test("It should work with numbers", function() {
  expect(toWords(123)).toEqual(["123"]);
});
