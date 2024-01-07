import React from "react";
import Button from "./ui/Button";

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
          <p className="text-sm text-head font-medium capitalize">GitHub</p>
          <p className="text-sm text-head font-medium capitalize">Linked In</p>
          <p className="text-sm text-head font-medium capitalize">Twitter</p>
          <p className="text-sm text-head font-medium capitalize">LeetCode</p>
        </div>
        <p className="text-sm text-light my-2">
          Made with ❤️ By Chaitany Ghadigaonkar
        </p>
      </footer>
    </div>
  );
};

export default Footer;
