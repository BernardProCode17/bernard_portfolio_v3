import Button from "@/components/minor components/Button";
import HeadingSection from "@/components/minor components/HeadingSection";
import { JSLottie } from "@/components/minor components/lottie";

export default function Home() {
  return (
    <main>
      <HeadingSection cssClass="home_header">
        <div className="home_header-intro">
          <h1>Bernard Clarke</h1>
          <h2>Front-End Javascript Web Developer</h2>
          <p>Front-end Developer specializing in JavaScript base development with focus on React and Next.js</p>
        </div>

        {/* Jesus */}
        <JSLottie />

        <div className="home_header-buttons">
          <Button content='Projects' />
          <Button content='Skills' />

        </div>

      </HeadingSection>
    </main>
  );
}
