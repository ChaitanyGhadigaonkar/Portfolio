import Link from "next/link";

import Button from "../ui/Button";
import Photo from "./Photo";

const HeroContent = () => {
  return (
    <div className="h-hero-content-sm md:h-hero-content-md flex flex-2 flex-col gap-3 sm:flex-row-reverse sm:items-center">
      <div className="flex flex-1 items-center justify-center">
        <Photo />
      </div>
      <div className="flex flex-1 flex-col gap-2 sm:w-1/2">
        <h1 className="text-head text-2xl leading-8 font-bold md:text-3xl">Hello 👋, I&apos;m Chaitany Ghadigaonkar</h1>
        <p className="text-light text-sm text-pretty md:text-base">
          I am a computer engineering student with a passion for building interactive and engaging web applications.
          With a strong foundation in both front-end and back-end development, I am constantly learning and pushing
          boundaries to create meaningful digital experiences. Let&apos;s discuss your next project!
        </p>
        <div className="buttons my-2 flex w-full items-center gap-2">
          <Button variant="primary" className="px-3 py-2.5 text-sm font-semibold md:text-base">
            Let&apos;s Work Together
          </Button>
          <Button variant="outline" className="px-3 py-2.5 text-sm font-semibold md:text-base">
            <Link href="/projects">My Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
