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
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Globe,
  Church,
  BookOpen,
  Heart,
  Clipboard,
  Map,
  Film,
} from "lucide-react";

interface Strategy {
  title: string;
  description: string;
  icon: React.ReactNode;
  keyPoints: string[];
  slug: string;
}

interface StrategiesSectionProps {
  openDonationModal: (
    type: "project" | "missionary",
    title: string,
    description?: string
  ) => void;
}

const iconMap = {
  Users,
  Globe,
  Church,
  BookOpen,
  Heart,
  Clipboard,
  Map,
  Film,
};

export default function StrategiesSection({
  openDonationModal,
}: StrategiesSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [strategies, setStrategies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const strategiesContainerRef = useRef<HTMLDivElement>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentTranslateX = useRef(0);
  const cardWidthWithMargin = useRef(0);
  const totalStrategiesWidth = useRef(0);

  const slideDuration = 1000;
  const pauseDuration = 3000;

  const calculateDimensions = useCallback(() => {
    if (!strategiesContainerRef.current) return;

    const firstCard = strategiesContainerRef.current.querySelector(
      ".group.flex-\\[0_0_400px\\]"
    );
    if (firstCard) {
      const computedStyle = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(computedStyle.marginRight);
      cardWidthWithMargin.current = firstCard.clientWidth + marginRight;
    }

    const firstStrategyGroup = strategiesContainerRef.current.querySelector(
      ".flex-nowrap.shrink-0"
    );
    if (firstStrategyGroup) {
      totalStrategiesWidth.current = firstStrategyGroup.scrollWidth;
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/admin/strategies")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch strategies");
        const data = await res.json();
        setStrategies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading || strategies.length === 0) return;

    calculateDimensions();
    const observer = new ResizeObserver(calculateDimensions);
    if (strategiesContainerRef.current) {
      observer.observe(strategiesContainerRef.current);
    }

    currentTranslateX.current = 0;
    if (strategiesContainerRef.current) {
      strategiesContainerRef.current.style.transform = `translateX(0px)`;
      strategiesContainerRef.current.style.transition = `none`;
    }

    return () => {
      if (strategiesContainerRef.current) {
        observer.unobserve(strategiesContainerRef.current);
      }
    };
  }, [calculateDimensions, strategies, loading]);

  useEffect(() => {
    if (loading || strategies.length === 0) return;

    const startSlide = () => {
      if (
        isHovered ||
        cardWidthWithMargin.current === 0 ||
        totalStrategiesWidth.current === 0
      ) {
        animationTimeoutRef.current = setTimeout(startSlide, 100);
        return;
      }

      const container = strategiesContainerRef.current;
      if (!container) return;

      const nextTranslateX =
        currentTranslateX.current - cardWidthWithMargin.current;

      container.style.transition = `transform ${
        slideDuration / 1000
      }s ease-in-out`;
      container.style.transform = `translateX(${nextTranslateX}px)`;

      animationTimeoutRef.current = setTimeout(() => {
        currentTranslateX.current = nextTranslateX;

        if (
          Math.abs(currentTranslateX.current) >= totalStrategiesWidth.current
        ) {
          container.style.transition = "none";
          currentTranslateX.current += totalStrategiesWidth.current;
          container.style.transform = `translateX(${currentTranslateX.current}px)`;
          void container.offsetHeight;
          container.style.transition = `transform ${
            slideDuration / 1000
          }s ease-in-out`;
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
  }, [
    isHovered,
    slideDuration,
    pauseDuration,
    calculateDimensions,
    strategies,
    loading,
  ]);

  return (
    <section className="py-12 md:py-20 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 mb-4">
            Our Mission Strategies
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Explore the core strategies that drive our mission to make a lasting
            impact.
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <div
            className="relative overflow-hidden w-full mx-auto max-w-[1264px]"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <div
              ref={strategiesContainerRef}
              className="flex flex-nowrap will-change-transform"
              style={{ transition: "none" }}
            >
              {Array(3)
                .fill(null)
                .map((_, groupIndex) => (
                  <div
                    key={`strategy-group-${groupIndex}`}
                    className="flex flex-nowrap shrink-0"
                  >
                    {strategies.map((strategy, index) => (
                      <Card
                        key={`${strategy.slug}-${groupIndex}-${index}`}
                        className="flex-[0_0_400px] min-w-0 mr-6 md:mr-8 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-neutral-200 cursor-pointer group transform hover:-translate-y-1"
                      >
                        <Link href={`/strategies/${strategy.slug}`}>
                          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                            <div className="p-3 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                              {(() => {
                                const Icon =
                                  iconMap[
                                    strategy.icon as keyof typeof iconMap
                                  ];
                                return Icon ? (
                                  <Icon className="w-8 h-8" />
                                ) : null;
                              })()}
                            </div>
                            <CardTitle className="text-xl text-neutral-800 group-hover:text-primary-600 transition-colors leading-tight">
                              {strategy.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-neutral-600 line-clamp-3 mb-4">
                              {strategy.description}
                            </CardDescription>
                            <h4 className="font-medium text-neutral-700 mb-2">
                              Key Activities:
                            </h4>
                            <ul className="space-y-1 text-sm text-neutral-600">
                              {(strategy.activities || strategy.keyPoints || [])
                                .slice(0, 3)
                                .map((point: string, pointIndex: number) => (
                                  <li
                                    key={pointIndex}
                                    className="flex items-center"
                                  >
                                    <ArrowRight className="w-3 h-3 mr-2 text-primary-500 flex-shrink-0" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              {(strategy.activities || strategy.keyPoints || [])
                                .length > 3 && (
                                <li className="text-sm text-primary-600 font-medium mt-2">
                                  +
                                  {(
                                    strategy.activities ||
                                    strategy.keyPoints ||
                                    []
                                  ).length - 3}{" "}
                                  more activities
                                </li>
                              )}
                            </ul>
                          </CardContent>
                        </Link>
                        <div className="p-6 pt-0">
                          <Button
                            asChild
                            className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg"
                          >
                            <Link href={`/strategies/${strategy.slug}`}>
                              Learn More
                            </Link>
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
