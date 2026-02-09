import { ShoppingCart, Moon, Heart } from "lucide-react";
import Header from "@/components/Header";

export default function RamadanParatha() {
  const parathItems = [
    {
      id: 1,
      name: "Paratha",
      items: [
        { desc: "One", price: "Rs. 30" },
        { desc: "Cooked (One)", price: "Rs. 40" },
        { desc: "6 pieces", price: "Rs. 200" },
      ],
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Chakor Paratha",
      items: [
        { desc: "One", price: "Rs. 35" },
        { desc: "Cooked (One)", price: "Rs. 40" },
        { desc: "6 pieces", price: "Rs. 230" },
      ],
      image:
        "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Lachha Paratha",
      items: [
        { desc: "One", price: "Rs. 35" },
        { desc: "Cooked (One)", price: "Rs. 45" },
        { desc: "8 pieces", price: "Rs. 250" },
      ],
      image:
        "https://images.unsplash.com/photo-1631452614221-cb9b66bb8151?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary/20 via-purple-100 to-primary/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 text-gold/20 opacity-20">
          <Moon className="w-full h-full" />
        </div>
        <div className="absolute top-20 right-20 w-20 h-20 text-primary/30 opacity-30">
          <Heart className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm flex items-center gap-2 justify-center">
                <Moon className="w-4 h-4" />
                Ramadan Special
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              🌙 Zaika jo dil jeet le ❤️
            </h1>

            <p className="text-xl text-accent font-medium mb-2">
              Ramadan Special - Frozen Paratha
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Iftar aur Suhoor ke liye ready-to-cook 🥘
              <br />
              Bas fry karo aur garma garam serve karo 🥘
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-center">
            <p className="text-sm text-muted-foreground font-medium">
              📋 Pre-Orders Only | 📍 Only Karachi | 🚚 Delivery charges depend
              on area
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-gradient-to-b from-white via-secondary/5 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {parathItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="group order-2 md:order-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="order-1 md:order-2 space-y-6 animate-slide-in-left">
                    <div>
                      <h2 className="text-4xl font-bold text-foreground mb-2">
                        {item.name}
                      </h2>
                      <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>

                    <div className="space-y-4">
                      {item.items.map((option, optIdx) => (
                        <div
                          key={optIdx}
                          className="p-5 bg-secondary/10 rounded-xl border-2 border-secondary/20 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 flex items-center justify-between group/item cursor-pointer"
                        >
                          <span className="text-lg font-semibold text-foreground group-hover/item:text-primary transition-colors">
                            {option.desc}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-primary">
                              {option.price}
                            </span>
                            <button className="bg-primary hover:bg-accent text-white p-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 opacity-0 group-hover/item:opacity-100">
                              <ShoppingCart className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                      <p className="text-sm text-muted-foreground">
                        💡 <span className="font-semibold">Tip:</span> Pre-order
                        now for fresh delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Our Parathas?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg animate-fade-in hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Frozen Fresh
              </h3>
              <p className="text-muted-foreground">
                Made with fresh ingredients and frozen to preserve quality
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg animate-fade-in hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Ready-to-Cook
              </h3>
              <p className="text-muted-foreground">
                Quick and easy to prepare - just fry and serve in minutes
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg animate-fade-in hover:shadow-2xl transition-shadow">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Authentic Recipe
              </h3>
              <p className="text-muted-foreground">
                Traditional recipes passed down through generations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary via-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Place Your Pre-Order Today!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get fresh, home-made parathas delivered to your door for Iftar and
            Suhoor
          </p>
          <a
            href="tel:+923347367919"
            className="inline-block bg-white text-primary hover:bg-secondary hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg"
          >
            📱 Call: 0334-7367919
          </a>
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
                  href="tel:+923347367919"
                  className="hover:text-white transition-colors"
                >
                  0334-7367919
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
              &copy; 2024 Anabia Ki Rasoi. All rights reserved. | Homemade with{" "}
              <span className="text-primary">❤️</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
