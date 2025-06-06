"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Calendar, MapPin, Users, Send, ChurchIcon as Praying } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function PrayerRequestsPage() {
  const [prayerForm, setPrayerForm] = useState({
    name: "",
    email: "",
    request: "",
    isPublic: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setPrayerForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const currentRequests = [
    {
      id: 1,
      title: "Safe Travel for Medical Team",
      missionary: "Dr. Hanna Bekele",
      location: "Tigray Region",
      date: "December 2024",
      urgency: "Urgent",
      description:
        "Please pray for safe travel as our medical team visits remote villages during the rainy season. Roads are difficult and some areas have security concerns.",
      category: "Safety",
    },
    {
      id: 2,
      title: "Government Approval for School Construction",
      missionary: "Samuel & Ruth Girma",
      location: "Oromia Region",
      date: "December 2024",
      urgency: "Ongoing",
      description:
        "We need government permits to begin construction of our new education center. Pray for favor with local officials and smooth approval processes.",
      category: "Projects",
    },
    {
      id: 3,
      title: "Healing for Community Members",
      missionary: "Meron & Yohannes Desta",
      location: "SNNP Region",
      date: "December 2024",
      urgency: "Critical",
      description:
        "Several families in our community are dealing with serious illnesses. Pray for healing and for our ability to provide adequate medical support.",
      category: "Health",
    },
    {
      id: 4,
      title: "Translation Work Progress",
      missionary: "Tekle Hailu",
      location: "Amhara Region",
      date: "November 2024",
      urgency: "Ongoing",
      description:
        "Pray for wisdom and accuracy as we complete the Old Testament translation in the Kemant language. This is delicate work that requires divine guidance.",
      category: "Ministry",
    },
    {
      id: 5,
      title: "Women's Cooperative Success",
      missionary: "Selamawit Wolde",
      location: "Dire Dawa",
      date: "November 2024",
      urgency: "Praise",
      description:
        "Praise God for the success of our women's craft cooperative! Pray for continued growth and for the women to be good stewards of their new income.",
      category: "Economic",
    },
    {
      id: 6,
      title: "Church Plant Leadership Training",
      missionary: "Almaz & Dawit Tadesse",
      location: "Addis Ababa Region",
      date: "November 2024",
      urgency: "Ongoing",
      description:
        "We're training 15 new church leaders. Pray for their spiritual growth, wisdom in leadership, and for the churches they will shepherd.",
      category: "Leadership",
    },
  ]

  const prayerStats = [
    { label: "Active Prayer Warriors", value: "1,247", icon: Users },
    { label: "Prayer Requests This Month", value: "89", icon: Praying },
    { label: "Answered Prayers Reported", value: "156", icon: Heart },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Praying className="w-8 h-8 text-primary-600" />
            </div>
            <CardTitle className="text-2xl text-stone-800">Prayer Request Received</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600 mb-6">
              Thank you for sharing your prayer request. Our prayer team will be lifting this up in prayer, and you'll
              receive updates on how God is working.
            </p>
            <div className="space-y-3">
              <Link href="/prayer-requests">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">View Prayer Requests</Button>
              </Link>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setIsSubmitted(false)
                  setPrayerForm({
                    name: "",
                    email: "",
                    request: "",
                    isPublic: false,
                  })
                }}
              >
                Submit Another Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header currentPage="prayer-requests" />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Prayer Requests</h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Join our community of prayer warriors in lifting up our missionaries and the communities they serve
                across Ethiopia. Your prayers make a real difference.
              </p>
            </div>

            {/* Prayer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {prayerStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-stone-800 mb-2">{stat.value}</div>
                    <div className="text-stone-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Current Prayer Requests */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Current Prayer Requests</h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                These are the most recent prayer requests from our missionaries and the communities they serve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {currentRequests.map((request) => (
                <Card
                  key={request.id}
                  className="hover:shadow-lg transition-shadow duration-300 bg-white border-stone-200"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={`${
                          request.urgency === "Urgent"
                            ? "bg-urgent-100 text-urgent-800"
                            : request.urgency === "Critical"
                              ? "bg-primary-100 text-primary-800"
                              : request.urgency === "Praise"
                                ? "bg-success-100 text-success-800"
                                : "bg-secondary-100 text-secondary-800"
                        }`}
                      >
                        {request.urgency}
                      </Badge>
                      <Badge variant="secondary" className="bg-stone-100 text-stone-700">
                        {request.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-stone-800">{request.title}</CardTitle>
                    <div className="space-y-1 text-sm text-stone-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {request.missionary}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {request.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {request.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-700 text-sm leading-relaxed">{request.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Prayer Request */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-stone-800 mb-4">Submit a Prayer Request</h2>
                <p className="text-xl text-stone-600">
                  Share your prayer needs with our community. We believe in the power of united prayer.
                </p>
              </div>

              <Card className="bg-stone-50 border-stone-200">
                <CardHeader>
                  <CardTitle className="text-xl text-stone-800 text-center">Prayer Request Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-stone-700 mb-2 block">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={prayerForm.name}
                          onChange={handleInputChange}
                          className="border-stone-300 focus:border-primary-600 focus:ring-primary-600"
                          placeholder="Your name (optional)"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-stone-700 mb-2 block">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={prayerForm.email}
                          onChange={handleInputChange}
                          className="border-stone-300 focus:border-primary-600 focus:ring-primary-600"
                          placeholder="your.email@example.com (optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="request" className="text-stone-700 mb-2 block">
                        Prayer Request *
                      </Label>
                      <Textarea
                        id="request"
                        name="request"
                        required
                        value={prayerForm.request}
                        onChange={handleInputChange}
                        className="border-stone-300 focus:border-primary-600 focus:ring-primary-600 min-h-32"
                        placeholder="Please share your prayer request. Be as specific as you'd like - our prayer team will lift this up with care and confidentiality."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="isPublic"
                        name="isPublic"
                        checked={prayerForm.isPublic}
                        onChange={handleInputChange}
                        className="rounded border-stone-300 text-primary-600 focus:ring-primary-600"
                      />
                      <Label htmlFor="isPublic" className="text-stone-700 text-sm">
                        I'm comfortable with this request being shared publicly (anonymously) to encourage others
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 shadow-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Prayer Request"}
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prayer Community */}
        <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Prayer Community</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Receive weekly prayer updates and join thousands of believers praying for Ethiopia's transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/newsletter">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-50 px-8 py-3 text-lg shadow-lg">
                  Subscribe to Prayer Updates
                </Button>
              </Link>
              <Link href="/partnership">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg bg-primary-600/30 backdrop-blur-sm"
                >
                  Become a Prayer Partner
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
