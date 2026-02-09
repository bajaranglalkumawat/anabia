import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-white">
      <Header />
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="text-center px-4 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary opacity-20 mb-4">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Oops! Page Not Found
            </h2>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or deleted. Don't worry, let's get you back on track!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-primary hover:bg-accent text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
            >
              Return to Home
            </Link>
            <Link
              to="/menu"
              className="inline-block border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View Menu
            </Link>
          </div>

          <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg inline-block">
            <p className="text-muted-foreground mb-4">
              Need help? Contact us:
            </p>
            <p className="text-primary font-bold text-lg">
              +1 (234) 567-8900
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
