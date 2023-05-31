import "../globals.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function About() {
  const skills = [
    "Tailwind",
    "Bootstrap",
    "JavaScript",
    "React",
    "Node.js",
    "Github",
    "Terminal",
    "Responsive Design",
    "MongoDB Basic",
    "Next.js 13",
    "HTML",
    "CSS",
  ];

  return (
    <div className="about-section" id="about">
      <div className="sections-title relative about-span-line">ABOUT ME</div>
      <p className="sections-intro">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>
      <div className="about-info">
        <div className="about-info-cv ">
          <div className="text-lg font-bold ">Get To Know Me!</div>
          <div>
            <p className="leading-7">
              As a <strong>junior web developer</strong>, I am passionate about
              building user-friendly websites that look great and perform
              flawlessly. With experience in HTML, CSS, and JavaScript,{" "}
              {` I'm `}eager to apply my skills to create{" "}
              <strong>innovative</strong> and <strong>engaging</strong> digital
              experiences.
            </p>
            <p className="leading-7">
              In addition to my technical skills, I am a{" "}
              <strong>team player</strong> who enjoys collaborating with
              designers, developers, and stakeholders to deliver outstanding
              results. {`I'm`} always eager to learn from my colleagues and
              contribute my own ideas.
            </p>
            <p className="leading-7">
              {` I'm `}
              <strong>open to opportunities</strong> where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then {`don't `}hesitate to{" "}
              {
                <Link href="/">
                  <strong>contact me.</strong>
                </Link>
              }
            </p>
          </div>
        </div>
        <div className="about-info-skills">
          <div className="about-info-skills-title text-lg font-bold pb-8 ">
            Skills
          </div>
          <div className="about-info-skills-box">
            {skills.map((x) => (
              <span key={uuidv4()} className="skill">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
