// intern test

const fileSystem = {
  type: "directory",
  name: "root",
  permissions: "read",
  contents: [
    {
      type: "file",
      name: "file1.txt",
      size: 500,
      extension: "txt",
      lastModified: "2024-01-01",
      permissions: "read",
      metadata: {
        important: true,
      },
    },
    {
      type: "directory",
      name: "subdir1",
      permissions: "read",
      contents: [
        {
          type: "file",
          name: "file2.txt",
          size: 2000,
          extension: "txt",
          lastModified: "2024-01-10",
          permissions: "read",
        },
        {
          type: "file",
          name: "script.js",
          size: 3000,
          extension: "js",
          lastModified: "2024-02-01",
          permissions: "read",
          metadata: {
            archived: true,
          },
        },
      ],
    },
    {
      type: "directory",
      name: "subdir2",
      permissions: "write",
      contents: [
        {
          type: "file",
          name: "image.png",
          size: 2500,
          extension: "png",
          lastModified: "2024-03-01",
          permissions: "read",
        },
      ],
    },
  ],
};

// list files in the directory using for loops
function listFiles(directory) {
  const files = [];

  // Iterate through the initial contents
  for (const item of directory.contents) {
    if (item.type === "file") {
      files.push(item);
    } else if (item.type === "directory" && item.contents) {
      for (const subItem of item.contents) {
        if (subItem.type === "file") {
          files.push(subItem);
        }
      }
    }
  }

  return files;
}

console.log(listFiles(fileSystem));
// console.table(listFiles(fileSystem));

// list files in the directory using recursion
function listAllFiles(filesystem) {
  const result = [];

  if (filesystem.type === "file") {
    result.push(filesystem);
  } else if (filesystem.type === "directory" && filesystem.contents) {
    for (const item of filesystem.contents) {
      result.push(...listAllFiles(item));
    }
  }

  return result;
}

console.log(listAllFiles(fileSystem));
// console.table(listAllFiles(fileSystem));

// filter files
function filterFiles(directory, option, path = "") {
  let result = [];
  const currentPath = path ? `${path}/${directory.name}` : directory.name;

  // condition is true
  if (option(directory)) {
    result.push(currentPath);
  }

  // current item is not a file
  if (directory.type === "directory" && directory.contents) {
    directory.contents.forEach((child) => {
      result = result.concat(filterFiles(child, option, currentPath));
    });
  }
  return result;
}

// extension filter
const txtFilter = (directory) =>
  directory.type === "file" && directory.extension === "txt"; // txt files
console.log(filterFiles(fileSystem, txtFilter));

const jsFilter = (directory) =>
  directory.type === "file" && directory.extension === "js"; // js files
console.log(filterFiles(fileSystem, jsFilter));

// size filter
const largeFilter = (directory) =>
  directory.type === "file" && directory.size > 1000; // files larger than 1KB
console.log(filterFiles(fileSystem, largeFilter));
