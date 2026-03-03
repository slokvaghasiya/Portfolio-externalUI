import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@johndoe.com",
      href: "mailto:hello@johndoe.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
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
      id="contact"
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
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Let's create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.href}
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg mt-1 bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                      <p className="text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 rounded-xl border border-border bg-card/40 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                    style={{
                      background: 'hsl(var(--input))',
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--foreground))',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'hsl(var(--primary))';
                      e.target.style.boxShadow = '0 0 0 3px hsl(var(--primary))/0.1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'hsl(var(--border))';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                    style={{
                      background: 'hsl(var(--input))',
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--foreground))',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'hsl(var(--primary))';
                      e.target.style.boxShadow = '0 0 0 3px hsl(var(--primary))/0.1';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'hsl(var(--border))';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                  style={{
                    background: 'hsl(var(--input))',
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--foreground))',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(var(--primary))';
                    e.target.style.boxShadow = '0 0 0 3px hsl(var(--primary))/0.1';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(var(--border))';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none"
                  style={{
                    background: 'hsl(var(--input))',
                    borderColor: 'hsl(var(--border))',
                    color: 'hsl(var(--foreground))',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(var(--primary))';
                    e.target.style.boxShadow = '0 0 0 3px hsl(var(--primary))/0.1';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(var(--border))';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg"
                  style={{
                    background: 'hsl(var(--primary))/0.1',
                    color: 'hsl(var(--primary))',
                  }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/10 text-red-400"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: status === "loading" ? 'hsl(var(--primary))/0.5' : 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                }}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
              >
                {status === "loading" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
