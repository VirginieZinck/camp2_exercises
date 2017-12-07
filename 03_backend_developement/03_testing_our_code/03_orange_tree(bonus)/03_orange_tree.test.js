
const tree = require("./03_orange_tree");

test("When we seed an orangeTree, all its attributes should be reset", function() {
  tree.seed();
  for (let i=0;i<5;i++) {
    tree.ageOneYear();
  }
  tree.seed();
  expect(tree.age).toBe(0);
  expect(tree.height).toBe(0);
  expect(tree.alive).toBe(true);
  expect(tree.oranges).toBe(0);
});

test("It should age one year", function() {
  tree.seed();
  tree.ageOneYear();
  expect(tree.age).toEqual(1);
});

test("It should grow 25cm until it is 10 Years old", function () {
  tree.seed();
  for (let i=0;i<10;i++) {
    tree.ageOneYear();
    if (tree.age===2) {
      expect(tree.height).toBe(50);
    }
    if (tree.age===10) {
      expect(tree.height).toBe(235);
    }
  }
});

test("It should grow 10 cm between 10 & 20 Years old", function () {
  tree.seed();
  for (let i=0;i<11;i++) {
    tree.ageOneYear();
    if (tree.age===9) {
      expect(tree.height).toBe(225);
    }
    if (tree.age===10) {
      expect(tree.height).toBe(235);
    }
    if (tree.age===11) {
      expect(tree.height).toBe(245);
    }
  }
});

test("It should not grow anymore after 20 years old", function () {
  tree.seed();
  for (let i=0;i<21;i++) {
    tree.ageOneYear();
    if (tree.age===19) {

      expect(tree.height).toBe(325);
    }
    if (tree.age===20) {
      expect(tree.height).toBe(325);
    }
    if (tree.age===21) {
      expect(tree.height).toBe(325);
    }
  }
});

//"It should produce 10 oranges between 5 & 10 years old"
//"It should produce 20 oranges between 10 & 20 Years old"
//"It should produce 5 oranges between 20 & 40 Years old"
//"It should not produce any oranges after 40 Years old"
test("It should produce the correct quty of oranges", function() {
  tree.seed();
  expect.assertions(100); // il s'attend à traiter 100 expects.
  for (let i=0;i<100;i++) {
    tree.ageOneYear();
    if (tree.age<5) {
      expect(tree.oranges).toBe(0);
    } else if (tree.age>=5 && tree.age<10) {
      expect(tree.oranges).toBe(10);
    } else if (tree.age>=10 && tree.age<20) {
      expect(tree.oranges).toBe(20);
    } else if (tree.age>=20 && tree.age<40) {
      expect(tree.oranges).toBe(5);
    } else if (tree.age>=40) {
      expect(tree.oranges).toBe(0);
    }
  }
});

test("It should not die until it is at least 50 but cannot live after 100", function() {
  tree.seed();
  expect.assertions(59);
  for (let i=0;i<110;i++) {
    tree.ageOneYear();

    if (tree.age<50) {
      expect(tree.alive).toBe(true);
    }

    if (tree.age>100) {
      expect(tree.alive).toBe(false);
    }
  }
});

test("When we pick an orange, the number of oranges should decrease by one", function() {
  tree.seed();
  for (let i=0;i<5;i++) {
    tree.ageOneYear();
  }
  tree.pickAnOrange();
  expect(tree.oranges).toBe(9);
  tree.pickAnOrange();
  expect(tree.oranges).toBe(8);
});

test("If there are no oranges left on tree, we shouldn't be able to pick an orange.", function() {
  tree.seed();
  tree.pickAnOrange();
  expect(tree.oranges).toBe(0);

});
