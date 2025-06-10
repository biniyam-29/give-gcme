"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, ArrowRight, Clock, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DonationModal from "@/components/donation-modal";
import Header from "@/components/header";
import Footer from "@/components/footer";
import useEmblaCarousel from "embla-carousel-react";

export default function MissionaryDonationPlatform() {
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

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    speed: 20,
    inViewThreshold: 0.7
  });

  const [missionariesRef, missionariesApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    speed: 5,
    inViewThreshold: 0.7,
    skipSnaps: false,
    duration: 20
  });

  const missionaries = [
    {
      id: 1,
      name: "Senay Kumelachew",
      role: "Digital Missions & Church Tech",
      image: "/images/missionaries/senay.png?height=400&width=400",
    },
    {
      id: 2,
      name: "Samson Usmael",
      role: "Digital Evangelism & Discipleship",
      image: "/images/missionaries/samson.png?height=400&width=400",
    },
    {
      id: 3,
      name: "Cherinet Alemu",
      role: "Digital Missions & Mentorship",
      image: "/images/missionaries/cherinet.png?height=400&width=400",
    },
    {
      id: 4,
      name: "Saron Yohannes",
      role: "Product Leadership & Digital Evangelism",
      image: "/images/missionaries/saron.png?height=400&width=400",
    },
    {
      id: 5,
      name: "Rediet Kefetew",
      role: "Content Creation & Mentorship",
      image: "/images/missionaries/rediet.png?height=400&width=400",
    },
    {
      id: 6,
      name: "Denamo Markos",
      role: "Software Development & ML",
      image: "/images/missionaries/denamo.png?height=400&width=400",
    },
    {
      id: 7,
      name: "Beka Shiferaw",
      role: "Graphic Design & Digital Strategy",
      image: "/images/missionaries/beka.png?height=400&width=400",
    },
    {
      id: 8,
      name: "Biniam Kassahun",
      role: "Innovation & Technology",
      image: "/images/missionaries/biniam.png?height=400&width=400",
    },
  ];

  // Create a duplicated array for seamless looping
  const duplicatedMissionaries = [...missionaries, ...missionaries];

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const missionariesAutoplay = useCallback(() => {
    if (!missionariesApi) return;
    missionariesApi.scrollNext();
  }, [missionariesApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplayInterval = setInterval(autoplay, 5000);

    const onUserInteraction = () => {
      clearInterval(autoplayInterval);
      setTimeout(() => {
        setInterval(autoplay, 5000);
      }, 10000);
    };

    emblaApi.on('pointerDown', onUserInteraction);
    emblaApi.on('pointerUp', onUserInteraction);

    return () => {
      clearInterval(autoplayInterval);
      emblaApi.off('pointerDown', onUserInteraction);
      emblaApi.off('pointerUp', onUserInteraction);
    };
  }, [emblaApi, autoplay]);

  useEffect(() => {
    if (!missionariesApi) return;

    const autoplayInterval = setInterval(missionariesAutoplay, 50);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [missionariesApi, missionariesAutoplay]);

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

  const impactStats = [
    { label: "Missionaries Supported", value: "127", icon: Users },
    { label: "Ethiopian Regions Reached", value: "11", icon: Globe },
    { label: "Lives Transformed", value: "8,500+", icon: Heart },
  ];

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

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png?height=800&width=1200"
            alt="Ethiopian missionaries helping children in rural communities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Support Ethiopian Missions.
            <br />
            <span className="text-primary-300">Be the Light.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-100 max-w-2xl mx-auto">
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

      {/* Bible Verse & Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <blockquote className="text-2xl md:text-3xl font-light text-neutral-700 italic mb-4 max-w-4xl mx-auto">
              "How beautiful are the feet of those who bring good news!"
            </blockquote>
            <cite className="text-primary-600 font-semibold">Romans 10:15</cite>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8C0D4] to-[#8E9BBF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-neutral-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-neutral-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Current Projects in Ethiopia
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Support specific initiatives that are making a real difference in
              communities across Ethiopian regions.
            </p>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 pb-8 transition-transform duration-500 ease-out">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 transform transition-all duration-300 ease-out hover:scale-[1.02]"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-neutral-200 cursor-pointer group transform hover:-translate-y-1 h-full">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missionaries Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Dedicated Missionaries
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Meet the passionate individuals who are making a difference in communities across Ethiopia.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-missionary-slide">
              {duplicatedMissionaries.map((missionary, index) => (
                <div 
                  key={`${missionary.id}-${index}`}
                  className="flex-[0_0_280px] min-w-0 mx-4 transform transition-all duration-500 ease-in-out hover:scale-105"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                    <Image
                      src={missionary.image}
                      alt={missionary.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                      <h3 className="text-xl font-semibold mb-1">{missionary.name}</h3>
                      <p className="text-sm text-neutral-200">{missionary.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/missionaries">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 text-lg"
              >
                View All Missionaries
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#102C80] to-[#0E276E]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Your support enables missionaries to continue their vital work
            spreading hope and love across Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#0E276E] hover:bg-neutral-50 px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() =>
                openDonationModal(
                  "project",
                  "Ethiopian Mission Support",
                  "General support for all our Ethiopian missions"
                )
              }
            >
              Start Donating Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0E276E] px-8 py-3 text-lg bg-[#f0f9ff]/30 backdrop-blur-sm"
            >
              Learn More About Our Mission
            </Button>
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
