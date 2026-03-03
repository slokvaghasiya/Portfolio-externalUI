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
    <div className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: 'hsl(var(--background))/0.8',
        borderColor: 'hsl(var(--border))',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span style={{ color: 'hsl(var(--primary))' }}>John</span>
          <span style={{ color: 'hsl(var(--foreground))' }}>Doe</span>
        </div>

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
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative font-medium transition-all duration-300 group"
              style={{
                color: activeSection === item.id ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'hsl(var(--foreground))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = activeSection === item.id ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))';
              }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            className="hidden sm:inline-block px-6 py-2 rounded-lg font-medium transition-all duration-300"
            style={{
              background: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 20px 30px rgba(6, 182, 212, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
          </button>
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
      <div className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl md:hidden"
        style={{
          background: 'hsl(var(--background))/0.8',
          borderColor: 'hsl(var(--border))',
        }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="font-bold text-xl">
            <span style={{ color: 'hsl(var(--primary))' }}>John</span>
            <span style={{ color: 'hsl(var(--foreground))' }}>Doe</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            style={{ color: 'hsl(var(--foreground))' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay with animation */}
      <motion.div 
        className="fixed inset-0 z-40 overflow-hidden"
        style={{ background: 'hsl(var(--background))' }}
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
                className="text-left text-2xl font-bold py-3 px-4 rounded-lg transition-all duration-300"
                style={{
                  color: activeSection === item.id ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
                  background: activeSection === item.id ? 'hsl(var(--primary))/0.1' : 'transparent',
                }}
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
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full px-6 py-3 rounded-lg font-medium mb-8 transition-all duration-300"
              style={{
                background: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Let's Talk
            </button>

            <div style={{ color: 'hsl(var(--muted-foreground))' }} className="text-sm font-medium mb-4">Connect with me</div>
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
                    className="p-3 rounded-lg border transition-all duration-300"
                    style={{
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--muted-foreground))',
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                      e.currentTarget.style.color = 'hsl(var(--primary))';
                      e.currentTarget.style.background = 'hsl(var(--primary))/0.1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(var(--border))';
                      e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                      e.currentTarget.style.background = 'transparent';
                    }}
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
