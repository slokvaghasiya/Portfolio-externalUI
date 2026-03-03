import CountUp from "react-countup";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Photo from "@/assets/Photo.webp";

const AboutPage = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  const stats = [
    {
      id: 1,
      title: "Projects Completed",
      value: 50,
      description: "Successful deliverables",
    },
    {
      id: 2,
      title: "Happy Clients",
      value: 30,
      description: "Satisfied customers",
    },
    {
      id: 3,
      title: "Years Experience",
      value: 5,
      description: "In web development",
    },
    {
      id: 4,
      title: "Cups of Coffee",
      value: 1200,
      description: "Fuel for coding",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen w-full py-20 px-6 md:px-8"
      style={{ background: 'hsl(var(--background))' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer passionate about building beautiful, functional digital experiences
          </p>
        </motion.div>

        {/* Main Content */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex items-center"
          >
            <div
              className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-card/40"
            >
              <img
                src={Photo}
                alt="John Doe"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary))/0.05 0%, hsl(var(--secondary))/0.05 100%)',
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg border border-primary bg-card text-primary text-sm font-semibold"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Available
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">John Doe</h3>
              <p className="text-base text-primary font-semibold">Full-Stack Developer & Creator</p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I craft elegant digital experiences by blending cutting-edge technology with thoughtful design. With expertise in modern web technologies, I transform ideas into beautiful, performant solutions.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              My journey has been driven by curiosity and continuous learning. I'm passionate about solving complex problems and collaborating with teams to build products that truly matter.
            </p>

            {/* Skills Tags */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Core Skills</p>
              <div className="grid grid-cols-2 gap-3">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL'].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 rounded-lg border border-border bg-card/40 text-sm font-medium text-foreground hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <motion.button
                className="px-6 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform"
                whileHover={{ y: -2 }}
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary hover:bg-primary/5 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-3 text-primary">
                <CountUp end={stat.value} duration={2.5} suffix="+" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">{stat.title}</h4>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
