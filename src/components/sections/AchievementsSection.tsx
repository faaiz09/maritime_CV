import React, { useState, useEffect } from "react";
import { Trophy, Award, Star, Medal } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: React.ReactNode;
  image?: string;
}

interface AchievementsSectionProps {
  achievements?: Achievement[];
  title?: string;
  subtitle?: string;
}

const AchievementsSection = ({
  achievements = [
    {
      id: 1,
      title: "Master Mariner License",
      description:
        "Achieved the highest level of maritime certification after years of dedicated service and study.",
      year: "2005",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      image:
        "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?w=800&q=80",
    },
    {
      id: 2,
      title: "Safety Excellence Award",
      description:
        "Recognized for maintaining exceptional safety standards across multiple voyages.",
      year: "2012",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
    },
    {
      id: 3,
      title: "Leadership Recognition",
      description:
        "Honored for outstanding leadership during critical maritime operations.",
      year: "2018",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
    },
    {
      id: 4,
      title: "Environmental Stewardship",
      description:
        "Awarded for implementing eco-friendly practices in maritime operations.",
      year: "2020",
      icon: <Medal className="h-8 w-8 text-yellow-500" />,
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    },
  ],
  title = "Achievements & Recognition",
  subtitle = "Celebrating excellence in maritime leadership",
}: AchievementsSectionProps) => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section
      className="py-16 bg-navy-900 bg-opacity-95 text-white"
      id="achievements"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gold-500">{title}</h2>
          <p className="text-xl text-teal-300">{subtitle}</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
              align: "center",
            }}
          >
            <CarouselContent>
              {achievements.map((achievement) => (
                <CarouselItem key={achievement.id}>
                  <Card className="bg-navy-800 border-2 border-gold-500 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {achievement.image && (
                          <div className="md:w-1/2 h-64 md:h-auto relative">
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-navy-900 p-2 rounded-full">
                              {achievement.icon}
                            </div>
                          </div>
                        )}
                        <div className="p-6 md:w-1/2 flex flex-col justify-center">
                          <div className="text-gold-500 text-sm font-semibold mb-2">
                            {achievement.year}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-300">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8 gap-2">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-gold-500 w-6" : "bg-gray-500"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselPrevious className="-left-4 md:-left-12 bg-navy-800 text-white border-gold-500 hover:bg-navy-700" />
            <CarouselNext className="-right-4 md:-right-12 bg-navy-800 text-white border-gold-500 hover:bg-navy-700" />
          </Carousel>
        </div>
      </div>

      {/* Decorative wave effect at the bottom */}
      <div className="w-full h-16 mt-12 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full text-navy-800 fill-current"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
};

export default AchievementsSection;
