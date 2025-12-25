#Build stage
# Build stage using Node.js 22 running on Alpine Linux
FROM node:22-alpine AS build 

# Set the working directory in the container
WORKDIR /app 

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./ 

# Install the dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . . 

# Build the application               
RUN npm run build 

#Production stage
# Production stage using Node.js 22 running on Alpine Linux
FROM node:22-alpine 

# Set the working directory in the container
WORKDIR /app 

# Install serve globally
RUN npm install -g serve 

# Set the PATH environment variable
ENV PATH="/usr/local/bin:$PATH"

# Copy the built application from the build stage to the working directory
COPY --from=build /app/dist ./dist 

# Expose port 3000 to the host
EXPOSE 3000 

# Start the application using serve
CMD ["serve", "-s", "dist", "-l", "3000"] 
