"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Search, Users, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DonationModal from "@/components/donation-modal";

export default function MissionariesPage() {
  const [searchTerm, setSearchTerm] = useState("");
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

  const missionaries = [
    {
      id: 1,
      name: "Senay Kumelachew",
      mission:
        "Empowering churches and ministries to embrace technology for Gospel advancement and digital missions",
      image: "/images/missionaries/senay.png?height=400&width=400",
      location: "Ethiopia",
      years: "6+ years",
      focus: "Digital Missions & Church Tech Mobilization",
      slug: "senay-kumelachew",
      shortBio:
        "A passionate digital strategist empowering churches and campuses to embrace technology for Gospel advancement.",
    },
    {
      id: 2,
      name: "Samson Usmael",
      mission:
        "Leading digital strategies to raise multiplying missionaries and reach millions with the Gospel through digital platforms",
      image: "/images/missionaries/samson.png?height=400&width=400",
      location: "Ethiopia",
      years: "10+ years",
      focus: "Digital Evangelism & Discipleship",
      slug: "samson-usmael",
      shortBio:
        "A former atheist turned digital missionary, Samson leads digital strategies to raise multiplying missionaries through tech.",
    },
    {
      id: 3,
      name: "Cherinet Alemu",
      mission:
        "Raising digital mentors and sharing Christ with Ethiopia's younger generation online through various digital tools and platforms.",
      image: "/images/missionaries/cherinet.png?height=400&width=400",
      location: "Ethiopia",
      years: "5+ years",
      focus: "Digital Missions & Mentorship",
      slug: "cherinet-alemu",
      shortBio:
        "A dedicated missionary raising digital mentors and sharing Christ with Ethiopia's younger generation online.",
    },
    {
      id: 4,
      name: "Saron Yohannes",
      mission:
        "Leading digital product innovation to expand digital missions and share the love of Christ in Ethiopia.",
      image: "/images/missionaries/saron.png?height=400&width=400",
      location: "Durame, Ethiopia",
      years: "5+ years",
      focus: "Product Leadership & Digital Evangelism",
      slug: "saron-yohannes",
      shortBio:
        "Engineer-turned-digital-missionary leading digital product innovation for the Gospel in Ethiopia.",
    },
    {
      id: 5,
      name: "Rediet Kefetew",
      mission:
        "Creating gospel-centered content and mentoring souls online to share hope through digital platforms.",
      image: "/images/missionaries/rediet.png?height=400&width=400",
      location: "Hawassa, Ethiopia",
      years: "5+ years",
      focus: "Content Creation & Mentorship",
      slug: "rediet-kefetew",
      shortBio:
        "Former auditor turned full-time digital missionary, creating gospel-centered content and mentoring souls online.",
    },
    {
      id: 6,
      name: "Denamo Markos",
      mission:
        "Utilizing software development and machine learning to build scalable tools and innovate digital solutions for gospel engagement.",
      image: "/images/missionaries/denamo.png?height=400&width=400",
      location: "Hawassa, Ethiopia",
      years: "3+ years",
      focus: "Software Development & Machine Learning",
      slug: "denamo-markos",
      shortBio:
        "Tech-savvy missionary using code and algorithms to advance the gospel in digital spaces.",
    },
    {
      id: 7,
      name: "Beka Shiferaw",
      mission:
        "Using graphic design and digital tools to communicate the gospel with clarity and visual impact for online evangelism and church engagement.",
      image: "/images/missionaries/beka.png?height=400&width=400",
      location: "Bishoftu, Ethiopia",
      years: "3+ years",
      focus: "Graphic Design & Digital Strategy",
      slug: "beka-shiferaw",
      shortBio:
        "Engineer-turned-creative using digital tools and design to advance the gospel.",
    },
    {
      id: 8,
      name: "Biniam Kassahun",
      mission:
        "Leading innovation and technology to build digital platforms and strategies that support gospel outreach and discipleship across Ethiopia.",
      image: "/images/missionaries/biniam.png?height=400&width=400",
      location: "Ethiopia",
      years: "4+ years",
      focus: "Innovation & Technology",
      slug: "biniam-kassahun",
      shortBio:
        "Engineer and innovator passionate about solving social problems through technology and gospel-centered solutions.",
    },
    {
      id: 9,
      name: "Etsub Yakob",
      mission:
        "Managing digital strategy projects and organizing events to empower campuses and spread digital evangelism and discipleship.",
      image: "/images/missionaries/etsub.png?height=400&width=400",
      location: "Hawassa, Ethiopia",
      years: "2+ years",
      focus: "Event Management & Digital Strategy",
      slug: "etsub-yakob",
      shortBio:
        "Project Manager and Event Organizer with a passion for digital evangelism and discipleship.",
    },
    {
      id: 10,
      name: "Muluken Mengistu",
      mission:
        "Developing software and analyzing data to advance the Gospel through digital platforms and strengthen system security.",
      image: "/images/missionaries/muluken.png?height=400&width=400",
      location: "Addis Ababa, Ethiopia",
      years: "9+ years",
      focus: "Software Development & Cybersecurity",
      slug: "muluken-mengistu",
      shortBio:
        "Software Developer, Security Researcher, and Digital Evangelist passionate about leveraging technology for God's glory.",
    },
    {
      id: 11,
      name: "Eyosiyas Ketema",
      mission:
        "Creating user-centric design solutions and innovating digital experiences to advance God's kingdom and the Great Commission.",
      image: "/images/missionaries/eyosiyas.png?height=400&width=400",
      location: "Addis Ababa, Ethiopia",
      years: "3+ years",
      focus: "UX/UI Design & Product Design",
      slug: "eyosiyas-ketema",
      shortBio:
        "A UX designer passionate about creating user-centric solutions and contributing to God's kingdom through design.",
    },
    {
      id: 12,
      name: "Nardos Kebede",
      mission:
        "Transforming ideas into reality through project management and leveraging data analytics for effective digital ministry.",
      image: "/images/missionaries/nardos.png?height=400&width=400",
      location: "Addis Ababa, Ethiopia",
      years: "3+ years",
      focus: "Project Management & Data Analytics",
      slug: "nardos-kebede",
      shortBio:
        "Project Manager with a passion for transforming ideas into reality and leveraging data for digital ministry.",
    },
    {
      id: 13,
      name: "Loza Teshome",
      mission:
        "Leveraging technology and product management to create digital outreach initiatives specifically designed to impact teenagers for the Gospel.",
      image: "/images/missionaries/loza.png?height=400&width=400",
      location: "Addis Ababa, Ethiopia",
      years: "3+ years",
      focus: "Product Management & Youth Digital Outreach",
      slug: "loza-teshome",
      shortBio:
        "Product Manager and Digital Missionary passionate about leveraging technology to impact teenagers for the Gospel.",
    },
    {
      id: 14,
      name: "Misael Dessalegn",
      mission:
        "Developing front-end solutions and leading digital strategy teams to spread God's Kingdom through technology.",
      image: "/images/missionaries/misael.png?height=400&width=400",
      location: "Addis Ababa, Ethiopia",
      years: "3+ years",
      focus: "Front-End Development & Digital Strategy Leadership",
      slug: "misael-dessalegn",
      shortBio:
        "Front-End Developer and former campus Digital Strategy leader passionate about using technology for God's Kingdom.",
    },
    {
      id: 15,
      name: "Selam Getachew",
      mission:
        "Using graphic design and visual communication to effectively convey God's message and inspire others in digital ministry.",
      image: "/images/missionaries/selam.png?height=400&width=400",
      location: "Addis Ababa, Ethiopia",
      years: "2+ years",
      focus: "Graphics Design & Visual Communication",
      slug: "selam-getachew",
      shortBio:
        "Graphics Designer passionate about using visual art to communicate God's message and inspire others.",
    },
  ];

  const filteredMissionaries = missionaries.filter((missionary) =>
    missionary.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const impactStats = [
    { label: "Active Missionaries", value: "127", icon: Users },
    { label: "Ethiopian Regions Served", value: "11", icon: Globe },
    { label: "Years of Combined Service", value: "800+", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header currentPage="missionaries" />

      {/* Add top padding to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
                Our Ethiopian Missionaries
              </h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Meet the dedicated individuals serving communities across
                Ethiopia, spreading hope, love, and transformation through their
                faithful ministry in all regions of our beautiful country.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {impactStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-[#B8C0D4] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-[#0E276E]" />
                    </div>
                    <div className="text-3xl font-bold text-stone-800 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-stone-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search missionaries by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border-stone-300 focus:border-primary-600 focus:ring-neutral-600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Missionaries Grid */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            {filteredMissionaries.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-stone-600">
                  No missionaries found matching your search.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredMissionaries.map((missionary) => (
                  <Card
                    key={missionary.id}
                    className="text-center hover:shadow-lg transition-all duration-300 bg-white border-stone-200 cursor-pointer group"
                  >
                    <Link href={`/missionaries/${missionary.slug}`}>
                      <CardHeader className="pb-4">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <Image
                            src={missionary.image || "/placeholder.svg"}
                            alt={missionary.name}
                            fill
                            className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardTitle className="text-lg text-stone-800 group-hover:text-primary-600 transition-colors">
                          {missionary.name}
                        </CardTitle>
                        <div className="flex items-center justify-center text-sm text-stone-500 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {missionary.location}
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-stone-100 text-stone-700"
                        >
                          {missionary.focus}
                        </Badge>
                      </CardHeader>
                    </Link>
                    <CardContent>
                      <p className="text-sm text-stone-600 mb-4 line-clamp-3">
                        {missionary.shortBio}
                      </p>
                      <div className="flex items-center justify-center text-xs text-stone-500 mb-4">
                        <Calendar className="w-3 h-3 mr-1" />
                        {missionary.years} of service
                      </div>
                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-primary-600 hover:bg-primary-700 text-white transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            openDonationModal(
                              "missionary",
                              missionary.name,
                              missionary.mission
                            );
                          }}
                        >
                          Support {missionary.name.split(" ")[0]}
                        </Button>
                        <Link href={`/missionaries/${missionary.slug}`} className="flex-1">
                          <Button
                            variant="outline"
                            className="w-full border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Our Ethiopian Missionaries
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Your partnership enables these faithful servants to continue their
              vital work across all regions of Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-stone-50 px-8 py-3 text-lg"
                onClick={() =>
                  openDonationModal(
                    "missionary",
                    "Ethiopian Missionaries",
                    "Monthly partnership with our Ethiopian missionary team"
                  )
                }
              >
                Become a Monthly Partner
              </Button>
              <Link href="/partnership">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg w-full bg-white/20 backdrop-blur-sm"
                >
                  Learn About Partnership
                </Button>
              </Link>
              <Link href="/missionaries">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-neutral-800 px-8 py-3 text-lg w-full bg-white/20 backdrop-blur-sm"
                >
                  Choose a Missionary
                </Button>
              </Link>
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
