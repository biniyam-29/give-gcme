"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Search, Users, Globe, Loader2 } from "lucide-react";
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
  supportNeeds: any;
}

export default function MissionariesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [missionaries, setMissionaries] = useState<Missionary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);

  // Fetch missionaries from API
  useEffect(() => {
    const fetchMissionaries = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/admin/missionaries?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch missionaries");
        }
        const data = await response.json();
        setMissionaries(data.missionaries || []);
        if (data.pagination) {
          setPage(data.pagination.page);
          setLimit(data.pagination.limit);
          setTotal(data.pagination.total);
          setPages(data.pagination.pages);
        }
      } catch (err) {
        console.error("Error fetching missionaries:", err);
        setError("Failed to load missionaries. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMissionaries();
  }, [page, limit]);

  // Pagination handlers
  const goToPage = (p: number) => {
    if (p < 1 || p > pages) return;
    setPage(p);
  };
  const goToPrevious = () => goToPage(page - 1);
  const goToNext = () => goToPage(page + 1);

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

  const filteredMissionaries = missionaries.filter(
    (missionary) =>
      missionary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      missionary.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      missionary.focus.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const impactStats = [
    {
      label: "Active Missionaries",
      value: missionaries
        .filter((m) => m.status === "Active")
        .length.toString(),
      icon: Users,
    },
    {
      label: "Ethiopian Regions Served",
      value: new Set(missionaries.map((m) => m.location)).size.toString(),
      icon: Globe,
    },
    {
      label: "Years of Combined Service",
      value:
        missionaries
          .reduce((total, m) => {
            const years = parseInt(m.years?.match(/\d+/)?.[0] || "0");
            return total + years;
          }, 0)
          .toString() + "+",
      icon: Calendar,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Header currentPage="missionaries" />
        <div className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary-600" />
                <p className="text-lg text-stone-600">
                  Loading missionaries...
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Header currentPage="missionaries" />
        <div className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <p className="text-lg text-red-600 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
                  placeholder="Search missionaries by name, location, or focus..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border-stone-300 focus:border-primary-600 focus:ring-neutral-600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Missionaries List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search missionaries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-96"
                />
              </div>
              <div className="text-sm text-stone-600">
                Showing page {page} of {pages} ({total} missionaries)
              </div>
            </div>
            {/* Missionaries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredMissionaries.map((missionary) => (
                <Card
                  key={missionary.id}
                  className="text-center hover:shadow-lg transition-all duration-300 bg-white border-stone-200 cursor-pointer group"
                >
                  <Link href={`/missionaries/${missionary.id}`}>
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
                      {missionary.shortBio || missionary.mission}
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
                      <Link
                        href={`/missionaries/${missionary.id}`}
                        className="flex-1"
                      >
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
            {/* Pagination Controls */}
            {pages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  onClick={goToPrevious}
                  disabled={page === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: pages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToPage(idx + 1)}
                    className={`px-3 py-1 border rounded ${
                      page === idx + 1 ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  onClick={goToNext}
                  disabled={page === pages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
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
