"use client";

import { useState, useEffect } from "react";
import { useScrollSection } from "../hook/useScrollSection";
import {
  Github,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  Linkedin,
  Twitter,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import Photo from "@/assets/Photo.webp";
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
  const [active, setActive] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-5 inset-x-0 max-w-2xl mx-auto z-50">
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
          className={activeSection === "home" ? "text-blue-500" : ""}
          onClick={() => scrollToSection("home")}
        >
          <div className={`flex flex-col space-y-4 text-sm`}>
            <div className="cursor-pointer">Home</div>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="About"
          className={activeSection === "about" ? "text-blue-500" : ""}
          onClick={() => scrollToSection("about")}
        >
          <div className="grid gap-4 p-4">
            <div className="w-[200px] ">
              <img
                src={Photo}
                alt="About Me"
                className="rounded-lg w-full h-[200px] object-cover mb-4"
              />
              <div className="flex gap-3 justify-center">
                <HoveredLink href="#">
                  <Linkedin className="w-5 h-5" />
                </HoveredLink>
                <HoveredLink href="#">
                  <Github className="w-5 h-5" />
                </HoveredLink>
                <HoveredLink href="#">
                  <Twitter className="w-5 h-5" />
                </HoveredLink>
              </div>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Services"
          className={activeSection === "Services" ? "text-blue-500" : ""}
          onClick={() => scrollToSection("service")}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Web Development</HoveredLink>
            <HoveredLink href="#">UI/UX Design</HoveredLink>
            <HoveredLink href="#">Mobile Development</HoveredLink>
            <HoveredLink href="#">SEO</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Work"
          className={activeSection === "Work" ? "text-blue-500" : ""}
          onClick={() => scrollToSection("work")}
        >
          <div className="grid grid-cols-2 gap-4 p-4 w-[600px]">
            <ProductItem
              title="AI Chat Assistant"
              description="A smart chatbot powered by OpenAI"
              href="https://github.com/yourusername/ai-chat"
              src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              icon={<Github className="w-4 h-4" />}
            />
            <ProductItem
              title="Portfolio Generator"
              description="Create stunning portfolios instantly"
              href="https://github.com/yourusername/portfolio-gen"
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              icon={<Github className="w-4 h-4" />}
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Testimonials"
          className={activeSection === "Testimonials" ? "text-blue-500" : ""}
          onClick={() => scrollToSection("testimonials")}
        >
          <div className="w-[400px] p-4">
            <div className="space-y-4">
              {[
                {
                  name: "Jack Thompson",
                  role: "Senior Developer",
                  review: "The AI integration is mind-blowing!",
                  rating: 5,
                },
                {
                  name: "Jill Martinez",
                  role: "Tech Lead",
                  review: "Intuitive interface and robust features.",
                  rating: 5,
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="p-3 rounded-lg bg-gray-800/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={`https://avatar.vercel.sh/${testimonial.name.toLowerCase()}`}
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-800">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <p className="text-sm mt-1">{testimonial.review}</p>
                </div>
              ))}
            </div>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
          className={activeSection === "Contact" ? "text-blue-500" : ""}
          onClick={() => scrollToSection("contact")}
        >
          <div className="w-[400px] p-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <PhoneIcon className="w-5 h-5" />
                <span>+923 0344 90032</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <MailIcon className="w-5 h-5" />
                <span>support@uprankly.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <MapPinIcon className="w-5 h-5" />
                <span>Sans Francisco, USA</span>
              </div>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-gray-800/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <textarea
                  placeholder="Your message"
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-800/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </form>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

// Animated hamburger icon component
function AnimatedHamburger({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex items-center justify-center w-8 h-8 relative">
      <motion.span
        className="absolute h-0.5 bg-white rounded-full w-6"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -8,
        }}
        transition={{ duration: 0.3 }}
      ></motion.span>
      <motion.span
        className="absolute h-0.5 bg-white rounded-full w-6"
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? -20 : 0,
        }}
        transition={{ duration: 0.3 }}
      ></motion.span>
      <motion.span
        className="absolute h-0.5 bg-white rounded-full w-6"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 8,
        }}
        transition={{ duration: 0.3 }}
      ></motion.span>
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
      <div className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <div className="text-white font-bold text-xl">John Doe</div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          <AnimatedHamburger isOpen={isOpen} />
        </button>
      </div>

      {/* Mobile menu overlay with animation */}
      <motion.div 
        className="fixed inset-0 bg-black/95 z-40 overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ 
          type: "spring", 
          damping: 30, 
          stiffness: 300,
          duration: 0.3 
        }}
      >
        <div className="flex flex-col pt-16 px-6 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-6 py-8">
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
                className={`text-left text-2xl font-medium py-2 border-b border-gray-800 ${
                  activeSection === item.id ? 'text-purple-500' : 'text-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                transition={{ 
                  delay: isOpen ? index * 0.1 : 0,
                  duration: 0.3
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Social links with animation */}
          <motion.div 
            className="mt-auto pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <div className="text-white text-lg mb-4">Connect with me</div>
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin size={20} className="text-white" />, href: "#" },
                { icon: <Github size={20} className="text-white" />, href: "#" },
                { icon: <Twitter size={20} className="text-white" />, href: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
