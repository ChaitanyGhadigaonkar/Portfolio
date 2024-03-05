import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-40 flex items-center justify-center">
        <Button
          variant={"primary"}
          className="text-xl font-semibold "
        >
          Connect With Me
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
