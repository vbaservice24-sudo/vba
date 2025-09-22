import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Phone, CheckCircle, Clock, MapPin, Zap } from "lucide-react";

const BikeBreakdown = () => {
  const bikeServices = [
    {
      icon: <Wrench className="w-8 h-8 text-workshop-orange" />,
      title: "Emergency Bike Towing",
      description: "Safe and secure towing service for all types of motorcycles and scooters",
      features: ["Professional towing equipment", "Damage-free transport", "Quick response time", "All bike types supported"]
    },
    {
      icon: <Zap className="w-8 h-8 text-workshop-orange" />,
      title: "Starting Trouble",
      description: "Expert diagnosis and repair for bikes that won't start",
      features: ["Battery testing", "Ignition system check", "Fuel system diagnosis", "On-spot repairs"]
    },
    {
      icon: <Zap className="w-8 h-8 text-workshop-orange" />,
      title: "Circuit Problems",
      description: "Electrical system troubleshooting and repairs",
      features: ["Wiring inspection", "Fuse replacement", "Lighting issues", "Horn and indicator repair"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-workshop-orange" />,
      title: "Petrol Jam & Fuel Issues",
      description: "Fuel system cleaning and repair services",
      features: ["Carburetor cleaning", "Fuel line inspection", "Tank cleaning", "Fuel pump repair"]
    },
    {
      icon: <Zap className="w-8 h-8 text-workshop-orange" />,
      title: "Spark Plug Problems",
      description: "Spark plug diagnosis, cleaning, and replacement",
      features: ["Plug inspection", "Gap adjustment", "New plug installation", "Engine tuning"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-workshop-orange" />,
      title: "Engine Problems",
      description: "Comprehensive engine diagnosis and repair",
      features: ["Engine diagnostics", "Oil system check", "Cooling system repair", "Performance optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Professional <span className="text-workshop-orange">Bike Breakdown</span> Service
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Expert motorcycle and scooter breakdown assistance available 24/7. 
            From electrical issues to engine problems, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-workshop-orange hover:bg-workshop-orange/90 shadow-orange text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Book Service Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Banner */}
      <section className="bg-workshop-orange py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white text-center">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Nationwide Coverage</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Expert Mechanics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Comprehensive <span className="text-workshop-orange">Bike Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our certified mechanics are equipped to handle all types of motorcycle and scooter breakdowns. 
              Quick diagnosis, professional repairs, and reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikeServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-workshop hover:shadow-orange transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-workshop-yellow flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How It <span className="text-workshop-orange">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to get your bike back on the road
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">1. Contact Us</h3>
              <p className="text-muted-foreground">
                Call our 24/7 helpline or submit a request through our contact form
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">2. Share Location</h3>
              <p className="text-muted-foreground">
                Provide your exact location and describe the bike problem
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">3. Expert Arrives</h3>
              <p className="text-muted-foreground">
                Our certified mechanic reaches your location with necessary tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">4. Problem Solved</h3>
              <p className="text-muted-foreground">
                Quick diagnosis and repair to get you back on the road safely
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Bike Breakdown? We're Here to Help!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Don't let a breakdown ruin your day. Get professional assistance 
            from certified mechanics who understand your bike.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-workshop-orange hover:bg-workshop-orange/90 text-white shadow-orange text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Request Help Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BikeBreakdown;