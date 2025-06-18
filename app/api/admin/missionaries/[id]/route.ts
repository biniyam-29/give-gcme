import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// PUT - Update missionary
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get("name") as string;
    const title = formData.get("title") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const location = formData.get("location") as string;
    const qualification = formData.get("qualification") as string;
    const experience = formData.get("experience") as string;
    const years = formData.get("years") as string;
    const mission = formData.get("mission") as string;
    const focus = formData.get("focus") as string;
    const website = formData.get("website") as string;
    const type = formData.get("type") as string;
    const status = formData.get("status") as string;
    const strategyId = formData.get("strategyId") as string;
    const shortBio = formData.get("shortBio") as string;
    const fullBio = formData.get("fullBio") as string;
    const prayerRequests = formData.get("prayerRequests") as string;
    const recentUpdates = formData.get("recentUpdates") as string;
    const supportNeeds = formData.get("supportNeeds") as string;
    const role = formData.get("role") as string;

    // Debug log
    console.log("Incoming supportNeeds:", supportNeeds);

    // Handle image upload
    const imageFile = formData.get("image") as File | null;
    let imageBuffer: Buffer | undefined = undefined;

    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      imageBuffer = Buffer.from(bytes);
    }

    const updateData: any = {
      name,
      title,
      email,
      phone,
      location,
      qualification,
      experience,
      years,
      mission,
      focus,
      website,
      type,
      status,
      strategyId,
      shortBio,
      fullBio,
      prayerRequests: prayerRequests ? JSON.parse(prayerRequests) : [],
      recentUpdates: recentUpdates ? JSON.parse(recentUpdates) : null,
      supportNeeds: supportNeeds ? JSON.parse(supportNeeds) : null,
      role: role || "missionary",
    };

    // Only update image if a new one is provided
    if (imageBuffer) {
      updateData.image = imageBuffer;
    }

    const missionary = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(missionary);
  } catch (error) {
    console.error("Update Missionary API Error:", error);
    return NextResponse.json(
      { error: "Failed to update missionary" },
      { status: 500 }
    );
  }
}

// DELETE - Delete missionary
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Missionary deleted successfully" });
  } catch (error) {
    console.error("Delete Missionary API Error:", error);
    return NextResponse.json(
      { error: "Failed to delete missionary" },
      { status: 500 }
    );
  }
}
