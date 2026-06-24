import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Footer from "./_component/Footer";
import Header from "./_component/Header";
import MobileMenu from "./_component/MobileMenu";
import { SidebarContextProvider } from "./context/SidebarContext";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Chaitany Ghadigaonkar | Software Engineer", template: "%s | Chaitany Ghadigaonkar" },
  description:
    "Portfolio of Chaitany Ghadigaonkar — Software Engineer specializing in React, Next.js, Node.js, and scalable web applications.",
  keywords: [
    "Chaitany Ghadigaonkar",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Chaitany Ghadigaonkar" }],
  creator: "Chaitany Ghadigaonkar",
  publisher: "Chaitany Ghadigaonkar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${figtree.className} relative mx-auto flex max-w-(--breakpoint-xl) flex-col bg-slate-100 px-6`}>
        <SidebarContextProvider>
          <MobileMenu />
          <Header />
        </SidebarContextProvider>
        <section className="flex-1">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
