
import { Calendar, MapPin, Ticket } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
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
