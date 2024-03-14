import { streamText } from 'ai/core';
import { OpenAI } from 'ai/provider';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI();

async function main() {
  const result = await streamText({
    model: openai.completion({ id: 'gpt-3.5-turbo-instruct' }),
    maxTokens: 1024,
    system: 'You are a helpful chatbot.',
    messages: [
      {
        role: 'user',
        content: 'Hello!',
      },
      {
        role: 'assistant',
        content: 'Hello! How can I help you today?',
      },
      {
        role: 'user',
        content: 'I need help with my computer.',
      },
    ],
  });

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart);
  }
}

main();
