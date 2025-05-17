import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Anchor } from "lucide-react";
import dp from "@/assets/img/seafearer.png";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  profileImage?: string;
}

const HeroSection = ({
  title = "Capt. Sarfaraz Akhtar",
  subtitle = "VLGC & Tanker Operations | Fleet Management Systems | Compliance Management | Team Leadership & Safety Culture | Audits & Inspections",
  backgroundImage = "https://images.unsplash.com/photo-1566902249079-7614cad68d43?w=1200&q=80",
  profileImage = dp,
}: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-navy-900 text-white"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: "brightness(0.4)",
        }}
      />

      {/* Wave Overlay */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#0a192f"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-gold-500 bg-navy-800 shadow-lg md:h-48 md:w-48">
            <img
              src={profileImage}
              alt="Captain Sarfaraz"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-gold-500 md:text-6xl">
            {title}
          </h1>
          <div className="flex items-center justify-center">
            <Anchor className="mr-2 h-6 w-6 text-teal-400" />
            <p className="text-xl text-teal-300 md:text-2xl">{subtitle}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8"
        >
          <Button
            size="lg"
            className="bg-gold-500 text-navy-900 hover:bg-gold-600"
            onClick={() => {
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore My Journey
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Animated Ship */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: window.innerWidth + 100, opacity: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
          className="absolute bottom-24 left-0"
        >
          <div className="text-white opacity-30">
            <svg
              width="100"
              height="40"
              viewBox="0 0 100 40"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M95,10 L85,10 L85,5 L95,5 L95,10 Z M85,15 L75,15 L75,10 L85,10 L85,15 Z M75,20 L65,20 L65,15 L75,15 L75,20 Z M65,25 L55,25 L55,20 L65,20 L65,25 Z M55,30 L5,30 L5,25 L55,25 L55,30 Z M100,35 L0,35 L0,30 L100,30 L100,35 Z" />
            </svg>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-8 w-8 text-gold-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
