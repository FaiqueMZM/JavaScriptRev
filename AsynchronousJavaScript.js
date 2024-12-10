// asynchronous javascript
console.log("Asynchronous JavaScript");

// callbacks
// function passsed as an argument to another function

function fetchData(callback) {
  setTimeout(() => {
    console.log("Fetching data");
    callback();
  }, 2000);
}
fetchData(() => {
  console.log("Data fetched");
});
