# Base image, Node.js 22 running on Alpine Linux
FROM node:22-alpine  

# Set the working directory in the container
WORKDIR /app  

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./  

# Install the dependencies
RUN npm install  

# Copy the rest of the application code to the working directory
COPY . .  

# Expose port 5000 to the host
EXPOSE 5000  

# Start the application
CMD ["npm", "start"]  

