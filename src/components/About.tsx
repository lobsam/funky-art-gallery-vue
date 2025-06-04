
import { Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
            About the Artist
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate creator bringing vibrant visions to life through digital art
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Creating Art That Speaks to the Soul
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to my world of funky, vibrant art! I'm a digital artist with a passion for 
              creating pieces that challenge the ordinary and celebrate the extraordinary. My work 
              blends bold colors, dynamic compositions, and imaginative concepts to create art 
              that doesn't just hang on walls—it transforms spaces and emotions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Each piece I create tells a story, whether it's about the electric energy of city 
              nights, the cosmic dance of colors in space, or the raw power of abstract emotions. 
              I believe art should make you feel something, and I pour that philosophy into every 
              brushstroke and pixel.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Digital Art", "Abstract", "Pop Art", "Space Art", "Street Art"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-100 to-orange-100 border border-gray-200 overflow-hidden">
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
      </div>
    </section>
  );
};

export default About;
