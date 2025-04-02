import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Palette, Smartphone, Search } from "lucide-react";

const ServicePage = () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Create a ref for the services container
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Check viewport size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Clear existing animations when screen size changes
    servicesRef.current.forEach((service) => {
      if (service) {
        service.removeEventListener("mouseenter", () => {});
        service.removeEventListener("mouseleave", () => {});
      }
    });
    
    // Animate each service card
    servicesRef.current.forEach((service, index) => {
      if (!service) return;
      
      // Initial GSAP animation - different for mobile and desktop
      gsap.fromTo(
        service,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.inOut",
          scrollTrigger: {
            trigger: service,
            start: "top center+=100",
          },
          delay: index * 0.2,
        }
      );

      // Only add hover animations on desktop, not on mobile or tablet
      if (!isMobile && !isTablet) {
        // Add hover animation using GSAP for desktop only
        service.addEventListener("mouseenter", () => {
          gsap.to(service, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        service.addEventListener("mouseleave", () => {
          gsap.to(service, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });
  }, [isMobile, isTablet]);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We build beautiful and functional websites that help you grow your business.",
      icon: Code2,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "We design beautiful and functional websites that help you grow your business.",
      icon: Palette,
    },
    {
      id: 3,
      title: "Mobile Development",
      description:
        "We build beautiful and functional mobile applications that help you grow your business.",
      icon: Smartphone,
    },
    {
      id: 4,
      title: "SEO",
      description:
        "We optimize your online presence to improve visibility and attract more customers.",
      icon: Search,
    },
  ];

  return (
    <div id="service" className="flex flex-col min-h-[70vh] gap-4 items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-serif mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 md:mt-10">
          Service
        </h1>
      </div>
      
      {/* Grid layout with increased padding on container for mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-0">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (servicesRef.current[index] = el)}
            className={`
              w-full h-auto sm:h-[220px] p-4 rounded-lg overflow-hidden text-white
              bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)]
              border border-[rgba(255,255,255,0.18)]
              backdrop-blur-md
              shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
              transition-all duration-300
              ${(!isMobile && !isTablet) ? 'hover:shadow-[0_8px_32px_0_rgba(138,75,255,0.37)]' : ''}
            `}
          >
            <div className="p-2 flex flex-row gap-[5px] self-start">
              <span className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full bg-[#ff605c] shadow-[-5px_5px_5px_rgba(0,0,0,0.28)]"></span>
              <span className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full bg-[#ffbd44] shadow-[-5px_5px_5px_rgba(0,0,0,0.28)]"></span>
              <span className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full bg-[#00ca4e] shadow-[-5px_5px_5px_rgba(0,0,0,0.28)]"></span>
            </div>

            <div className="flex flex-col items-center mt-2">
              <service.icon className="w-8 h-8 mb-3 text-[rgb(218,244,237)]" />
              <h1 className="text-center mb-3 mx-auto text-base sm:text-lg text-[rgb(218,244,237)] shadow-[-10px_5px_10px_rgba(0,0,0,0.573)]">
                {service.title}
              </h1>
              <p className="text-center text-xs sm:text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
