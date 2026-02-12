import "../styles/About.css";
import { Img } from "./HeroStyle";
import HeroImg from "/hero.png";

function About() {
  return (
    <section id="about-page">
      <h2 className="about-title">A Quick Background</h2>

      <div className="about">
        {/* LEFT: IMAGE (30%) */}
        <div className="about-image">
          <div className="image-wrapper">
            <Img src={HeroImg} alt="Sonal Gupta" />
          </div>
        </div>

        {/* RIGHT: TEXT (70%) */}
        <div className="desc">
          <p>
           Hi there! I’m Sonal Gupta, currently pursuing Bachelor's in Computer Science specializing in AI at KIET Group of Institutions, Ghaziabad.
               <br /><br />
               I primarily focus on full-stack development with hands-on experience in web development, cloud computing, automation, and data-driven applications,
                working with React, Node.js, and backend systems(MERN stack) to build scalable and efficient solutions. My sidekicks include open-source contributions, hackathons, and competitive programming, where I thrive on problem-solving and learning under pressure. Outside of tech, I enjoy badminton and chess, which sharpen my focus, strategy, and consistency.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
