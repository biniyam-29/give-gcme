import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Get counts from database
    const [
      totalDonations,
      totalMissionaries,
      activeProjects,
      totalStrategies,
      recentDonations,
      topProjects,
      recentActivities,
    ] = await Promise.all([
      // Mock total donations calculation (replace with actual logic)
      Promise.resolve(125000),

      // Count missionaries
      prisma.user.count(),

      // Count active projects
      prisma.projects.count(),

      // Count strategies
      prisma.strategy.count(),

      // Get recent donations (mock data for now)
      Promise.resolve([
        {
          id: 1,
          amount: 2500,
          donor: "John Smith",
          project: "Clean Water Initiative",
          date: "2024-01-15",
        },
        {
          id: 2,
          amount: 1800,
          donor: "Sarah Johnson",
          project: "Education Program",
          date: "2024-01-14",
        },
        {
          id: 3,
          amount: 3200,
          donor: "Mike Davis",
          project: "Medical Mission",
          date: "2024-01-13",
        },
      ]),

      // Get top projects
      prisma.projects.findMany({
        take: 3,
        orderBy: {
          fundingRaised: "desc",
        },
        select: {
          title: true,
          fundingRaised: true,
          fundingGoal: true,
        },
      }),

      // Get recent activities (mock data for now)
      Promise.resolve([
        {
          type: "donation",
          message: "New donation of $2,500 received",
          time: "2 hours ago",
        },
        {
          type: "project",
          message: "Project 'Clean Water Initiative' updated",
          time: "4 hours ago",
        },
        {
          type: "missionary",
          message: "New missionary profile created",
          time: "6 hours ago",
        },
        {
          type: "strategy",
          message: "Strategy 'Community Development' modified",
          time: "1 day ago",
        },
      ]),
    ]);

    // Calculate monthly growth (mock calculation)
    const monthlyGrowth = 12.5;

    // Format top projects data
    const formattedTopProjects = topProjects.map((project) => ({
      name: project.title,
      raised: parseInt(project.fundingRaised || "0"),
      goal: parseInt(project.fundingGoal || "0"),
      progress: project.fundingGoal
        ? Math.round(
            (parseInt(project.fundingRaised || "0") /
              parseInt(project.fundingGoal)) *
              100
          )
        : 0,
    }));

    const dashboardData = {
      totalDonations,
      totalMissionaries,
      activeProjects,
      totalStrategies,
      monthlyGrowth,
      recentDonations,
      topProjects: formattedTopProjects,
      recentActivities,
    };

    return NextResponse.json(dashboardData);
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
