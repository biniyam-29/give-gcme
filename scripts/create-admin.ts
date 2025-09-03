import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createAdminUser() {
  try {
    // Check if admin user already exists  
    const existingAdmin = await (prisma as any).authUser.findFirst({
      where: { role: "admin" }
    });

    if (existingAdmin) {
      console.log("Admin user already exists:", existingAdmin.email);
      return;
    }

    // Create admin user
    const adminUser = await (prisma as any).authUser.create({
      data: {
        email: "admin@gcme.org",
        name: "Admin User",
        role: "admin",
        emailVerified: new Date(),
      }
    });

    console.log("Admin user created successfully:", adminUser.email);
    console.log("Default email: admin@gcme.org");
    console.log("You can now sign in through the Better Auth system.");
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();
