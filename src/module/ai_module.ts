import Groq from "groq-sdk";
import "dotenv/config";


const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const groqText = async (prompt: string, model: string = "mixtral-8x7b-32768") => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      model: model,
      max_tokens: 6000,
    });

    return chatCompletion.choices[0]?.message?.content
  } catch (err) {
    console.log(err);
    return;
  }
}

export default groqText;