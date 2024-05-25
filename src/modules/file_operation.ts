import fs from "fs";
import path from "path";

const writeFile = async (filePath: string, data: string | Buffer) => {
  try {
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    await fs.writeFileSync(filePath, data);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

const fileOperation = {
  writeFile
}

export default fileOperation;
