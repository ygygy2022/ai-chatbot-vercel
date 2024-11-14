# Use the official Node.js 22 Alpine image
FROM node:22-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Install pnpm
RUN npm install -g pnpm


# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["pnpm", "start"]