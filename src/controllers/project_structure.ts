import { fileURLToPath } from 'url';
import path from "path";
import fileOperation from '../modules/file_operation.js';
import groqText from '../modules/ai_module.js';
import prompt from '../modules/ai_prompt.js';

const projectStructure = async (analysis: string) => {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const structure: string = await groqText(prompt.seniorDeveloper(analysis));
    fileOperation.writeFile(path.join(__dirname, "../context/project_structure.txt"), structure);
  } catch (error) {
    console.log(error)
  }
}

export default projectStructure;