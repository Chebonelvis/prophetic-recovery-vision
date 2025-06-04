import { Calendar, MapPin, Ticket } from "lucide-react";
import BackgroundVideo from "./BackgroundVideo";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Video */}
      <BackgroundVideo />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-16">
        <div className="flex flex-col items-center text-center text-white">
          {/* Main Event Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              RECOVERY
            </h1>
            <div className="text-4xl md:text-6xl font-light text-yellow-400 mb-2">
              2025
            </div>
            <div className="text-xl md:text-2xl font-light text-gray-300 italic">
              "Divine Restoration • Prophetic Strategy • Kingdom Breakthrough"
            </div>
          </div>

          {/* Event Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Calendar className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Date</h3>
              <p className="text-yellow-400 font-bold text-xl">8th June 2025</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-yellow-400 font-bold">Tomorrow Kenyatta Stadium</p>
              <p className="text-sm text-gray-300">Mamboleo, Kisumu</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Ticket className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Entry</h3>
              <p className="text-yellow-400 font-bold text-xl">FREE</p>
              <p className="text-sm text-gray-300">No cost • Open to all</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Join thousands as we gather for a divine encounter that will reshape destinies, 
              restore what was lost, and release prophetic strategy for the year ahead.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-lg px-12 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Register Now - It's Free!
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange-500 rounded-full animate-pulse opacity-40 delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-purple-400 rounded-full animate-pulse opacity-30 delay-2000"></div>
    </div>
  );
};

export default Hero;
