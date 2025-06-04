
import Hero from "@/components/Hero";
import EventDescription from "@/components/EventDescription";
import Scripture from "@/components/Scripture";
import Testimonials from "@/components/Testimonials";
import Registration from "@/components/Registration";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventDescription />
      <Scripture />
      <Testimonials />
      <Registration />
      
      {/* Background Music Component */}
      <BackgroundMusic />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Recovery 2025
          </h3>
          <p className="text-gray-400 mb-4">
            8th June 2025 • Tomorrow Kenyatta Stadium, Mamboleo - Kisumu • Free Entry
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>#Recovery2025</span>
            <span>#PropheticStrategy</span>
            <span>#DivineRestoration</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
