import React, { useState, useEffect } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Github, ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

const WorkPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Consider tablet and mobile as small devices
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample project data
  const projects = [
    {
      title: "AI Chat Assistant",
      description: "A smart chatbot powered by OpenAI's GPT models that provides helpful responses to user queries.",
      link: "https://github.com/yourusername/ai-chat",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop",
      icon: <Github />
    },
    {
      title: "Portfolio Generator",
      description: "Create stunning portfolio websites instantly with this easy-to-use generator.",
      link: "https://github.com/yourusername/portfolio-gen",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3270&auto=format&fit=crop",
      icon: <Github />
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured online store solution with payment processing and inventory management.",
      link: "https://github.com/yourusername/ecommerce",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=3270&auto=format&fit=crop",
      icon: <Github />
    },
    {
      title: "Health Tracker App",
      description: "Monitor your fitness goals, nutrition, and wellness metrics with this comprehensive app.",
      link: "https://github.com/yourusername/health-tracker",
      thumbnail: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=3270&auto=format&fit=crop",
      icon: <Github />
    },
    {
      title: "Recipe Finder",
      description: "Discover new recipes based on ingredients you already have in your kitchen.",
      link: "https://github.com/yourusername/recipe-finder",
      thumbnail: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=3246&auto=format&fit=crop",
      icon: <Github />
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather updates with beautiful visualizations and forecasting.",
      link: "https://github.com/yourusername/weather-app",
      thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=3270&auto=format&fit=crop",
      icon: <Github />
    },
    {
      title: "AI Chat Assistant",
      description: "A smart chatbot powered by OpenAI's GPT models that provides helpful responses to user queries.",
      link: "https://github.com/yourusername/ai-chat",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop",
      icon: <Github />
    },
    {
      title: "Portfolio Generator",
      description: "Create stunning portfolio websites instantly with this easy-to-use generator.",
      link: "https://github.com/yourusername/portfolio-gen",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3270&auto=format&fit=crop",
      icon: <Github />
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured online store solution with payment processing and inventory management.",
      link: "https://github.com/yourusername/ecommerce",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=3270&auto=format&fit=crop",
      icon: <Github />
    },
  ];

  return (
    <div id="work" className="min-h-screen w-full">

      {
        isMobile && (
          <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8">
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-serif mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 md:mt-10">
              Work
            </h1>
          </div>
        )
      }

      {/* Desktop: HeroParallax */}
      {!isMobile && <HeroParallax products={projects} />}

      {/* Mobile and Tablet: Card Grid with animations */}
      {isMobile && (
        <div className="px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <MobileProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile-friendly project card component with animations
const MobileProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800 shadow-lg h-full flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-purple-600/80 rounded-full hover:bg-purple-500 transition-colors"
            >
              <Github size={16} />
            </a>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-purple-600/80 rounded-full hover:bg-purple-500 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 flex-1">{project.description}</p>
        <div className="mt-4 flex items-center text-xs text-gray-500">
          <Code size={14} className="mr-2" />
          <span>React • TypeScript • Tailwind</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
