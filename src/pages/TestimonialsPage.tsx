import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jack Thompson",
    role: "Senior Developer",
    company: "Tech Corp",
    body: "Working with John was transformative. His attention to detail and technical expertise delivered exactly what we needed on time.",
    rating: 5,
    image: "https://avatar.vercel.sh/jack",
  },
  {
    id: 2,
    name: "Jill Martinez",
    role: "Product Manager",
    company: "Innovation Labs",
    body: "John's ability to bridge design and development is exceptional. The results speak for themselves.",
    rating: 5,
    image: "https://avatar.vercel.sh/jill",
  },
  {
    id: 3,
    name: "John Chen",
    role: "Startup Founder",
    company: "Next Gen Startup",
    body: "We went from concept to launch in record time. John's guidance was invaluable throughout the process.",
    rating: 5,
    image: "https://avatar.vercel.sh/john",
  },
  {
    id: 4,
    name: "Jane Wilson",
    role: "Design Director",
    company: "Creative Studios",
    body: "The collaboration was seamless. John truly understands the importance of user experience in development.",
    rating: 4,
    image: "https://avatar.vercel.sh/jane",
  },
  {
    id: 5,
    name: "Jenny Kumar",
    role: "CTO",
    company: "Enterprise Solutions",
    body: "Excellent problem solver with deep technical knowledge. Would recommend without hesitation.",
    rating: 5,
    image: "https://avatar.vercel.sh/jenny",
  },
  {
    id: 6,
    name: "James Rodriguez",
    role: "Marketing Lead",
    company: "Digital Agency",
    body: "John went above and beyond to ensure our platform performed perfectly. True professional.",
    rating: 5,
    image: "https://avatar.vercel.sh/james",
  },
];

const TestimonialsPage = () => {
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
      id="testimonials"
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
            What Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by amazing teams around the world
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary hover:bg-primary/5 transition-all duration-300 flex flex-col"
              whileHover={{ y: -3 }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="flex-grow mb-6 text-base leading-relaxed text-muted-foreground">
                "{review.body}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {review.role} @ {review.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                {stat.number}
              </div>
              <p className="text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
