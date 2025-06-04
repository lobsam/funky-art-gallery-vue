
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
};

export default GalleryPage;
