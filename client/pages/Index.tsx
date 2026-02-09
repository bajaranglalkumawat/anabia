import { useState } from "react";
import { ChefHat, MapPin, Phone, Mail, Clock, Users } from "lucide-react";
import Header from "@/components/Header";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const menuPreview = [
    {
      id: 1,
      name: "Butter Chicken Biryani",
      price: "$14.99",
      description: "Fragrant basmati rice with tender butter chicken",
      image: "https://images.unsplash.com/photo-1631452614221-cb9b66bb8151?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Paneer Tikka Masala",
      price: "$12.99",
      description: "Creamy tomato-based curry with cottage cheese",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Tandoori Chicken",
      price: "$13.99",
      description: "Spiced chicken cooked in traditional tandoor",
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Dal Makhani",
      price: "$10.99",
      description: "Creamy lentil curry infused with butter and spices",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    },
  ];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm flex items-center gap-2">
                  <ChefHat className="w-4 h-4" />
                  Authentic Indian Cuisine
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                Welcome to <span className="text-primary">Anabia Ki Rasoi</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience the authentic flavors of Indian cuisine crafted with
                traditional recipes and the finest ingredients. Every dish tells
                a story of passion, tradition, and culinary excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#order"
                  className="inline-block bg-primary hover:bg-accent text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 text-center"
                >
                  Order Now
                </a>
                <a
                  href="#menu"
                  className="inline-block border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                >
                  View Menu
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-sm text-muted-foreground">Signature Dishes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-in-left">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1585521199015-67b1365ef552?w=600&h=600&fit=crop"
                  alt="Delicious Indian food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Ramadan Special Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/20 via-purple-100 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className={"absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23333333\" fill-opacity=\"0.1\"><path d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/></g></g></svg>')]"} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm flex items-center gap-2 justify-center">
                🌙 Special Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ramadan Special - Zaika Jo Dil Jeet Le
            </h2>
            <p className="text-lg text-muted-foreground">
              Homemade with love ❤️
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fry Items */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/50 animate-fade-in">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Ramadan Special - Fry Items
              </h3>
              <p className="text-muted-foreground mb-2">
                <strong>Zaika jo dil jeet le ❤️</strong>
              </p>
              <p className="text-muted-foreground mb-6">
                Iftar ke waqt fry karo aur garma garam serve karo
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>✓ Samosas, Rolls, Patties & More</li>
                <li>✓ 20+ varieties to choose from</li>
                <li>✓ Pre-Orders Only</li>
                <li>✓ Fresh & Authentic Flavors</li>
              </ul>
              <a
                href="/ramadan-fry"
                className="inline-block bg-primary hover:bg-accent text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
              >
                View Fry Menu →
              </a>
            </div>

            {/* Paratha Items */}
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/50 animate-fade-in">
              <div className="text-4xl mb-4">🥘</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Ramadan Special - Frozen Paratha
              </h3>
              <p className="text-muted-foreground mb-2">
                <strong>Zaika jo dil jeet le ❤️</strong>
              </p>
              <p className="text-muted-foreground mb-6">
                Iftar aur Suhoor ke liye ready-to-cook
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li>✓ Paratha, Chakor & Lachha Paratha</li>
                <li>✓ Ready-to-Cook - Just Fry & Serve</li>
                <li>✓ Pre-Orders Only</li>
                <li>✓ Homemade Quality</li>
              </ul>
              <a
                href="/ramadan-paratha"
                className="inline-block bg-primary hover:bg-accent text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
              >
                View Paratha Menu →
              </a>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl text-center border-2 border-accent/50 animate-slide-up">
            <p className="text-lg font-semibold text-foreground mb-2">
              📱 Call to Order Now
            </p>
            <a
              href="tel:+923347367919"
              className="text-3xl font-bold text-primary hover:text-accent transition-colors"
            >
              0334-7367919
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Pre-Orders Only | Only Karachi | Delivery charges depend on area
            </p>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Signature Dishes
            </h2>
            <p className="text-lg text-muted-foreground">
              Carefully crafted dishes prepared with passion and tradition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuPreview.map((dish, index) => (
              <div
                key={dish.id}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 h-64 bg-gray-200">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {dish.price}
                  </span>
                  <button className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 font-medium text-sm">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/menu"
              className="inline-block bg-secondary hover:bg-primary text-foreground hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="order"
        className="py-16 bg-gradient-to-r from-primary via-accent to-secondary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className={"absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><path d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/></g></g></svg>')]"} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Order Your Favorite Dishes
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Fast delivery • Fresh ingredients • Authentic recipes • Satisfaction guaranteed
            </p>
            <a
              href="tel:+1234567890"
              className="inline-block bg-white text-primary hover:bg-secondary hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg"
            >
              Call to Order: +1 (234) 567-8900
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="animate-slide-up">
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

            {/* Location Details */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Visit Us
                </h2>
                <p className="text-lg text-muted-foreground">
                  Come and experience authentic Indian cuisine in a warm and
                  welcoming atmosphere.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      123 Main Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+1234567890"
                        className="hover:text-primary transition-colors"
                      >
                        +1 (234) 567-8900
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:hello@anabia.com"
                        className="hover:text-primary transition-colors"
                      >
                        hello@anabia.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Mon - Thu: 11:00 AM - 10:00 PM
                      <br />
                      Fri - Sun: 11:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
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
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-white text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email
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
                Phone
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
                htmlFor="message"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-white text-foreground resize-none"
                placeholder="Tell us your thoughts..."
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
                ✓ Thank you! We'll get back to you soon.
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
                  <a href="/menu" className="hover:text-white transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
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
