import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const strategy = await prisma.strategy.findUnique({
      where: { slug },
    });
    if (!strategy) {
      return NextResponse.json(
        { error: "Strategy not found" },
        { status: 404 }
      );
    }
    // Convert image buffer to base64 if present
    const strategyWithImage = {
      ...strategy,
      image: strategy.image
        ? Buffer.from(strategy.image).toString("base64")
        : null,
    };
    return NextResponse.json(strategyWithImage);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch strategy" },
      { status: 500 }
    );
  }
}
