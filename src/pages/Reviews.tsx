import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

export default function ReviewPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    review: "",
    rating: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle rating selection
  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_cel88cp", // ✅ your service ID
        "template_mvu90qj", // ✅ your template ID
        {
          email: "vbaservice24@gmail.com", // ✅ admin email (receiver)
          message: `📢 New Customer Review Received:

Name: ${formData.name}
Phone: ${formData.phone}
Rating: ${formData.rating}/5
Review: ${formData.review}
          `,
          reply_to: formData.phone || "noreply@vba.com",
        },
        "J6x9uDVdIYO2GXLUW" // ✅ your public key
      );

      toast({
        title: "✅ Thank You!",
        description: "Your review has been submitted successfully.",
      });

      // Reset form
      setFormData({ name: "", phone: "", review: "", rating: 0 });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "❌ Submission Failed",
        description: "Unable to send your review right now.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-lg mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Share Your Review
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Rating */}
            <div>
              <Label>Rating</Label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`p-2 rounded-full ${
                      formData.rating >= star
                        ? "bg-yellow-400"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleRatingChange(star)}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            {/* Review */}
            <div>
              <Label htmlFor="review">Review</Label>
              <Textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
