import React from "react";
import { Anchor, Ship, Award, Calendar } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      title: "Chief Officer",
      company: "Maritime Shipping Co.",
      period: "2015 - Present",
      location: "International Waters",
      description: [
        "Led a crew of 25 officers and ratings on VLGC vessels",
        "Managed cargo operations for liquefied petroleum gas transport",
        "Implemented safety protocols resulting in zero incidents for 5 consecutive years",
        "Navigated through challenging international waters and weather conditions",
      ],
      icon: <Ship className="h-5 w-5" />,
    },
    {
      id: "exp2",
      title: "First Officer",
      company: "Ocean Transport Ltd.",
      period: "2010 - 2015",
      location: "Asia-Pacific Routes",
      description: [
        "Served as second-in-command on large commercial vessels",
        "Coordinated navigation and cargo operations across Asia-Pacific routes",
        "Supervised deck crew operations and maintenance activities",
        "Maintained detailed logs and documentation for regulatory compliance",
      ],
      icon: <Anchor className="h-5 w-5" />,
    },
    {
      id: "exp3",
      title: "Second Officer",
      company: "Global Maritime Services",
      period: "2005 - 2010",
      location: "Middle East and European Routes",
      description: [
        "Responsible for navigational watch duties on international voyages",
        "Maintained and updated all navigational charts and publications",
        "Assisted in planning voyage routes and fuel consumption optimization",
        "Participated in emergency response drills and safety training programs",
      ],
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      id: "exp4",
      title: "Third Officer",
      company: "International Shipping Inc.",
      period: "2000 - 2005",
      location: "Global Routes",
      description: [
        "Performed navigational watch duties under supervision of senior officers",
        "Maintained safety equipment and conducted regular inspections",
        "Assisted in cargo loading and discharge operations",
        "Participated in crew training and development programs",
      ],
      icon: <Award className="h-5 w-5" />,
    },
  ],
  title = "Professional Experience",
  subtitle = "Over 30 years of maritime leadership experience across global shipping routes",
}: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gold">{title}</h2>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-navy-800 rounded-lg p-6 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {experiences.map((experience) => (
              <AccordionItem
                key={experience.id}
                value={experience.id}
                className="border-b border-navy-700"
              >
                <AccordionTrigger className="hover:bg-navy-700 px-4 rounded-md hover:no-underline">
                  <div className="flex items-center">
                    <div className="bg-teal-700 p-2 rounded-full mr-4">
                      {experience.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-gold">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {experience.company} | {experience.period}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <div className="pl-14">
                    <p className="text-teal-300 mb-2">{experience.location}</p>
                    <ul className="list-disc pl-5 space-y-2">
                      {experience.description.map((item, index) => (
                        <li key={index} className="text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
