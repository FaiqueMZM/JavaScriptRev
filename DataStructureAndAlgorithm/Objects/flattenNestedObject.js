// flatten nested objects

function flattenObject(obj, parentKey = "", result = {}) {
    for (let key in obj) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;
  
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  
    return result;
  }

  let nestedObj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
  };

  console.log(flattenObject(nestedObj));