"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define the Project interface
interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  beneficiaries: string;
  teamSize: string;
  urgency: string;
}

// Define props for the ProjectsSection component
interface ProjectsSectionProps {
  projects: Project[];
  openDonationModal: (
    type: "project" | "missionary",
    title: string,
    description?: string
  ) => void;
}

export default function ProjectsSection({ projects, openDonationModal }: ProjectsSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const currentTranslateX = useRef(0);
  const contentWidthRef = useRef(0);

  const scrollSpeed = 0.5; // Defines how many pixels per frame the slideshow scrolls.

  const animateStep = useCallback(() => {
    currentTranslateX.current -= scrollSpeed;

    if (contentWidthRef.current > 0 && Math.abs(currentTranslateX.current) >= contentWidthRef.current) {
      currentTranslateX.current = 0;
    }

    if (projectsContainerRef.current) {
      projectsContainerRef.current.style.transform = `translateX(${currentTranslateX.current}px)`;
    }
  }, [scrollSpeed, contentWidthRef]);

  useEffect(() => {
    const container = projectsContainerRef.current;
    if (!container) return;

    const calculateContentWidth = () => {
      if (container) {
        const totalDuplicatedContentWidth = container.scrollWidth;
        contentWidthRef.current = totalDuplicatedContentWidth / 3; // Assuming 3 sets for seamless loop
        console.log('Calculated Projects content width (once): ', contentWidthRef.current);
      }
    };

    calculateContentWidth();
    const observer = new ResizeObserver(calculateContentWidth);
    observer.observe(container);

    currentTranslateX.current = 0; // Initial position
    if (projectsContainerRef.current) {
        projectsContainerRef.current.style.transform = `translateX(0px)`;
    }

    return () => {
      if (observer && container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    const loop = () => {
      animateStep();
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    if (!isHovered) {
      console.log('Projects Animation STARTING or RESUMING. isHovered:', isHovered);
      animationFrameRef.current = requestAnimationFrame(loop);
    } else {
      console.log('Projects Animation PAUSING. isHovered:', isHovered);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, animateStep]);

  return (
    <section className="py-12 md:py-20 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 mb-4">
            Our Impactful Projects
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Explore our initiatives designed to bring hope and transformation to communities across Ethiopia.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => { console.log('onMouseEnter Projects event. Setting isHovered to true'); setIsHovered(true); }}
          onMouseLeave={() => { console.log('onMouseLeave Projects event. Setting isHovered to false'); setIsHovered(false); }}
        >
          <div
            ref={projectsContainerRef}
            className="flex flex-nowrap will-change-transform"
            style={{ transition: 'none' }}
          >
            {Array(3).fill(null).map((_, groupIndex) => (
              <div key={`project-group-${groupIndex}`} className="flex flex-nowrap shrink-0">
                {projects.map((project, index) => (
                  <Card
                    key={`${project.id}-${groupIndex}-${index}`}
                    className="flex-[0_0_280px] min-w-0 mr-4 md:mr-8 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-neutral-200 cursor-pointer group transform hover:-translate-y-1"
                  >
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
                    <CardContent className="p-4">
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
                        <div className="flex gap-2">
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
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 