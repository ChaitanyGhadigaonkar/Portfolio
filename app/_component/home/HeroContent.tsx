import Link from "next/link";

import Button from "../ui/Button";
import Photo from "./Photo";

const HeroContent = () => {
  return (
    <div className="flex min-h-120 flex-col gap-8 sm:flex-row-reverse sm:items-center md:gap-3">
      <div className="relative flex items-center md:flex-1 md:justify-center">
        <Photo className="mt-8" />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-head text-2xl leading-8 font-bold md:text-3xl">
          Hello 👋, <br />{" "}
          <span className="text-3xl md:text-4xl">
            I&apos;m <span className="text-accent">Chaitany Ghadigaonkar</span>
          </span>
        </h1>
        <p className="text-light max-w-lg text-sm text-pretty md:text-base">
          I build fast, scalable web applications from database to UI — turning complex problems into clean,
          user-friendly products. With a strong foundation in both front-end and back-end development, I am constantly
          learning and pushing boundaries to create meaningful digital experiences. Let&apos;s discuss your next
          project!
        </p>
        <div className="mt-4 flex w-full items-center gap-6">
          <Button variant="primary" className="cursor-pointer px-3 py-2.5 text-sm font-semibold md:text-base">
            Let&apos;s Work Together
          </Button>
          <Button variant="outline" className="cursor-pointer px-3 py-2.5 text-sm font-semibold md:text-base">
            <Link href="/projects">My Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
