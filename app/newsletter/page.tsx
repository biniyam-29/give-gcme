"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Mail, Calendar, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleInterestChange = (interest: string) => {
    setInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubscribed(true)
  }

  const interestOptions = [
    { id: "missionary-updates", label: "Missionary Updates", description: "Stories and updates from our missionaries" },
    { id: "project-progress", label: "Project Progress", description: "Updates on current projects and their impact" },
    { id: "prayer-requests", label: "Prayer Requests", description: "Weekly prayer needs and answered prayers" },
    {
      id: "partnership-opportunities",
      label: "Partnership Opportunities",
      description: "New ways to get involved and support",
    },
    { id: "impact-stories", label: "Impact Stories", description: "Testimonials and transformation stories" },
    { id: "events", label: "Events & News", description: "Upcoming events and organizational news" },
  ]

  const newsletterFeatures = [
    {
      icon: Users,
      title: "Missionary Spotlights",
      description: "Get to know our missionaries through personal stories and ministry updates",
    },
    {
      icon: Heart,
      title: "Impact Reports",
      description: "See exactly how your support is transforming communities across Ethiopia",
    },
    {
      icon: Calendar,
      title: "Prayer Calendar",
      description: "Receive specific prayer requests and praise reports from the field",
    },
    {
      icon: Mail,
      title: "Exclusive Content",
      description: "Access photos, videos, and stories not shared anywhere else",
    },
  ]

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-stone-800">Welcome to Our Community!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600 mb-6">
              Thank you for subscribing to our newsletter. You'll receive your first update within the next week, and
              we'll keep you informed about the amazing work happening in Ethiopia.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Return to Home</Button>
              </Link>
              <Link href="/missionaries">
                <Button variant="outline" className="w-full">
                  Meet Our Missionaries
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header currentPage="newsletter" />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Stay Connected</h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Join thousands of supporters who receive regular updates about our missionaries, projects, and the
                incredible transformation happening across Ethiopia.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Features */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">What You'll Receive</h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Our newsletter is packed with inspiring content that keeps you connected to the mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {newsletterFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-stone-200"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-amber-600" />
                      </div>
                      <CardTitle className="text-lg text-stone-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-stone-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Subscription Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-stone-800 mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-xl text-stone-600">
                  Choose what you'd like to hear about and how often. We respect your inbox and will never spam you.
                </p>
              </div>

              <Card className="bg-stone-50 border-stone-200">
                <CardHeader>
                  <CardTitle className="text-xl text-stone-800 text-center">Newsletter Subscription</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-stone-700 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label className="text-stone-700 mb-3 block">
                        What would you like to receive? (Select all that apply)
                      </Label>
                      <div className="space-y-3">
                        {interestOptions.map((option) => (
                          <div key={option.id} className="flex items-start space-x-3">
                            <input
                              type="checkbox"
                              id={option.id}
                              checked={interests.includes(option.id)}
                              onChange={() => handleInterestChange(option.id)}
                              className="mt-1 rounded border-stone-300 text-amber-600 focus:ring-amber-600"
                            />
                            <div className="flex-1">
                              <Label htmlFor={option.id} className="text-stone-800 font-medium cursor-pointer">
                                {option.label}
                              </Label>
                              <p className="text-stone-600 text-sm">{option.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2">Frequency</h4>
                      <p className="text-amber-700 text-sm">
                        We send newsletters twice monthly - one mid-month update with missionary stories and project
                        progress, and one end-of-month prayer and partnership update. You can unsubscribe at any time.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
                      <Mail className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Join Our Community</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">3,247</div>
                  <div className="text-stone-600">Newsletter Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">127</div>
                  <div className="text-stone-600">Missionaries Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">11</div>
                  <div className="text-stone-600">Ethiopian Regions Served</div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-white border-stone-200">
                <CardContent className="p-8">
                  <blockquote className="text-center text-lg text-stone-700 italic mb-4">
                    "The newsletter keeps me connected to the amazing work happening in Ethiopia. Every update reminds
                    me why I became a monthly partner. The stories are so encouraging and the prayer requests help me
                    pray specifically for real needs."
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-stone-800">Sarah Johnson</div>
                    <div className="text-stone-600 text-sm">Monthly Partner since 2019</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Stay Connected?</h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Don't miss out on the incredible stories of transformation happening across Ethiopia. Subscribe today and
              be part of the mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-stone-50 px-8 py-3 text-lg"
                onClick={() => document.getElementById("email")?.scrollIntoView({ behavior: "smooth" })}
              >
                Subscribe Now
              </Button>
              <Link href="/partnership">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg"
                >
                  Become a Partner
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
