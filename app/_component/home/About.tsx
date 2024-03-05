import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { CCE, MERN_STORE, My_image } from "@/app/_helpers/projects";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Photo from "./Photo";

const About = () => {
  return (
    <div className="flex flex-col gap-4 items-start ">
      <h3 className="text-head text-2xl font-semibold">About</h3>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center ">
        <div className="flex flex-col items-start gap-2 sm:w-1/2 sm:ml-5">
          <p className="text-light text-base">
            I am a passionate web developer currently pursuing a Bachelor's
            degree in Computer Engineering. I am proficient in both front-end
            and back-end development, with a strong command of front-end
            technologies like React, Next.js, JavaScript, CSS, and HTML.
            Additionally, I am skilled in back-end development using Node.js,
            Express, and MongoDB. My dedication to learning and my experience in
            building web applications have fueled my passion for crafting
            innovative and user-friendly experiences.
          </p>
          <Button
            variant={"primary"}
            className="px-5 font-medium"
          >
            <Link href={"/about"}>Read More</Link>
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Photo />
        </div>
      </div>
      <Link
        href={
          "https://drive.google.com/file/d/1OrEWxMZVEIV88Fuk2d0AI3cYpbhkHQEo/view"
        }
        className="text-accent font-semibold text-base flex gap-2 items-center px-1"
      >
        My Resume <FaArrowRight width={22} />
      </Link>
      <div className="socials flex gap-4 items-center px-1">
        <Link
          href={"https://github.com/ChaitanyGhadigaonkar"}
          target="_blank"
        >
          <FaGithub
            fill="#04263e"
            color="#04263e"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/chaitany-ghadigaonkar"}
          target="_blank"
        >
          <FaLinkedin
            fill="#04263e"
            color="#04263e"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href={"/"}
          target="_blank"
        >
          <FaTwitter
            fill="#04263e"
            color="#04263e"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href={"https://leetcode.com/chaitanyghadigaonkar28/"}
          target="_blank"
        >
          <FaCode
            color="#04263e"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
};

export default About;
