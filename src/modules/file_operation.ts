import fs from "fs";
import path from "path";



const readFile = async (filePath: string) => {
  if (!filePath) {
    throw new Error("No file path provided.");
  }
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

const writeFile = async (filePath: string, data: string) => {
  if (!filePath) {
    throw new Error("No file path provided.");
  }
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

export default fileOperation;
