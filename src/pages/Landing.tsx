
import { useNavigate } from "react-router-dom";
import { Palette } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/gallery");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className=" w-30 h-30 text-center cursor-pointer" onClick={handleLogoClick}>
        <div className="flex items-center justify-center space-x-4 mb-4">
          {/* <Palette className="h-16 w-16 text-pink-500" /> */}
        </div>
        <img
          src="src/img/logo.jpeg"
          alt="Artist at work"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Landing;
