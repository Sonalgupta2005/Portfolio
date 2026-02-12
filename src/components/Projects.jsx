import { useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = [
    {
      title: "Property Listing Website",
      desc: "A web platform to book rooms and homes for short and long stays.",
      src: "./Wanderlust.mp4",
      liveUrl: "https://wanderlust-wd08.onrender.com/",
      githubUrl: "https://github.com/Sonalgupta2005/Wanderlust",
    },
    {
      title: "Modern Portfolio Website",
      desc: "A modern portfolio with smooth animations and clean UI.",
      src: "./videos/project2.mp4",
      liveUrl: "https://your-portfolio.com",
      githubUrl: "https://github.com/yourname/portfolio",
    },
    {
      title: "Movie Landing Page",
      desc: "A cinematic landing page showcasing movie highlights.",
      src: "./videos/project3.mp4",
      liveUrl: "https://movie-landing.com",
      githubUrl: "https://github.com/yourname/movie-landing",
    },
  ];

  return (
    <>
      <section id="my-project">
        <h1 className="section-title">My Projects 👨‍💻</h1>

        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <div
              className="project-vidbox"
              onClick={() => setActiveVideo(p.src)}
            >
              <video src={p.src} autoPlay loop muted playsInline />
              <div className="hover-sign">▶</div>
            </div>

            <div className="project-info">
              <h1>
                <span className="gradient">{p.title}</span>
              </h1>
              <p>{p.desc}</p>

              <div className="project-actions">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      <i className="bx bx-link-external"></i> Live
                    </button>
                  </a>
                )}

                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="github-btn">
                      <i className="bx bxl-github"></i> GitHub
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={activeVideo} autoPlay controls />
            <button className="close-btn" onClick={() => setActiveVideo(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
