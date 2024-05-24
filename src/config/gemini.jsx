

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }  from "@google/generative-ai";
 const GEMINI_API_KEY = "AIzaSyCElTUksqsxbeyX1C2Z-CVjs1hKV67KB3k";

  const apiKey =GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [
            {text: "are you able to generate images?\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I am a large language model and do not have the ability to generate images. However, I can assist you in searching for and finding images online."},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "are you able to generate images?\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I am a text-based AI, so I can't directly generate images. However, I can help you find images or create descriptions that can be used to generate images with other tools: \n\n* **Describe what you want:** Tell me what kind of image you're looking for, and I can help you find relevant images online. \n* **Provide image prompts:** I can help you craft detailed prompts that you can use with image generation tools like DALL-E, Midjourney, or Stable Diffusion. These tools use your text descriptions to create images. \n\nDo you have any specific ideas for images you'd like to create? Let me know! \n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
  }
  
  export default run;