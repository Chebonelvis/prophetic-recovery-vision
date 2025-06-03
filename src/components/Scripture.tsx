
const Scripture = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm10 0c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Foundational Promise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
              Joel 2:25–27
            </h3>
          </div>

          <div className="text-white text-lg md:text-xl leading-relaxed space-y-6 font-light">
            <p className="italic">
              "I will restore to you the years that the swarming locust has eaten,
              the hopper, the destroyer, and the cutter, my great army, which I sent among you.
            </p>
            
            <p className="italic">
              You shall eat in plenty and be satisfied,
              and praise the name of the LORD your God,
              who has dealt wondrously with you.
              And my people shall never again be put to shame.
            </p>
            
            <p className="italic">
              You shall know that I am in the midst of Israel,
              and that I am the LORD your God and there is none else.
              And my people shall never again be put to shame."
            </p>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl">
              <p className="text-black font-bold text-xl md:text-2xl">
                This is Your Season of Recovery!
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-8 space-x-4">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse delay-300"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-600"></div>
        </div>
      </div>
    </section>
  );
};

export default Scripture;
