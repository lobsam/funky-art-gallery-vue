
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/gallery");
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://i.ibb.co/zV7HYXp0/Whats-App-Image-2025-06-03-at-5-18-15-PM.jpg')"
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 w-80 h-80 text-center cursor-pointer group" onClick={handleLogoClick}>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:bg-white/95 transition-all duration-300 group-hover:scale-105">
          <img
            src="src/img/logo.jpeg"
            alt="Artist logo"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
