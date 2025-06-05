
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
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
      value: "hello@funkyart.com",
      href: "mailto:hello@funkyart.com",
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
      value: "Los Angeles, CA",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's make something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-1">
          {/* Contact Form */}
          {/* <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200  -2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300  -lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300  -lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-600 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300  -lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-300  -lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-pink-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold  -lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200  -xl hover:border-pink-400/30 transition-colors group"
                  >
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-500  -full group-hover:scale-110 transition-transform">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">{info.label}</div>
                      <div className="text-gray-800 font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Follow My Journey</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200  -xl hover:border-pink-400/30 transition-colors hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-pink-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200  -xl">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Commission Work</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                I'm currently accepting commission work for digital art pieces, custom illustrations, 
                and creative projects. Let's discuss your vision and bring it to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
