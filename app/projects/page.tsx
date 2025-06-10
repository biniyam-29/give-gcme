"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, ArrowRight, Clock, Target, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DonationModal from "@/components/donation-modal";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";

const projects = [
  {
    id: 1,
    slug: "yotor-church-management-system",
    title: "Yotor - Modern Church Management",
    description: "A Secure and Reliable Solution to Manage Your Church",
    image: "/images/projects/yotor.png?height=200&width=300",
    category: "Technology",
    duration: "8 months",
    beneficiaries: "2,500 people",
    teamSize: "8 volunteers",
    urgency: "High Priority",
  },
  {
    id: 2,
    slug: "my-fellow",
    title: "MY FELLOW",
    description:
      "an online platform designed to help you connect with Christian fellowship on campus. We understand that being a new student can be overwhelming, especially when it comes to finding a community of believers. That's why we are here to assist you every step of the way.",
    image: "/images/projects/my-fellow.png?height=200&width=300",
    category: "Education",
    duration: "12 months",
    beneficiaries: "1500 youth",
    teamSize: "8 volunteers",
    urgency: "Ongoing",
  },
  {
    id: 3,
    slug: "melhk-poadcast",
    title: "MELHIK - PODCAST",
    description:
      "Melhk Podcast is a program that helps Christian youth grow holistically, spiritually, emotionally, physically, and socially, and helps us have a biblical foundation by addressing pressing issues among young people.",
    image: "/images/projects/melhk.png?height=200&width=300",
    category: "Poadcast",
    duration: "2 years",
    beneficiaries: "5,000 people",
    teamSize: "8 volunteers",
    urgency: "Ongoing",
  },
  {
    id: 4,
    slug: "gemenaye",
    title: "GEMENAYE",
    description:
      "We all have different paths in life, but to a greater or lesser extent, we have all had issues that we have held within ourselves and faced; perhaps we have come out of our situation because we met someone who helped us, listened to us, and gave us true love.",
    image: "/images/projects/gemenaye.png?height=200&width=300",
    category: "Tv-program",
    duration: "10 months",
    beneficiaries: "800 families",
    teamSize: "6 volunteers",
    urgency: "Critical Need",
  },
  {
    id: 5,
    slug: "habesha-students",
    title: "HABESHA STUDENTS",
    description:
      "It is a place where students can find true answers to life's questions and God's truth. It also works with a website called addishiwot.net to send a series of lessons to those who are interested. This website is also available as a mobile application.",
    image: "/images/projects/habesha-students.png?height=200&width=300",
    category: "Online-platform",
    duration: "10 months",
    beneficiaries: "1000 families",
    teamSize: "5 volunteers",
    urgency: "Ongoing",
  },
  {
    id: 6,
    slug: "hulentenawi",
    title: "HULENTENAWI",
    description:
      "Everyone these days is concerned about how they can improve themselves and live with the society they live in, but with all these questions, we are confused about who to ask. But now, a mobile app that allows us to improve ourselves in these and many other ways now allows us to chat with people who are learning along with you.",
    image: "/images/projects/hulentenawi.png?height=200&width=300",
    category: "Online-platform",
    duration: "10 months",
    beneficiaries: "1000 families",
    teamSize: "5 volunteers",
    urgency: "Ongoing",
  },
  {
    id: 7,
    slug: "jesus-film",
    title: "JESUS FILM",
    description:
      "We want everyone, everywhere to encounter Jesus Sharing the Story of Jesus We believe film is the most dynamic way to hear and see the greatest story ever lived — so we are driven to bring Christ-centered video to the ends of the earth. More than 490 million people have come to Jesus after watching these films!",
    image: "/images/projects/jesus-film.png?height=200&width=300",
    category: "Online-platform",
    duration: "10 months",
    beneficiaries: "1000 families",
    teamSize: "5 volunteers",
    urgency: "Ongoing",
  },
];

const categories = Array.from(new Set(projects.map(project => project.category)));

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [donationModal, setDonationModal] = useState<{
    isOpen: boolean;
    type: "project" | "missionary";
    title: string;
    description?: string;
  }>({
    isOpen: false,
    type: "project",
    title: "",
    description: "",
  });

  const openDonationModal = (
    type: "project" | "missionary",
    title: string,
    description?: string,
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
      type: "project",
      title: "",
      description: "",
    });
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header currentPage="projects" />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#102C80]/5 to-[#0E276E]/5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23102C80' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Badge className="bg-primary-100 text-primary-700 px-4 py-1.5 text-sm font-medium">
                Our Initiatives
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#102C80] to-[#0E276E]">
              Transforming Lives Through Faith
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              Explore our diverse range of projects that are making a real difference in communities across Ethiopia. Each initiative represents our commitment to spreading hope and transformation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">7+</div>
                <div className="text-sm text-neutral-600">Active Projects</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">11</div>
                <div className="text-sm text-neutral-600">Regions Reached</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">8.5K+</div>
                <div className="text-sm text-neutral-600">Lives Impacted</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100">
                <div className="text-3xl font-bold text-primary-600 mb-1">40+</div>
                <div className="text-sm text-neutral-600">Team Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="text-sm"
              >
                All Projects
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-neutral-200 cursor-pointer group transform hover:-translate-y-1"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <Badge
                      className={`absolute top-3 right-3 text-white shadow-lg ${
                        project.urgency === "Critical Need"
                          ? "bg-primary-600"
                          : project.urgency === "High Priority"
                          ? "bg-primary-500"
                          : "bg-secondary-500"
                      }`}
                    >
                      {project.urgency}
                    </Badge>
                    <Badge className="absolute top-3 left-3 bg-neutral-700 text-white shadow-lg">
                      {project.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-neutral-800 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-neutral-600 line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Link>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-neutral-600">
                        <Clock className="w-4 h-4 mr-2 text-primary-600" />
                        <span className="font-medium">Duration:</span>
                      </div>
                      <div className="text-neutral-800">{project.duration}</div>

                      <div className="flex items-center text-neutral-600">
                        <Target className="w-4 h-4 mr-2 text-primary-600" />
                        <span className="font-medium">Beneficiaries:</span>
                      </div>
                      <div className="text-neutral-800">
                        {project.beneficiaries}
                      </div>

                      <div className="flex items-center text-neutral-600">
                        <Users className="w-4 h-4 mr-2 text-primary-600" />
                        <span className="font-medium">Team Size:</span>
                      </div>
                      <div className="text-neutral-800">{project.teamSize}</div>
                    </div>
                    <div className="flex space-x-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-primary-600 text-primary-600 hover:bg-primary-50"
                        >
                          Learn More
                        </Button>
                      </Link>
                      <Button
                        className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg"
                        onClick={(e) => {
                          e.preventDefault();
                          openDonationModal(
                            "project",
                            project.title,
                            project.description
                          );
                        }}
                      >
                        Donate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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