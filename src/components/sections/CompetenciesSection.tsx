import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Anchor,
  Shield,
  Wrench,
  Navigation,
  BarChart,
  BookOpen,
  Users,
} from "lucide-react";

interface Competency {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface CompetenciesSectionProps {
  competencies?: Competency[];
  title?: string;
  subtitle?: string;
}

const CompetenciesSection = ({
  competencies = [
    {
      id: 1,
      title: "Shipping Operations",
      description: "Expert in maritime operations, fleet management, LPG terminal leadership, and logistics coordination, especially on gas carriers and specialized vessels.",
      icon: <Navigation className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "General Administration",
      description: "Strong capabilities in holding review meetings, monitoring project progress, and ensuring timely completion and delivery of projects.",
      icon: <Users className="h-10 w-10" />,
      color: "from-purple-500 to-indigo-400",
    },
    {
      id: 3,
      title: "Client Relationship Management",
      description: "Ensure highly productive relationships and partnerships for the benefit of the organization.",
      icon: <Shield className="h-10 w-10" />,
      color: "from-red-500 to-orange-400",
    },
    {
      id: 4,
      title: "Navigating Operations",
      description: "Expert in vessel navigation, route planning, and safe passage through international waters.",
      icon: <BarChart className="h-10 w-10" />,
      color: "from-amber-500 to-yellow-400",
    },
    {
      id: 5,
      title: "Charter Party Coordination",
      description: "Skilled in managing charter party agreements and ensuring compliance with contractual obligations.",
      icon: <Wrench className="h-10 w-10" />,
      color: "from-gray-600 to-gray-400",
    },
    {
      id: 6,
      title: "Fuel Saving Initiatives",
      description: "Implement fuel optimization strategies that result in significant cost savings without compromising operational safety or performance.",
      icon: <BookOpen className="h-10 w-10" />,
      color: "from-green-500 to-emerald-400",
    },
    {
      id: 7,
      title: "Operations Management",
      description: "Set goals, monitor work, and evaluate results to ensure departmental and organizational objectives are met.",
      icon: <Compass className="h-10 w-10" />,
      color: "from-cyan-500 to-blue-400",
    },
    {
      id: 8,
      title: "Team Building & Leadership",
      description: "Adept at building and maintaining high-performance multinational teams, cultivating a safety-first culture.",
      icon: <Anchor className="h-10 w-10" />,
      color: "from-rose-500 to-pink-400",
    },
  ],
  title = "Core Competencies",
  subtitle = "Specialized maritime skills developed over decades of seafaring experience",
}: CompetenciesSectionProps) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCardFlip = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const isFlipped = (id: number) => flippedCards.includes(id);

  return (
    <section id="competencies" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">{title}</h2>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(0.8, index * 0.1) }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => toggleCardFlip(competency.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleCardFlip(competency.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={isFlipped(competency.id)}
              aria-label={`${competency.title} - Click to flip card for description`}
            >
              <div
                className="relative w-full min-h-[220px] aspect-[4/3] transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped(competency.id)
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 rounded-lg bg-slate-800 p-6 shadow-lg border-2 border-transparent hover:border-yellow-500 transition-colors flex flex-col justify-center items-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div
                    className={`mb-4 inline-flex rounded-full p-3 bg-gradient-to-br ${competency.color}`}
                  >
                    {competency.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">
                    {competency.title}
                  </h3>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 rounded-lg bg-slate-700 p-6 shadow-lg border-2 border-yellow-500 flex justify-center items-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-gray-200 text-center">
                    {competency.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Remove wave overlap issue */}
      <div className="relative h-16 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full text-slate-800 fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default CompetenciesSection;
