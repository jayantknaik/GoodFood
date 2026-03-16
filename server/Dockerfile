FROM node:14

# Set the working directory in the container
WORKDIR /app

# A copy of the current directory contents into the container at /app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NODE_ENV production

# Run server.js when the container launches
CMD ["node", "server.js"]