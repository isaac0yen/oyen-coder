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

    const projectDevelopmentProcess: string = await (groqText(prompt.developmentProcessManager(analysis, structure)));
    fileOperation.writeFile(path.join(__dirname, "../context/project_development_process.txt"), projectDevelopmentProcess);

    const fileStructureAndCommunication: string = await (groqText(prompt.fileStructureAndCommunication(analysis, projectDevelopmentProcess)));
    fileOperation.writeFile(path.join(__dirname, "../context/file_structure_and_communication.txt"), fileStructureAndCommunication);
  } catch (error) {
    console.log(error)
  }
}

export default projectStructure;