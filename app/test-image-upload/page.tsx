"use client";

import React, { useState } from "react";
import { Upload, X, Loader2 } from "lucide-react";

const TestImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<string>("");

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      setSelectedImage(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImageSelection = () => {
    setSelectedImage(null);
    setImagePreview(null);
    const fileInput = document.getElementById(
      "test-image-upload"
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const testUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image first");
      return;
    }

    setUploading(true);
    setResult("");

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);
      formData.append("name", "Test Missionary");
      formData.append("title", "Test Title");
      formData.append("email", "test@example.com");
      formData.append("phone", "1234567890");
      formData.append("location", "Test Location");
      formData.append("years", "5 years");
      formData.append("focus", "Test Focus");
      formData.append("strategy", "Digital Missions");
      formData.append("type", "Full-time");
      formData.append("status", "Active");
      formData.append("shortBio", "Test short bio");
      formData.append("fullBio", "Test full bio");
      formData.append("mission", "Test mission statement");

      const response = await fetch("/api/admin/missionaries", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResult(`Success! Missionary created with ID: ${data.id}`);
      } else {
        const error = await response.json();
        setResult(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      setResult(`Error: ${error}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Image Upload Test
        </h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Test Missionary Image Upload
          </h2>

          {/* Image Upload Section */}
          <div className="space-y-4 mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>

            {/* Image Preview */}
            {imagePreview && (
              <div className="relative inline-block">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 rounded-lg object-cover border border-gray-200"
                />
                <button
                  type="button"
                  onClick={clearImageSelection}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* File Input */}
            <div className="flex items-center space-x-4">
              <label className="cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg border border-blue-200 transition-colors flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Choose Image</span>
                <input
                  id="test-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                />
              </label>
              {selectedImage && (
                <span className="text-sm text-gray-600">
                  {selectedImage.name} (
                  {(selectedImage.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              )}
            </div>

            <p className="text-xs text-gray-500">
              Supported formats: JPG, PNG, GIF. Max size: 5MB
            </p>
          </div>

          {/* Test Button */}
          <button
            onClick={testUpload}
            disabled={!selectedImage || uploading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Upload className="w-5 h-5" />
            )}
            <span>{uploading ? "Uploading..." : "Test Upload"}</span>
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">Result:</h3>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {result}
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            How it works
          </h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p>• Images are stored as BLOB data in the PostgreSQL database</p>
            <p>• When retrieved, images are converted to base64 for display</p>
            <p>• File validation ensures only images under 5MB are accepted</p>
            <p>• The system supports JPG, PNG, and GIF formats</p>
            <p>
              • Images are stored in the{" "}
              <code className="bg-gray-100 px-1 rounded">Bytes</code> field in
              Prisma schema
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestImageUpload;
