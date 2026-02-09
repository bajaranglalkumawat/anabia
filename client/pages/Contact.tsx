import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-white">
      <Header />

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Address */}
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Address
              </h3>
              <p className="text-muted-foreground text-sm">
                123 Main Street
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>

            {/* Phone */}
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Phone</h3>
              <p className="text-muted-foreground text-sm">
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +1 (234) 567-8900
                </a>
                <br />
                <span className="text-xs">Available during business hours</span>
              </p>
            </div>

            {/* Email */}
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
              <p className="text-muted-foreground text-sm">
                <a
                  href="mailto:hello@anabia.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@anabia.com
                </a>
                <br />
                <span className="text-xs">Response within 24 hours</span>
              </p>
            </div>

            {/* Hours */}
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Hours</h3>
              <p className="text-muted-foreground text-sm">
                Mon - Thu: 11:00 AM - 10:00 PM
                <br />
                Fri - Sun: 11:00 AM - 11:00 PM
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Find Us on the Map
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601592346779!3d40.71282571110022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg animate-slide-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-white text-foreground"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-white text-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-white text-foreground"
                placeholder="+1 (234) 567-8900"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-white text-foreground"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-white text-foreground resize-none"
                placeholder="Tell us your thoughts, feedback, or any inquiries..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
            >
              Send Message
            </button>

            {formSubmitted && (
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-center animate-fade-in">
                ✓ Thank you! We've received your message and will get back to
                you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Anabia Ki Rasoi</h3>
              <p className="text-gray-300">
                Authentic Indian cuisine crafted with passion and tradition.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="hover:text-white transition-colors"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-gray-300 text-sm">
                Mon - Thu: 11:00 AM - 10:00 PM
                <br />
                Fri - Sun: 11:00 AM - 11:00 PM
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300 text-sm">
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-8900
                </a>
                <br />
                <a
                  href="mailto:hello@anabia.com"
                  className="hover:text-white transition-colors"
                >
                  hello@anabia.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-300">
            <p>
              &copy; 2024 Anabia Ki Rasoi. All rights reserved. | Crafted with{" "}
              <span className="text-primary">❤️</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
