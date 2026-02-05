import prisma from "../config/database";

async function testDB() {
  try {
    console.log("🔄 Connecting to database...");
    await prisma.$connect();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
  } finally {
    await prisma.$disconnect();
    console.log("🔌 Database disconnected");
  }
}

testDB();

