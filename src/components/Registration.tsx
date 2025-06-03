
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Calendar, Clock, MapPin, Users, Phone, Mail, User } from "lucide-react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    church: "",
    attendeeCount: "1"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint when backend is ready
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Registration data:', formData);
      
      toast.success("Registration successful! We'll send you event updates via email.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        church: "",
        attendeeCount: "1"
      });
      
    } catch (error) {
      console.error('Registration error:', error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Place
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Register now for Recovery 2025 and be part of this historic gathering. 
            While entry is free, registration helps us prepare for your experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Event Details Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-400">Event Details</CardTitle>
              <CardDescription className="text-gray-300">
                Everything you need to know about Recovery 2025
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-400/20 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Date</h4>
                  <p className="text-gray-300">Sunday, 8th June 2025</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-400/20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Time</h4>
                  <p className="text-gray-300">Gates open at 8:00 AM</p>
                  <p className="text-sm text-gray-400">Event: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-400/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Venue</h4>
                  <p className="text-gray-300">Tomorrow Kenyatta Stadium</p>
                  <p className="text-sm text-gray-400">Mamboleo, Kisumu County</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-400/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Capacity</h4>
                  <p className="text-gray-300">50,000+ Expected Attendees</p>
                  <p className="text-sm text-gray-400">Overflow arrangements available</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg text-black">
                <p className="font-bold text-lg">100% FREE ENTRY</p>
                <p className="text-sm">No hidden costs • No tickets required</p>
              </div>
            </CardContent>
          </Card>

          {/* Registration Form */}
          <Card className="bg-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Register Now</CardTitle>
              <CardDescription>
                Complete the form below to register for Recovery 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Full Name *</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Address *</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Phone Number *</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="church">Church/Ministry (Optional)</Label>
                  <Input
                    id="church"
                    name="church"
                    type="text"
                    value={formData.church}
                    onChange={handleInputChange}
                    placeholder="Enter your church or ministry"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attendeeCount">Number of Attendees</Label>
                  <Input
                    id="attendeeCount"
                    name="attendeeCount"
                    type="number"
                    min="1"
                    max="50"
                    value={formData.attendeeCount}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg"
                >
                  {isSubmitting ? "Registering..." : "Register for Recovery 2025"}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By registering, you agree to receive event updates and important information about Recovery 2025.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* API Integration Note */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-yellow-300 text-sm">
              <strong>For Developers:</strong> Registration form ready for backend integration. 
              Update the API endpoint in the handleSubmit function when backend is ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
