
import { useNavigate } from "react-router-dom";
import { Palette } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/gallery");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center cursor-pointer" onClick={handleLogoClick}>
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Palette className="h-16 w-16 text-pink-500" />
        </div>
        <h1 className="text-8xl md:text-9xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            FUNKY
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            ART
          </span>
        </h1>
        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
          Click to explore amazing artworks
        </p>
      </div>
    </div>
  );
};

export default Landing;
