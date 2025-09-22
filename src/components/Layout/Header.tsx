import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Phone, Shield, Star } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="VBA Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-foreground">VBA</h1>
            <p className="text-xs text-workshop-orange">
              Vehicle Breakdown Assistant
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/bike-breakdown"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Bike Service
          </Link>
          <Link
            to="/car-breakdown"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Car Service
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/reviews"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Reviews
          </Link>
          <Link
            to="/admin"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Admin
          </Link>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 text-workshop-orange">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">24/7 Emergency</span>
          </div>
          <Link to="/reviews">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex text-workshop-orange border-workshop-orange"
            >
              <Star className="w-4 h-4 mr-2" />
              Reviews
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Shield className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-gradient-primary hover:opacity-90 shadow-orange">
              <Wrench className="w-4 h-4 mr-2" />
              Get Help
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
