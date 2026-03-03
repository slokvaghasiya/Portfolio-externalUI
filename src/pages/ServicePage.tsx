import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Zap, BarChart3, Rocket } from "lucide-react";

const ServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Creating responsive, performant web applications using modern technologies.",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Designing beautiful, intuitive interfaces that users love.",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Building cross-platform mobile apps for iOS and Android.",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Performance Optimization",
      description: "Ensuring your applications run fast and efficiently.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 5,
      title: "Analytics & SEO",
      description: "Improving visibility and understanding user behavior.",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 6,
      title: "Deployment & Maintenance",
      description: "Keeping your applications secure and up-to-date.",
      icon: Rocket,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      id="service"
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
            My Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative p-8 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon
                      size={24}
                      className="text-primary"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    className="flex items-center gap-2 text-sm font-semibold text-primary pt-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
