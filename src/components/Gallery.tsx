
import { useState } from "react";
import { Heart, Eye, Share2 } from "lucide-react";
import { artPieces } from "../gallery.js"

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Placeholder art pieces with Unsplash images suitable for an art gallery
 

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="w-2md mx-auto">
        <div className="text-center mb-16">
          <h2 className="mt-16 text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Featured work
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into a world of vibrant colors and bold expressions
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {artPieces.map((piece) => (
            <div
              key={piece.id}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 hover-scale"
              onMouseEnter={() => setHoveredItem(piece.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                hoveredItem === piece.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{piece.title} <span className="text-pink-300 text-sm mb-4">{piece.size}</span></h3>
                  
                  <h6 className="text-pink-300 text-sm mb-4">{piece.created}</h6>
                  
                </div>
              </div>

              {/* Floating category tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold  -full">
                  {piece.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold  -full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25">
            View All Artworks
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
