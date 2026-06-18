import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Footer from "./_component/Footer";
import Header from "./_component/Header";
import MobileMenu from "./_component/MobileMenu";
import { SidebarContextProvider } from "./context/SidebarContext";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaitany Ghadigaonkar",
  description: "Chaitany Ghadigaonkar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} min-h-hero-content-sm relative mx-auto flex max-w-(--breakpoint-xl) flex-col bg-slate-100 px-6`}
      >
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
