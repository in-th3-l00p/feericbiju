import Hero from "./components/Hero";
import Collection from "./components/Collection";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">
      <Hero />
      <Collection />
    </main>
  );
}
