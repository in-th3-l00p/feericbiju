import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Cta from "./components/Cta";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">
      <Hero />
      <Collection />
      <Cta />
      <Contact />
    </main>
  );
}
