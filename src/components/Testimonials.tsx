
import { Quote } from "lucide-react";

const Testimonials = () => {
  const quotes = [
    {
      text: "Prophecy is God's blueprint for your footprint.",
      author: "Prophet's Wisdom",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      text: "Every prophecy is tied to a battle or warfare.",
      author: "Kingdom Strategy",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      text: "Sometimes you need strategy, not energy. Strategy is stronger.",
      author: "Divine Intelligence",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Words of Wisdom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful insights from those who understand the prophetic realm and kingdom strategy
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${quote.gradient} mb-6`}>
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl font-medium text-gray-900 mb-6 leading-relaxed">
                "{quote.text}"
              </blockquote>

              {/* Author */}
              <div className={`text-sm font-semibold bg-gradient-to-r ${quote.gradient} bg-clip-text text-transparent`}>
                — {quote.author}
              </div>

              {/* Decorative Border */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${quote.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Additional Inspirational Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Ready for Your Breakthrough?</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              These powerful truths await you at Recovery 2025. Come hungry, come expectant, 
              and prepare to receive the prophetic strategy that will transform your destiny.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-yellow-400 font-semibold">
              <span className="bg-white/10 px-4 py-2 rounded-full">#Recovery2025</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">#PropheticStrategy</span>
              <span className="bg-white/10 px-4 py-2 rounded-full">#DivineRestoration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
