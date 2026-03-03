"use client";

import { useState, useEffect } from "react";
import { useScrollSection } from "../hook/useScrollSection";
import {
  Github,
  Linkedin,
  Twitter,
  Menu as MenuIcon,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

export function Navbar() {
  const activeSection = useScrollSection();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check viewport size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center">
      {isMobile ? (
        <MobileNavbar 
          activeSection={activeSection} 
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
        />
      ) : (
        <DesktopNavbar activeSection={activeSection} />
      )}
    </div>
  );
}

// Original desktop navbar
function DesktopNavbar({ activeSection }: { activeSection?: string }) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl bg-background/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
          <span className="text-primary">John</span>
          <span className="text-foreground">Doe</span>
        </motion.div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "service" },
            { name: "Work", id: "work" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors duration-300 relative pb-1 ${
                activeSection === item.id 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ y: -2 }}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                  layoutId="activeNav"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <motion.button
            className="hidden sm:inline-block px-6 py-2 rounded-lg font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform"
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// Updated mobile/tablet navbar with animated menu icon
function MobileNavbar({ 
  activeSection,
  isOpen,
  setIsOpen
}: { 
  activeSection?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl md:hidden bg-background/80">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="font-bold text-xl">
            <span className="text-primary">John</span>
            <span className="text-foreground">Doe</span>
          </div>
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu overlay with animation */}
      <motion.div 
        className="fixed inset-0 z-40 overflow-hidden bg-background"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ 
          type: "spring", 
          damping: 30, 
          stiffness: 300,
          duration: 0.3 
        }}
      >
        <div className="flex flex-col pt-24 px-6 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-2 py-8">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "service" },
              { name: "Work", id: "work" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-2xl font-bold py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                transition={{ 
                  delay: isOpen ? index * 0.05 : 0,
                  duration: 0.3
                }}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Social links with animation */}
          <motion.div 
            className="mt-auto pb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="w-full px-6 py-3 rounded-lg font-semibold bg-primary text-primary-foreground mb-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
            </motion.button>

            <p className="text-sm font-medium text-muted-foreground mb-4">Connect with me</p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={index}
                    href={social.href}
                    className="p-3 rounded-lg border border-border bg-card/40 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
