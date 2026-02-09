import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Header from "@/components/Header";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "appetizers", "main-course", "breads", "desserts"];

  const menuItems = [
    // Appetizers
    {
      id: 1,
      category: "appetizers",
      name: "Samosa (2 pieces)",
      price: "$4.99",
      description: "Crispy fried pastry with spiced potato and peas filling",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      category: "appetizers",
      name: "Paneer Pakora",
      price: "$6.99",
      description: "Cottage cheese fritters with aromatic spice coating",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      category: "appetizers",
      name: "Spring Rolls (3 pieces)",
      price: "$5.99",
      description: "Crispy rolls with mixed vegetable filling",
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      category: "appetizers",
      name: "Chicken Tikka",
      price: "$7.99",
      description: "Marinated chicken chunks grilled to perfection",
      image: "https://images.unsplash.com/photo-1631452614221-cb9b66bb8151?w=400&h=400&fit=crop",
    },

    // Main Course
    {
      id: 5,
      category: "main-course",
      name: "Butter Chicken",
      price: "$13.99",
      description: "Tender chicken in creamy tomato-based sauce",
      image: "https://images.unsplash.com/photo-1585521199015-67b1365ef552?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      category: "main-course",
      name: "Paneer Tikka Masala",
      price: "$12.99",
      description: "Cottage cheese in aromatic spiced cream sauce",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
    },
    {
      id: 7,
      category: "main-course",
      name: "Dal Makhani",
      price: "$10.99",
      description: "Creamy lentil curry infused with butter",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      category: "main-course",
      name: "Tandoori Chicken",
      price: "$14.99",
      description: "Half chicken marinated and cooked in traditional tandoor",
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?w=400&h=400&fit=crop",
    },
    {
      id: 9,
      category: "main-course",
      name: "Biryani Special Mix",
      price: "$15.99",
      description: "Fragrant basmati rice with mixed meat and vegetables",
      image: "https://images.unsplash.com/photo-1631452614221-cb9b66bb8151?w=400&h=400&fit=crop",
    },
    {
      id: 10,
      category: "main-course",
      name: "Rogan Josh Lamb",
      price: "$15.99",
      description: "Tender lamb in aromatic tomato-based curry",
      image: "https://images.unsplash.com/photo-1585521199015-67b1365ef552?w=400&h=400&fit=crop",
    },
    {
      id: 11,
      category: "main-course",
      name: "Chole Bhature",
      price: "$11.99",
      description: "Spiced chickpeas with deep-fried bread",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
    },
    {
      id: 12,
      category: "main-course",
      name: "Palak Paneer",
      price: "$11.99",
      description: "Spinach curry with cottage cheese cubes",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    },

    // Breads
    {
      id: 13,
      category: "breads",
      name: "Naan",
      price: "$2.99",
      description: "Soft and fluffy traditional Indian bread",
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?w=400&h=400&fit=crop",
    },
    {
      id: 14,
      category: "breads",
      name: "Garlic Naan",
      price: "$3.49",
      description: "Naan topped with garlic and butter",
      image: "https://images.unsplash.com/photo-1631452614221-cb9b66bb8151?w=400&h=400&fit=crop",
    },
    {
      id: 15,
      category: "breads",
      name: "Roti",
      price: "$1.99",
      description: "Whole wheat Indian flatbread",
      image: "https://images.unsplash.com/photo-1585521199015-67b1365ef552?w=400&h=400&fit=crop",
    },
    {
      id: 16,
      category: "breads",
      name: "Puri",
      price: "$3.99",
      description: "Deep-fried puffy Indian bread",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
    },

    // Desserts
    {
      id: 17,
      category: "desserts",
      name: "Gulab Jamun",
      price: "$4.99",
      description: "Soft milk balls soaked in sweet syrup",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    },
    {
      id: 18,
      category: "desserts",
      name: "Kheer",
      price: "$3.99",
      description: "Creamy rice pudding with cardamom and nuts",
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?w=400&h=400&fit=crop",
    },
    {
      id: 19,
      category: "desserts",
      name: "Ras Malai",
      price: "$5.99",
      description: "Soft paneer cakes in sweet condensed milk",
      image: "https://images.unsplash.com/photo-1631452614221-cb9b66bb8151?w=400&h=400&fit=crop",
    },
    {
      id: 20,
      category: "desserts",
      name: "Mango Kulfi",
      price: "$3.99",
      description: "Traditional frozen mango dessert on a stick",
      image: "https://images.unsplash.com/photo-1585521199015-67b1365ef552?w=400&h=400&fit=crop",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const categoryLabels: { [key: string]: string } = {
    all: "All Items",
    appetizers: "Appetizers",
    "main-course": "Main Course",
    breads: "Breads",
    desserts: "Desserts",
  };

  return (
    <div className="bg-white">
      <Header />

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of authentic Indian dishes
              prepared with love and traditional recipes.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/40"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-secondary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group animate-fade-in rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>

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

      {/* Special Notes Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 className="text-xl font-bold mb-2">Authentic Recipes</h3>
              <p>Traditional recipes passed down through generations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
              <p>Only the finest, freshest ingredients sourced daily</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">✓</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p>Hot and fresh meals delivered to your door</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Order?
          </h2>
          <a
            href="tel:+1234567890"
            className="inline-block bg-primary hover:bg-accent text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
          >
            Call Now: +1 (234) 567-8900
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
