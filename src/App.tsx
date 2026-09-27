import { useEffect, useState } from "react";
import "./App.css";

const skills = [
  ["Java", 80],
  ["Python", 75],
  ["JavaScript", 85],
  ["TypeScript", 70],
  ["React", 80],
  ["HTML & CSS", 90],
  ["SQL & Databases", 75],
  ["Git & GitHub", 80],
];

const projects = [
  {
    number: "01",
    icon: "✓",
    title: "Task App",
    description:
      "A responsive task management application that helps users organize, track and manage their daily tasks through a clean and intuitive interface.",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    number: "02",
    icon: "🍴",
    title: "Recipe Finder",
    description:
      "A recipe discovery application that allows users to search for dishes and explore recipes through a simple and engaging interface.",
    technologies: ["React", "JavaScript", "API"],
  },
  {
    number: "03",
    icon: "🛒",
    title: "E-Commerce Website",
    description:
      "A modern e-commerce website featuring product browsing, responsive layouts and an engaging shopping experience.",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [typedText, setTypedText] = useState("");

  const fullText = "Aspiring Software Engineer";

  /* Typing animation */
  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typing);
      }
    }, 80);

    return () => clearInterval(typing);
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* BACKGROUND EFFECTS */}
      <div className="background">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            SR<span>.</span>
          </a>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero section">

        <div className="hero-content">

          <div className="availability hero-animation">
            <span></span>
            Open to opportunities
          </div>

          <p className="intro-text hero-animation">
            HELLO, I'M
          </p>

          <h1 className="hero-animation">
            Suhana <span>R</span>
          </h1>

          <h2 className="typing-text hero-animation">
            {typedText}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description hero-animation">
            I am a Information Science student passionate about software
            development, problem solving and building meaningful digital
            experiences with modern technologies.
          </p>

          <div className="hero-buttons hero-animation">

            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>

          </div>

          <div className="social-links hero-animation">

            <a
              href="https://github.com/suhanarajevali786-star"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/suhana-r-0b0357322/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* CODE WINDOW */}
        <div className="hero-visual">

          <div className="code-window">

            <div className="window-header">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>suhana.tsx</p>

            </div>

            <div className="code-content">

              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                <span className="green">name</span>:{" "}
                <span className="orange">
                  "Suhana R"
                </span>,
              </p>

              <p className="indent">
                <span className="green">role</span>:{" "}
                <span className="orange">
                  "Software Engineer"
                </span>,
              </p>

              <p className="indent">
                <span className="green">university</span>:{" "}
                <span className="orange">
                  "Reva University"
                </span>,
              </p>

              <p className="indent">
                <span className="green">passion</span>:{" "}
                <span className="orange">
                  "Building"
                </span>,
              </p>

              <p className="indent">
                <span className="green">learning</span>:{" "}
                <span className="blue">
                  true
                </span>,
              </p>

              <p>{"};"}</p>

              <p className="code-cursor">▊</p>

            </div>

          </div>

          <div className="floating-tech tech-one">
            ⚛ React
          </div>

          <div className="floating-tech tech-two">
            JS
          </div>

          <div className="floating-tech tech-three">
            {"</>"}
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section reveal">

        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <h3>
              Turning ideas into
              <span> meaningful software.</span>
            </h3>

            <p>
              I'm Suhana R, a Information Science student
              at Reva University with a strong interest in
              software development.
            </p>

            <p>
              I enjoy creating responsive web applications,
              solving programming problems and exploring
              technologies that turn ideas into useful
              digital products.
            </p>

            <p>
              My current focus is strengthening my software
              engineering fundamentals and building
              real-world projects.
            </p>

            <div className="about-stats">

              <div>
                <strong>03+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>08+</strong>
                <span>Technologies</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Learning</span>
              </div>

            </div>

          </div>

          <div className="about-highlight">

            <div className="highlight-icon">
              💡
            </div>

            <h3>What I Love Building</h3>

            <ul>
              <li>Interactive web applications</li>
              <li>Clean responsive interfaces</li>
              <li>Useful software solutions</li>
              <li>Projects that solve real problems</li>
              <li>Learning new technologies</li>
            </ul>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section reveal">

        <div className="section-heading">
          <p>MY TECHNICAL TOOLKIT</p>
          <h2>Skills & Technologies</h2>
        </div>

        <div className="skill-categories">

          <div className="category-card">
            <div className="category-icon">💻</div>
            <h3>Programming</h3>
            <p>
              Languages used to solve problems and build applications.
            </p>

            <div className="skill-tags">
              <span>Java</span>
              <span>Python</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className="category-card">
            <div className="category-icon">🎨</div>
            <h3>Frontend</h3>
            <p>
              Creating responsive and interactive user experiences.
            </p>

            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>React</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="category-card">
            <div className="category-icon">🗄️</div>
            <h3>Backend & Database</h3>
            <p>
              Working with data and application development concepts.
            </p>

            <div className="skill-tags">
              <span>SQL</span>
              <span>MySQL</span>
              <span>REST APIs</span>
              <span>Node.js</span>
            </div>
          </div>

          <div className="category-card">
            <div className="category-icon">🛠️</div>
            <h3>Tools & Concepts</h3>
            <p>
              Development tools and computer science fundamentals.
            </p>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>OOP</span>
              <span>DSA</span>
            </div>
          </div>

        </div>

        <div className="skill-bars">

          {skills.map(([name, level], index) => (

            <div
              className="skill"
              key={name}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >

              <div className="skill-header">
                <span>{name}</span>
                <span>{level}%</span>
              </div>

              <div className="progress-bar">

                <div
                  className="progress"
                  style={{
                    "--skill-width": `${level}%`,
                  } as React.CSSProperties}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section reveal">

        <div className="section-heading">
          <p>FEATURED WORK</p>
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <article
              className="project-card"
              key={project.number}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-arrow">
                  ↗
                </span>

              </div>

              <div className="project-icon">
                {project.icon}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <div className="project-footer">
                Featured Project
              </div>

            </article>

          ))}

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section reveal">

        <div className="section-heading">
          <p>MY ACADEMIC JOURNEY</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div className="education-content">

            <span className="education-status">
              CURRENTLY STUDYING
            </span>

            <h3>Bachelor of Technology</h3>

            <h4>
              Information Science & Engineering
            </h4>

            <p className="university">
              Reva University
            </p>

            <p>
              Building a strong foundation in computer
              science, programming, software development,
              databases, data structures and modern
              technologies.
            </p>

          </div>

          <div className="education-year">
            B.Tech
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section reveal">

        <div className="contact-wrapper">

          <div className="contact-intro">

            <p className="small-label">
              LET'S CONNECT
            </p>

            <h2>
              Let's build something
              <span> great together.</span>
            </h2>

            <p>
              Whether it's an interesting project,
              collaboration or software engineering
              opportunity, I'd love to connect.
            </p>

          </div>

          <div className="contact-card">

            <a
              href="mailto:suhanazeenat8@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                ✉
              </div>

              <div>
                <small>Email</small>
                <strong>
                  suhanazeenat8@gmail.com
                </strong>
              </div>
            </a>

            <a
              href="https://github.com/suhanarajevali786-star"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                GH
              </div>

              <div>
                <small>GitHub</small>
                <strong>
                  suhanarajevali786-star
                </strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/suhana-r-0b0357322/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div className="contact-icon">
                in
              </div>

              <div>
                <small>LinkedIn</small>
                <strong>
                  Suhana R
                </strong>
              </div>
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-content">

          <a href="#home" className="logo">
            SR<span>.</span>
          </a>

          <p>
            Designed & built by Suhana R
          </p>

          <p className="copyright">
            © {new Date().getFullYear()} Suhana R
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;