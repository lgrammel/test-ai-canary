import { generateText } from 'ai/core';
import { OpenAI } from 'ai/provider';
import dotenv from 'dotenv';
import fs from 'node:fs';

dotenv.config();

const openai = new OpenAI();

async function main() {
  const result = await generateText({
    model: openai.chat({ id: 'gpt-4-vision-preview' }),
    maxTokens: 512,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'Describe the image in detail.' },
          { type: 'image', image: fs.readFileSync('./data/comic-cat.png') },
        ],
      },
    ],
  });

  console.log(result.text);
}

main();
