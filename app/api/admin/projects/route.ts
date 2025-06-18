import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET - Fetch all projects
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "all";
    const category = searchParams.get("category") || "all";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { shortDescription: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
      ];
    }

    if (category !== "all") {
      where.category = category;
    }

    // Get projects with pagination
    const [projects, total] = await Promise.all([
      prisma.projects.findMany({
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
          title: "asc",
        },
      }),
      prisma.projects.count({ where }),
    ]);

    // Format the response
    const formattedProjects = projects.map((project) => {
      const raised = parseInt(project.fundingRaised || "0");
      const goal = parseInt(project.fundingGoal || "0");
      const progress = goal > 0 ? Math.round((raised / goal) * 100) : 0;

      return {
        id: project.id,
        title: project.title,
        slug: project.slug,
        shortDescription: project.shortDescription,
        category: project.category,
        location: project.location,
        duration: project.duration,
        teamSize: project.teamSize,
        fundingGoal: goal,
        fundingRaised: raised,
        beneficiaries: project.beneficiaries,
        problem: project.problem,
        solution: project.solution,
        urgency: project.urgency,
        urgencyFactors: project.urgencyFactors,
        impact: project.impact,
        timeLine: project.timeLine,
        testimonials: project.testimonials,
        strategy: project.Strategy?.title || "Unassigned",
        strategyId: project.strategyId,
        progress,
        status: "Active", // You might want to add a status field to your schema
        image: project.image
          ? `data:image/jpeg;base64,${Buffer.from(project.image).toString(
              "base64"
            )}`
          : null,
      };
    });

    return NextResponse.json({
      projects: formattedProjects,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Projects API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST - Create new project
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const shortDescription = formData.get('shortDescription') as string;
    const category = formData.get('category') as string;
    const location = formData.get('location') as string;
    const duration = formData.get('duration') as string;
    const teamSize = formData.get('teamSize') as string;
    const fundingGoal = formData.get('fundingGoal') as string;
    const fundingRaised = formData.get('fundingRaised') as string;
    const beneficiaries = formData.get('beneficiaries') as string;
    const problem = formData.get('problem') as string;
    const solution = formData.get('solution') as string;
    const urgency = formData.get('urgency') as string;
    const urgencyFactors = formData.get('urgencyFactors') as string;
    const impact = formData.get('impact') as string;
    const timeLine = formData.get('timeLine') as string;
    const testimonials = formData.get('testimonials') as string;
    const strategyId = formData.get('strategyId') as string;
    
    // Handle image upload
    const imageFile = formData.get('image') as File | null;
    let imageBuffer: Buffer | null = null;
    
    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      imageBuffer = Buffer.from(bytes);
    }

    const project = await prisma.projects.create({
      data: {
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
        image: imageBuffer,
        urgencyFactors: urgencyFactors ? JSON.parse(urgencyFactors) : [],
        impact: impact ? JSON.parse(impact) : [],
        timeLine: timeLine ? JSON.parse(timeLine) : null,
        testimonials: testimonials ? JSON.parse(testimonials) : null,
        strategyId,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Create Project API Error:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
