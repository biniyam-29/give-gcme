"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  Calendar,
  Download,
  RefreshCw,
  Filter,
  Eye,
  PieChart,
  Activity,
  MapPin,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState("30d");
  const [selectedMetric, setSelectedMetric] = useState("donations");

  // Mock analytics data
  const [analyticsData, setAnalyticsData] = useState({
    overview: {
      totalDonations: 125000,
      totalDonors: 450,
      activeProjects: 23,
      totalMissionaries: 45,
      monthlyGrowth: 12.5,
      donorRetention: 78.3,
    },
    donationTrends: [
      { month: "Jan", amount: 15000, donors: 45 },
      { month: "Feb", amount: 18000, donors: 52 },
      { month: "Mar", amount: 22000, donors: 61 },
      { month: "Apr", amount: 19000, donors: 58 },
      { month: "May", amount: 25000, donors: 67 },
      { month: "Jun", amount: 28000, donors: 73 },
    ],
    topDonors: [
      { name: "John Smith", amount: 5000, donations: 3 },
      { name: "Sarah Johnson", amount: 4200, donations: 2 },
      { name: "Mike Davis", amount: 3800, donations: 4 },
      { name: "Emily Wilson", amount: 3200, donations: 1 },
      { name: "David Brown", amount: 2800, donations: 2 },
    ],
    projectPerformance: [
      {
        name: "Clean Water Initiative",
        raised: 45000,
        goal: 60000,
        donors: 125,
      },
      { name: "Education Program", raised: 32000, goal: 50000, donors: 89 },
      { name: "Medical Mission", raised: 28000, goal: 40000, donors: 156 },
      { name: "Community Center", raised: 15000, goal: 30000, donors: 67 },
      { name: "Food Security", raised: 12000, goal: 25000, donors: 94 },
    ],
    geographicData: [
      { country: "Kenya", donations: 45000, projects: 8 },
      { country: "Uganda", donations: 32000, projects: 6 },
      { country: "Tanzania", donations: 28000, projects: 5 },
      { country: "Ethiopia", donations: 15000, projects: 3 },
      { country: "Rwanda", donations: 5000, projects: 1 },
    ],
  });

  const StatCard = ({
    title,
    value,
    icon: Icon,
    change,
    changeType,
    description,
  }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        {change && (
          <div
            className={`flex items-center space-x-1 text-sm ${
              changeType === "up" ? "text-green-600" : "text-red-600"
            }`}
          >
            {changeType === "up" ? (
              <ArrowUpRight className="w-4 h-4" />
            ) : (
              <ArrowDownRight className="w-4 h-4" />
            )}
            <span>{change}%</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
  );

  const SimpleChart = ({ data, title, color = "blue" }: any) => {
    const maxValue = Math.max(...data.map((d: any) => d.amount || d.donors));

    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-3">
          {data.map((item: any, index: number) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-16 text-sm text-gray-600">{item.month}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className={`bg-${color}-500 h-2 rounded-full transition-all duration-300`}
                  style={{
                    width: `${
                      ((item.amount || item.donors) / maxValue) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="w-20 text-sm font-medium text-gray-900">
                ${item.amount?.toLocaleString() || item.donors}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const DonorTable = ({ donors }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Donors</h3>
      <div className="space-y-3">
        {donors.map((donor: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">
                  {donor.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{donor.name}</p>
                <p className="text-sm text-gray-500">
                  {donor.donations} donations
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-600">
                ${donor.amount.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectTable = ({ projects }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Project Performance
      </h3>
      <div className="space-y-4">
        {projects.map((project: any, index: number) => (
          <div
            key={index}
            className="border-b border-gray-100 pb-4 last:border-b-0"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-900">{project.name}</h4>
              <span className="text-sm text-gray-500">
                {project.donors} donors
              </span>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>
                  {Math.round((project.raised / project.goal) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                  style={{ width: `${(project.raised / project.goal) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                ${project.raised.toLocaleString()}
              </span>
              <span className="text-gray-900 font-medium">
                ${project.goal.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const GeographicChart = ({ data }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Geographic Distribution
      </h3>
      <div className="space-y-4">
        {data.map((item: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-900">{item.country}</span>
            </div>
            <div className="text-right">
              <p className="font-semibold text-blue-600">
                ${item.donations.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">{item.projects} projects</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Analytics & Reports
          </h1>
          <p className="text-gray-600 mt-2">
            Comprehensive insights into your mission platform performance
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <RefreshCw className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Donations"
          value={`$${analyticsData.overview.totalDonations.toLocaleString()}`}
          icon={DollarSign}
          change={analyticsData.overview.monthlyGrowth}
          changeType="up"
          description="This month"
        />
        <StatCard
          title="Total Donors"
          value={analyticsData.overview.totalDonors}
          icon={Users}
          change={8.2}
          changeType="up"
          description="Active donors"
        />
        <StatCard
          title="Active Projects"
          value={analyticsData.overview.activeProjects}
          icon={Target}
          change={-2.1}
          changeType="down"
          description="Currently running"
        />
        <StatCard
          title="Donor Retention"
          value={`${analyticsData.overview.donorRetention}%`}
          icon={TrendingUp}
          change={5.3}
          changeType="up"
          description="Repeat donors"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SimpleChart
          data={analyticsData.donationTrends}
          title="Donation Trends"
          color="blue"
        />
        <SimpleChart
          data={analyticsData.donationTrends.map((d: any) => ({
            month: d.month,
            donors: d.donors,
          }))}
          title="Donor Growth"
          color="green"
        />
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <DonorTable donors={analyticsData.topDonors} />
        <ProjectTable projects={analyticsData.projectPerformance} />
      </div>

      {/* Geographic Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GeographicChart data={analyticsData.geographicData} />

        {/* Additional Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Key Metrics
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Activity className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">
                  Average Donation
                </span>
              </div>
              <span className="font-semibold text-blue-600">
                $
                {Math.round(
                  analyticsData.overview.totalDonations /
                    analyticsData.overview.totalDonors
                ).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">
                  Project Success Rate
                </span>
              </div>
              <span className="font-semibold text-green-600">87%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-900">
                  New Donors This Month
                </span>
              </div>
              <span className="font-semibold text-purple-600">+23</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-gray-900">
                  Projects Near Goal
                </span>
              </div>
              <span className="font-semibold text-orange-600">5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
