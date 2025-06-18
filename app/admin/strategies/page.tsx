"use client";

import React, { useEffect, useState } from "react";
import { Plus, Trash2, Edit, Eye, Loader2 } from "lucide-react";

const fetchStrategies = async () => {
  const res = await fetch("/api/admin/strategies");
  if (!res.ok) throw new Error("Failed to fetch strategies");
  return res.json();
};

const createStrategy = async (data: any) => {
  const res = await fetch("/api/admin/strategies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create strategy");
  return res.json();
};

const StrategiesPage = () => {
  const [strategies, setStrategies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    fullDescription: "",
    slug: "",
    icon: "",
    activities: "",
    visionText: "",
    involvedText: "",
    impactQuote: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const loadStrategies = async () => {
    setLoading(true);
    try {
      const data = await fetchStrategies();
      setStrategies(data);
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadStrategies();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await createStrategy({
        ...form,
        activities: form.activities.split(",").map((a) => a.trim()),
      });
      setShowAddModal(false);
      setForm({
        title: "",
        description: "",
        fullDescription: "",
        slug: "",
        icon: "",
        activities: "",
        visionText: "",
        involvedText: "",
        impactQuote: "",
      });
      await loadStrategies();
    } catch (e: any) {
      setError(e.message);
    }
    setSaving(false);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Strategies Management
          </h1>
          <p className="text-gray-600">
            Manage mission strategies, activities, and vision
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Strategy</span>
        </button>
      </div>
      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          </div>
        ) : strategies.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No strategies found
            </h3>
            <p className="text-gray-600 mb-6">
              Click "Add Strategy" to create your first strategy.
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Description</th>
                <th className="px-6 py-4 text-left">Slug</th>
                <th className="px-6 py-4 text-left">Activities</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {strategies.map((strategy) => (
                <tr
                  key={strategy.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {strategy.title}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {strategy.description}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{strategy.slug}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {Array.isArray(strategy.activities)
                      ? strategy.activities.join(", ")
                      : ""}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <form
            onSubmit={handleAdd}
            className="bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Add Strategy
            </h3>
            {error && <p className="text-red-600 mb-2">{error}</p>}
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Slug"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <textarea
                placeholder="Full Description"
                value={form.fullDescription}
                onChange={(e) =>
                  setForm({ ...form, fullDescription: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
              <input
                type="text"
                placeholder="Icon (optional)"
                value={form.icon}
                onChange={(e) => setForm({ ...form, icon: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Activities (comma separated)"
                value={form.activities}
                onChange={(e) =>
                  setForm({ ...form, activities: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Vision Text (optional)"
                value={form.visionText}
                onChange={(e) =>
                  setForm({ ...form, visionText: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Involved Text (optional)"
                value={form.involvedText}
                onChange={(e) =>
                  setForm({ ...form, involvedText: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Impact Quote (optional)"
                value={form.impactQuote}
                onChange={(e) =>
                  setForm({ ...form, impactQuote: e.target.value })
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
                disabled={saving}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                disabled={saving}
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default StrategiesPage;
