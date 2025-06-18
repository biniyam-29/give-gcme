import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// PUT - Update project
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const formData = await request.formData();

    // Extract form fields
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const shortDescription = formData.get("shortDescription") as string;
    const category = formData.get("category") as string;
    const location = formData.get("location") as string;
    const duration = formData.get("duration") as string;
    const teamSize = formData.get("teamSize") as string;
    const fundingGoal = formData.get("fundingGoal") as string;
    const fundingRaised = formData.get("fundingRaised") as string;
    const beneficiaries = formData.get("beneficiaries") as string;
    const problem = formData.get("problem") as string;
    const solution = formData.get("solution") as string;
    const urgency = formData.get("urgency") as string;
    const urgencyFactors = formData.get("urgencyFactors") as string;
    const impact = formData.get("impact") as string;
    const timeLine = formData.get("timeLine") as string;
    const testimonials = formData.get("testimonials") as string;
    const strategyId = formData.get("strategyId") as string;

    // Handle image upload
    const imageFile = formData.get("image") as File | null;
    let imageBuffer: Buffer | undefined = undefined;

    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      imageBuffer = Buffer.from(bytes);
    }

    const updateData: any = {
      title,
      slug,
      shortDescription,
      category,
      location,
      duration,
      teamSize,
      fundingGoal: fundingGoal?.toString(),
      fundingRaised: fundingRaised?.toString() || "0",
      beneficiaries,
      problem,
      solution,
      urgency,
      urgencyFactors: urgencyFactors ? JSON.parse(urgencyFactors) : [],
      impact: impact ? JSON.parse(impact) : [],
      timeLine: timeLine ? JSON.parse(timeLine) : null,
      testimonials: testimonials ? JSON.parse(testimonials) : null,
      strategyId,
    };

    // Only update image if a new one is provided
    if (imageBuffer) {
      updateData.image = imageBuffer;
    }

    const project = await prisma.projects.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Update Project API Error:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE - Delete project
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.projects.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Delete Project API Error:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
