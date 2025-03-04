import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Anchor } from "lucide-react";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Competencies", href: "#competencies" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        {
          "bg-transparent": transparent && !scrolled,
          "bg-navy-900/95 shadow-md backdrop-blur-sm": !transparent || scrolled,
        },
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Anchor className="h-8 w-8 text-gold-500 mr-2" />
          <span className="text-xl font-bold text-white">Capt. Sarfaraz</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-gold-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="md:hidden text-white hover:bg-navy-800"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-sm shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gold-400 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
