import { Metadata } from "next/types";
import "../styles/globals.css";
import Header from "@/components/header_footer/Header";
import VOTD from "@/components/VOTD/VOTD";
import Footer from "@/components/header_footer/Footer";

export const metadata: Metadata = {
  title: "Bernard Clarke | Front-end Javascript React developer",
  description: "Bernard Clarke is a front-end Javascript React developer based in vancouver, BC.I have a passion for creating beautiful, responsive, and accessible web applications and website. I'm currently looking for an opportunity to work with react, typescript, and next.js to create amazing application and develop my skills to become a full stack developer.",
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">

      <body className="body">
        <Header />
        <VOTD/>
        {children}
        {/* <Footer /> */}
      </body>

    </html>
  );
}
