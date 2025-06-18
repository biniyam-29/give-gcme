import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET - Fetch all strategies
export async function GET() {
  try {
    const strategies = await prisma.strategy.findMany();
    return NextResponse.json(strategies);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch strategies" },
      { status: 500 }
    );
  }
}

// POST - Create a new strategy
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const fullDescription = formData.get("fullDescription") as string;
    const slug = formData.get("slug") as string;
    const icon = formData.get("icon") as string;
    const activities = formData.get("activities") as string;
    const visionText = formData.get("visionText") as string;
    const involvedText = formData.get("involvedText") as string;
    const impactQuote = formData.get("impactQuote") as string;

    // Handle image upload
    const imageFile = formData.get("image") as File | null;
    let imageBuffer: Buffer | null = null;

    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      imageBuffer = Buffer.from(bytes);
    }

    const strategy = await prisma.strategy.create({
      data: {
        title,
        description,
        fullDescription,
        slug,
        icon,
        image: imageBuffer,
        activities: activities ? JSON.parse(activities) : [],
        visionText,
        involvedText,
        impactQuote,
      },
    });
    return NextResponse.json(strategy, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create strategy" },
      { status: 500 }
    );
  }
}
