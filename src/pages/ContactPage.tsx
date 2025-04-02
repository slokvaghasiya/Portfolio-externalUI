import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { useState, useRef } from "react";
import { Meteors } from "@/components/ui/meteors";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-center text-white text-4xl sm:text-6xl md:text-8xl font-serif mb-6">
          Contact
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl text-center">
          I'm always open to discussing new projects, creative ideas or
          opportunities to collaborate.
        </p>
      </div>

      {/* Contact Card */}
      <div className="max-w-6xl mx-auto bg-gray-800/50 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Contact Info */}
          <div className="w-full md:w-2/5 bg-gray-900/50 p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white hover:translate-x-2 transition-transform duration-300">
                  <PhoneIcon className="w-6 h-6 text-purple-400" />
                  <span>+923 0344 90032</span>
                </div>

                <div className="flex items-center space-x-4 text-white hover:translate-x-2 transition-transform duration-300">
                  <MailIcon className="w-6 h-6 text-purple-400" />
                  <span>support@example.com</span>
                </div>

                <div className="flex items-center space-x-4 text-white hover:translate-x-2 transition-transform duration-300">
                  <MapPinIcon className="w-6 h-6 text-purple-400" />
                  <span>San Francisco, USA</span>
                </div>
              </div>
            </div>
            
            {/* Animated background */}
            <Meteors number={20} />
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-3/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
                  placeholder="Subject"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
