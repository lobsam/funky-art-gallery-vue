
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
