FROM node:18-alpine

WORKDIR /app

# Install netcat for database connection checking and other utilities
RUN apk add --no-cache netcat-openbsd bash curl

# Install pnpm globally for better package management
RUN npm install -g pnpm

# Copy package files first for better caching
COPY package*.json pnpm-lock.yaml* ./
COPY prisma ./prisma/

# Install dependencies using pnpm (allow lockfile updates if needed)
RUN pnpm install

# Generate Prisma Client
RUN pnpm exec prisma generate

# Copy application code
COPY . .

# Make entrypoint script executable before changing user
RUN chmod +x docker-entrypoint.sh

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Build the application for production (as root to avoid permission issues)
RUN pnpm run build

# Change ownership of app directory to nextjs user
RUN chown -R nextjs:nodejs /app /app/.next

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:3001/api/health || exit 1

# Use entrypoint script
ENTRYPOINT ["./docker-entrypoint.sh"]