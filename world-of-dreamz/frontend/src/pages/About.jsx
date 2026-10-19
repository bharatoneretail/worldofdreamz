const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">About World of Dreamz</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To inspire and entertain through the power of storytelling. We are dedicated to creating unique, impactful experiences that resonate with our customers and captivate them to drive meaningful connections.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To redefine Entertainment by creating experiences that touch Human Lives and inspire meaningful change. Through Innovation, we seek to spark joy, evoke emotion, and empower individuals to see the world in new ways.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Leadership</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Bharat Shroff Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-bold mb-2 text-white">Bharat Shroff</h3>
            <p className="text-[#FF007F] font-semibold mb-4">International Business & Brand Development</p>
            <p className="text-gray-300">
              Brings over 14 years of prolific experience. Known for a dynamic and creative personality, he possesses a deep understanding of global markets and a strong track record of driving business growth.
            </p>
          </div>

          {/* Shivani Rajvanshi Shroff Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-bold mb-2 text-white">Shivani Rajvanshi Shroff</h3>
            <p className="text-[#FF007F] font-semibold mb-4">Real Estate, Finance & Operations</p>
            <p className="text-gray-300">
              Brings over 10 years of versatile experience. Excels at creating structured, scalable frameworks that support both growth and sustainability with a hands-on approach to team management.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;