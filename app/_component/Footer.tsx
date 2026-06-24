import Link from "next/link";
import React from "react";

import Button from "./ui/Button";

const Footer = () => {
  return (
    <div className="flex min-h-120 flex-col items-center">
      <div className="flex h-40 flex-1 flex-col items-center justify-center gap-6">
        <p className="text-base font-medium md:text-lg">Got a project?</p>
        <Button variant={"primary"} className="rounded-2xl px-6 py-4 text-2xl font-bold md:px-20 md:py-10 md:text-6xl">
          Let&apos;s Work Together
        </Button>
      </div>
      <footer className="my-4 flex flex-col gap-2">
        <div className="socials flex items-center gap-2">
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
