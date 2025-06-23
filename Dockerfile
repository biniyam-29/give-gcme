FROM node:18-alpine

WORKDIR /app

# Install netcat for database connection checking
RUN apk add --no-cache netcat-openbsd

# Copy package.json, package-lock.json, and prisma directory first
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install --legacy-peer-deps

# Generate Prisma Client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Generate Prisma Client again after copying all files
RUN npx prisma generate

# Make the entrypoint script executable
RUN chmod +x docker-entrypoint.sh

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000
EXPOSE 3001
EXPOSE 5555
EXPOSE 8080

# Use the entrypoint script
ENTRYPOINT ["./docker-entrypoint.sh"] 