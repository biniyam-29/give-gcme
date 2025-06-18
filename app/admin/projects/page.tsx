"use client";

import React, { useState } from "react";
import {
  Target,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  DollarSign,
  Calendar,
  Users,
  MapPin,
  TrendingUp,
  Download,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  BarChart3,
} from "lucide-react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Clean Water Initiative",
      slug: "clean-water-initiative",
      shortDescription: "Providing clean drinking water to rural communities",
      category: "Infrastructure",
      location: "Kenya",
      duration: "12 months",
      teamSize: "5 people",
      fundingGoal: 60000,
      fundingRaised: 45000,
      beneficiaries: "10,000 people",
      problem: "Lack of access to clean drinking water",
      solution: "Installation of water purification systems",
      urgency: "High",
      urgencyFactors: ["Health crisis", "Disease outbreak"],
      impact: ["Reduced waterborne diseases", "Improved community health"],
      status: "Active",
      progress: 75,
      strategy: "Community Development",
    },
    {
      id: "2",
      title: "Education Program",
      slug: "education-program",
      shortDescription: "Building schools and providing educational resources",
      category: "Education",
      location: "Uganda",
      duration: "18 months",
      teamSize: "8 people",
      fundingGoal: 50000,
      fundingRaised: 32000,
      beneficiaries: "5,000 children",
      problem: "Limited access to quality education",
      solution: "Construction of schools and teacher training",
      urgency: "Medium",
      urgencyFactors: ["Educational gap", "Future opportunities"],
      impact: ["Improved literacy rates", "Better job prospects"],
      status: "Active",
      progress: 64,
      strategy: "Education",
    },
    {
      id: "3",
      title: "Medical Mission",
      slug: "medical-mission",
      shortDescription: "Providing healthcare services to remote areas",
      category: "Healthcare",
      location: "Tanzania",
      duration: "24 months",
      teamSize: "12 people",
      fundingGoal: 40000,
      fundingRaised: 28000,
      beneficiaries: "15,000 people",
      problem: "Limited access to healthcare",
      solution: "Mobile clinics and medical supplies",
      urgency: "High",
      urgencyFactors: ["Health emergency", "Disease prevention"],
      impact: ["Reduced mortality rates", "Improved health outcomes"],
      status: "Active",
      progress: 70,
      strategy: "Healthcare",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [sortField, setSortField] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDescription
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        filterStatus === "all" || project.status === filterStatus;
      const matchesCategory =
        filterCategory === "all" || project.category === filterCategory;
      return matchesSearch && matchesStatus && matchesCategory;
    })
    .sort((a, b) => {
      const aValue = a[sortField as keyof typeof a];
      const bValue = b[sortField as keyof typeof b];
      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleDelete = (project: any) => {
    setSelectedProject(project);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedProject) {
      setProjects(projects.filter((p) => p.id !== selectedProject.id));
      setShowDeleteModal(false);
      setSelectedProject(null);
    }
  };

  const SortableHeader = ({
    field,
    children,
  }: {
    field: string;
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center space-x-1 font-medium text-gray-700 hover:text-gray-900"
    >
      <span>{children}</span>
      {sortField === field &&
        (sortDirection === "asc" ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        ))}
    </button>
  );

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {project.shortDescription}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{project.teamSize}</span>
            </div>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {project.status}
        </span>
      </div>
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Funding Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span className="text-gray-600">
            ${project.fundingRaised.toLocaleString()}
          </span>
          <span className="text-gray-900 font-medium">
            ${project.fundingGoal.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">{project.category}</span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-600">{project.strategy}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(project)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Projects Management
          </h1>
          <p className="text-gray-600 mt-2">
            Manage mission projects, funding goals, and progress tracking
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Project</span>
        </button>
      </div>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Projects
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {projects.length}
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Funding Goal
              </p>
              <p className="text-3xl font-bold text-gray-900">
                $
                {projects
                  .reduce((sum, p) => sum + p.fundingGoal, 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Raised</p>
              <p className="text-3xl font-bold text-gray-900">
                $
                {projects
                  .reduce((sum, p) => sum + p.fundingRaised, 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Progress</p>
              <p className="text-3xl font-bold text-gray-900">
                {Math.round(
                  projects.reduce((sum, p) => sum + p.progress, 0) /
                    projects.length
                )}
                %
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>
      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Paused">Paused</option>
          </select>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Community">Community</option>
          </select>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No projects found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Your First Project
          </button>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Delete Project
              </h3>
            </div>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete "{selectedProject?.title}"? This
              action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
