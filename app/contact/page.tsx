"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@greatcommissionethiopia.org",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+251 11 555 0123",
      description: "Available Monday-Friday, 9 AM - 5 PM EAT",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Addis Ababa, Ethiopia",
      description: "Schedule an appointment to visit our office",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9 AM - 5 PM",
      description: "Ethiopian Time (EAT)",
    },
  ]

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "partnership", label: "Partnership Opportunities" },
    { value: "missionary", label: "Missionary Support" },
    { value: "projects", label: "Project Information" },
    { value: "volunteer", label: "Volunteer Opportunities" },
    { value: "media", label: "Media & Press" },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-stone-800">Message Sent!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600 mb-6">
              Thank you for contacting us. We've received your message and will respond within 24 hours.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Return to Home</Button>
              </Link>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    inquiryType: "general",
                  })
                }}
              >
                Send Another Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header currentPage="contact" />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Get in Touch</h1>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                We'd love to hear from you. Whether you have questions about our work, want to partner with us, or need
                support, we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-stone-200"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-amber-600" />
                      </div>
                      <CardTitle className="text-lg text-stone-800">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-stone-800 mb-2">{info.details}</p>
                      <p className="text-sm text-stone-600">{info.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white border-stone-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone-800 text-center">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-stone-700 mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-stone-700 mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType" className="text-stone-700 mb-2 block">
                        Type of Inquiry
                      </Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-stone-300 rounded-md focus:border-amber-600 focus:ring-amber-600 focus:ring-1"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-stone-700 mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-stone-300 focus:border-amber-600 focus:ring-amber-600"
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-stone-700 mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-stone-300 focus:border-amber-600 focus:ring-amber-600 min-h-32"
                        placeholder="Please share your message, questions, or how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Looking for Something Specific?</h2>
              <p className="text-xl text-stone-600">Here are some quick links to help you find what you need.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-stone-50 border-stone-200">
                <CardHeader>
                  <CardTitle className="text-lg text-stone-800">Partnership Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 mb-4 text-sm">
                    Learn about becoming a monthly partner and supporting our missionaries.
                  </p>
                  <Link href="/partnership">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">Partnership Info</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-stone-50 border-stone-200">
                <CardHeader>
                  <CardTitle className="text-lg text-stone-800">Project Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 mb-4 text-sm">
                    Find out how you can support specific projects across Ethiopia.
                  </p>
                  <Link href="/#projects">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">View Projects</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-stone-50 border-stone-200">
                <CardHeader>
                  <CardTitle className="text-lg text-stone-800">Prayer Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 mb-4 text-sm">
                    Join our prayer community and receive regular prayer updates.
                  </p>
                  <Link href="/prayer-requests">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">Prayer Requests</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
