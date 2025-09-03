# Give GCME - Missionary Donation Platform

A Next.js application for managing missionary donations with Better Auth authentication.

## Docker Setup

### Production Mode
```bash
docker compose up --build -d
```

### Development Mode
By default, `docker-compose.override.yml` enables development mode with hot reloading:
```bash
docker compose up --build -d
```

### Manual Production Mode
```bash
NODE_ENV=production docker compose up --build -d
```

## Services

- **App**: Next.js application on port 3001
- **Database**: PostgreSQL on port 5432

## Environment Variables

The following environment variables are configured in docker-compose.yml:
- `DATABASE_URL`: PostgreSQL connection string
- `PAYMENT_GATEWAY_URL`: Payment gateway API endpoint
- `PAYMENT_GATEWAY_TOKEN`: Authentication token for payment gateway
- `NEXT_PUBLIC_REDIRECT_URL`: Payment success redirect URL
- `NEXT_PUBLIC_NOTIFY_URL`: Payment notification webhook URL
- `DOCKER`: Flag indicating Docker environment

## Admin Access

1. Start the application with Docker
2. Create an admin user:
   ```bash
   docker compose exec app npm run create-admin
   ```
3. Access admin panel at http://localhost:3001/admin

## Database

- Automatic migrations run on container startup
- Database seeding occurs automatically
- Persistent data stored in `postgres_data` volume

## Health Checks

- App: HTTP check on port 3001
- Database: PostgreSQL readiness check

## Development

For local development without Docker:
```bash
npm install
npm run dev
```
