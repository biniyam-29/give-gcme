"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Missionary {
  id: string;
  name: string;
  title: string;
  location: string;
  image: string | null;
  shortBio: string;
  focus: string;
}

export default function MissionariesSection() {
  const [missionaries, setMissionaries] = useState<Missionary[]>([]);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const missionariesContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const currentTranslateX = useRef(0);
  const contentWidthRef = useRef(0);

  const scrollSpeed = 0.8; // Slightly faster for better visual effect

  // Fetch missionaries from API
  useEffect(() => {
    const fetchMissionaries = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/admin/missionaries");
        if (!response.ok) {
          throw new Error("Failed to fetch missionaries");
        }
        const data = await response.json();
        setMissionaries(data.missionaries || []);
      } catch (err) {
        console.error("Error fetching missionaries:", err);
        // Fallback to empty array if API fails
        setMissionaries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMissionaries();
  }, []);

  // This useCallback now ONLY calculates the next position and updates the style,
  // it does NOT request the next frame. The next frame is requested in the useEffect.
  const animateStep = useCallback(() => {
    currentTranslateX.current -= scrollSpeed;

    // Wrap around logic for seamless loop
    if (currentTranslateX.current <= -contentWidthRef.current) {
      currentTranslateX.current += contentWidthRef.current; // Wrap around
    }

    if (missionariesContainerRef.current) {
      missionariesContainerRef.current.style.transform = `translateX(${currentTranslateX.current}px)`;
    }
  }, [scrollSpeed, contentWidthRef]);

  // Effect for initial setup and content width calculation (runs once on mount)
  useEffect(() => {
    const container = missionariesContainerRef.current;
    if (!container || missionaries.length === 0) return;

    const calculateContentWidth = () => {
      if (container) {
        const totalDuplicatedContentWidth = container.scrollWidth;
        contentWidthRef.current = totalDuplicatedContentWidth / 3;
      }
    };

    calculateContentWidth(); // Initial calculation

    const observer = new ResizeObserver(calculateContentWidth);
    observer.observe(container);

    // Initial positioning: Ensure the animation starts from 0 only on initial mount
    currentTranslateX.current = 0;
    if (missionariesContainerRef.current) {
      missionariesContainerRef.current.style.transform = `translateX(0px)`;
    }

    return () => {
      if (observer && container) {
        observer.unobserve(container);
      }
    };
  }, [missionaries]); // Depend on missionaries to recalculate when data loads

  // Effect for managing the animation loop (start/stop based on isHovered)
  useEffect(() => {
    const loop = () => {
      animateStep(); // Call the logic to update position
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    if (!isHovered && missionaries.length > 0) {
      // Start the animation loop only if not hovered and we have missionaries
      animationFrameRef.current = requestAnimationFrame(loop);
    } else {
      // If hovered or no missionaries, cancel any existing animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }

    // Cleanup function for this useEffect
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, animateStep, missionaries.length]);

  if (loading) {
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Dedicated Missionaries
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              Meet the passionate individuals who are making a difference in
              communities across Ethiopia.
            </p>
          </div>
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-neutral-600">Loading missionaries...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (missionaries.length === 0) {
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Dedicated Missionaries
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              Meet the passionate individuals who are making a difference in
              communities across Ethiopia.
            </p>
          </div>
          <div className="text-center py-12">
            <p className="text-neutral-600">
              No missionaries available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 mb-4">
            Our Dedicated Missionaries
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Meet the passionate individuals who are making a difference in
            communities across Ethiopia.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={missionariesContainerRef}
            className="flex flex-nowrap will-change-transform"
            style={{ transition: "none" }}
          >
            {Array(3)
              .fill(null)
              .map((_, groupIndex) => (
                <div
                  key={`group-${groupIndex}`}
                  className="flex flex-nowrap shrink-0"
                >
                  {missionaries.map((missionary, index) => {
                    return (
                      <div
                        key={`${missionary.id}-${groupIndex}-${index}`}
                        className={`flex-[0_0_240px] md:flex-[0_0_280px] min-w-0 mr-4 md:mr-8`}
                      >
                        <Link href={`/missionaries/${missionary.id}`}>
                          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
                            <Image
                              src={missionary.image || "/placeholder.svg"}
                              alt={missionary.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/placeholder.svg";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                              <h3 className="text-base md:text-xl font-semibold mb-1">
                                {missionary.name}
                              </h3>
                              <p className="text-xs md:text-sm text-neutral-200">
                                {missionary.title || missionary.focus}
                              </p>
                              <p className="text-xs md:text-sm text-neutral-200 mt-1">
                                {missionary.location}
                              </p>
                              {missionary.shortBio && (
                                <p className="text-xs text-neutral-300 mt-2 line-clamp-2">
                                  {missionary.shortBio}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
