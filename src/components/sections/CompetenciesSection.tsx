import React from "react";
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
      title: "Navigation & Route Planning",
      description:
        "Expert in celestial navigation, electronic chart systems, and optimal route planning for all weather conditions.",
      icon: <Navigation className="h-10 w-10" />,
      color: "from-blue-500 to-teal-400",
    },
    {
      id: 2,
      title: "Maritime Leadership",
      description:
        "Proven ability to lead diverse crews in high-pressure situations with clear communication and decisive action.",
      icon: <Users className="h-10 w-10" />,
      color: "from-purple-500 to-indigo-400",
    },
    {
      id: 3,
      title: "Safety Management",
      description:
        "Comprehensive knowledge of maritime safety protocols, emergency procedures, and risk assessment methodologies.",
      icon: <Shield className="h-10 w-10" />,
      color: "from-red-500 to-orange-400",
    },
    {
      id: 4,
      title: "Cargo Operations",
      description:
        "Specialized in handling liquid cargo operations, including loading, discharge, and monitoring of gas carriers.",
      icon: <BarChart className="h-10 w-10" />,
      color: "from-amber-500 to-yellow-400",
    },
    {
      id: 5,
      title: "Technical Systems",
      description:
        "Proficient with vessel propulsion systems, auxiliary machinery, and integrated bridge technologies.",
      icon: <Wrench className="h-10 w-10" />,
      color: "from-gray-600 to-gray-400",
    },
    {
      id: 6,
      title: "Maritime Regulations",
      description:
        "In-depth knowledge of SOLAS, MARPOL, STCW, and other international maritime conventions and regulations.",
      icon: <BookOpen className="h-10 w-10" />,
      color: "from-green-500 to-emerald-400",
    },
    {
      id: 7,
      title: "Vessel Maneuvering",
      description:
        "Expert in handling large vessels in challenging conditions, including port approaches and confined waters.",
      icon: <Compass className="h-10 w-10" />,
      color: "from-cyan-500 to-blue-400",
    },
    {
      id: 8,
      title: "Crisis Management",
      description:
        "Experienced in emergency response, including firefighting, collision avoidance, and evacuation procedures.",
      icon: <Anchor className="h-10 w-10" />,
      color: "from-rose-500 to-pink-400",
    },
  ],
  title = "Core Competencies",
  subtitle = "Specialized maritime skills developed over decades of seafaring experience",
}: CompetenciesSectionProps) => {
  return (
    <section id="competencies" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gold-500">{title}</h2>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((competency) => (
            <motion.div
              key={competency.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: competency.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 180 }}
              className="group perspective"
            >
              <div className="relative h-full w-full transition-all duration-500 preserve-3d">
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden rounded-lg bg-navy-800 p-6 shadow-lg border-2 border-transparent hover:border-gold-500 transition-colors">
                  <div
                    className={`mb-4 inline-flex rounded-full p-3 bg-gradient-to-br ${competency.color}`}
                  >
                    {competency.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {competency.title}
                  </h3>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rounded-lg bg-navy-700 p-6 shadow-lg border-2 border-gold-500 [transform:rotateY(180deg)]">
                  <p className="text-gray-200">{competency.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative wave effect at the bottom */}
      <div className="relative h-16 mt-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#0a192f"
              fillOpacity="1"
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,128C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
