import Groq from "groq-sdk";
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';


interface CacheEntry {
  count: number;
  state: boolean;
}

interface Config {
  cache: {
    [key: string]: CacheEntry;
  };
}


const getKey = (): string => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  let config: Config = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../src/config.json"), "utf8")
  );

  const keyLocation = Object.keys(config.cache).reduce<number | null>(
    (minIndex, key, index) => {
      const cacheEntry: CacheEntry = config.cache[key];
      if (
        cacheEntry &&
        cacheEntry.state === true &&
        (minIndex === null || cacheEntry.count < (config.cache[minIndex] || {}).count)
      ) {
        return index;
      }
      return minIndex;
    },
    null
  );

  // If a suitable key is found, return the corresponding environment variable
  if (keyLocation !== null) {
    const envVarName = Object.keys(config.cache)[keyLocation];
    return process.env[envVarName] || "";
  }

  // If no suitable key is found, return an empty string
  return "";
};
const groq = new Groq({
  apiKey: process.env[getKey()]
});

const groqText = async (
  prompt: string,
  model: string = "mixtral-8x7b-32768"
): Promise<string> => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: model,
      max_tokens: 6000,
    });

    return chatCompletion.choices[0]?.message?.content;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default groqText;