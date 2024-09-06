import HeadingSection from "@/components/minor components/HeadingSection";
import { JSLottie } from "@/components/minor components/lottie";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeadingSection cssClass="home_header">
        <div className="home_header-intro">
          <h1 className="header_intro-title">Bernard Clarke</h1>
          <h2 className="header_intro-subtitle">Front-End Javascript Web Developer</h2>
          <p className="header_intro-content">Front-end Developer specializing in JavaScript base development with focus on React and Next.js</p>
        </div>

        {/* Jesus */}
        <JSLottie />

        <div className="home_header-links">
          <Link href='projects' className="home_header_links-projects">Projects</Link>
          <Link href='skills' className="home_header_links-skills">Skills</Link>
        </div>

      </HeadingSection>
    </main>
  );
}
