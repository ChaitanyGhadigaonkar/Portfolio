import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { CCE, MERN_STORE } from "@/app/_helpers/projects";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const About = () => {
  return (
    <div className="flex flex-col gap-4 items-start ">
      <h3 className="text-head text-2xl font-semibold">About</h3>
      <div className="flex flex-col gap-2 sm:flex-row ">
        <div className="flex flex-col items-start gap-2 sm:w-1/2">
          <p className="text-light text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptatem ab, commodi ullam libero assumenda corrupti illo
            repellendus voluptate, atque vitae sequi adipisci? Dicta beatae nisi
            maiores suscipit pariatur quaerat distinctio illum voluptas ipsa.
          </p>
          <Button
            variant={"primary"}
            className="px-5 font-medium"
          >
            <Link href={"/about"}>Read More</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-2 items-start sm:w-1/2">
          {/* TODO: slider  */}
          <Image
            width={200}
            height={200}
            src={CCE.image}
            alt="Chaitany Ghadigaonkar"
            className="w-full h-40 my-3 sm:h-52 rounded-xl"
          />
        </div>
      </div>
      <Link
        href={"/resume"}
        className="text-accent font-semibold text-base flex gap-2 items-center px-1"
      >
        My Resume <FaArrowRight width={22} />
      </Link>
      <div className="socials flex gap-4 items-center px-1">
        <FaGithub
          fill="#04263e"
          color="#04263e"
          width={20}
          height={20}
        />
        <FaLinkedin
          fill="#04263e"
          color="#04263e"
          width={20}
          height={20}
        />
        <FaTwitter
          fill="#04263e"
          color="#04263e"
          width={20}
          height={20}
        />
        <FaCode
          color="#04263e"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default About;
