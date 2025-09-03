import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function setupAdminPassword() {
  const email = "admin@gcme.org";
  const password = "admin123"; // Change this to your desired password
  
  try {
    // Hash the password using the same method Better Auth uses
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Find the admin user
    const adminUser = await prisma.authUser.findUnique({
      where: { email }
    });
    
    if (!adminUser) {
      console.log("❌ Admin user not found. Please run the seed script first.");
      return;
    }
    
    // Note: Better Auth stores password in a separate table or field
    // This is a simplified approach - you'll need to use Better Auth's API
    console.log("👤 Admin user found:", adminUser.email);
    console.log("🔑 Password hash generated:", hashedPassword);
    console.log("⚠️  To complete setup, use the sign-up flow at /sign-up with:");
    console.log("   Email: admin@gcme.org");
    console.log("   Password: admin123");
    console.log("   (The user already exists with admin role)");
    
  } catch (error) {
    console.error("❌ Error setting up admin password:", error);
  } finally {
    await prisma.$disconnect();
  }
}

setupAdminPassword();
