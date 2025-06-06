"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowLeft, Mail, Phone, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DonationModal from "@/components/donation-modal";
import Header from "@/components/header";

interface MissionaryDetailProps {
  missionary: {
    id: number;
    name: string;
    image: string;
    location: string;
    years: string;
    focus: string;
    shortBio: string;
    fullBio: string;
    email: string;
    phone: string;
    website?: string;
    prayerRequests: string[];
    recentUpdates: Array<{
      date: string;
      title: string;
      content: string;
    }>;
    supportNeeds: Array<{
      item: string;
      amount: string;
      description: string;
    }>;
  };
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
      type: "missionary",
      title: "",
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header currentPage="missionaries" />
      <div className="pt-20">
        {/* Back Navigation */}
        <div className="bg-white border-b border-stone-200">
          <div className="container mx-auto px-4 py-4">
            <Link
              href="/missionaries"
              className="inline-flex items-center text-sm text-stone-600 hover:text-stone-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Missionaries
            </Link>
          </div>
        </div>

        {/* Missionary Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Missionary Info */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={missionary.image}
                        alt={missionary.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{missionary.name}</CardTitle>
                      <p className="text-gray-600">{missionary.location}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="secondary">{missionary.focus}</Badge>
                        <div className="flex items-center text-sm text-stone-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          {missionary.location}
                        </div>
                        <div className="flex items-center text-sm text-stone-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {missionary.years}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-lg text-stone-700 mb-4">{missionary.shortBio}</p>
                    <div className="whitespace-pre-line text-stone-600">
                      {missionary.fullBio}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Projects Section */}
              {missionary.recentUpdates && missionary.recentUpdates.length > 0 && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Recent Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {missionary.recentUpdates.map((update, index) => (
                        <div key={index} className="border-b border-stone-200 pb-6 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">{update.title}</h3>
                            <span className="text-sm text-stone-500">{update.date}</span>
                          </div>
                          <p className="text-stone-600">{update.content}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Support Needs Section */}
              {missionary.supportNeeds && missionary.supportNeeds.length > 0 && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Support Needs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {missionary.supportNeeds.map((need, index) => (
                        <div key={index} className="border-b border-stone-200 pb-6 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">{need.item}</h3>
                            <span className="text-sm font-medium text-orange-600">{need.amount}</span>
                          </div>
                          <p className="text-stone-600">{need.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Column - Contact & Prayer */}
            <div className="space-y-8">
              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-stone-600">
                      <Mail className="w-5 h-5 mr-3" />
                      <a href={`mailto:${missionary.email}`} className="hover:text-stone-900">
                        {missionary.email}
                      </a>
                    </div>
                    <div className="flex items-center text-stone-600">
                      <Phone className="w-5 h-5 mr-3" />
                      <a href={`tel:${missionary.phone}`} className="hover:text-stone-900">
                        {missionary.phone}
                      </a>
                    </div>
                    {missionary.website && (
                      <div className="flex items-center text-stone-600">
                        <Globe className="w-5 h-5 mr-3" />
                        <a
                          href={missionary.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-900"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Prayer Requests Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Prayer Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {missionary.prayerRequests.map((request, index) => (
                      <li key={index} className="text-stone-600">
                        • {request}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Donate Button */}
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => openDonationModal("missionary", missionary.name, missionary.shortBio)}
              >
                Support {missionary.name.split(" ")[0]}
              </Button>
            </div>
          </div>
        </div>

        <DonationModal
          isOpen={donationModal.isOpen}
          onClose={closeDonationModal}
          type={donationModal.type}
          title={donationModal.title}
          description={donationModal.description}
        />
      </div>
    </div>
  );
}
