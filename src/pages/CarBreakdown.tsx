import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Phone, CheckCircle, Clock, MapPin, Car, Battery, Fuel } from "lucide-react";

const CarBreakdown = () => {
  const carServices = [
    {
      icon: <Wrench className="w-8 h-8 text-workshop-orange" />,
      title: "Professional Car Towing",
      description: "Safe and secure towing service for all car types and sizes",
      features: ["Flatbed towing available", "Damage-free transport", "Insurance covered", "Long-distance towing"]
    },
    {
      icon: <Battery className="w-8 h-8 text-workshop-orange" />,
      title: "Battery Jump Start",
      description: "Quick battery boost and charging services",
      features: ["Dead battery jump start", "Battery testing", "Battery replacement", "Charging system check"]
    },
    {
      icon: <Car className="w-8 h-8 text-workshop-orange" />,
      title: "Engine Diagnostics",
      description: "Advanced computerized engine diagnosis and repair",
      features: ["OBD scanning", "Error code analysis", "Performance testing", "Engine tuning"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-workshop-orange" />,
      title: "Tire Services",
      description: "Complete tire repair and replacement services",
      features: ["Flat tire repair", "Tire replacement", "Wheel balancing", "Spare tire installation"]
    },
    {
      icon: <Fuel className="w-8 h-8 text-workshop-orange" />,
      title: "Emergency Fuel Delivery",
      description: "On-site fuel delivery when you run out of gas",
      features: ["Petrol delivery", "Diesel delivery", "Fuel system service", "Tank cleaning"]
    },
    {
      icon: <Car className="w-8 h-8 text-workshop-orange" />,
      title: "Lockout Service",
      description: "Professional car lockout assistance",
      features: ["Key locked inside", "Broken key extraction", "Lock repair", "Emergency entry"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-workshop-orange" />,
      title: "Cooling System Repair",
      description: "Radiator and cooling system maintenance",
      features: ["Radiator repair", "Coolant refill", "Hose replacement", "Thermostat service"]
    },
    {
      icon: <Car className="w-8 h-8 text-workshop-orange" />,
      title: "Brake System Service", 
      description: "Complete brake inspection and repair services",
      features: ["Brake pad inspection", "Brake fluid check", "Emergency repairs", "Brake system bleeding"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Expert <span className="text-workshop-orange">Car Breakdown</span> Service
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Professional automotive breakdown assistance for all car makes and models. 
            From engine troubles to flat tires, our certified mechanics are ready to help.
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
              <span className="font-semibold">ASE Certified Mechanics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Complete <span className="text-workshop-orange">Car Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team of ASE-certified mechanics provides comprehensive car breakdown services. 
              Advanced diagnostic tools, quality parts, and professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carServices.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-workshop hover:shadow-orange transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-workshop-yellow flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Emergency <span className="text-workshop-orange">Response</span> Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Immediate assistance for critical car breakdowns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border shadow-workshop text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-workshop-orange">Fast Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Average response time of 30 minutes for emergency calls
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Highway breakdowns</li>
                  <li>• Accident assistance</li>
                  <li>• Safety-first approach</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-workshop text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-workshop-orange">On-Site Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Many issues can be fixed right at your location
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Battery replacement</li>
                  <li>• Tire changes</li>
                  <li>• Minor engine repairs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-workshop text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-workshop-orange">Safe Towing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional towing to your preferred service center
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Flatbed towing</li>
                  <li>• All-wheel drive safe</li>
                  <li>• Insurance coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How We <span className="text-workshop-orange">Help You</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional car breakdown assistance in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">1. Emergency Call</h3>
              <p className="text-muted-foreground">
                Contact our 24/7 emergency hotline with your car's issue and location
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">2. Location & Details</h3>
              <p className="text-muted-foreground">
                Provide your GPS location and describe the car problem you're experiencing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">3. Expert Diagnosis</h3>
              <p className="text-muted-foreground">
                Our certified mechanic arrives with diagnostic tools and equipment
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-workshop-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">4. Solution Delivered</h3>
              <p className="text-muted-foreground">
                On-site repair or safe towing to get your car back in working condition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Car Trouble? We're Your Solution!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Don't let car problems leave you stranded. Get immediate professional 
            assistance from our team of certified automotive experts.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-workshop-orange hover:bg-workshop-orange/90 text-white shadow-orange text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Request Emergency Help
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CarBreakdown;