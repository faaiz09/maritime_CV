import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Anchor, MapPin } from "lucide-react";

interface Route {
  id: number;
  name: string;
  description: string;
  coordinates: { lat: number; lng: number }[];
}

interface GlobeSectionProps {
  title?: string;
  subtitle?: string;
  routes?: Route[];
}

const GlobeSection = ({
  title = "Global Maritime Routes",
  subtitle = "Navigating the world's oceans with precision and expertise",
  routes = [
    {
      id: 1,
      name: "Asia-Pacific Route",
      description: "Major shipping lane connecting East Asia with Oceania",
      coordinates: [
        { lat: 35.6762, lng: 139.6503 }, // Tokyo
        { lat: 22.3193, lng: 114.1694 }, // Hong Kong
        { lat: 1.3521, lng: 103.8198 }, // Singapore
        { lat: -33.8688, lng: 151.2093 }, // Sydney
      ],
    },
    {
      id: 2,
      name: "Middle East-Europe Route",
      description: "Critical energy transport corridor through Suez Canal",
      coordinates: [
        { lat: 25.2048, lng: 55.2708 }, // Dubai
        { lat: 31.2001, lng: 29.9187 }, // Alexandria
        { lat: 37.9838, lng: 23.7275 }, // Athens
        { lat: 41.9028, lng: 12.4964 }, // Rome
        { lat: 51.5074, lng: -0.1278 }, // London
      ],
    },
    {
      id: 3,
      name: "Transatlantic Route",
      description: "Historic shipping lane connecting Europe and Americas",
      coordinates: [
        { lat: 51.5074, lng: -0.1278 }, // London
        { lat: 40.7128, lng: -74.006 }, // New York
        { lat: 25.7617, lng: -80.1918 }, // Miami
        { lat: 9.9281, lng: -84.0907 }, // Panama
      ],
    },
  ],
}: GlobeSectionProps) => {
  const [activeRoute, setActiveRoute] = useState<Route | null>(null);
  const [rotation, setRotation] = useState(0);
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Simulated 3D globe with CSS
  return (
    <section id="globe" className="relative overflow-hidden bg-navy-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gold-500">{title}</h2>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Globe Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 flex justify-center"
          >
            <div
              ref={globeRef}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-900 shadow-[0_0_40px_rgba(0,200,255,0.3)] overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #1a365d 0%, #0a192f 70%)",
              }}
            >
              {/* Continents */}
              <div
                className="absolute inset-0 bg-contain bg-no-repeat opacity-70"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&q=80')",
                  transform: `rotateY(${rotation}deg)`,
                  transformStyle: "preserve-3d",
                }}
              ></div>

              {/* Route Points */}
              {routes.map((route) =>
                route.coordinates.map((coord, idx) => {
                  // Convert lat/lng to x/y position on the globe surface
                  // This is a simplified version - real 3D would need proper projection
                  const phi = ((90 - coord.lat) * Math.PI) / 180;
                  const theta = ((coord.lng + 180) * Math.PI) / 180;

                  // Adjust based on current rotation
                  const adjustedTheta = theta - (rotation * Math.PI) / 180;

                  // Calculate position
                  const x = 50 + 40 * Math.sin(phi) * Math.cos(adjustedTheta);
                  const y = 50 + 40 * Math.cos(phi);
                  const z = 40 * Math.sin(phi) * Math.sin(adjustedTheta);

                  // Only show points on the visible side of the globe
                  const isVisible = z > -10;

                  return isVisible ? (
                    <div
                      key={`${route.id}-${idx}`}
                      className="absolute h-2 w-2 rounded-full bg-gold-500"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        opacity: (z + 10) / 50,
                        transform: `scale(${(z + 40) / 40})`,
                      }}
                    />
                  ) : null;
                }),
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-navy-700 rounded-full blur-md opacity-30"></div>
            <Anchor className="absolute top-4 right-4 h-8 w-8 text-teal-400 opacity-70" />
          </motion.div>

          {/* Routes Information */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-navy-700 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-gold-500">
                Key Shipping Routes
              </h3>
              <div className="space-y-4">
                {routes.map((route) => (
                  <motion.div
                    key={route.id}
                    initial={{ x: -10, opacity: 0.8 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className={`p-4 rounded-md cursor-pointer transition-colors ${activeRoute?.id === route.id ? "bg-navy-600" : "hover:bg-navy-600"}`}
                    onClick={() => setActiveRoute(route)}
                  >
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-teal-400 mt-1 mr-2" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {route.name}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {route.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
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
    </section>
  );
};

export default GlobeSection;
