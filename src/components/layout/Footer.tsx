import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Anchor,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "w-full bg-navy-900 text-white py-8 px-4 md:px-8 lg:px-12",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gold-500 flex items-center gap-2">
              <Anchor className="h-5 w-5" /> Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span>captain.sarfaraz@maritime.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span>Maritime Professional, Global</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gold-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-teal-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-teal-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#competencies"
                  className="hover:text-teal-400 transition-colors"
                >
                  Competencies
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="hover:text-teal-400 transition-colors"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-teal-400 transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gold-500">Connect With Me</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-transparent hover:bg-white/10 text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-transparent hover:bg-white/10 text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-transparent hover:bg-white/10 text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-transparent hover:bg-white/10 text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
            <div className="pt-4">
              <Button
                variant="outline"
                className="border-teal-400 text-white hover:bg-teal-400/20"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm">
          <p>© {currentYear} Capt. Sarfaraz Akhtar. All rights reserved.</p>
          <p className="mt-2 text-white/70">
            Designed with <span className="text-red-500">♥</span> for maritime
            professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
