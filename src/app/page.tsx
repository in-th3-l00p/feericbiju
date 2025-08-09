import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Cta from "./components/Cta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">
      <Hero />
      <Collection />
      <Cta />
      <Contact />
      <Footer />
    </main>
  );
}
