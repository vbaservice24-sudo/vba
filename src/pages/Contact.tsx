import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    issueDescription: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestDate, setRequestDate] = useState<string>("");
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({ ...prev, location: `${latitude}, ${longitude}` }));
          toast({
            title: "Location captured",
            description: "Your location has been automatically added to the form.",
          });
        },
        (error) => {
          console.error("Location error:", error);
          toast({ title: "Error", description: "Could not get location.", variant: "destructive" });
        }
      );
    } else {
      toast({ title: "Not Supported", description: "Geolocation not supported.", variant: "destructive" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestDate) {
      toast({ title: "Date Required", description: "Please select request date.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const photoURL = null; // photo upload removed

      const requestData = {
        requestNumber: `VBA-${Date.now()}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        vehicleType: formData.vehicleType,
        issueDescription: formData.issueDescription,
        location: formData.location,
        photo: photoURL,
        status: "pending",
        timestamp: serverTimestamp(),
        requestDate,
      };

      const docRef = await addDoc(collection(db, "requests"), requestData);

      // ------------------- Send Email to User -------------------
      if (formData.email) {
        await emailjs.send(
          "service_cel88cp",
          "template_mvu90qj",
          {
            email: formData.email,
            reply_to: "vbaservice24@gmail.com",
            message: `Hi ${formData.name}, your breakdown request has been received and is pending admin approval.`
          },
          "J6x9uDVdIYO2GXLUW"
        );
      }

      toast({ title: "Request Submitted", description: "Your breakdown request has been sent." });

      // Reset form
      setFormData({ name: "", phone: "", email: "", vehicleType: "", issueDescription: "", location: "" });
      setRequestDate("");

    } catch (error) {
      console.error("Form submission error:", error);
      toast({ title: "Submission Failed", description: "Error submitting your request.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get <span className="text-workshop-orange">Emergency Help</span> Now
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Fill out the form below and our expert mechanics will be dispatched to your location. 
            Available 24/7 for all vehicle breakdown emergencies.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border shadow-workshop">
              <CardHeader>
                <CardTitle className="text-2xl text-workshop-orange flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Emergency Breakdown Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Request Date */}
                  <div className="space-y-2">
                    <Label htmlFor="requestDate" className="text-foreground">
                      Request Date *
                    </Label>
                    <Input
                      id="requestDate"
                      type="date"
                      value={requestDate}
                      onChange={(e) => setRequestDate(e.target.value)}
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>

                  {/* Name, Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="bg-input border-border text-foreground"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className="bg-input border-border text-foreground"
                        required
                      />
                    </div>
                  </div>

                  {/* Email, Vehicle Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicleType">Vehicle Type</Label>
                      <Select onValueChange={(value) => handleInputChange("vehicleType", value)}>
                        <SelectTrigger className="bg-input border-border text-foreground">
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="motorcycle">Motorcycle</SelectItem>
                          <SelectItem value="scooter">Scooter</SelectItem>
                          <SelectItem value="car">Car</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="truck">Truck</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Current Location</Label>
                    <div className="flex gap-2">
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="Enter your current location or address"
                        className="bg-input border-border text-foreground flex-1"
                      />
                      <Button type="button" onClick={getCurrentLocation} variant="outline" className="px-4">
                        <MapPin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Issue Description */}
                  <div className="space-y-2">
                    <Label htmlFor="issue" className="text-foreground">
                      Describe the Problem *
                    </Label>
                    <Textarea
                      id="issue"
                      value={formData.issueDescription}
                      onChange={(e) => handleInputChange("issueDescription", e.target.value)}
                      placeholder="Please describe the issue with your vehicle in detail..."
                      className="bg-input border-border text-foreground min-h-[120px]"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-orange text-lg py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Phone className="w-5 h-5 mr-2" />
                        Submit Emergency Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & What Happens Next */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border shadow-workshop">
              <CardHeader>
                <CardTitle className="text-xl text-workshop-orange">Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-workshop-orange" />
                  <div>
                    <p className="font-semibold text-foreground">24/7 Hotline</p>
                    <p className="text-muted-foreground">+91 8489459699</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-workshop-orange" />
                  <div>
                    <p className="font-semibold text-foreground">Email Support</p>
                    <p className="text-muted-foreground">vbaservice24@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-workshop-orange" />
                  <div>
                    <p className="font-semibold text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Average 30 minutes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-workshop">
              <CardHeader>
                <CardTitle className="text-xl text-workshop-orange">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-workshop-orange rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {step === 1 && "We'll review your request immediately"}
                      {step === 2 && "Admin will accept/reject within 5 minutes"}
                      {step === 3 && "If accepted, mechanic dispatched to your location"}
                      {step === 4 && "You'll receive updates via phone and email"}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-workshop-orange/10 border-workshop-orange">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-workshop-orange mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-workshop-orange mb-2">
                    24 Hours Available Service
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Day or night, weekends or holidays - 
                    our emergency response team is always ready to help.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
