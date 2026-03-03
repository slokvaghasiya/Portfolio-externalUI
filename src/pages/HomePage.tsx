import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-20"
      style={{ background: 'hsl(var(--background))' }}
    >
      {/* Animated background gradient orbs - more subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary))/0.08 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(var(--secondary))/0.08 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl px-6 md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Available for projects</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6"
          >
            <span className="text-foreground">Crafting digital </span>
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              experiences
            </span>
            <span className="text-foreground"> with purpose</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I combine clean code with thoughtful design to build intuitive, performant web applications that users love.
            </p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.button
            onClick={() => scrollToSection('work')}
            className="px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95"
            whileHover={{ y: -2 }}
          >
            View My Work
          </motion.button>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg font-semibold border border-border text-foreground transition-all duration-300 hover:bg-card"
            whileHover={{ y: -2 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold text-center mb-6 text-muted-foreground uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.06 }}
                className="px-3 py-1.5 rounded-md border border-border bg-card/40 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300 text-sm font-medium text-foreground"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-5 mb-20"
        >
          {[
            { icon: Github, label: 'GitHub', href: '#' },
            { icon: Linkedin, label: 'LinkedIn', href: '#' },
            { icon: Twitter, label: 'Twitter', href: '#' },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              className="p-2.5 rounded-lg border border-border text-muted-foreground bg-card/40 backdrop-blur-sm hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-medium mb-2" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Scroll to explore
          </span>
          <ArrowDown size={20} style={{ color: 'hsl(var(--primary))' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
