import MERN_STORE_Image from "@/public/Projects/MERN_STORE.png";
import CCE_Image from "@/public/Projects/CCE.png";
import Sushiman_Image from "@/public/Projects/Sushiman_Image.png";
import My_photo from "@/public/My_photo.png";
import Next13Image from "@/public/Projects/next13Todo.png";

export const MERN_STORE = {
  title: "MERN STORE",
  image: MERN_STORE_Image,
  features: ["Admin Dashboard", "MERN Stack"],
  gitHubLink: "https://github.com/ChaitanyGhadigaonkar/MERN-STORE",
};
export const CCE = {
  title: "Collaborative Code Editor",
  image: CCE_Image,
  features: ["Realtime Editor using Socket IO", "MERN Stack"],
  gitHubLink:
    "https://github.com/ChaitanyGhadigaonkar/Collaborative-Code-Editor",
};
export const Next13Todo = {
  title: "Next 13 Todo List",
  image: Next13Image,
  features: [
    "Authentication with Next Auth",
    "Dark Mode",
    "Prisma ORM with MongoDB",
  ],
  gitHubLink: "https://github.com/ChaitanyGhadigaonkar/Next-13-Todo",
};
export const Sushiman = {
  title: "Sushiman Landing Page",
  image: Sushiman_Image,
  features: ["HTML CSS & JavaScript", "Landing Page"],
  gitHubLink: "https://github.com/ChaitanyGhadigaonkar/Sushiman",
};

export const projects = [MERN_STORE, CCE, Next13Todo, Sushiman];
export const My_image = My_photo;

// https://github.com/ChaitanyGhadigaonkar/Collaborative-Code-Editor
