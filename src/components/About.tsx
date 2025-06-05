
import { Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
            About the Artist
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multi-disciplinary Tibetan artist exploring identity, Buddhism, and contemporary expression
          </p>
        </div>

        <div className="items-center">
        <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-pink-100 to-orange-100 border border-gray-200 overflow-hidden">
              <img
                src="src/img/profile.jpeg"
                alt="Artist at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-500  -full flex items-center justify-center">
              <Palette className="h-12 w-12 text-white" />
            </div>
          </div>
          <div className="mt-16 space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Tenzin Melak
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tenzin Melak is a Multi-disciplinary Tibetan artist, born in India, and currently based in Dharamsala, the exile capital of Tibet. After completing his formal education from TCV, he followed his personal quest of becoming a visual artist by obtaining a BFA in Applied Art at the College of Art, University of Delhi.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Being brought up in an environment where Buddhist values and morality were deeply intertwined with the daily upbringing of Tibetan children in exile, and later his own venture into different phases of life, most of Melak's artworks reflect upon the formation of one's identity in Buddhist's life world, the question of self-reflexivity and illusion, the foundation of truth and suffering in Tibetan Buddhist philosophy, the contradiction of theory and practices of Buddhism prevalent in Tibetan society and the world at large.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              And most importantly his own interpretation of Tibetan Buddhist philosophy and practices. In a way, it presents the inseparability of his artworks and life experiences.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Deviating from the principal medium of Tibetan traditional art making, (which is painting) yet skillfully appropriating them in the creative process, his art-making styles and materials are unconventional, distinctive, and diverse. Using everyday objects found in our surroundings such as mirrors, prayer flags, stickers, candles, glasses, and the national flag, he has given equal attention to the materiality of each object - through which his artworks are formed - and it also acts as an extension of different colors in his artworks.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              The themes, subjects, and materials he has employed in his work have made his arts look familiar yet indefinable, and it also opens up a space for any audience who can project their thoughts and imagination. Over the many years working as a Tibetan visual artist, Melak did numerous commissioned works.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Multi-disciplinary Art", "Buddhist Philosophy", "Mixed Media", "Contemporary Art", "Tibetan Culture"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700  -full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
