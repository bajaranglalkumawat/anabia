import { useState } from "react";
import { ShoppingCart, Moon, Heart } from "lucide-react";
import Header from "@/components/Header";

export default function RamadanFry() {
  const fryItems = [
    {
      id: 1,
      name: "Spring Roll",
      price: "Rs. 400",
      priceNum: 400,
      image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Chicken Roll",
      price: "Rs. 500",
      priceNum: 500,
      image: "https://images.unsplash.com/photo-1585238341710-4b4e6db51910?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Chicken Wonton",
      price: "Rs. 450",
      priceNum: 450,
      image: "https://images.unsplash.com/photo-1631515243166-7c674306b236?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Chicken Samosa",
      price: "Rs. 600",
      priceNum: 600,
      image: "https://images.unsplash.com/photo-1585238341710-4b4e6db51910?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Chicken Samosa (Mini)",
      price: "Rs. 500",
      priceNum: 500,
      image: "https://images.unsplash.com/photo-1585238341710-4b4e6db51910?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Chicken BBQ Samosa",
      price: "Rs. 650",
      priceNum: 650,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    },
    {
      id: 7,
      name: "Chicken BBQ Samosa (Mini)",
      price: "Rs. 600",
      priceNum: 600,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      name: "Beef Samosa",
      price: "Rs. 650",
      priceNum: 650,
      image: "https://images.unsplash.com/photo-1635087233829-3a52b5d64ab8?w=400&h=400&fit=crop",
    },
    {
      id: 9,
      name: "Malai Boti Samosa",
      price: "Rs. 700",
      priceNum: 700,
      image: "https://images.unsplash.com/photo-1625866274917-3e4f0dd4d8f6?w=400&h=400&fit=crop",
    },
    {
      id: 10,
      name: "Malai Boti Samosa (Mini)",
      price: "Rs. 600",
      priceNum: 600,
      image: "https://images.unsplash.com/photo-1625866274917-3e4f0dd4d8f6?w=400&h=400&fit=crop",
    },
    {
      id: 11,
      name: "Malai Boti Box Patties",
      price: "Rs. 800",
      priceNum: 800,
      image: "https://images.unsplash.com/photo-1631515243166-7c674306b236?w=400&h=400&fit=crop",
    },
    {
      id: 12,
      name: "Cheese One-Bite Samosa",
      price: "Rs. 700",
      priceNum: 700,
      image: "https://images.unsplash.com/photo-1631515243166-7c674306b236?w=400&h=400&fit=crop",
    },
    {
      id: 13,
      name: "Cheese Balls",
      price: "Rs. 600",
      priceNum: 600,
      image: "https://images.unsplash.com/photo-1631515243166-7c674306b236?w=400&h=400&fit=crop",
    },
    {
      id: 14,
      name: "Chicken Thread Strips",
      price: "Rs. 900",
      priceNum: 900,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    },
    {
      id: 15,
      name: "Chicken Tandoori Thread Strips",
      price: "Rs. 1000",
      priceNum: 1000,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    },
    {
      id: 16,
      name: "Pizza Box Patties",
      price: "Rs. 1000",
      priceNum: 1000,
      image: "https://images.unsplash.com/photo-1625866274917-3e4f0dd4d8f6?w=400&h=400&fit=crop",
    },
    {
      id: 17,
      name: "Aloo Spaghetti Cutlets",
      price: "Rs. 700",
      priceNum: 700,
      image: "https://images.unsplash.com/photo-1631515243166-7c674306b236?w=400&h=400&fit=crop",
    },
    {
      id: 18,
      name: "Chicken Tandoori Box Patties",
      price: "Rs. 900",
      priceNum: 900,
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    },
    {
      id: 19,
      name: "Chicken Kofta",
      price: "Rs. 1200",
      priceNum: 1200,
      image: "https://images.unsplash.com/photo-1625866274917-3e4f0dd4d8f6?w=400&h=400&fit=crop",
    },
    {
      id: 20,
      name: "Beef Kofta",
      price: "Rs. 1500",
      priceNum: 1500,
      image: "https://images.unsplash.com/photo-1635087233829-3a52b5d64ab8?w=400&h=400&fit=crop",
    },
  ];

  const [sortBy, setSortBy] = useState<"name" | "price">("name");

  const sortedItems = [...fryItems].sort((a, b) => {
    if (sortBy === "price") {
      return a.priceNum - b.priceNum;
    }
    return a.name.localeCompare(b.name);
  });

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
              Ramadan Special - Fry Items
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Iftar ke waqt fry karo aur garma garam serve karo
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-sm text-muted-foreground font-medium">
              Pre-Orders Only | Only Karachi | Delivery charges depend on area
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => setSortBy("name")}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  sortBy === "name"
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                A-Z
              </button>
              <button
                onClick={() => setSortBy("price")}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  sortBy === "price"
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                Price
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-secondary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedItems.map((item, index) => (
              <div
                key={item.id}
                className="group animate-fade-in rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-secondary/20 hover:border-primary/50"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 bg-primary text-foreground px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                    <button className="bg-primary hover:bg-accent text-white p-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group/btn">
                      <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary via-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order Your Favorites?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Call us to place your pre-order today!
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
