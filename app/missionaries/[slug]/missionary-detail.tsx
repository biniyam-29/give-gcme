"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ArrowLeft, Mail, Phone, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import DonationModal from "@/components/donation-modal"
import Header from "@/components/header"

interface MissionaryDetailProps {
  missionary: any // Replace with proper type
}

export default function MissionaryDetail({ missionary }: MissionaryDetailProps) {
  const [donationModal, setDonationModal] = useState<{
    isOpen: boolean
    type: "project" | "missionary"
    title: string
    description?: string
  }>({
    isOpen: false,
    type: "missionary",
    title: "",
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
    })
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header currentPage="missionaries" />
      <div className="pt-20">
        {/* Back Navigation */}
        <div className="bg-white border-b border-stone-200">
          <div className="container mx-auto px-4 py-4">
            <Link href="/missionaries" className="inline-flex items-center text-sm text-stone-600 hover:text-stone-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Missionaries
            </Link>
          </div>
        </div>

        {/* Missionary Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Your existing missionary content */}
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
  )
} 