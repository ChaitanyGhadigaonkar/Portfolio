import Link from "next/link";
import React from "react";

import Button from "./ui/Button";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-40 flex-col items-center justify-center gap-3 md:h-128">
        <p className="text-base font-medium md:text-lg">Got a project?</p>
        <Button
          variant={"primary"}
          className="rounded-md px-6 py-4 text-2xl font-bold md:rounded-3xl md:px-20 md:py-10 md:text-6xl"
        >
          Let&apos;s Work Together
        </Button>
      </div>
      <footer>
        <div className="socials my-4 flex items-center gap-4">
          <Link
            href={"https://github.com/ChaitanyGhadigaonkar"}
            className="text-head text-sm font-medium capitalize"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href={"https://www.linkedin.com/in/chaitany-ghadigaonkar"}
            className="text-head text-sm font-medium capitalize"
            target="_blank"
          >
            Linked In
          </Link>
          <Link href={""} className="text-head text-sm font-medium capitalize" target="_blank">
            Twitter
          </Link>
          <Link
            href={"https://leetcode.com/chaitanyghadigaonkar28/"}
            className="text-head text-sm font-medium capitalize"
            target="_blank"
          >
            LeetCode
          </Link>
        </div>
        <p className="text-light my-2 text-sm">Made with ❤️ By Chaitany Ghadigaonkar</p>
      </footer>
    </div>
  );
};

export default Footer;
