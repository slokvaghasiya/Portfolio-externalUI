import ColourfulText from "@/components/ui/colourful-text";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Home = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check device type
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Desktop animation (unchanged)
  useEffect(() => {
    if ((isMobile || isTablet) || !particlesRef.current) return;
    
    // Original desktop particle animation code
    const particles = Array.from(particlesRef.current.children);

    // Create random positions for particles
    const positions = particles.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));

    // Animate particles
    particles.forEach((particle, i) => {
      const pos = positions[i] || { x: 0, y: 0, vx: 0, vy: 0 };

      gsap.to(particle, {
        duration: Math.random() * 5 + 5,
        repeat: -1,
        yoyo: true,
        ease: "none",
        onUpdate: function () {
          // Move particle
          pos.x += pos.vx;
          pos.y += pos.vy;

          // Wrap around screen boundaries
          if (pos.x > window.innerWidth) pos.x = 0;
          if (pos.x < 0) pos.x = window.innerWidth;
          if (pos.y > window.innerHeight) pos.y = 0;
          if (pos.y < 0) pos.y = window.innerHeight;

          // Apply position
          gsap.set(particle, {
            x: pos.x,
            y: pos.y,
          });
        },
      });
    });

    // Draw connections
    const drawConnections = () => {
      const canvas = document.createElement("canvas");
      canvas.className = "absolute inset-0 z-0";
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current?.appendChild(canvas);

      const ctx = canvas.getContext("2d")!;

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1;

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i].getBoundingClientRect();
            const p2 = particles[j].getBoundingClientRect();
            const distance = Math.sqrt(
              Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
            );

            if (distance < 300) {
              ctx.beginPath();
              ctx.moveTo(p1.x + p1.width / 2, p1.y + p1.height / 2);
              ctx.lineTo(p2.x + p2.width / 2, p2.y + p2.height / 2);
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(animate);
      };

      animate();
    };

    drawConnections();

    // Cleanup
    return () => {
      gsap.killTweensOf(particles);
    };
  }, [isMobile, isTablet]);

  // Text animation
  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  // Scroll function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="bg-black min-h-screen w-full relative overflow-hidden"
    >
      {/* DESKTOP VERSION - Keep Original */}
      {!isMobile && !isTablet && (
        <>
          <div ref={particlesRef} className="particles absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="particle absolute rounded-full"
                style={{
                  left: `${Math.random() * 120 - 10}%`,
                  top: `${Math.random() * 120 - 10}%`,
                  width: "8px",
                  height: "8px",
                  backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
                }}
              />
            ))}
          </div>
          
          <div 
            ref={contentRef}
            className="absolute left-4 sm:left-10 md:left-20 top-1/3 sm:top-60 w-full sm:w-2/3 md:w-1/2 z-10"
          >
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white font-sans">
              Hi, I'm <ColourfulText text="John" />
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white font-sans">
              Web Developer
            </h1>
          </div>
        </>
      )}
      
      {/* MOBILE & TABLET VERSION - Enhanced design */}
      {(isMobile || isTablet) && (
        <div className="h-screen flex items-center justify-center relative">
          {/* Background with subtle animated gradient */}
          <div className="absolute inset-0 bg-black overflow-hidden">
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 opacity-10"
              animate={{ 
                background: [
                  'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center w-full px-6 flex flex-col items-center">
            {/* Animated circle element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-purple-900/20 to-purple-500/30 border border-purple-500/20 mb-6 flex items-center justify-center"
            >
              <motion.div 
                animate={{ 
                  rotate: 360,
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-purple-400/20 border-dashed"
                style={{ borderWidth: '1px' }}
              />
              
              <div className="text-4xl font-bold text-white">JD</div>
              
              <motion.div
                className="absolute -inset-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
                  borderRadius: '9999px',
                }}
              />
            </motion.div>
            
            {/* Main heading with animated reveal */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7 }}
                className={`font-bold text-white tracking-tighter ${isMobile ? 'text-4xl' : 'text-5xl'}`}
              >
                JOHN<span className="text-purple-500">DOE</span>
              </motion.h1>
            </div>
            
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: isMobile ? 120 : 150, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"
            />
            
            {/* Role tags with staggered appearance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {["WEB DEVELOPER", "UI DESIGNER", "CREATIVE CODER"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                    className="text-xs tracking-widest text-gray-400 border border-gray-800 rounded-full px-3 py-1"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={`text-gray-400 mx-auto ${isMobile ? 'text-sm max-w-xs' : 'text-base max-w-md'} mb-10`}
            >
              I create clean, user-friendly interfaces and powerful web applications using cutting-edge technologies.
            </motion.p>
            
            {/* Technology showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mb-10"
            >
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Tech Stack</p>
              <div className="flex gap-3 justify-center flex-wrap max-w-xs">
                {[
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma" },
                  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" }
                ].map((tech, index) => (
                  <motion.div 
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center border border-gray-800 group-hover:border-purple-500/50 transition-colors p-1.5">
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Social links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex justify-center gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:text-purple-500 hover:border-purple-500 transition-all duration-300"
              >
                <Github size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:text-purple-500 hover:border-purple-500 transition-all duration-300"
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:text-purple-500 hover:border-purple-500 transition-all duration-300"
              >
                <Twitter size={16} />
              </motion.a>
            </motion.div>
            
            {/* Enhanced CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              whileHover={{ y: -3 }}
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-2 text-xs text-gray-400 hover:text-purple-500 transition-all duration-300 uppercase tracking-widest bg-black/30 border border-gray-800 px-4 py-2 rounded-full"
            >
              <span>Explore</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={14} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
