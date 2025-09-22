import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-workshop-dark border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-workshop-orange">VBA</h3>
            <p className="text-muted-foreground text-sm">
              Professional vehicle breakdown assistance available 24/7. 
              Quick response, reliable service, and expert mechanics.
            </p>
            <div className="flex items-center space-x-2 text-workshop-yellow">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">24 Hours Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link 
                to="/bike-breakdown" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Bike Services
              </Link>
              <Link 
                to="/car-breakdown" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Car Services
              </Link>
              <Link 
                to="/contact" 
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Services</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Emergency Towing</p>
              <p>• Engine Diagnostics</p>
              <p>• Battery Jump Start</p>
              <p>• Tire Replacement</p>
              <p>• Fuel Delivery</p>
              <p>• Roadside Assistance</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-workshop-orange" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-workshop-orange" />
                <span className="text-sm text-muted-foreground">help@vba.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-workshop-orange" />
                <span className="text-sm text-muted-foreground">Nationwide Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Vehicle Breakdown Assistant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;