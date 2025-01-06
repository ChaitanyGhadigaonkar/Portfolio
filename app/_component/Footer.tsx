import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[10rem] md:h-[32rem] flex items-center justify-center flex-col gap-3 ">
        <p className="text-base md:text-lg font-medium">Got a project?</p>
        <Button
          variant={"primary"}
          className="md:text-6xl text-2xl font-bold px-6 md:px-20 py-4 md:py-10 rounded-md md:rounded-3xl"
        >
          Let's Work Together
        </Button>
      </div>
      <footer>
        <div className="socials flex items-center gap-4 my-4">
          <Link
            href={"https://github.com/ChaitanyGhadigaonkar"}
            className="text-sm text-head font-medium capitalize"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href={"https://www.linkedin.com/in/chaitany-ghadigaonkar"}
            className="text-sm text-head font-medium capitalize"
            target="_blank"
          >
            Linked In
          </Link>
          <Link
            href={""}
            className="text-sm text-head font-medium capitalize"
            target="_blank"
          >
            Twitter
          </Link>
          <Link
            href={"https://leetcode.com/chaitanyghadigaonkar28/"}
            className="text-sm text-head font-medium capitalize"
            target="_blank"
          >
            LeetCode
          </Link>
        </div>
        <p className="text-sm text-light my-2">
          Made with ❤️ By Chaitany Ghadigaonkar
        </p>
      </footer>
    </div>
  );
};

export default Footer;
