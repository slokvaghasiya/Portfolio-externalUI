import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const WorkPage = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chat Assistant",
      description: "A smart chatbot powered by OpenAI's GPT models that provides helpful responses to user queries.",
      link: "https://github.com",
      tags: ["React", "TypeScript", "OpenAI"],
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Portfolio Generator",
      description: "Create stunning portfolio websites instantly with this easy-to-use generator.",
      link: "https://github.com",
      tags: ["Next.js", "Node.js", "MongoDB"],
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3270&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A full-featured online store solution with payment processing and inventory management.",
      link: "https://github.com",
      tags: ["React", "Node.js", "Stripe"],
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=3270&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Health Tracker App",
      description: "Monitor your fitness goals, nutrition, and wellness metrics with this comprehensive app.",
      link: "https://github.com",
      tags: ["React Native", "Firebase", "Charts"],
      thumbnail: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=3270&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "Discover new recipes based on ingredients you already have in your kitchen.",
      link: "https://github.com",
      tags: ["Vue.js", "API Integration", "Tailwind"],
      thumbnail: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=3246&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Real-time weather updates with beautiful visualizations and forecasting.",
      link: "https://github.com",
      tags: ["React", "Weather API", "D3.js"],
      thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=3270&auto=format&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div
      id="work"
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
            Featured Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I'm proud to showcase
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative rounded-xl overflow-hidden border border-border bg-card/40 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
                  <div className="flex gap-2">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-primary bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            className="px-8 py-3 rounded-lg font-semibold border border-border text-foreground bg-card/40 hover:border-primary hover:bg-primary/10 transition-all"
            whileHover={{ y: -2 }}
          >
            <span className="flex items-center justify-center gap-2">
              <Code2 size={18} />
              View All Projects
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkPage;
