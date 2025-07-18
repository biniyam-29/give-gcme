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

    // Check if the user exists before updating
    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(
        { error: "Missionary not found" },
        { status: 404 }
      );
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
    await prisma.user.update({
      where: { id },
      data: { isDeleted: true },
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

// GET - Fetch a single missionary by id
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const missionary = await prisma.user.findUnique({
      where: { id },
      include: {
        Strategy: {
          select: { title: true },
        },
      },
    });
    if (!missionary) {
      return NextResponse.json(
        { error: "Missionary not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      id: missionary.id,
      name: missionary.name,
      title: missionary.title || "Missionary",
      email: missionary.email,
      phone: missionary.phone,
      location: missionary.location,
      qualification: missionary.qualification,
      experience: missionary.experience,
      type: missionary.type,
      strategy: missionary.Strategy?.title || "Unassigned",
      strategyId: missionary.strategyId || "",
      image: missionary.image
        ? `data:image/jpeg;base64,${Buffer.from(missionary.image).toString(
            "base64"
          )}`
        : null,
      status: missionary.status || "Active",
      shortBio: missionary.shortBio,
      fullBio: missionary.fullBio,
      years: missionary.years,
      mission: missionary.mission,
      focus: missionary.focus,
      website: missionary.website,
      prayerRequests: missionary.prayerRequests,
      recentUpdates: missionary.recentUpdates,
      supportNeeds: missionary.supportNeeds,
    });
  } catch (error) {
    console.error("Get Missionary API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch missionary" },
      { status: 500 }
    );
  }
}
