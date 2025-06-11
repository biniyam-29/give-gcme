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
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentTranslateX = useRef(0);
  const cardWidthWithMargin = useRef(0); // Width of a single card including its margin
  const totalProjectsWidth = useRef(0); // Total width of one full set of unique projects

  const slideDuration = 1000; // ms for slide animation
  const pauseDuration = 3000; // ms for pause

  const calculateDimensions = useCallback(() => {
    if (!projectsContainerRef.current) return;

    // Get the width of a single card including its right margin
    const firstCard = projectsContainerRef.current.querySelector('.group.flex-\\[0_0_400px\\]');
    if (firstCard) {
      const computedStyle = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(computedStyle.marginRight);
      cardWidthWithMargin.current = firstCard.clientWidth + marginRight;
    }

    // Get the total width of one complete set of projects (before duplication)
    const firstProjectGroup = projectsContainerRef.current.querySelector('.flex-nowrap.shrink-0');
    if (firstProjectGroup) {
      totalProjectsWidth.current = firstProjectGroup.scrollWidth;
    }
  }, []);

  useEffect(() => {
    calculateDimensions();
    const observer = new ResizeObserver(calculateDimensions);
    if (projectsContainerRef.current) {
      observer.observe(projectsContainerRef.current);
    }

    currentTranslateX.current = 0;
    if (projectsContainerRef.current) {
      projectsContainerRef.current.style.transform = `translateX(0px)`;
      projectsContainerRef.current.style.transition = `none`;
    }

    return () => {
      if (projectsContainerRef.current) {
        observer.unobserve(projectsContainerRef.current);
      }
    };
  }, [calculateDimensions]);

  useEffect(() => {
    const startSlide = () => {
      if (isHovered || cardWidthWithMargin.current === 0 || totalProjectsWidth.current === 0) {
        animationTimeoutRef.current = setTimeout(startSlide, 100);
        return;
      }

      const container = projectsContainerRef.current;
      if (!container) return;

      const nextTranslateX = currentTranslateX.current - cardWidthWithMargin.current;

      container.style.transition = `transform ${slideDuration / 1000}s ease-in-out`;
      container.style.transform = `translateX(${nextTranslateX}px)`;

      animationTimeoutRef.current = setTimeout(() => {
        currentTranslateX.current = nextTranslateX;

        if (Math.abs(currentTranslateX.current) >= totalProjectsWidth.current) {
          container.style.transition = 'none';
          currentTranslateX.current += totalProjectsWidth.current;
          container.style.transform = `translateX(${currentTranslateX.current}px)`;
          void container.offsetHeight;
          container.style.transition = `transform ${slideDuration / 1000}s ease-in-out`;
        }
        
        animationTimeoutRef.current = setTimeout(startSlide, pauseDuration);
      }, slideDuration);
    };

    animationTimeoutRef.current = setTimeout(startSlide, pauseDuration);

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [isHovered, slideDuration, pauseDuration, calculateDimensions]);

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
          className="relative overflow-hidden w-full mx-auto max-w-[1264px]"
          onMouseEnter={() => { setIsHovered(true); }}
          onMouseLeave={() => { setIsHovered(false); }}
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
                    className="flex-[0_0_400px] min-w-0 mr-6 md:mr-8 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-neutral-200 cursor-pointer group transform hover:-translate-y-1"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <div className="relative h-64">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <Badge
                          className={`absolute top-4 right-4 text-white shadow-lg ${
                            project.urgency === "Critical Need"
                              ? "bg-primary-600"
                              : project.urgency === "High Priority"
                              ? "bg-primary-500"
                              : "bg-secondary-500"
                          }`}
                        >
                          {project.urgency}
                        </Badge>
                        <Badge className="absolute top-4 left-4 bg-neutral-700 text-white shadow-lg">
                          {project.category}
                        </Badge>
                      </div>
                      <CardHeader className="p-6">
                        <CardTitle className="text-2xl text-neutral-800 group-hover:text-primary-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-neutral-600 line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                    </Link>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6 text-base">
                          <div className="flex items-center text-neutral-600">
                            <Clock className="w-5 h-5 mr-3 text-primary-600" />
                            <span className="font-medium">Duration:</span>
                          </div>
                          <div className="text-neutral-800">{project.duration}</div>

                          <div className="flex items-center text-neutral-600">
                            <Target className="w-5 h-5 mr-3 text-primary-600" />
                            <span className="font-medium">Beneficiaries:</span>
                          </div>
                          <div className="text-neutral-800">
                            {project.beneficiaries}
                          </div>

                          <div className="flex items-center text-neutral-600">
                            <Users className="w-5 h-5 mr-3 text-primary-600" />
                            <span className="font-medium">Team Size:</span>
                          </div>
                          <div className="text-neutral-800">{project.teamSize}</div>
                        </div>
                        <div className="flex gap-4">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="flex-1"
                          >
                            <Button
                              variant="outline"
                              className="w-full h-12 text-base border-primary-600 text-primary-600 hover:bg-primary-50"
                            >
                              Learn More
                            </Button>
                          </Link>
                          <Button
                            className="flex-1 h-12 text-base bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg"
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