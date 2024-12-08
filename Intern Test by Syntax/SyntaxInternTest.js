function exploreAdvancedFileSystem(
  directory,
  options,
  currentDepth = 0,
  currentPath = ""
) {
  const { extensionFilter, sizeFilter, dateFilter, maxDepth, includeArchived } =
    options;

  const results = [];
  const errors = [];

  function hasReadPermission(item) {
    return item.permissions === "read";
  }

  function matchesFilters(file) {
    if (file.metadata?.important) return true; // Always include important files
    if (file.metadata?.archived && !includeArchived) return false; // Exclude archived files unless explicitly allowed
    if (extensionFilter && file.extension !== extensionFilter) return false;
    if (sizeFilter && file.size < sizeFilter) return false;
    if (dateFilter && new Date(file.lastModified) < new Date(dateFilter))
      return false;
    return true;
  }

  function traverse(node, depth, path) {
    if (!hasReadPermission(node)) {
      errors.push(`Permission denied for ${path}`);
      return;
    }

    if (node.type === "file") {
      if (matchesFilters(node)) {
        results.push({ ...node, fullPath: path });
      }
      return;
    }

    if (node.type === "directory") {
      if (depth >= maxDepth) return;

      for (const content of node.contents) {
        traverse(content, depth + 1, `${path}/${content.name}`);
      }
    }
  }

  traverse(directory, currentDepth, currentPath || directory.name);

  results.sort((a, b) => {
    // Sort by metadata priority
    if (a.metadata?.important && !b.metadata?.important) return -1;
    if (!a.metadata?.important && b.metadata?.important) return 1;

    // Sort by lastModified (newer files first)
    const dateA = new Date(a.lastModified);
    const dateB = new Date(b.lastModified);
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;

    // Sort alphabetically by name
    return a.name.localeCompare(b.name);
  });

  return results.map((file) => file.fullPath);
}

// Example usage
const directoryStructure = {
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

const options = {
  extensionFilter: "txt",
  sizeFilter: 1000,
  dateFilter: "2024-01-01",
  maxDepth: 2,
  includeArchived: false,
};

const result = exploreAdvancedFileSystem(directoryStructure, options);
console.log(result);
// Output: ["root/subdir1/file2.txt", "root/file1.txt"]
