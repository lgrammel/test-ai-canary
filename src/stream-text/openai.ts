import { streamText } from 'ai/core';
import { OpenAI } from 'ai/provider';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI();

async function main() {
  const result = await streamText({
    model: openai.chat('gpt-3.5-turbo'),
    maxTokens: 512,
    temperature: 0.3,
    maxRetries: 5,
    prompt: 'Invent a new holiday and describe its traditions.',
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }
}

main();
