import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  location: string;
  description: string;
  icon: React.ReactNode;
}

interface EducationSectionProps {
  educationList?: Education[];
  title?: string;
  subtitle?: string;
}

const EducationSection = ({
  educationList = [
    {
      id: 1,
      degree: "Master Mariner License",
      institution: "International Maritime Organization",
      year: "2005",
      location: "London, UK",
      description:
        "Highest level professional qualification for seafarers in the Merchant Navy, demonstrating competence to command any ship in any waters.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      id: 2,
      degree: "Bachelor of Science in Nautical Science",
      institution: "Maritime Academy of Asia and the Pacific",
      year: "1998",
      location: "Manila, Philippines",
      description:
        "Comprehensive education in navigation, ship operations, maritime law, and leadership with practical training on training vessels.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      id: 3,
      degree: "Advanced Certificate in Maritime Safety",
      institution: "World Maritime University",
      year: "2002",
      location: "Malmö, Sweden",
      description:
        "Specialized training in maritime safety protocols, risk assessment, and emergency management procedures.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      id: 4,
      degree: "Diploma in Maritime Engineering",
      institution: "Singapore Maritime Academy",
      year: "1995",
      location: "Singapore",
      description:
        "Technical education focused on ship systems, propulsion, and maintenance with hands-on workshop experience.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ],
  title = "Education & Certifications",
  subtitle = "Academic qualifications and professional certifications in maritime excellence",
}: EducationSectionProps) => {
  return (
    <section id="education" className="py-20 bg-navy-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gold-500">{title}</h2>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-gold-500 via-teal-400 to-navy-700 transform -translate-x-1/2"></div>

          {/* Education Items */}
          {educationList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:pr-8"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-0 top-6 h-4 w-4 rounded-full bg-gold-500 shadow-glow-gold transform md:-translate-x-1/2"></div>

              {/* Content Card */}
              <div className="ml-8 md:ml-0 rounded-lg bg-navy-700 p-6 shadow-lg border-l-4 border-gold-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="mr-3 rounded-full bg-navy-600 p-2">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gold-400">
                    {item.degree}
                  </h3>
                </div>

                <div className="mb-3">
                  <p className="text-lg font-medium text-white">
                    {item.institution}
                  </p>
                  <div className="flex flex-wrap items-center text-sm text-gray-300">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1 text-teal-400" />
                      <span>{item.year}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-teal-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300">{item.description}</p>
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
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
