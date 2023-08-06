import 'dotenv/config'
import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.9,
});

const result = await llm.predict("What would be a good company name for a company that makes colorful socks?");


console.info(result)