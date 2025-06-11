"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image'; // Keep using next/image for optimization
import Link from 'next/link';

interface Missionary {
  id: number;
  name: string;
  role: string;
  image: string;
  location: string; // Keep this if you need it for other pages
  bio: string; // Keep this if you need it for other pages
}

interface MissionariesSectionProps {
  missionaries: Missionary[];
}

// Helper function to create a URL-friendly slug from a string
const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/ /g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/--+/g, '-'); // Replace multiple hyphens with a single one
};

export default function MissionariesSection({ missionaries }: MissionariesSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const missionariesContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const currentTranslateX = useRef(0);
  const contentWidthRef = useRef(0);

  const scrollSpeed = 0.5; // Defines how many pixels per frame the slideshow scrolls.

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
  }, [scrollSpeed, contentWidthRef]); // Dependencies for animateStep

  // Effect for initial setup and content width calculation (runs once on mount)
  useEffect(() => {
    const container = missionariesContainerRef.current;
    if (!container) return;

    const calculateContentWidth = () => {
        if (container) {
            const totalDuplicatedContentWidth = container.scrollWidth;
            contentWidthRef.current = totalDuplicatedContentWidth / 3;
            console.log('Calculated content width (once): ', contentWidthRef.current);
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
  }, []); // Empty dependency array: runs only once on mount

  // Effect for managing the animation loop (start/stop based on isHovered)
  useEffect(() => {
    const loop = () => {
      animateStep(); // Call the logic to update position
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    if (!isHovered) {
      console.log('Animation STARTING or RESUMING. isHovered:', isHovered); // LOG
      // Start the animation loop only if not hovered
      animationFrameRef.current = requestAnimationFrame(loop);
    } else {
      console.log('Animation PAUSING. isHovered:', isHovered); // LOG
      // If hovered, cancel any existing animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null; // Clear the ref
      }
    }

    // Cleanup function for this useEffect
    return () => {
      console.log('useEffect cleanup for animation. isHovered:', isHovered); // LOG
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, animateStep]); // Depend on isHovered and animateStep (which is stable now)

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
          onMouseEnter={() => { console.log('onMouseEnter event. Setting isHovered to true'); setIsHovered(true); }}
          onMouseLeave={() => { console.log('onMouseLeave event. Setting isHovered to false'); setIsHovered(false); }}
        >
          <div
            ref={missionariesContainerRef}
            className="flex flex-nowrap will-change-transform"
            style={{ transition: 'none' }}
          >
            {Array(3).fill(null).map((_, groupIndex) => (
              <div key={`group-${groupIndex}`} className="flex flex-nowrap shrink-0">
                {missionaries.map((missionary, index) => {
                  const missionarySlug = createSlug(missionary.name);
                  return (
                    <div
                      key={`${missionary.id}-${groupIndex}-${index}`}
                      className={`flex-[0_0_240px] md:flex-[0_0_280px] min-w-0 mr-4 md:mr-8`}
                    >
                      <Link href={`/missionaries/${missionarySlug}`}>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                          <Image
                            src={missionary.image}
                            alt={missionary.name}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://placehold.co/240x320?text=Image+Load+Error';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                            <h3 className="text-base md:text-xl font-semibold mb-1">
                              {missionary.name}
                            </h3>
                            <p className="text-xs md:text-sm text-neutral-200">
                              {missionary.role}
                            </p>
                            <p className="text-xs md:text-sm text-neutral-200 mt-1">
                              {missionary.location}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 