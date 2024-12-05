// promises and asynchronous javascript
console.log("Promises and asynchronous JavaScript");

// promises
console.log("Promises");
// a promise represents an operation that hasn't completed yet, but is expected to do so in the future
// pending : initial state
// fullfilled : operation completed successfully
// rejected : operation failed

// creating a promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise fulfilled!");
  } else {
    reject("Promise rejected.");
  }
});

myPromise
  .then((result) => console.log(result)) // Runs on success
  .catch((error) => console.log(error)) // Runs on failure
  .finally(() => console.log("Promise settled.")); // Always runs

// chaining promises
const getData = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data fetched"), 1000));

getData()
  .then((result) => {
    console.log(result);
    return "Processing data";
  })
  .then((processed) => {
    console.log(processed);
  })
  .catch((error) => console.log(error));

// async/await
const fetchData = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data fetched"), 1000));

async function handleData() {
  try {
    const result = await fetchData();
    console.log(result);
    console.log("Data processed");
  } catch (error) {
    console.log("Error:", error);
  }
}

handleData();

// parallel promises
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("One"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Two"), 2000)
);

Promise.all([promise1, promise2]).then((results) => console.log(results));
// Output: ["One", "Two"]

Promise.race([promise1, promise2]).then((result) => console.log(result));
// Output: "One" (whichever resolves first)

// fetch api

// using fetch to make http requests
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));

// using async/await with fetch
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.log("Error:", error);
  }
}

getPosts();
