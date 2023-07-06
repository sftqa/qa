# Base image with Node.js
FROM mcr.microsoft.com/playwright:v1.35.0-jammy

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Run the tests or execute the Playwright scripts
CMD ["npm", "test"]