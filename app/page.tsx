import About from "./_component/home/About";
import HeroContent from "./_component/home/HeroContent";
import HomeProjects from "./_component/home/HomeProjects";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 px-1">
      <HeroContent />
      <HomeProjects />
      <About />
    </main>
  );
}
