import CountUp from "react-countup";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaceSmileIcon,
  UsersIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Github, Linkedin, Twitter } from "lucide-react";
import Photo from "@/assets/Photo.webp";

const AboutPage = () => {
  const mainContentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Safely register ScrollTrigger
    if (gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);
    }

    try {
      // Simple fade-in animation with error handling
      if (mainContentRef.current) {
        gsap.fromTo(
          mainContentRef.current,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: mainContentRef.current,
              start: "top 80%"
            }
          }
        );
      }

      // Simple animation for stats
      const statCards = document.querySelectorAll('.stat-card');
      if (statCards.length) {
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.2,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%"
            }
          }
        );
      }
    } catch (error) {
      console.error("Animation error:", error);
    }
  }, []);

  const stats = [
    {
      id: 1,
      title: "Happy Clients",
      value: 5800,
      description: "Satisfied customers worldwide",
      icon: <FaceSmileIcon className="w-8 h-8 text-purple-400" />,
    },
    {
      id: 2,
      title: "Support Team",
      value: 120,
      description: "Dedicated professionals",
      icon: <UsersIcon className="w-8 h-8 text-purple-400" />,
    },
    {
      id: 3,
      title: "Sales Count",
      value: 345,
      description: "Successful transactions",
      icon: <CurrencyDollarIcon className="w-8 h-8 text-purple-400" />,
    },
    {
      id: 4,
      title: "Awards Won",
      value: 150,
      description: "Industry recognition",
      icon: <StarIcon className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <div id="about" className="bg-black min-h-screen w-full p-4 sm:p-6 md:p-8">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-center text-white text-4xl sm:text-6xl md:text-8xl font-serif mb-10 mt-10">
          About Me
        </h1>
      </div>

      {/* Main content section */}
      <div
        ref={mainContentRef}
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-16 mt-16"
      >
        {/* Image section */}
        <div className="w-full md:w-1/2">
          <img
            src={Photo}
            alt="About Me"
            className="rounded-lg w-full h-auto max-h-[50vh] object-cover"
          />
        </div>

        {/* Information section */}
        <div className="w-full md:w-1/2 text-white mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center md:text-left">
            John Doe
          </h2>
          <p className="text-lg md:text-xl mb-6 font-serif text-center md:text-left">
            I am a web developer with a passion for creating beautiful and
            functional websites. With years of experience in modern web
            technologies, I help businesses bring their vision to life.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mb-6 justify-center md:justify-start">
            <a href="#" className="p-2 rounded-full border-2 border-purple-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full border-2 border-pink-500">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full border-2 border-purple-400">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div
        ref={statsRef}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white"
      >
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="stat-card p-6 rounded-lg bg-gray-900 transform hover:scale-105 transition-transform duration-300 border-2 border-purple-500"
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <div className="text-3xl font-serif mb-2 text-purple-400">
              <CountUp end={stat.value} duration={2.5} />+
            </div>
            <div className="text-xl font-serif mb-2">{stat.title}</div>
            <div className="text-sm text-gray-400">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
