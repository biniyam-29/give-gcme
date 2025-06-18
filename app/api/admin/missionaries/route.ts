import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET - Fetch all missionaries
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "all";
    const type = searchParams.get("type") || "all";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
      ];
    }

    if (status !== "all") {
      where.status = status;
    }

    if (type !== "all") {
      where.type = type;
    }

    // Get missionaries with pagination
    const [missionaries, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        include: {
          Strategy: {
            select: {
              title: true,
            },
          },
        },
        orderBy: {
          name: "asc",
        },
      }),
      prisma.user.count({ where }),
    ]);

    // Format the response
    const formattedMissionaries = missionaries.map((missionary) => ({
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
    }));

    return NextResponse.json({
      missionaries: formattedMissionaries,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Missionaries API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch missionaries" },
      { status: 500 }
    );
  }
}

// POST - Create new missionary
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Debug log: print all form data
    for (const [key, value] of formData.entries()) {
      console.log(`POST /api/admin/missionaries: ${key} =`, value);
    }

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

    // Handle image upload
    const imageFile = formData.get("image") as File | null;
    let imageBuffer: Buffer | null = null;

    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      imageBuffer = Buffer.from(bytes);
    }

    const missionary = await prisma.user.create({
      data: {
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
        status: status || "Active",
        strategyId,
        shortBio,
        fullBio,
        image: imageBuffer,
        prayerRequests: prayerRequests ? JSON.parse(prayerRequests) : [],
        recentUpdates: recentUpdates ? JSON.parse(recentUpdates) : null,
        supportNeeds: supportNeeds ? JSON.parse(supportNeeds) : null,
        role: role || "missionary",
      },
    });

    return NextResponse.json(missionary, { status: 201 });
  } catch (error) {
    console.error("Create Missionary API Error:", error);
    return NextResponse.json(
      { error: "Failed to create missionary" },
      { status: 500 }
    );
  }
}
