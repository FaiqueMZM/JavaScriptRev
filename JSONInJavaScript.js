// JSON in JavaScript
console.log("JSON in JavaScript");

// text based format that represents ructured data
// key - value pairs

const me = {
  name: "Inaas",
  age: 25,
  skills: ["Java", "JavaScript/TypeScript", "React"],
};

// JSON to javascript object
const josnString = '{"name":"Max", "age":27, "team":"Redbull Racing"}';
const max = JSON.parse(josnString);

console.log(max);
console.log(max.team);

// stringifying JSON
const user = { name: "Charles", age: 27 };
const jsonUser = JSON.stringify(user);
console.log(jsonUser);

// formatting JSON
const prettyJSON = JSON.stringify(user, null, 2);
console.log(prettyJSON);

// manipulating JSON
user.team = "Schuderio Ferrari";
console.log(user);

// fetching JSON from APIs
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

// deep copying objects
const original = { name: "Alice", details: { age: 25 } };
const copy = JSON.parse(JSON.stringify(original));

copy.details.age = 30;
console.log(original.details.age); // 25 (not affected)
