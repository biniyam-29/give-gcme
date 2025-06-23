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
    const data = await request.json();

    const updateData: any = {
      title: data.title,
      slug: data.slug,
      shortDescription: data.shortDescription,
      category: data.category,
      location: data.location,
      duration: data.duration,
      teamSize: data.teamSize,
      fundingGoal: data.fundingGoal?.toString(),
      fundingRaised: data.fundingRaised?.toString() || "0",
      beneficiaries: data.beneficiaries,
      problem: data.problem,
      solution: data.solution,
      urgency: data.urgency,
      urgencyFactors: Array.isArray(data.urgencyFactors)
        ? data.urgencyFactors
        : [],
      impact: Array.isArray(data.impact) ? data.impact : [],
      timeLine: data.timeLine || null,
      testimonials: data.testimonials || null,
      strategyId: data.strategyId,
    };

    // Only update image if provided (handle image upload separately if needed)
    if (data.image !== undefined) {
      // If image is an empty object or falsy, set to null
      if (
        data.image === null ||
        (typeof data.image === "object" && Object.keys(data.image).length === 0)
      ) {
        updateData.image = null;
      } else if (typeof data.image === "string") {
        // Handle data URL or base64 string
        let base64String = data.image;
        if (base64String.startsWith("data:image")) {
          base64String = base64String.split(",")[1];
        }
        updateData.image = Buffer.from(base64String, "base64");
      } else {
        updateData.image = data.image;
      }
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
    await prisma.projects.update({
      where: { id },
      data: { isDeleted: true },
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
