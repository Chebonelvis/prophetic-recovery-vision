
import { Heart, Target, Users, Zap } from "lucide-react";

const About = () => {
  const missionPoints = [
    {
      icon: Heart,
      title: "Ignite Revival",
      description: "Stirring hearts for passionate worship and deeper relationship with God"
    },
    {
      icon: Target, 
      title: "Restore Destinies",
      description: "Recovering lost dreams and divine purposes through prophetic strategy"
    },
    {
      icon: Zap,
      title: "Release Power",
      description: "Demonstrating God's miraculous power through healing and deliverance"
    },
    {
      icon: Users,
      title: "Unite Believers",
      description: "Bringing together the body of Christ for corporate breakthrough"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Recovery 2025
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold italic">"Inspired by the Book of Joel, our mission is to ignite revival and ensure total recovery of destinies, dreams, and divine purpose."</span>
              </p>
              <p className="text-gray-600">
                Recovery 2025 is more than an event - it's a divine appointment where heaven meets earth, 
                and supernatural restoration becomes reality for every participant.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Committee Leaders</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="font-semibold">Bishop Akama</span>
                  <span className="text-gray-600">- Tent of Testimonies International</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold">Apostle Ng'ang'a</span>
                  <span className="text-gray-600">- Neno Evangelism Centre</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="font-semibold">Pastor T. Mwangi</span>
                  <span className="text-gray-600">- Life Church International</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h4>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Join the Recovery Movement</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Be part of this historic gathering where thousands will experience divine restoration, 
              receive prophetic strategy, and witness kingdom breakthrough in an unprecedented way.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-yellow-400 font-semibold">
              <span className="bg-white/10 px-4 py-2 rounded-full">#Recovery2025</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">#DivineRestoration</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">#PropheticStrategy</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">#KingdomBreakthrough</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
