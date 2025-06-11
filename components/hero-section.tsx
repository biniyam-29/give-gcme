"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  openDonationModal: (
    type: "project" | "missionary",
    title: string,
    description?: string
  ) => void;
}

export default function HeroSection({ openDonationModal }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full text-center flex items-end justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png?height=800&width=1200"
          alt="Ethiopian missionaries helping children in rural communities"
          fill
          className="object-cover"
          priority
        />

        {/* Bottom-up gradient overlay for the text area */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10" />
      </div>

      {/* Text content container, absolutely positioned and constrained */}
      <div className="relative z-20 w-[90%] max-w-3xl p-4 text-primary-00 mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
          Support Ethiopian Missions.
          <br />
          <span className="text-primary-300">Be the Light.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Join us in spreading hope, love, and transformation to communities
          across Ethiopia through faithful missionary work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() =>
              openDonationModal(
                "project",
                "Ethiopian Mission Projects",
                "Support our ongoing projects across Ethiopia"
              )
            }
          >
            Donate to a Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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
  );
} 