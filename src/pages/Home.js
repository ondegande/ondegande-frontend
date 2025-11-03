import Hero from "../home/components/Hero";
import Feature from "../home/components/Feature";
import Festival from "../home/components/Festival";

export default function Home() {
  return (
    <div className="column">
      <Hero />
      <Feature />
      <Festival />
    </div>
  );
}
