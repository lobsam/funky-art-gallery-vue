
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-pink-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
