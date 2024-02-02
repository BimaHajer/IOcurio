# Use the official Node.js image with the desired version
FROM node:18.18.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the Angular application (adjust the command as needed for Angular 15)
RUN npm install -g @angular/cli@15.2.10 && ng build --prod

# Expose port 80 (adjust as needed)
EXPOSE 80

# Command to start the application (adjust as needed)
CMD ["npm", "start"]
