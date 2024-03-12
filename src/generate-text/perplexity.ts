import { generateText } from 'ai/core';
import { perplexity } from 'ai/provider';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  const result = await generateText({
    model: perplexity.chat({ id: 'pplx-70b-online' }),
    prompt: 'What happened in San Francisco in this week?',
  });

  console.log(result.text);
}

main();
