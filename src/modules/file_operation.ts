const fs = require("fs");
const path = require("path");

const readFile = async (filePath: string) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = await fs.promises.readFile(filePath);
      return data;
    } else {
      throw new Error(`File ${filePath} does not exist.`);
    }
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

const writeFile = async (filePath, data) => {
  try {
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    await fs.promises.writeFile(filePath, data);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

const fileOperation = {
  readFile,
  writeFile,
};

module.exports = fileOperation;
