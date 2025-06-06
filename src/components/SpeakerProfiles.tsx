
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SpeakerProfiles = () => {
  const speakers = [
    {
      name: "Bishop Fred Akama",
      title: "Tent of Testimonies International",
      role: "Morning Session Speaker",
      bio: "Bishop Fred Akama is a seasoned minister with over 20 years of experience in pastoral ministry. He leads Tent of Testimonies International and is known for his profound teaching on the Word of God and spiritual foundations.",
      focus: "The Word",
      image: "/lovable-uploads/c4f8be7f-c1b3-45fd-83ff-63b6532cb451.png"
    },
    {
      name: "Apostle Ng'ang'a",
      title: "Neno Evangelism Centre", 
      role: "Mid-Morning Speaker",
      bio: "Apostle Ng'ang'a is a powerful evangelist and apostle known for his healing and deliverance ministry. He has ministered across Kenya and internationally, bringing freedom to many through the power of God.",
      focus: "Healing & Deliverance",
      image: "/lovable-uploads/1d36484d-ddf9-4385-9189-b7443c50f562.png"
    },
    {
      name: "Pastor T. Mwangi",
      title: "Life Church International",
      role: "Afternoon Speaker", 
      bio: "Pastor T. Mwangi is a dedicated intercessor and pastor who leads Life Church International. He is passionate about prayer and intercession, having led numerous prayer movements and revival meetings.",
      focus: "Intercessory Prayer",
      image: "/lovable-uploads/eb638daf-8f6a-42e0-88a9-1b4b0cfe08d6.png"
    },
    {
      name: "Prophet Johnson Selman",
      title: "Eternity Network International (ENI)",
      role: "Main Guest & Evening Speaker",
      bio: "Prophet Johnson Selman is a globally respected voice in the prophetic and apostolic movement. He is the founder of Eternity Network International (ENI) and is known for transforming lives through deep revelation, healing, and the prophetic word.",
      focus: "Prophetic Strategy",
      image: "/lovable-uploads/38da47b9-2329-49ee-91e4-5244f978b6a7.png",
      isMainGuest: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Speakers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Anointed servants of God coming together to bring you breakthrough and restoration
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <Card 
              key={index}
              className={`group relative bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 ${
                speaker.isMainGuest ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {speaker.isMainGuest && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    GUEST OF HONOR
                  </span>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${
                    speaker.isMainGuest 
                      ? 'from-yellow-400 to-orange-500' 
                      : 'from-purple-400 to-blue-400'
                  } p-1`}>
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{speaker.name}</CardTitle>
                <CardDescription className="text-yellow-400 font-semibold">
                  {speaker.title}
                </CardDescription>
                <p className="text-sm text-gray-300">{speaker.role}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className={`text-center p-3 rounded-lg ${
                  speaker.isMainGuest 
                    ? 'bg-yellow-400/20 border border-yellow-400/30' 
                    : 'bg-purple-400/20 border border-purple-400/30'
                }`}>
                  <span className="text-sm font-bold">{speaker.focus}</span>
                </div>
                
                <p className="text-sm text-gray-300 leading-relaxed">
                  {speaker.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerProfiles;
