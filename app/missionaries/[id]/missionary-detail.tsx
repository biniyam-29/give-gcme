"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  MapPin,
  Calendar,
  Mail,
  Phone,
  Globe,
  Heart,
  Target,
  Users,
  ArrowLeft,
  Loader2,
  Star,
  Award,
  BookOpen,
  MessageCircle,
  Share2,
  Download,
  ExternalLink,
  ChevronRight,
  Play,
  Camera,
  Gift,
  Shield,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DonationModal from "@/components/donation-modal";

interface Missionary {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  qualification: string;
  experience: string;
  years: string;
  mission: string;
  focus: string;
  website: string;
  type: string;
  status: string;
  strategy: string;
  image: string | null;
  shortBio: string;
  fullBio: string;
  prayerRequests: string[];
  recentUpdates: any;
  supportNeeds: Array<{
    item: string;
    amount: string;
    description: string;
    progress?: number;
    raised?: string;
  }>;
  livesImpacted?: number;
  communitiesServed?: number;
  projectsCompleted?: number;
}

interface MissionaryDetailProps {
  missionary: Missionary;
}

export default function MissionaryDetail({
  missionary,
}: MissionaryDetailProps) {
  const [donationModal, setDonationModal] = useState<{
    isOpen: boolean;
    type: "project" | "missionary";
    title: string;
    description?: string;
  }>({
    isOpen: false,
    type: "missionary",
    title: "",
    description: "",
  });

  const openDonationModal = (
    type: "project" | "missionary",
    title: string,
    description?: string
  ) => {
    setDonationModal({
      isOpen: true,
      type,
      title,
      description,
    });
  };

  const closeDonationModal = () => {
    setDonationModal({
      isOpen: false,
      type: "missionary",
      title: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50">
      <Header currentPage="missionaries" />

      {/* Hero Section with Gradient Overlay */}
      <div className="relative pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-amber-500/5"></div>

        {/* Back Button */}
        <div className="relative container mx-auto px-4 py-6">
          <Link href="/missionaries">
            <Button
              variant="ghost"
              className="flex items-center space-x-2 text-stone-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Missionaries</span>
            </Button>
          </Link>
        </div>

        {/* Hero Content */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Missionary Image with Enhanced Styling */}
                <div className="lg:col-span-1">
                  <div className="relative group">
                    <div className="relative w-80 h-80 mx-auto lg:mx-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <Image
                        src={missionary.image || "/placeholder.svg"}
                        alt={missionary.name}
                        fill
                        className="object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute -top-4 -right-4">
                      <Badge
                        variant="default"
                        className={`${
                          missionary.status === "Active"
                            ? "bg-green-500 text-white shadow-lg"
                            : "bg-red-500 text-white shadow-lg"
                        } px-4 py-2 text-sm font-semibold`}
                      >
                        <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                        {missionary.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Missionary Info with Enhanced Typography */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-3 bg-gradient-to-r from-primary-600 to-amber-600 bg-clip-text text-transparent">
                        {missionary.name}
                      </h1>
                      <p className="text-xl md:text-2xl text-stone-600 mb-2 font-medium">
                        {missionary.title || missionary.focus}
                      </p>
                      <div className="flex items-center space-x-2 text-stone-500">
                        <Award className="w-5 h-5 text-amber-500" />
                        <span className="font-medium">
                          {missionary.qualification}
                        </span>
                      </div>
                    </div>

                    {/* Key Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-stone-200/50 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center space-x-2 text-stone-600 mb-1">
                          <MapPin className="w-4 h-4 text-primary-500" />
                          <span className="text-xs font-medium uppercase tracking-wide">
                            Location
                          </span>
                        </div>
                        <p className="font-semibold text-stone-800">
                          {missionary.location}
                        </p>
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-stone-200/50 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center space-x-2 text-stone-600 mb-1">
                          <Calendar className="w-4 h-4 text-amber-500" />
                          <span className="text-xs font-medium uppercase tracking-wide">
                            Experience
                          </span>
                        </div>
                        <p className="font-semibold text-stone-800">
                          {missionary.years} years
                        </p>
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-stone-200/50 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center space-x-2 text-stone-600 mb-1">
                          <Target className="w-4 h-4 text-green-500" />
                          <span className="text-xs font-medium uppercase tracking-wide">
                            Focus
                          </span>
                        </div>
                        <p className="font-semibold text-stone-800">
                          {missionary.focus}
                        </p>
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-stone-200/50 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center space-x-2 text-stone-600 mb-1">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-medium uppercase tracking-wide">
                            Type
                          </span>
                        </div>
                        <p className="font-semibold text-stone-800">
                          {missionary.type}
                        </p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full"
                        onClick={() =>
                          openDonationModal(
                            "missionary",
                            missionary.name,
                            missionary.mission
                          )
                        }
                      >
                        <Gift className="w-4 h-4 mr-2" />
                        Support Ministry
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className="border-stone-300 text-stone-600 hover:bg-stone-50 px-6 py-2 rounded-full"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className="border-stone-300 text-stone-600 hover:bg-stone-50 px-6 py-2 rounded-full"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement with Enhanced Design */}
        <section className="py-20 bg-gradient-to-r from-primary-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                  Mission Statement
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-amber-500 mx-auto rounded-full"></div>
              </div>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Target className="w-6 h-6 text-primary-600" />
                    </div>
                    <p className="text-lg text-stone-700 leading-relaxed font-medium">
                      {missionary.mission}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Biography with Enhanced Layout */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                  Biography
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-amber-500 mx-auto rounded-full"></div>
              </div>

              <Card className="bg-gradient-to-br from-stone-50 to-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <BookOpen className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-stone-700 leading-relaxed">
                        {missionary.fullBio || missionary.shortBio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information with Enhanced Cards */}
        <section className="py-20 bg-gradient-to-r from-stone-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                  Get in Touch
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-amber-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <span>Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${missionary.email}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors font-medium flex items-center group"
                    >
                      {missionary.email}
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <span>Phone</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`tel:${missionary.phone}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors font-medium flex items-center group"
                    >
                      {missionary.phone}
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </CardContent>
                </Card>

                {missionary.website && (
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group md:col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 text-lg">
                        <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                          <Globe className="w-5 h-5 text-purple-600" />
                        </div>
                        <span>Website</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={
                          missionary.website.startsWith("http")
                            ? missionary.website
                            : `https://${missionary.website}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors font-medium flex items-center group"
                      >
                        {missionary.website}
                        <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Requests with Enhanced Design */}
        {missionary.prayerRequests && missionary.prayerRequests.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                    Prayer Requests
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-amber-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {missionary.prayerRequests.map((request, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-to-br from-red-50 to-pink-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                            <Heart className="w-5 h-5 text-red-500" />
                          </div>
                          <p className="text-stone-700 font-medium">
                            {request}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Support Needs with Progress Bars */}
        {missionary.supportNeeds && missionary.supportNeeds.length > 0 && (
          <section className="py-20 bg-gradient-to-r from-stone-50 to-amber-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                    Support Needs
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-amber-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {missionary.supportNeeds.map((need: any, index: number) => (
                    <Card
                      key={index}
                      className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center space-x-2">
                          <div className="bg-primary-100 p-2 rounded-lg group-hover:bg-primary-200 transition-colors">
                            <Gift className="w-4 h-4 text-primary-600" />
                          </div>
                          <span>{need.item}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-3xl font-bold text-primary-600 mb-2">
                          {need.amount}
                        </div>
                        <p className="text-stone-600 text-sm">
                          {need.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-stone-500">Progress</span>
                            <span className="text-primary-600 font-medium">
                              {need.progress || 0}%
                            </span>
                          </div>
                          <Progress
                            value={need.progress || 0}
                            className="h-2"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Enhanced Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-amber-600 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-white/10"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support {missionary.name.split(" ")[0]}'s Ministry
            </h2>
            <p className="text-xl text-amber-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Your partnership enables {missionary.name.split(" ")[0]} to
              continue their vital work in {missionary.location}. Every
              contribution makes a difference in spreading the Gospel and
              serving communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-stone-50 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  openDonationModal(
                    "missionary",
                    missionary.name,
                    missionary.mission
                  )
                }
              >
                <Gift className="w-5 h-5 mr-3" />
                Support {missionary.name.split(" ")[0]}
              </Button>

              <Link href="/missionaries">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 px-10 py-4 text-lg font-semibold rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="w-5 h-5 mr-3" />
                  View All Missionaries
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex justify-center space-x-8 text-amber-100">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {missionary.livesImpacted
                    ? `${missionary.livesImpacted}+`
                    : "500+"}
                </div>
                <div className="text-sm">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {missionary.years || "15+"}
                </div>
                <div className="text-sm">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {missionary.communitiesServed
                    ? `${missionary.communitiesServed}`
                    : "3"}
                </div>
                <div className="text-sm">Communities Served</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Donation Modal */}
      <DonationModal
        isOpen={donationModal.isOpen}
        onClose={closeDonationModal}
        type={donationModal.type}
        title={donationModal.title}
        description={donationModal.description}
      />
    </div>
  );
}
