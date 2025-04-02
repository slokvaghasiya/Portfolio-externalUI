import { useState, useEffect } from 'react';

export const useScrollSection = () => {
  
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const options = {
      threshold: 0.3,  // Trigger when 30% of the component is visible
      rootMargin: '-100px 0px -100px 0px'  // Adds margin around viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};