const sum = require("../src/sum");

test("sum(3,2) must be 5", () => {
  const result = sum(3, 2);

  expect(result).toBe(result);
});

//Penggunaan to equals dan tobe
//toBe untuk expect hanya hasil/nilainya
test("test using toBe", () => {
  let name = "NodeJS";
  let greeting = `Hello ${name}`;
  expect(greeting).toBe("Hello NodeJS");
});
//toEqual untuk expect keseluruhan properti yg ada
test("test using toEqual", () => {
    let frameworkJS = {id: "N1"};
    const obj = Object.assign(frameworkJS, {name: "NodeJS"})
    expect(frameworkJS).toEqual(obj)
})

// Truthiness Matcher
test("using truthynes", () => {
  let value = null;
  expect(value).toBeNull(); //memastikan nilai null
  expect(value).toBeDefined(); //meastikan nilai defined
  expect(value).toBeFalsy(); //memastikan nilai apapun bernilai false, jika sesuai dengan if statement

  value = undefined;
  expect(value).toBeUndefined(); //memastikan nilai undefined
  expect(value).toBeFalsy();

  value = "NodeJS";
  expect(value).toBeTruthy(); //memastikan nilai apapun bernilai true, sesuai if statement
});

//number Matchers
test("number", () => {
  let value = 3 + 3;
  expect(value).toBeGreaterThan(5); // value < 5
  expect(value).toBeGreaterThanOrEqual(6); // value <= 6
  expect(value).toBeLessThan(7); // value > 7
  expect(value).toBeLessThanOrEqual(6); // value >=6
});

//String Matchers
test("string Matchers", () => {
  const frameworkJS = "NodeJS";
  expect(frameworkJS).toBe("NodeJS");
  expect(frameworkJS).toEqual("NodeJS");
  expect(frameworkJS).toMatch(/ode/);
});

//Array Matchers ~> cek value dalam sebuah array
test("Array Matcher", () => {
  const myArr = ["ExpressJS", "Hapi", "Koa"];
  expect(myArr).toContain("ExpressJS");
  expect(myArr).toEqual(["ExpressJS", "Hapi", "Koa"]);

  const unitTesting = [{ title: "Jest" }, { title: "Mocha" }];
  expect(unitTesting).toContainEqual({ title: "Mocha" });
  expect(unitTesting).toEqual([{ title: "Jest" }, { title: "Mocha" }]);
});
