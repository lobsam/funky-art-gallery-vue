
import { Palette, Award, Users, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Palette, label: "Artworks Created", value: "150+" },
    { icon: Award, label: "Awards Won", value: "12" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Star, label: "Years Experience", value: "8" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
            About the Artist
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate creator bringing vibrant visions to life through digital art
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              Creating Art That Speaks to the Soul
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to my world of funky, vibrant art! I'm a digital artist with a passion for 
              creating pieces that challenge the ordinary and celebrate the extraordinary. My work 
              blends bold colors, dynamic compositions, and imaginative concepts to create art 
              that doesn't just hang on walls—it transforms spaces and emotions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Each piece I create tells a story, whether it's about the electric energy of city 
              nights, the cosmic dance of colors in space, or the raw power of abstract emotions. 
              I believe art should make you feel something, and I pour that philosophy into every 
              brushstroke and pixel.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Digital Art", "Abstract", "Pop Art", "Space Art", "Street Art"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop"
                alt="Artist at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
              <Palette className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover-scale"
            >
              <stat.icon className="h-8 w-8 text-pink-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
