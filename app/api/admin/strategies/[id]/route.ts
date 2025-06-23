import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// PUT - Update strategy
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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
    const imageFile = formData.get("image") as File | string | null;
    let imageBuffer: Buffer | null = null;

    if (
      imageFile &&
      typeof imageFile === "object" &&
      typeof imageFile.arrayBuffer === "function"
    ) {
      const bytes = await imageFile.arrayBuffer();
      imageBuffer = Buffer.from(bytes);
    } else if (typeof imageFile === "string") {
      // Handle data URL or base64 string
      let base64String = imageFile;
      if (base64String.startsWith("data:image")) {
        base64String = base64String.split(",")[1];
      }
      imageBuffer = Buffer.from(base64String, "base64");
    }

    const updateData: any = {
      title,
      description,
      fullDescription,
      slug,
      icon,
      activities: activities ? JSON.parse(activities) : [],
      visionText,
      involvedText,
      impactQuote,
    };

    // Only update image if a new one is provided or if explicitly cleared
    if (formData.has("image")) {
      if (
        !imageFile ||
        (typeof imageFile === "object" && imageFile.size === 0) ||
        imageFile === "null"
      ) {
        updateData.image = null;
      } else if (imageBuffer) {
        updateData.image = imageBuffer;
      }
    }

    const strategy = await prisma.strategy.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(strategy);
  } catch (error) {
    console.error("Update Strategy API Error:", error);
    return NextResponse.json(
      { error: "Failed to update strategy" },
      { status: 500 }
    );
  }
}

// DELETE - Delete strategy
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.strategy.update({
      where: { id },
      data: { isDeleted: true },
    });

    return NextResponse.json({ message: "Strategy deleted successfully" });
  } catch (error) {
    console.error("Delete Strategy API Error:", error);
    return NextResponse.json(
      { error: "Failed to delete strategy" },
      { status: 500 }
    );
  }
}
