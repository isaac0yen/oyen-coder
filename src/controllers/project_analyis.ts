import groqText from "../modules/ai_module.js";
import prompt from "../modules/ai_prompt.js";
import { projectProperty } from "../types.js"
import fileOperation from "../modules/file_operation.js"
import { fileURLToPath } from 'url';
import path from "path";

const projectAnalysis = async (property: projectProperty) => {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const summary: string = await groqText(prompt.consultant(property));
    fileOperation.writeFile(path.join(__dirname, "../context/project_analysis.txt"), summary);
    return summary;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default projectAnalysis;