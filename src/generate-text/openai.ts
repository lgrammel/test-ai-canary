import { generateText } from 'ai/core';
import { OpenAI } from 'ai/openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI();

async function main() {
  const result = await generateText({
    model: openai.chat('gpt-3.5-turbo'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  console.log(result.text);
  console.log();
  console.log('Token usage:', result.usage);
  console.log('Finish reason:', result.finishReason);
}

main();
