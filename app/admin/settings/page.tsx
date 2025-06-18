"use client";

import React, { useState } from "react";
import {
  Settings,
  Users,
  Shield,
  Bell,
  Globe,
  CreditCard,
  Database,
  Mail,
  Save,
  Eye,
  EyeOff,
  Key,
  User,
  Lock,
  Palette,
  Download,
  Upload,
} from "lucide-react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    general: {
      platformName: "Give Admin",
      platformDescription: "Great Commission Missionary Platform",
      timezone: "UTC",
      language: "English",
      currency: "USD",
      dateFormat: "MM/DD/YYYY",
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: 30,
      passwordPolicy: "strong",
      loginAttempts: 5,
      ipWhitelist: [],
    },
    notifications: {
      emailNotifications: true,
      donationAlerts: true,
      projectUpdates: true,
      systemAlerts: true,
      weeklyReports: true,
    },
    payment: {
      stripeEnabled: true,
      paypalEnabled: true,
      currencyConversion: true,
      transactionFees: 2.9,
      minimumDonation: 1,
    },
    appearance: {
      theme: "light",
      primaryColor: "#3B82F6",
      sidebarCollapsed: false,
      compactMode: false,
    },
  });

  const handleSettingChange = (section: string, key: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value,
      },
    }));
  };

  const SettingSection = ({ title, icon: Icon, children }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );

  const SettingItem = ({ label, description, children }: any) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
      <div className="flex-1">
        <p className="font-medium text-gray-900">{label}</p>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
      <div className="ml-4">{children}</div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">
            Configure your platform settings and preferences
          </p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("general")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "general"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Settings className="w-4 h-4 mr-3" />
                General
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "security"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Shield className="w-4 h-4 mr-3" />
                Security
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "notifications"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Bell className="w-4 h-4 mr-3" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab("payment")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "payment"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <CreditCard className="w-4 h-4 mr-3" />
                Payment
              </button>
              <button
                onClick={() => setActiveTab("appearance")}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "appearance"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Palette className="w-4 h-4 mr-3" />
                Appearance
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {activeTab === "general" && (
            <div>
              <SettingSection title="General Settings" icon={Settings}>
                <SettingItem
                  label="Platform Name"
                  description="The name displayed throughout the platform"
                >
                  <input
                    type="text"
                    value={settings.general.platformName}
                    onChange={(e) =>
                      handleSettingChange(
                        "general",
                        "platformName",
                        e.target.value
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </SettingItem>
                <SettingItem
                  label="Platform Description"
                  description="Brief description of your mission platform"
                >
                  <input
                    type="text"
                    value={settings.general.platformDescription}
                    onChange={(e) =>
                      handleSettingChange(
                        "general",
                        "platformDescription",
                        e.target.value
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </SettingItem>
                <SettingItem
                  label="Timezone"
                  description="Default timezone for the platform"
                >
                  <select
                    value={settings.general.timezone}
                    onChange={(e) =>
                      handleSettingChange("general", "timezone", e.target.value)
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="UTC">UTC</option>
                    <option value="EST">Eastern Time</option>
                    <option value="PST">Pacific Time</option>
                    <option value="GMT">GMT</option>
                  </select>
                </SettingItem>
                <SettingItem
                  label="Currency"
                  description="Default currency for donations"
                >
                  <select
                    value={settings.general.currency}
                    onChange={(e) =>
                      handleSettingChange("general", "currency", e.target.value)
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="CAD">CAD (C$)</option>
                  </select>
                </SettingItem>
              </SettingSection>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <SettingSection title="Security Settings" icon={Shield}>
                <SettingItem
                  label="Two-Factor Authentication"
                  description="Require 2FA for admin accounts"
                >
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.security.twoFactorAuth}
                      onChange={(e) =>
                        handleSettingChange(
                          "security",
                          "twoFactorAuth",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </SettingItem>
                <SettingItem
                  label="Session Timeout"
                  description="Minutes before automatic logout"
                >
                  <select
                    value={settings.security.sessionTimeout}
                    onChange={(e) =>
                      handleSettingChange(
                        "security",
                        "sessionTimeout",
                        parseInt(e.target.value)
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                    <option value={60}>1 hour</option>
                    <option value={120}>2 hours</option>
                  </select>
                </SettingItem>
                <SettingItem
                  label="Password Policy"
                  description="Minimum password requirements"
                >
                  <select
                    value={settings.security.passwordPolicy}
                    onChange={(e) =>
                      handleSettingChange(
                        "security",
                        "passwordPolicy",
                        e.target.value
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="basic">Basic (8 characters)</option>
                    <option value="strong">
                      Strong (12 characters, symbols)
                    </option>
                    <option value="very-strong">
                      Very Strong (16 characters, symbols, numbers)
                    </option>
                  </select>
                </SettingItem>
                <SettingItem
                  label="Login Attempts"
                  description="Maximum failed login attempts before lockout"
                >
                  <input
                    type="number"
                    value={settings.security.loginAttempts}
                    onChange={(e) =>
                      handleSettingChange(
                        "security",
                        "loginAttempts",
                        parseInt(e.target.value)
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-20"
                  />
                </SettingItem>
              </SettingSection>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <SettingSection title="Notification Settings" icon={Bell}>
                <SettingItem
                  label="Email Notifications"
                  description="Receive notifications via email"
                >
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications.emailNotifications}
                      onChange={(e) =>
                        handleSettingChange(
                          "notifications",
                          "emailNotifications",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </SettingItem>
                <SettingItem
                  label="Donation Alerts"
                  description="Get notified when new donations are received"
                >
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications.donationAlerts}
                      onChange={(e) =>
                        handleSettingChange(
                          "notifications",
                          "donationAlerts",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </SettingItem>
                <SettingItem
                  label="Project Updates"
                  description="Receive updates about project progress"
                >
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications.projectUpdates}
                      onChange={(e) =>
                        handleSettingChange(
                          "notifications",
                          "projectUpdates",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </SettingItem>
                <SettingItem
                  label="Weekly Reports"
                  description="Receive weekly summary reports"
                >
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications.weeklyReports}
                      onChange={(e) =>
                        handleSettingChange(
                          "notifications",
                          "weeklyReports",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </SettingItem>
              </SettingSection>
            </div>
          )}

          {activeTab === "payment" && (
            <div>
              <SettingSection title="Payment Settings" icon={CreditCard}>
                <SettingItem
                  label="Stripe Integration"
                  description="Enable Stripe payment processing"
                >
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.payment.stripeEnabled}
                      onChange={(e) =>
                        handleSettingChange(
                          "payment",
                          "stripeEnabled",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </SettingItem>
                <SettingItem
                  label="PayPal Integration"
                  description="Enable PayPal payment processing"
                >
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.payment.paypalEnabled}
                      onChange={(e) =>
                        handleSettingChange(
                          "payment",
                          "paypalEnabled",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </SettingItem>
                <SettingItem
                  label="Transaction Fee (%)"
                  description="Platform fee percentage on donations"
                >
                  <input
                    type="number"
                    step="0.1"
                    value={settings.payment.transactionFees}
                    onChange={(e) =>
                      handleSettingChange(
                        "payment",
                        "transactionFees",
                        parseFloat(e.target.value)
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-20"
                  />
                </SettingItem>
                <SettingItem
                  label="Minimum Donation"
                  description="Minimum amount for donations"
                >
                  <input
                    type="number"
                    value={settings.payment.minimumDonation}
                    onChange={(e) =>
                      handleSettingChange(
                        "payment",
                        "minimumDonation",
                        parseFloat(e.target.value)
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-20"
                  />
                </SettingItem>
              </SettingSection>
            </div>
          )}

          {activeTab === "appearance" && (
            <div>
              <SettingSection title="Appearance Settings" icon={Palette}>
                <SettingItem
                  label="Theme"
                  description="Choose your preferred theme"
                >
                  <select
                    value={settings.appearance.theme}
                    onChange={(e) =>
                      handleSettingChange("appearance", "theme", e.target.value)
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </SettingItem>
                <SettingItem
                  label="Primary Color"
                  description="Main brand color for the platform"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={settings.appearance.primaryColor}
                      onChange={(e) =>
                        handleSettingChange(
                          "appearance",
                          "primaryColor",
                          e.target.value
                        )
                      }
                      className="w-10 h-10 border border-gray-300 rounded-lg cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">
                      {settings.appearance.primaryColor}
                    </span>
                  </div>
                </SettingItem>
                <SettingItem
                  label="Compact Mode"
                  description="Reduce spacing for more content"
                >
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.appearance.compactMode}
                      onChange={(e) =>
                        handleSettingChange(
                          "appearance",
                          "compactMode",
                          e.target.checked
                        )
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </SettingItem>
              </SettingSection>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
