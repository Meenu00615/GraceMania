import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}