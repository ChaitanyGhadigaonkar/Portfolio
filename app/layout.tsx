import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import MobileMenu from "./_component/MobileMenu";
import { SidebarContextProvider } from "./context/SidebarContext";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaitany Ghadigaonkar",
  description: "Chaitany Ghadigaonkar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} max-w-screen-xl h-screen flex flex-col mx-auto px-6 bg-slate-100 relative`}
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
