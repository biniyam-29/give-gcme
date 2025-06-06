"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Search, Users, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DonationModal from "@/components/donation-modal"

export default function MissionariesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [donationModal, setDonationModal] = useState<{
    isOpen: boolean
    type: "project" | "missionary"
    title: string
    description?: string
  }>({
    isOpen: false,
    type: "missionary",
    title: "",
    description: "",
  })

  const openDonationModal = (type: "project" | "missionary", title: string, description?: string) => {
    setDonationModal({
      isOpen: true,
      type,
      title,
      description,
    })
  }

  const closeDonationModal = () => {
    setDonationModal({
      isOpen: false,
      type: "missionary",
      title: "",
      description: "",
    })
  }

  const missionaries = [
    {
      id: 1,
      name: "Senay Kumlachew",
      mission:
        "Church planting and community development in rural Addis Ababa region",
      image: "/images/missionaries/senay.png?height=200&width=200",
      location: "Addis Ababa, Ethiopia",
      years: "8 years",
      focus: "Church Planting",
      slug: "almaz-dawit-tadesse",
      shortBio:
        "Dedicated to establishing sustainable Christian communities in rural villages around the capital.",
    },
    {
      id: 2,
      name: "Natnael Mengstu",
      mission: "Medical missions and healthcare training in Tigray region",
      image: "/images/missionaries/naty.png?height=200&width=200",
      location: "Addis Ababa, Ethiopia",
      years: "12 years",
      focus: "Medical Missions",
      slug: "hanna-bekele",
      shortBio:
        "Providing essential healthcare services and training local medical professionals in northern Ethiopia.",
    },
    {
      id: 3,
      name: "Misael Desalegn",
      mission: "Education and youth ministry in Oromia region",
      image: "/images/missionaries/misael.png?height=200&width=200",
      location: "Addis Ababa, Ethiopia",
      years: "6 years",
      focus: "Education & Youth",
      slug: "samuel-ruth-girma",
      shortBio:
        "Empowering young people through education and mentorship programs in rural Oromia.",
    },
    {
      id: 4,
      name: "Loza",
      mission: "Bible translation and literacy programs in Amhara region",
      image: "/images/missionaries/loza.png?height=200&width=200",
      location: "Addis Ababa, Ethiopia",
      years: "15 years",
      focus: "Bible Translation",
      slug: "tekle-hailu",
      shortBio:
        "Translating Scripture into local languages and promoting literacy in rural Amhara communities.",
    },
    {
      id: 5,
      name: "Eyosiyas Ketema",
      mission: "Community development and refugee assistance in SNNP region",
      image: "/images/missionaries/eyosiyas.png?height=200&width=200",
      location: "Hawassa, SNNP",
      years: "4 years",
      focus: "Community Development",
      slug: "meron-yohannes-desta",
      shortBio:
        "Supporting displaced families and community development in Southern Nations region.",
    },
    {
      id: 6,
      name: "Selam ",
      mission:
        "Women's empowerment and microfinance initiatives in eastern Ethiopia",
      image: "/images/missionaries/selam.png?height=200&width=200",
      location: "Dire Dawa, Ethiopia",
      years: "9 years",
      focus: "Women's Ministry",
      slug: "selamawit-wolde",
      shortBio:
        "Helping women achieve economic independence through skills training and microfinance programs.",
    },
  ];

  const filteredMissionaries = missionaries.filter((missionary) =>
    missionary.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const impactStats = [
    { label: "Active Missionaries", value: "127", icon: Users },
    { label: "Ethiopian Regions Served", value: "11", icon: Globe },
    { label: "Years of Combined Service", value: "800+", icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      <Header currentPage="missionaries" />

      {/* Add top padding to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Our Ethiopian Missionaries</h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Meet the dedicated individuals serving communities across Ethiopia, spreading hope, love, and
                transformation through their faithful ministry in all regions of our beautiful country.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {impactStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="text-3xl font-bold text-stone-800 mb-2">{stat.value}</div>
                    <div className="text-stone-600">{stat.label}</div>
                  </div>
                )
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
                  className="pl-10 pr-4 py-3 w-full border-stone-300 focus:border-amber-600 focus:ring-amber-600"
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
                <p className="text-xl text-stone-600">No missionaries found matching your search.</p>
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
                        <CardTitle className="text-lg text-stone-800 group-hover:text-amber-600 transition-colors">
                          {missionary.name}
                        </CardTitle>
                        <div className="flex items-center justify-center text-sm text-stone-500 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {missionary.location}
                        </div>
                        <Badge variant="secondary" className="bg-stone-100 text-stone-700">
                          {missionary.focus}
                        </Badge>
                      </CardHeader>
                    </Link>
                    <CardContent>
                      <p className="text-sm text-stone-600 mb-4 line-clamp-3">{missionary.shortBio}</p>
                      <div className="flex items-center justify-center text-xs text-stone-500 mb-4">
                        <Calendar className="w-3 h-3 mr-1" />
                        {missionary.years} of service
                      </div>
                      <Button
                        className="w-full bg-stone-700 hover:bg-stone-800 text-white group-hover:bg-amber-600 group-hover:hover:bg-amber-700 transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          openDonationModal("missionary", missionary.name, missionary.mission)
                        }}
                      >
                        Support {missionary.name.split(" ")[0]}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Support Our Ethiopian Missionaries</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Your partnership enables these faithful servants to continue their vital work across all regions of
              Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-stone-50 px-8 py-3 text-lg"
                onClick={() =>
                  openDonationModal(
                    "missionary",
                    "Ethiopian Missionaries",
                    "Monthly partnership with our Ethiopian missionary team",
                  )
                }
              >
                Become a Monthly Partner
              </Button>
              <Link href="/partnership">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg w-full bg-white/20 backdrop-blur-sm"
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
  )
}
