import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Clock, Shield, Users, Phone, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            24/7 Vehicle Breakdown
            <span className="block text-workshop-orange">Emergency Service</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Professional roadside assistance for cars and bikes. Quick response, 
            expert mechanics, and reliable service when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-orange text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Get Emergency Help
              </Button>
            </Link>
            <Link to="#services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
                <Wrench className="w-5 h-5 mr-2" />
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 24/7 Service Banner */}
      <section className="bg-workshop-orange py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-white">
            <Clock className="w-5 h-5" />
            <span className="font-bold text-lg">24 HOURS AVAILABLE SERVICE</span>
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* About the Work Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              About Our <span className="text-workshop-orange">Breakdown Service</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We understand that vehicle breakdowns can happen anytime, anywhere. 
              Our expert team provides fast, reliable, and professional assistance 
              to get you back on the road safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border shadow-workshop">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-workshop-orange mx-auto mb-4" />
                <CardTitle className="text-foreground">Reliable Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trusted by thousands of customers with proven track record 
                  of quick and effective roadside assistance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-workshop">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-workshop-orange mx-auto mb-4" />
                <CardTitle className="text-foreground">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Round-the-clock emergency service. Day or night, 
                  weekends or holidays - we're always ready to help.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-workshop">
              <CardHeader className="text-center">
                <Wrench className="w-12 h-12 text-workshop-orange mx-auto mb-4" />
                <CardTitle className="text-foreground">Expert Mechanics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Certified and experienced mechanics equipped with 
                  modern tools and diagnostic equipment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-workshop">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-workshop-orange mx-auto mb-4" />
                <CardTitle className="text-foreground">Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your safety and satisfaction are our priority. 
                  Transparent pricing and quality service guaranteed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-workshop-orange">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive breakdown assistance for all types of vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-border shadow-workshop hover:shadow-orange transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-workshop-orange flex items-center">
                  <Wrench className="w-6 h-6 mr-3" />
                  Bike Breakdown Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Emergency bike towing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Starting trouble diagnosis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Circuit and electrical problems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Fuel system issues</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Spark plug replacement</span>
                  </div>
                </div>
                <Link to="/bike-breakdown">
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    View Bike Services
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-workshop hover:shadow-orange transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-workshop-orange flex items-center">
                  <Wrench className="w-6 h-6 mr-3" />
                  Car Breakdown Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Professional car towing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Battery jump start service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Engine diagnostics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Tire replacement & repair</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-workshop-yellow" />
                    <span className="text-muted-foreground">Emergency fuel delivery</span>
                  </div>
                </div>
                <Link to="/car-breakdown">
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    View Car Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Need Help Right Now?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Don't wait! Get professional roadside assistance within minutes. 
            Our team is ready to help you 24/7.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-workshop-orange hover:bg-workshop-orange/90 text-white shadow-orange text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Contact Support Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;