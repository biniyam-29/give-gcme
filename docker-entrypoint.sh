#!/bin/bash

# Wait for the database to be ready
echo "Waiting for database to be ready..."
while ! nc -z db 5432; do
  sleep 1
done
echo "Database is ready!"

# Run database migrations
echo "Running database migrations..."
pnpm exec prisma migrate deploy

# Seed the database (ignore errors if already seeded)
echo "Seeding the database..."
pnpm run prisma:seed || echo "Database already seeded or seeding failed"

# Determine mode based on NODE_ENV
if [ "$NODE_ENV" = "development" ]; then
  echo "Starting application in development mode..."
  pnpm run dev
else
  echo "Starting application in production mode..."
  export PORT=3001
  pnpm start
fi