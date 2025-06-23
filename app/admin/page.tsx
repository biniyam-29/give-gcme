"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  DollarSign,
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  Activity,
  Eye,
  Heart,
  MessageCircle,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Plus,
  Search,
  Filter,
  Download,
  RefreshCw,
  BarChart3,
  PieChart,
  Settings,
  Bell,
  User,
} from "lucide-react";
import { format } from "date-fns";

// Main Admin Dashboard Component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalType, setModalType] = useState("info");
  const [modalCallback, setModalCallback] = useState<(() => void) | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/admin/dashboard")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch dashboard data");
        const data = await res.json();
        setDashboardData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const showCustomModal = (
    content: string,
    type: "info" | "confirm" = "info",
    callback: (() => void) | null = null
  ) => {
    setModalContent(content);
    setModalType(type);
    setModalCallback(() => callback);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
    setModalType("info");
    setModalCallback(null);
  };

  const handleModalConfirm = () => {
    if (modalCallback) modalCallback();
    closeModal();
  };

  const StatCard = ({ title, value, icon: Icon, change, changeType }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-[#001F54]">{value}</p>
          {change !== undefined && (
            <div className="flex items-center mt-2">
              {changeType === "up" ? (
                <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  changeType === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {change}% from last month
              </span>
            </div>
          )}
        </div>
        <div className="p-3 bg-[#001F54] bg-opacity-10 rounded-lg">
          <Icon className="w-6 h-6 text-[#001F54]" />
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }: any) => (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-gray-900">{project.name}</h4>
        <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
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
  );

  const ActivityItem = ({ activity }: any) => {
    const getIcon = () => {
      switch (activity.type) {
        case "donation":
          return <DollarSign className="w-4 h-4 text-green-500" />;
        case "project":
          return <Target className="w-4 h-4 text-blue-500" />;
        case "missionary":
          return <Users className="w-4 h-4 text-purple-500" />;
        case "strategy":
          return <Activity className="w-4 h-4 text-orange-500" />;
        default:
          return <Activity className="w-4 h-4 text-gray-500" />;
      }
    };

    return (
      <div className="flex items-center space-x-3 py-3 border-b border-gray-100 last:border-b-0">
        <div className="p-2 bg-gray-50 rounded-lg">{getIcon()}</div>
        <div className="flex-1">
          <p className="text-sm text-gray-900">{activity.message}</p>
          <p className="text-xs text-gray-500">{activity.time}</p>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f8fb]">
        <span className="text-[#001F54] text-xl font-semibold">
          Loading dashboard...
        </span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f8fb]">
        <span className="text-red-600 text-xl font-semibold">{error}</span>
      </div>
    );
  }
  if (!dashboardData) return null;

  return (
    <div className="min-h-screen bg-[#f4f8fb]">
      <div className="p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#001F54] mb-2">
              Dashboard Overview
            </h2>
            <p className="text-[#001F54] opacity-80">
              Welcome back! Here's what's happening with your mission platform.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {/* <button className="p-2 text-[#001F54] hover:bg-[#001F54] hover:bg-opacity-10 rounded-lg transition-colors">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="p-2 text-[#001F54] hover:bg-[#001F54] hover:bg-opacity-10 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
            </button> */}
            <div className="w-px h-6 bg-[#001F54] bg-opacity-20"></div>
            <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg border border-gray-200">
              <img
                src="/logo/gcme-logo.png"
                alt="Admin Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-[#001F54]">Admin</span>
            </div>
          </div>
        </header>
        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Donations"
                value={`$${dashboardData.totalDonations.toLocaleString()}`}
                icon={DollarSign}
                change={dashboardData.monthlyGrowth?.toFixed(1)}
                changeType={dashboardData.monthlyGrowth >= 0 ? "up" : "down"}
              />
              <StatCard
                title="Active Missionaries"
                value={dashboardData.totalMissionaries}
                icon={Users}
              />
              <StatCard
                title="Active Projects"
                value={dashboardData.activeProjects}
                icon={Target}
              />
              <StatCard
                title="Strategies"
                value={dashboardData.totalStrategies}
                icon={TrendingUp}
              />
            </div>

            {/* Charts and Analytics Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Donations */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#001F54]">
                    Recent Donations
                  </h3>
                  <button className="text-sm text-[#001F54] hover:underline font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {dashboardData.recentDonations.map((donation: any) => (
                    <div
                      key={donation.id}
                      className="flex items-center justify-between p-4 bg-[#001F54] bg-opacity-5 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-[#001F54]">
                          {donation.donor}
                        </p>
                        <p className="text-sm text-[#001F54] opacity-80">
                          {donation.project ||
                            donation.missionary ||
                            donation.strategy ||
                            "General"}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">
                          ${donation.amount.toLocaleString()}
                        </p>
                        <p className="text-xs text-[#001F54] opacity-60">
                          {format(new Date(donation.date), "yyyy-MM-dd HH:mm")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#001F54]">
                    Recent Activities
                  </h3>
                  <button className="text-sm text-[#001F54] hover:underline font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-2">
                  {dashboardData.recentActivities.map(
                    (activity: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-2 rounded hover:bg-[#001F54] hover:bg-opacity-5 transition-colors"
                      >
                        <Activity className="w-4 h-4 text-[#001F54]" />
                        <span className="text-sm text-[#001F54]">
                          {activity.message}
                        </span>
                        <span className="ml-auto text-xs text-[#001F54] opacity-60">
                          {format(new Date(activity.time), "yyyy-MM-dd HH:mm")}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Projects Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#001F54]">
                  Top Projects
                </h3>
                <button className="flex items-center space-x-2 text-sm text-[#001F54] hover:underline font-medium">
                  <Plus className="w-4 h-4" />
                  <span>Add Project</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dashboardData.topProjects.map(
                  (project: any, index: number) => (
                    <div
                      key={index}
                      className="bg-[#001F54] bg-opacity-5 rounded-lg p-4"
                    >
                      <h4 className="font-medium text-[#001F54] mb-1">
                        {project.name}
                      </h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#001F54] opacity-80">
                          Raised
                        </span>
                        <span className="text-sm text-[#001F54] opacity-80">
                          Goal
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-[#001F54]">
                          ${project.raised.toLocaleString()}
                        </span>
                        <span className="font-semibold text-[#001F54]">
                          ${project.goal.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-[#001F54] bg-opacity-10 rounded-full h-2">
                        <div
                          className="bg-[#001F54] h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-[#001F54] opacity-70 mt-1">
                        {project.progress}% funded
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <QuickActionCard
                title="Add Missionary"
                description="Create new missionary profile"
                icon={<Users className="w-6 h-6" />}
                color="blue"
                onClick={() => setActiveTab("users")}
              />
              <QuickActionCard
                title="Create Project"
                description="Start a new mission project"
                icon={<Target className="w-6 h-6" />}
                color="green"
                onClick={() => setActiveTab("projects")}
              />
              <QuickActionCard
                title="View Donations"
                description="Check donation reports"
                icon={<DollarSign className="w-6 h-6" />}
                color="purple"
                onClick={() => setActiveTab("donations")}
              />
              <QuickActionCard
                title="Prayer Requests"
                description="Review prayer requests"
                icon={<MessageCircle className="w-6 h-6" />}
                color="orange"
                onClick={() => setActiveTab("prayer")}
              />
            </div>
          </div>
        )}

        {/* Other Tab Content */}
        {activeTab === "users" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Missionaries Management
            </h3>
            <p className="text-gray-600">
              CRUD operations for missionaries will be implemented here.
            </p>
          </div>
        )}
        {activeTab === "projects" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Projects Management
            </h3>
            <p className="text-gray-600">
              CRUD operations for projects will be implemented here.
            </p>
          </div>
        )}
        {activeTab === "strategies" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Strategies Management
            </h3>
            <p className="text-gray-600">
              CRUD operations for strategies will be implemented here.
            </p>
          </div>
        )}
        {activeTab === "donations" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Donations Management
            </h3>
            <p className="text-gray-600">
              Donation tracking and management will be implemented here.
            </p>
          </div>
        )}
        {activeTab === "prayer" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prayer Requests
            </h3>
            <p className="text-gray-600">
              Prayer request management will be implemented here.
            </p>
          </div>
        )}
        {activeTab === "analytics" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Analytics & Reports
            </h3>
            <p className="text-gray-600">
              Advanced analytics and reporting features will be implemented
              here.
            </p>
          </div>
        )}
        {activeTab === "settings" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Settings</h3>
            <p className="text-gray-600">
              Platform settings and configuration will be implemented here.
            </p>
          </div>
        )}
      </div>
      {/* Enhanced Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale">
            <div className="flex items-center mb-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  modalType === "confirm" ? "bg-red-100" : "bg-blue-100"
                }`}
              >
                {modalType === "confirm" ? (
                  <span className="text-red-600 text-xl">⚠️</span>
                ) : (
                  <span className="text-blue-600 text-xl">ℹ️</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {modalType === "confirm" ? "Confirm Action" : "Notification"}
              </h3>
            </div>
            <p className="text-gray-700 mb-6">{modalContent}</p>
            <div className="flex justify-end space-x-3">
              {modalType === "confirm" && (
                <button
                  onClick={closeModal}
                  className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  Cancel
                </button>
              )}
              <button
                onClick={handleModalConfirm}
                className={`px-5 py-2 rounded-lg transition duration-200 ${
                  modalType === "confirm"
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {modalType === "confirm" ? "Confirm" : "OK"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const QuickActionCard = ({ title, description, icon, color, onClick }: any) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    green: "bg-green-50 text-green-600 hover:bg-green-100",
    purple: "bg-purple-50 text-purple-600 hover:bg-purple-100",
    orange: "bg-orange-50 text-orange-600 hover:bg-orange-100",
  };

  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 text-left ${
        colorClasses[color as keyof typeof colorClasses]
      }`}
    >
      <div className="mb-3">{icon}</div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm opacity-80">{description}</p>
    </button>
  );
};

export default AdminDashboard;
