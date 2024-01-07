import HeroContent from "./_component/home/HeroContent";
import HomeProjects from "./_component/home/HomeProjects";
import About from "./_component/home/About";

export default function Home() {
  return (
    <main className="px-1 flex justify-start gap-6 flex-col h-full">
      <HeroContent />
      <HomeProjects />
      <About />
    </main>
  );
}
