AI Chatbot
An Open-Source AI Chatbot Template designed to support multiple AI providers.

Features
Advanced routing for seamless navigation and performance
React Server Components (RSCs) and Server Actions for server-side rendering and increased performance
Unified API for generating text, structured objects, and tool calls with LLMs
Hooks for building dynamic chat and generative user interfaces
Supports multiple model providers, including OpenAI, Anthropic, Cohere, and more
Styling with Tailwind CSS
Component primitives for accessibility and flexibility
Data Persistence
Postgres for saving chat history and user data
Blob storage for efficient file storage
Simple and secure authentication
Model Providers
This template supports various LLM providers, allowing you to switch between them with minimal code changes. Providers include OpenAI, Anthropic, Cohere, and many more.

Deploy Your Own
You can deploy your own version of the AI Chatbot using your preferred hosting service. Ensure you configure the necessary environment variables for authentication and API access.

Running Locally
To run the AI Chatbot locally, you will need to set up environment variables as defined in .env.example. It's recommended to use a secure method for managing these variables, such as a .env file.

Note: Do not commit your .env file to avoid exposing sensitive information.

Install the necessary dependencies:
pnpm install
Start the development server:
pnpm dev
Your app should now be running on localhost:3000.
