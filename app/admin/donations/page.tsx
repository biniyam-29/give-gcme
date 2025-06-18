"use client";

import React, { useState, useEffect } from "react";
import { 
  DollarSign, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Calendar,
  User,
  Target,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Clock,
  BarChart3,
  RefreshCw,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const DonationsPage = () => {
  const [donations, setDonations] = useState([
    {
      id: "1",
      amount: 2500,
      donor: "John Smith",
      email: "john.smith@email.com",
      project: "Clean Water Initiative",
      date: "2024-01-15",
      status: "completed",
      paymentMethod: "Credit Card",
      transactionId: "txn_123456789",
      recurring: false,
      currency: "USD"
    },
    {
      id: "2",
      amount: 1800,
      donor: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      project: "Education Program",
      date: "2024-01-14",
      status: "completed",
      paymentMethod: "PayPal",
      transactionId: "txn_987654321",
      recurring: true,
      currency: "USD"
    },
    {
      id: "3",
      amount: 3200,
      donor: "Mike Davis",
      email: "mike.davis@email.com",
      project: "Medical Mission",
      date: "2024-01-13",
      status: "pending",
      paymentMethod: "Bank Transfer",
      transactionId: "txn_456789123",
      recurring: false,
      currency: "USD"
    },
    {
      id: "4",
      amount: 950,
      donor: "Emily Wilson",
      email: "emily.wilson@email.com",
      project: "Community Center",
      date: "2024-01-12",
      status: "failed",
      paymentMethod: "Credit Card",
      transactionId: "txn_789123456",
      recurring: false,
      currency: "USD"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDateRange, setFilterDateRange] = useState("all");
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");

  const filteredDonations = donations
    .filter(donation => {
      const matchesSearch = donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           donation.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           donation.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === "all" || donation.status === filterStatus;
      return matchesSearch && matchesStatus;
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const SortableHeader = ({ field, children }: { field: string; children: React.ReactNode }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center space-x-1 font-medium text-gray-700 hover:text-gray-900"
    >
      <span>{children}</span>
      {sortField === field && (
        sortDirection === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
      )}
    </button>
  );

  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);
  const completedDonations = donations.filter(d => d.status === "completed").reduce((sum, d) => sum + d.amount, 0);
  const pendingDonations = donations.filter(d => d.status === "pending").reduce((sum, d) => sum + d.amount, 0);
  const uniqueDonors = new Set(donations.map(d => d.donor)).size;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Donations Management</h1>
          <p className="text-gray-600 mt-2">Track and manage all donation transactions</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <RefreshCw className="w-5 h-5" />
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Donations</p>
              <p className="text-3xl font-bold text-gray-900">${totalDonations.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-3xl font-bold text-green-600">${completedDonations.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-3xl font-bold text-yellow-600">${pendingDonations.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unique Donors</p>
              <p className="text-3xl font-bold text-purple-600">{uniqueDonors}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <User className="w-6 h-6 text-purple-600" />
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
              placeholder="Search donations..."
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
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
          <select
            value={filterDateRange}
            onChange={(e) => setFilterDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Analytics</span>
          </button>
        </div>
      </div>

      {/* Donations Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left">
                  <SortableHeader field="date">Date</SortableHeader>
                </th>
                <th className="px-6 py-4 text-left">
                  <SortableHeader field="donor">Donor</SortableHeader>
                </th>
                <th className="px-6 py-4 text-left">
                  <SortableHeader field="project">Project</SortableHeader>
                </th>
                <th className="px-6 py-4 text-left">
                  <SortableHeader field="amount">Amount</SortableHeader>
                </th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Payment Method</th>
                <th className="px-6 py-4 text-left">Transaction ID</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDonations.map((donation) => (
                <tr key={donation.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{donation.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{donation.donor}</p>
                      <p className="text-sm text-gray-500">{donation.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{donation.project}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-green-600">${donation.amount.toLocaleString()}</span>
                      {donation.recurring && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Recurring</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(donation.status)}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(donation.status)}`}>
                        {donation.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{donation.paymentMethod}</td>
                  <td className="px-6 py-4">
                    <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {donation.transactionId}
                    </code>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredDonations.length} of {donations.length} donations
            </p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage; 