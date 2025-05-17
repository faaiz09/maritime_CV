import React from "react";
import { Ship } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  icon: React.ReactNode;
}

interface ExperienceSectionProps {
  experiences?: ExperienceItem[];
  title?: string;
  subtitle?: string;
}

const ExperienceSection = ({
  experiences = [
    {
      id: "exp1",
      title: "Master Mariner",
      company: "Anglo-Eastern Ship Management",
      period: "January 2003 - Present",
      location: "Gas Carrier (LPG) Operations",
      description: [
        "Led the operation of Very Large Gas Carriers (VLGCs) for renowned global owners and charterers, including Petredec, Shell, Equinor, Yo Yo Line, NYK, and Kumiai Navigation",
        "Spearheaded new vessel deliveries, overseeing coordination between shipyards, owners, and classification societies",
        "Responsible for cargo stowage, ship's accounts, and crew wages management",
        "Accountable for all vessel certification and documentation",
        "Established communication with shore authorities on commercial and operational matters",
        "Ensured safe operation of the vessel and monitored crew compliance with company and legal guidelines",
        "Maintained all on-board equipment, including machinery, engines, and safety equipment",
        "Administered daily vessel progress, monitored speed, engine pressure, and water depths",
        "Adhered to budgets and managed fuel, supplies, and equipment procurement",
        "Implemented fuel-saving initiatives resulting in significant cost savings",
      ],
      icon: <Ship className="h-5 w-5" />,
    }
  ],
  title = "Professional Experience",
  subtitle = "Results-oriented and Strategic Maritime Operations Leader with well-rounded ownership and decision-making skills; over 30 years of experience in the global shipping industry. Currently pursuing an MBA at IIM Mumbai, enhancing strategic and commercial acumen in maritime logistics and supply chain management",
}: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gold">{title}</h2>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-navy-800 rounded-lg p-8 shadow-lg border-l-4 border-gold-500"
          >
            <div className="flex items-center mb-6">
              <div className="bg-teal-700 p-3 rounded-full mr-4">
                {experiences[0].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gold">
                  {experiences[0].title}
                </h3>
                <p className="text-lg text-teal-300">
                  {experiences[0].company} | {experiences[0].period}
                </p>
                <p className="text-gray-300">{experiences[0].location}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences[0].description.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="h-2 w-2 rounded-full bg-teal-400 mt-2 mr-3"></div>
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
