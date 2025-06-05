
import { useState } from "react";
import { Heart, Eye, Share2 } from "lucide-react";
import { artPieces } from "../gallery.js";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedPiece, setSelectedPiece] = useState<any>(null);

  return (
    <>
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="w-2md mx-auto">
          <div className="text-center mb-16">
            <h2 className="mt-16 text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Featured work
            </h2>
          </div>

          <div className="grid grid-cols-1 grid-rows-3 gap-8 max-w-md mx-auto">
            {artPieces.slice(0, 3).map((piece) => (
              <div
                key={piece.id}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 hover-scale cursor-pointer"
                onMouseEnter={() => setHoveredItem(piece.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setSelectedPiece(piece)}
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
        </div>
      </section>

      {/* Dialog for cropped image view */}
      <Dialog open={!!selectedPiece} onOpenChange={() => setSelectedPiece(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedPiece?.title}</DialogTitle>
          </DialogHeader>
          {selectedPiece && (
            <div className="w-full">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={selectedPiece.image}
                  alt={selectedPiece.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Category:</strong> {selectedPiece.category}
                </p>
                {selectedPiece.size && (
                  <p className="text-sm text-gray-600">
                    <strong>Size:</strong> {selectedPiece.size}
                  </p>
                )}
                <p className="text-sm text-gray-600">
                  <strong>Created:</strong> {selectedPiece.created}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
