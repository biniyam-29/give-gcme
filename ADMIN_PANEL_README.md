# Missionary Donation Platform - Admin Panel

## Overview

The Admin Panel is a comprehensive management system for the Missionary Donation Platform, built with Next.js 15, React 19, TypeScript, and Prisma. It provides powerful tools for managing missionaries, projects, donations, and platform analytics.

## 🚀 Features

### Dashboard
- **Real-time Analytics**: Live statistics and metrics
- **Recent Activities**: Activity feed with latest updates
- **Project Progress**: Visual progress tracking for all projects
- **Quick Actions**: Fast access to common admin tasks
- **Donation Overview**: Recent donations and funding status

### Missionaries Management
- **CRUD Operations**: Create, read, update, delete missionary profiles
- **Advanced Search**: Search by name, email, location
- **Filtering**: Filter by status, type, strategy
- **Sorting**: Sort by any field with visual indicators
- **Bulk Operations**: Export, import, bulk actions
- **Profile Management**: Complete missionary profile management

### Projects Management
- **Project Tracking**: Monitor funding goals and progress
- **Category Management**: Organize projects by categories
- **Progress Visualization**: Visual progress bars and charts
- **Funding Analytics**: Detailed funding statistics
- **Timeline Management**: Project timeline and milestones

### Donations Management
- **Transaction Tracking**: Complete donation transaction history
- **Payment Methods**: Support for multiple payment gateways
- **Status Management**: Track donation status (completed, pending, failed)
- **Donor Analytics**: Donor behavior and patterns
- **Export Capabilities**: Export donation reports

### Analytics & Reports
- **Financial Analytics**: Revenue tracking and projections
- **Donor Analytics**: Donor retention and engagement metrics
- **Project Performance**: Project success rates and metrics
- **Geographic Distribution**: Donations by location
- **Custom Reports**: Generate custom reports and exports

### Settings & Configuration
- **Platform Settings**: General platform configuration
- **Security Settings**: Authentication and security options
- **Notification Settings**: Email and system notifications
- **Payment Settings**: Payment gateway configuration
- **Appearance Settings**: Theme and UI customization

## 🛠️ Technical Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Database**: PostgreSQL with Prisma ORM
- **Icons**: Lucide React
- **Charts**: Recharts (for analytics)
- **Forms**: React Hook Form with Zod validation

## 📁 Project Structure

```
app/
├── admin/
│   ├── page.tsx                 # Main dashboard
│   ├── missionaries/
│   │   └── page.tsx            # Missionaries management
│   ├── projects/
│   │   └── page.tsx            # Projects management
│   ├── donations/
│   │   └── page.tsx            # Donations management
│   ├── analytics/
│   │   └── page.tsx            # Analytics & reports
│   └── settings/
│       └── page.tsx            # Settings & configuration
├── api/
│   └── admin/
│       ├── dashboard/
│       │   └── route.ts        # Dashboard API
│       ├── missionaries/
│       │   └── route.ts        # Missionaries API
│       └── projects/
│           └── route.ts        # Projects API
lib/
├── admin-utils.ts              # Admin utility functions
└── db.ts                       # Database connection
prisma/
├── schema.prisma               # Database schema
└── seed.ts                     # Database seeding
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd missionary-donation-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your `.env.local`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/missionary_platform"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the admin panel**
   ```
   http://localhost:3000/admin
   ```

## 📊 Database Schema

### Core Entities

#### User (Missionaries)
```prisma
model user {
  id              String   @id @default(uuid())
  name            String
  title           String?
  email           String   @unique
  phone           String?
  shortBio        String?
  fullBio         String?
  image           Bytes?
  location        String?
  qualification   String?
  webAdress       String?
  experience      String?
  prayerRequests  String[]
  recentUpdates   Json?
  supportNeeds    Json?
  type            String?
  role            String?
  strategyId      String?
  strategy        strategy? @relation(fields: [strategyId], references: [id])
}
```

#### Projects
```prisma
model projects {
  id              String    @id @default(uuid())
  title           String
  slug            String    @unique
  shortDescription String
  image           Bytes?
  category        String?
  location        String?
  duration        String?
  teamSize        String?
  fundingGoal     String?
  fundingRaised   String?
  beneficiaries   String?
  problem         String?
  solution        String?
  urgency         String?
  urgencyFactors  String[]
  impact          String[]
  timeLine        Json?
  testimonials    Json?
  strategyId      String?
  strategy        strategy? @relation(fields: [strategyId], references: [id])
}
```

#### Strategy
```prisma
model strategy {
  id              String    @id @default(uuid())
  title           String
  image           Bytes?
  description     String
  fullDescription String?
  slug            String    @unique
  icon            String?
  activities      String[]
  visionText      String?
  involvedText    String?
  impactQuote     String?
  users           user[]
  projects        projects[]
}
```

## 🔧 API Endpoints

### Dashboard
- `GET /api/admin/dashboard` - Get dashboard statistics and data

### Missionaries
- `GET /api/admin/missionaries` - Get all missionaries with filtering
- `POST /api/admin/missionaries` - Create new missionary
- `PUT /api/admin/missionaries/[id]` - Update missionary
- `DELETE /api/admin/missionaries/[id]` - Delete missionary

### Projects
- `GET /api/admin/projects` - Get all projects with filtering
- `POST /api/admin/projects` - Create new project
- `PUT /api/admin/projects/[id]` - Update project
- `DELETE /api/admin/projects/[id]` - Delete project

## 🎨 UI Components

### Reusable Components
- **StatCard**: Display statistics with icons and trends
- **ProjectCard**: Project information with progress bars
- **ActivityItem**: Activity feed items with icons
- **QuickActionCard**: Quick action buttons
- **SortableHeader**: Sortable table headers
- **Modal**: Reusable modal dialogs

### Styling
- **Design System**: Consistent color palette and spacing
- **Responsive Design**: Mobile-first responsive layout
- **Dark Mode**: Support for light/dark themes
- **Animations**: Smooth transitions and hover effects

## 🔒 Security Features

- **Authentication**: Secure admin authentication
- **Authorization**: Role-based access control
- **Input Validation**: Form validation with Zod
- **SQL Injection Protection**: Prisma ORM protection
- **XSS Protection**: React built-in protection
- **CSRF Protection**: Next.js built-in protection

## 📈 Analytics Features

### Metrics Tracked
- Total donations and revenue
- Donor retention rates
- Project success rates
- Geographic distribution
- Payment method analytics
- Monthly growth trends

### Visualization
- Progress bars for project funding
- Charts for donation trends
- Geographic maps for distribution
- Time-series charts for analytics

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Docker Deployment
```bash
docker build -t missionary-platform .
docker run -p 3000:3000 missionary-platform
```

### Environment Variables for Production
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="https://yourdomain.com"
STRIPE_SECRET_KEY="..."
PAYPAL_CLIENT_ID="..."
PAYPAL_CLIENT_SECRET="..."
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates and Maintenance

### Regular Maintenance Tasks
- Database backups
- Security updates
- Performance monitoring
- Analytics review
- User feedback collection

### Future Enhancements
- Advanced reporting features
- Mobile app integration
- Multi-language support
- Advanced analytics
- AI-powered insights
- Integration with more payment gateways

---

**Built with ❤️ for the Great Commission** 