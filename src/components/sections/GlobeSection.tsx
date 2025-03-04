import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
  InfoWindow,
} from "@react-google-maps/api";
import { motion } from "framer-motion";
import { Anchor, MapPin } from "lucide-react";

interface Route {
  id: number;
  name: string;
  description: string;
  coordinates: { lat: number; lng: number; name: string }[];
}

interface GlobeSectionProps {
  title?: string;
  subtitle?: string;
  routes?: Route[];
}

const GOOGLE_MAPS_API_KEY = "AIzaSyDbZ4nKdCw7X5OVGZDcGUGG_iN5adhEXNc";

const GlobeSection: React.FC<GlobeSectionProps> = ({
  title = "Global Maritime Routes",
  subtitle = "Navigating the world's oceans with precision and expertise",
  routes = [
    {
      id: 1,
      name: "Asia-Pacific Route",
      description: "Major shipping lane connecting East Asia with Oceania",
      coordinates: [
        { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
        { lat: 22.3193, lng: 114.1694, name: "Hong Kong" },
        { lat: 1.3521, lng: 103.8198, name: "Singapore" },
        { lat: -33.8688, lng: 151.2093, name: "Sydney" },
      ],
    },
    {
      id: 2,
      name: "Middle East-Europe Route",
      description: "Critical energy transport corridor through Suez Canal",
      coordinates: [
        { lat: 25.2048, lng: 55.2708, name: "Dubai" },
        { lat: 31.2001, lng: 29.9187, name: "Alexandria" },
        { lat: 37.9838, lng: 23.7275, name: "Athens" },
        { lat: 41.9028, lng: 12.4964, name: "Rome" },
        { lat: 51.5074, lng: -0.1278, name: "London" },
      ],
    },
    {
      id: 3,
      name: "Transatlantic Route",
      description: "Historic shipping lane connecting Europe and Americas",
      coordinates: [
        { lat: 51.5074, lng: -0.1278, name: "London" },
        { lat: 40.7128, lng: -74.006, name: "New York" },
        { lat: 25.7617, lng: -80.1918, name: "Miami" },
        { lat: 9.9281, lng: -84.0907, name: "Panama" },
      ],
    },
  ],
}) => {
  const [activeRoute, setActiveRoute] = useState<Route | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<{
    lat: number;
    lng: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    if (map && activeRoute) {
      const bounds = new google.maps.LatLngBounds();
      activeRoute.coordinates.forEach(({ lat, lng }) =>
        bounds.extend({ lat, lng })
      );
      map.fitBounds(bounds);
    }
  }, [map, activeRoute]);

  return (
    <section id="globe" className="relative overflow-hidden bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">{title}</h2>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Google Map Visualization */}
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              center={activeRoute?.coordinates[0] || { lat: 0, lng: 0 }}
              zoom={3}
              onLoad={(map) => setMap(map)}
            >
              {activeRoute && (
                <>
                  {/* Markers for each coordinate */}
                  {activeRoute.coordinates.map((coord, idx) => (
                    <Marker
                      key={`${activeRoute.id}-${idx}`}
                      position={coord}
                      onClick={() => setSelectedMarker(coord)}
                    />
                  ))}

                  {/* InfoWindow for selected marker */}
                  {selectedMarker && (
                    <InfoWindow
                      position={selectedMarker}
                      onCloseClick={() => setSelectedMarker(null)}
                    >
                      <div>
                        <h3 className="font-bold text-lg">{selectedMarker.name}</h3>
                        <p className="text-sm">
                          Coordinates: {selectedMarker.lat.toFixed(4)},{" "}
                          {selectedMarker.lng.toFixed(4)}
                        </p>
                      </div>
                    </InfoWindow>
                  )}

                  {/* Polyline to connect the route points */}
                  <Polyline
                    path={activeRoute.coordinates}
                    options={{
                      strokeColor: "#FF0000",
                      strokeOpacity: 0.8,
                      strokeWeight: 3,
                    }}
                  />
                </>
              )}
            </GoogleMap>
          </LoadScript>

          {/* Routes Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-lg p-6 shadow-lg w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">
              Key Shipping Routes
            </h3>
            <div className="space-y-4">
              {routes.map((route) => (
                <motion.div
                  key={route.id}
                  initial={{ x: -10, opacity: 0.8 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className={`p-4 rounded-md cursor-pointer transition-colors ${activeRoute?.id === route.id
                    ? "bg-slate-700 border-l-4 border-teal-400"
                    : "hover:bg-slate-700"
                    }`}
                  onClick={() => setActiveRoute(route)}
                >
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-400 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {route.name}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {route.description}
                      </p>
                      {activeRoute?.id === route.id && (
                        <div className="mt-2 text-xs text-teal-300">
                          {route.coordinates.length} key points on this route:
                          <ul className="list-disc pl-4">
                            {route.coordinates.map((coord, idx) => (
                              <li key={idx}>{coord.name}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full text-slate-900 fill-current"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default GlobeSection;