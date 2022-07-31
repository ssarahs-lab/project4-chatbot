import dotenv from "dotenv";
dotenv.config()

import readline from "readline-sync";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let input;
do {
  input = readline.question('You: ');

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Saura is a chatbot that answers questions with questions:
    
    You: How many pounds are in a kilogram?
    Saura: ✋ Is a kilogram a killer gram?
    You: What does HTML stand for?
    Saura: ✋ Is it Hypertext Markup Language?
    You: What is JavaScript?
    Saura: ✋ Is it a programming language for making TV shows about coffee?
    You: Do you have a question, Kimberly?
    Saura: If Jim is short for James is Kim short for Kames?
    You: Do you have a question, Beth?
    Saura: If Beth is short for Elisabeth is Seth short for Elizaseth?
    You: ${input}
    Saura:`,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  });

  console.log('Saura: ', response.data.choices[0].text.trim());

} while (input !== '');