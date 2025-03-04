import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
}

const ContactSection = ({
  title = "Get In Touch",
  subtitle = "Reach out for maritime consultations, speaking engagements, or professional inquiries",
  contactInfo = {
    email: "captsarfaraz@gmail.com",
    phone: "+91-9819087186",
    location: "Available for global maritime assignments",
  },
}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gold-500">{title}</h2>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-navy-800 rounded-lg p-8 shadow-lg border-l-4 border-gold-500"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-navy-700 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Email</p>
                  <p className="text-lg font-medium">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-navy-700 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Phone</p>
                  <p className="text-lg font-medium">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-navy-700 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Location</p>
                  <p className="text-lg font-medium">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-navy-700 rounded-lg border border-navy-600">
              <h4 className="text-lg font-semibold mb-3 text-gold-400">
                Available For:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teal-400 mr-2"></div>
                  <span>Maritime Consultations</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teal-400 mr-2"></div>
                  <span>Leadership Training</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teal-400 mr-2"></div>
                  <span>Speaking Engagements</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teal-400 mr-2"></div>
                  <span>Maritime Safety Workshops</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-navy-800 rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-navy-700 border-navy-600 text-white placeholder:text-gray-400 focus:border-teal-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-navy-700 border-navy-600 text-white placeholder:text-gray-400 focus:border-teal-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  className="bg-navy-700 border-navy-600 text-white placeholder:text-gray-400 focus:border-teal-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[150px] bg-navy-700 border-navy-600 text-white placeholder:text-gray-400 focus:border-teal-400"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
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
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,128C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
