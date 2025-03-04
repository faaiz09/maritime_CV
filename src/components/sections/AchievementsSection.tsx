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
import safety from "@/assets/img/safety_excellence_award.png"

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
      image:safety,
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
    <section className="py-16 bg-slate-900 text-white" id="achievements">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">{title}</h2>
          <p className="text-xl text-teal-300">{subtitle}</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {achievements.map((achievement) => (
                <CarouselItem key={achievement.id} className="p-4">
                  <Card className="bg-slate-800 border-2 border-yellow-500 overflow-hidden shadow-lg">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {achievement.image && (
                          <div className="md:w-1/2 h-64 md:h-auto relative">
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-slate-900 p-2 rounded-full">
                              {achievement.icon}
                            </div>
                          </div>
                        )}
                        <div className="p-6 md:w-1/2 flex flex-col justify-center">
                          <div className="text-yellow-500 text-sm font-semibold mb-2">
                            {achievement.year}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-300">{achievement.description}</p>
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
                  className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-yellow-500 w-6" : "bg-gray-500"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselPrevious className="-left-4 md:-left-12 bg-slate-800 text-white border-yellow-500 hover:bg-slate-700" />
            <CarouselNext className="-right-4 md:-right-12 bg-slate-800 text-white border-yellow-500 hover:bg-slate-700" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
