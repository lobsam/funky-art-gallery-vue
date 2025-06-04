
import { useState } from "react";
import { Heart, Eye, Share2 } from "lucide-react";

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Placeholder art pieces with Unsplash images suitable for an art gallery
  const artPieces = [
    {
      id: 1,
      title: "Electric Dreams",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop",
      likes: 127,
      views: 1234,
    },
    {
      id: 2,
      title: "Neon Nights",
      category: "Abstract",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      likes: 89,
      views: 892,
    },
    {
      id: 3,
      title: "Cosmic Vibrations",
      category: "Space Art",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
      likes: 156,
      views: 2103,
    },
    {
      id: 4,
      title: "Urban Pulse",
      category: "Street Art",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=600&fit=crop",
      likes: 203,
      views: 1567,
    },
    {
      id: 5,
      title: "Liquid Gold",
      category: "Abstract",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=500&h=600&fit=crop",
      likes: 98,
      views: 743,
    },
    {
      id: 6,
      title: "Rainbow Burst",
      category: "Pop Art",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500&h=600&fit=crop",
      likes: 174,
      views: 1876,
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Featured Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into a world of vibrant colors and bold expressions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artPieces.map((piece) => (
            <div
              key={piece.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 hover-scale"
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
                  <h3 className="text-xl font-bold text-white mb-1">{piece.title}</h3>
                  <p className="text-pink-300 text-sm mb-4">{piece.category}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-white/80">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{piece.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">{piece.views}</span>
                      </div>
                    </div>
                    <button className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors">
                      <Share2 className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating category tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                  {piece.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25">
            View All Artworks
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
