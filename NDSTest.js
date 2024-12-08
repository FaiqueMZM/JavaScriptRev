// nested data structure
console.log("Nested Data Structure");

// sum of nested array
function sumNestedArr(arr) {
  return arr.reduce((sum, element) => {
    if (Array.isArray(element)) {
      return sum + sumNestedArr(element);
    }
    return sum + element;
  }, 0);
}

// flat the nested array to a flat array
function flattenNestedArr(arr) {
  return arr.reduce((flat, element) => {
    if (Array.isArray(element)) {
      return flat.concat(flattenNestedArr(element));
    }
    return flat.concat(element);
  }, []);
}

const nestedArray = [1, [2, [3, 4, [5]]], 6];

console.log(sumNestedArr(nestedArray));

console.log(flattenNestedArr(nestedArray));

// find value in a object
function findValue(obj, value) {
  for (const key in obj) {
    if (key === value) {
      return obj[key];
    }
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const result = findValue(obj[key], value);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

const person = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    country: {
      countryName: "USA",
      code: "US",
    },
  },
};

const result = findValue(person, "countryName");
console.log(result);

console.log(person.name);
console.log(person.address);
console.log(person.address.city);
console.log(person.address.country.code);

// file system traversal

const fileSystem = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "folder1",
      type: "folder",
      children: [
        { name: "file1.txt", type: "file" },
        { name: "file2.txt", type: "file" },
      ],
    },
    {
      name: "folder2",
      type: "folder",
      children: [
        { name: "file3.txt", type: "file" },
        {
          name: "nestedFolder",
          type: "folder",
          children: [{ name: "file4.txt", type: "file" }],
        },
      ],
    },
  ],
};

function traverseFileSystem(node, path = "") {
  const currentPath = path ? `${path}/${node.name}` : node.name;

  if (node.type === "file") {
    console.log(currentPath);
  }

  if (node.type === "folder" && node.children) {
    node.children.forEach((child) => traverseFileSystem(child, currentPath));
  }
}

traverseFileSystem(fileSystem);

function collectFilePaths(node, path = "") {
  const currentPath = path ? `${path}/${node.name}` : node.name;
  let result = [];

  if (node.type === "file") {
    result.push(currentPath);
  }

  if (node.type === "folder" && node.children) {
    node.children.forEach((child) => {
      result = result.concat(collectFilePaths(child, currentPath));
    });
  }
  return result;
}

const allFiles = collectFilePaths(fileSystem);
console.log(allFiles);

function filterFiles(node, condition, path = "") {
  const currentPath = path ? `${path}/${node.name}` : node.name;
  let result = [];

  if (node.type === "file" && condition(node, path)) {
    result.push(currentPath);
  }

  if (node.type === "folder" && node.children) {
    node.children.forEach((child) => {
      result = result.concat(filterFiles(child, condition, currentPath));
    });
  }
  return result;
}
console.log("filter");
const condition = (node) => node.name.includes("file1");
console.log(filterFiles(fileSystem, condition));

const fileSystem1 = {
  folder1: {
    file1: "content1",
    file2: "content2",
  },
  folder2: {
    file3: "content3",
    nestedFolder: {
      file4: "content4",
    },
  },
};

function traverseFileSystem1(node, path = "") {
  for (const key in node) {
    const currentPath = path ? `${path}/${key}` : key;

    if (typeof node[key] === "object" && node[key] !== null) {
      traverseFileSystem1(node[key], currentPath);
    } else {
      console.log(currentPath);
    }
  }
}

traverseFileSystem1(fileSystem1);

function collectFilePaths1(node, path = "") {
  let result = [];

  for (const key in node) {
    const currentPath = path ? `${path}/${key}` : key;

    if (typeof node[key] === "object" && node[key] !== null) {
      result = result.concat(collectFilePaths1(node[key], currentPath));
    } else {
      result.push(currentPath);
    }
  }
  return result;
}

const allFiles1 = collectFilePaths1(fileSystem1);
console.log(allFiles1);

function filterFiles1(node, condition, path = "") {
  let result = [];

  for (const key in node) {
    const currentPath = path ? `${path}/${key}` : key;

    if (typeof node[key] === "object" && node[key] !== null) {
      result = result.concat(filterFiles1(node[key], condition, currentPath));
    } else {
      if (condition(node[key], currentPath)) {
        result.push(currentPath);
      }
    }
  }
  return result;
}

const condition1 = (content, path) => content.includes("content1");
console.log(filterFiles1(fileSystem1, condition1));
