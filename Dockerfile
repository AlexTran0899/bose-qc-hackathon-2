# Use the official Python image as the base image
FROM python:3.9-slim-buster AS backend

# Set the working directory in the container
WORKDIR /app

# Copy the backend code into the container
COPY test.py .

# Install the required Python packages
RUN pip install flask

# Set the entrypoint command to run the backend
CMD ["python", "test.py"]


# Use the official Node.js image as the base image
FROM node:14 AS frontend

# Set the working directory in the container
WORKDIR /app

# Copy the frontend code into the container
COPY client/package.json client/yarn.lock ./
COPY client/src ./src

# Install the required Node.js packages
RUN yarn install

# Build the frontend code
RUN yarn build

# Set the entrypoint command to run the frontend
CMD ["yarn", "start"]