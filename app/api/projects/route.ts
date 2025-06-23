import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");
    const skip = (page - 1) * limit;

    const [projects, total] = await Promise.all([
      prisma.projects.findMany({
        where: { isDeleted: false },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.projects.count({ where: { isDeleted: false } }),
    ]);

    // Map image field to base64 data URL if it's a Buffer
    const projectsWithImageUrl = projects.map((project) => {
      let imageUrl = "";
      if (project.image) {
        if (typeof project.image === "string") {
          imageUrl = project.image;
        } else if (
          project.image instanceof Buffer ||
          project.image instanceof Uint8Array
        ) {
          const base64 = Buffer.from(project.image).toString("base64");
          imageUrl = `data:image/png;base64,${base64}`;
        }
      }
      return {
        ...project,
        image: imageUrl,
      };
    });
    return NextResponse.json({
      projects: projectsWithImageUrl,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
