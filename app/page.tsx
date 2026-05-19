import React from "react";

export const metadata = {
  title: "MAX Restaurant - Order Food Online",
  description:
    "Best restaurant website with online ordering, food menu, reservations, and fast delivery in Baghdad.",
  keywords: [
    "restaurant",
    "food delivery",
    "online ordering",
    "max restaurant",
    "pizza",
    "burger",
    "baghdad food",
  ],
  openGraph: {
    title: "MAX Restaurant",
    description:
      "Order delicious food online - burgers, pizza, shawarma and more.",
    type: "website",
  },
};

export default function RestaurantWebsite() {
  const foods = [
    {
      name: "Burger Deluxe",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
      desc: "Juicy beef burger with cheese and fries",
    },
    {
      name: "Italian Pizza",
      price: "$12.50",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
      desc: "Fresh pizza with mozzarella cheese",
    },
    {
      name: "Chicken Shawarma",
      price: "$7.25",
      image:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1200&auto=format&fit=crop",
      desc: "Arabic shawarma with garlic sauce",
    },
    {
      name: "Fresh Pasta",
      price: "$10.75",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
      desc: "Creamy pasta with herbs and parmesan",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <h1 className="text-3xl font-bold text-orange-500">MAX RESTAURANT</h1>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-semibold transition">
          Order Now
        </button>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-5 max-w-4xl">
          <h1 className="text-6xl font-extrabold mb-6">
            Delicious Food Delivered Fast
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Order food online and enjoy fast delivery in your city.
          </p>
          <button className="bg-orange-500 px-8 py-4 rounded-2xl font-bold">
            View Menu
          </button>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-8">
        <h2 className="text-4xl text-center mb-10">Menu</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {foods.map((food, i) => (
            <div key={i} className="bg-zinc-900 rounded-xl overflow-hidden">
              <img
                src={food.image}
                className="h-48 w-full object-cover"
                alt={food.name}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{food.name}</h3>
                <p className="text-gray-400">{food.desc}</p>
                <p className="text-orange-400 font-bold mt-2">
                  {food.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-400">
        © 2026 MAX Restaurant
      </footer>
    </main>
  );
}