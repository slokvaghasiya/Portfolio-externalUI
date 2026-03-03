import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@johndoe.com", label: "Email" },
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#service" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">John</span>
              <span className="text-foreground">Doe</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer crafting beautiful digital experiences with modern technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "UI/UX Design", "Performance", "Consulting"].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2.5 rounded-lg border border-border bg-card/40 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="text-center sm:text-left text-sm text-muted-foreground">
            <p>© {currentYear} John Doe. All rights reserved.</p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-border bg-card/40 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
