
import { Clock, MapPin, User } from "lucide-react";

const Sessions = () => {
  const sessions = [
    {
      time: "09:00 - 11:00 AM",
      title: "Morning Session",
      speaker: "Bishop Fred Akama",
      topic: "The Word - Foundation for Recovery",
      description: "Building upon the solid foundation of God's Word for supernatural recovery",
      speakerImage: "/lovable-uploads/bfb7e441-7727-44df-b45e-2d87bcdb9d5d.png"
    },
    {
      time: "11:30 AM - 01:00 PM", 
      title: "Mid-Morning Session",
      speaker: "Apostle Ng'ang'a",
      topic: "Healing & Deliverance",
      description: "Breaking chains and receiving divine healing and deliverance",
      speakerImage: "/lovable-uploads/d85e6b12-413d-4d1f-b5c4-18e4ca7de342.png"
    },
    {
      time: "02:00 - 04:00 PM",
      title: "Afternoon Session", 
      speaker: "Pastor T. Mwangi",
      topic: "Intercessory Prayer",
      description: "Strategic intercession for breakthrough and recovery",
      speakerImage: "/lovable-uploads/dd2c247d-85b9-4ea4-b8fe-ce0ad3dbd967.png"
    },
    {
      time: "05:00 - 07:00 PM",
      title: "Evening Session",
      speaker: "Prophet Johnson Selman",
      topic: "Prophetic Strategy",
      description: "Receiving divine blueprints and prophetic direction for 2025",
      speakerImage: "/lovable-uploads/99bfefdf-04ce-4649-abd5-6d291fd69409.png",
      isMainGuest: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event Sessions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four powerful sessions designed to bring complete recovery and restoration
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border overflow-hidden ${
                session.isMainGuest 
                  ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50' 
                  : 'border-gray-100'
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${session.speakerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {session.isMainGuest && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    MAIN GUEST
                  </span>
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-full ${
                    session.isMainGuest 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600'
                  }`}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{session.title}</h3>
                    <p className="text-gray-600">{session.time}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <span className="font-semibold text-gray-900">{session.speaker}</span>
                  </div>
                  <h4 className="text-lg font-bold text-purple-700 mb-2">{session.topic}</h4>
                  <p className="text-gray-600">{session.description}</p>
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 w-full h-1 ${
                session.isMainGuest 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sessions;
