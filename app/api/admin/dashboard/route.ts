import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Get counts and stats from database
    const [
      totalDonationsAmount,
      totalMissionaries,
      activeProjects,
      totalStrategies,
      recentDonations,
      topProjects,
      recentActivities,
    ] = await Promise.all([
      // Sum of all completed donations
      prisma.donation.aggregate({
        _sum: { amount: true },
        where: { status: "completed" },
      }),
      // Count missionaries
      prisma.user.count(),
      // Count active projects
      prisma.projects.count({ where: { isDeleted: false } }),
      // Count strategies
      prisma.strategy.count(),
      // Get recent donations
      prisma.donation.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        include: {
          project: true,
          missionary: true,
          strategy: true,
          transaction: true,
        },
      }),
      // Get top projects by donation sum
      prisma.projects.findMany({
        take: 3,
        orderBy: {
          fundingRaised: "desc",
        },
        where: { isDeleted: false },
        select: {
          id: true,
          title: true,
          fundingRaised: true,
          fundingGoal: true,
        },
      }),
      // Get recent activities (from donations)
      prisma.donation.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        include: {
          project: true,
          missionary: true,
          strategy: true,
        },
      }),
    ]);

    // Calculate monthly growth (example: compare last 30 days to previous 30 days)
    const now = new Date();
    const lastMonth = new Date(now);
    lastMonth.setDate(now.getDate() - 30);
    const prevMonth = new Date(now);
    prevMonth.setDate(now.getDate() - 60);
    const [lastMonthSum, prevMonthSum] = await Promise.all([
      prisma.donation.aggregate({
        _sum: { amount: true },
        where: {
          status: "completed",
          createdAt: { gte: lastMonth },
        },
      }),
      prisma.donation.aggregate({
        _sum: { amount: true },
        where: {
          status: "completed",
          createdAt: { gte: prevMonth, lt: lastMonth },
        },
      }),
    ]);
    let monthlyGrowth = 0;
    if (prevMonthSum._sum.amount && prevMonthSum._sum.amount > 0) {
      monthlyGrowth =
        (((lastMonthSum._sum.amount || 0) - prevMonthSum._sum.amount) /
          prevMonthSum._sum.amount) *
        100;
    }

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

    // Format recent donations
    const formattedRecentDonations = recentDonations.map((donation) => ({
      id: donation.id,
      amount: donation.amount,
      donor: donation.donorName,
      project: donation.project?.title || null,
      missionary: donation.missionary?.name || null,
      strategy: donation.strategy?.title || null,
      date: donation.createdAt,
      status: donation.status,
      paymentMethod: donation.paymentMethod,
      transactionId: donation.transaction?.id || null,
    }));

    // Format recent activities
    const formattedRecentActivities = recentActivities.map((donation) => ({
      type: donation.projectId
        ? "project"
        : donation.missionaryId
        ? "missionary"
        : donation.strategyId
        ? "strategy"
        : "donation",
      message:
        `New donation of $${donation.amount} received for ` +
        (donation.project?.title ||
          donation.missionary?.name ||
          donation.strategy?.title ||
          "General"),
      time: donation.createdAt,
    }));

    const dashboardData = {
      totalDonations: totalDonationsAmount._sum.amount || 0,
      totalMissionaries,
      activeProjects,
      totalStrategies,
      monthlyGrowth,
      recentDonations: formattedRecentDonations,
      topProjects: formattedTopProjects,
      recentActivities: formattedRecentActivities,
      colorNavy: "#001F54",
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
