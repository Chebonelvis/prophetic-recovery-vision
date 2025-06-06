
import { BookOpen, Heart, Zap, Eye } from "lucide-react";

const EventFocus = () => {
  const focusAreas = [
    {
      icon: BookOpen,
      title: "The Word",
      speaker: "Bishop Akama",
      description: "Foundation building through powerful biblical teaching and revelation",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Heart,
      title: "Healing & Deliverance", 
      speaker: "Apostle Ng'ang'a",
      description: "Supernatural healing and freedom from every form of bondage",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Zap,
      title: "Intercessory",
      speaker: "Pastor T. Mwangi", 
      description: "Strategic prayer and intercession for breakthrough and revival",
      gradient: "from-purple-600 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      icon: Eye,
      title: "Prophetic",
      speaker: "Prophet Johnson Selman",
      description: "Divine strategy and prophetic direction for your destiny",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      isMain: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event Focus Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four powerful streams of ministry flowing together for complete recovery
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${area.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 ${
                area.isMain ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {area.isMain && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    MAIN FOCUS
                  </span>
                </div>
              )}

              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${area.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent mb-4`}>
                  {area.speaker}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${area.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Complete Recovery Experience</h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto opacity-90">
              These four powerful streams will flow together on June 8th, 2025, creating an atmosphere 
              where every area of your life experiences divine recovery and restoration.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold text-lg px-12 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Experience All Four Streams
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventFocus;
