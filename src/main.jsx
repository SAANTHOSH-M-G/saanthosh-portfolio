import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowUpRight, Github, Linkedin, Menu, X, Shield,
  Terminal, BrainCircuit, Network, Code2, Activity, Server, LockKeyhole,
  Database, Cloud, Bug, Cpu
} from "lucide-react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    no: "01",
    title: "AI SOC",
    type: "SECURITY / AI",
    description:
      "An AI-assisted Security Operations Center built around Wazuh and OpenSearch, with threat-intelligence enrichment, MITRE ATT&CK mapping and LLM-assisted alert analysis.",
    tags: ["Wazuh", "OpenSearch", "Python", "LLM", "MITRE ATT&CK"],
    link: "https://github.com/SAANTHOSH-M-G/AI_SOC",
  },
  {
    no: "02",
    title: "NETWORK FORECASTING",
    type: "NETWORK / DATA",
    description:
      "A network forecasting project focused on analysing historical network behaviour and using data-driven methods to understand future traffic and performance trends.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Forecasting"],
    link: "#",
  },
  {
    no: "03",
    title: "AI ANSWER PRE-GRADER",
    type: "AI / EDUCATION",
    description:
      "An answer pre-grading system that analyses student responses against expected answers and supports preliminary evaluation before teacher review.",
    tags: ["Python", "AI", "OCR", "Evaluation"],
    link: "https://github.com/SAANTHOSH-M-G/ai-answer-pre-grader",
  },
  {
    no: "04",
    title: "NITI VAHAN",
    type: "ROBOTICS / e-YANTRA",
    description:
      "e-Yantra robotics work involving Ackermann steering geometry, controller tuning and lane/path tracking in an autonomous vehicle simulation.",
    tags: ["Python", "CoppeliaSim", "Robotics", "Control"],
    link: "https://github.com/SAANTHOSH-M-G/task-1",
  },
];

const skills = [
  ["01", "CYBERSECURITY", "SIEM • Wazuh • Linux • Web Security • Threat Analysis"],
  ["02", "PROGRAMMING", "Python • Java • C • SQL • HTML"],
  ["03", "NETWORKING", "Computer Networks • TCP/IP • DNS • Network Analysis"],
  ["04", "AI & AUTOMATION", "LLM Integration • AI Workflows • Data Analysis"],
  ["05", "TOOLS & PLATFORMS", "Git • GitHub • OpenSearch • Supabase • WordPress • VirtualBox • TryHackMe"],
];

const experience = [
  { year: "JUL 2026 — PRESENT", title: "MEMBER • UI-NIQUE AUTOMATORS", text: "Member contributing to technical and automation-focused activities in an on-site student/professional community." },
  { year: "JUN 2025 — PRESENT", title: "MEMBER • NEURO NEXUS", text: "Member with Python programming as a listed skill, participating in a technical learning community." },
  { year: "AUG 2025 — PRESENT", title: "MEMBER • IEEE", text: "IEEE member involved in event planning, technical paper presentation and related technical activities." },
  { year: "SEP 2025 — MAR 2026", title: "ETHICAL HACKING INTERN • INLIGHNX GLOBAL", text: "Six-month ethical hacking internship with practical cybersecurity work and hands-on security learning." },
  { year: "JUN 2025", title: "CYBER SECURITY WITH ETHICAL HACKING • IIT MADRAS", text: "Internship experience covering cybersecurity fundamentals including footprinting, scanning, enumeration and practical ethical-hacking concepts." },
];

function App() {
  const root = useRef(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.from(".nav", { y: -30, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(".hero-kicker", { y: 25, opacity: 0, duration: 0.8, delay: 0.1 });
      gsap.from(".hero-title span", {
        y: 110, opacity: 0, duration: 1.05, stagger: 0.09,
        ease: "power4.out", delay: 0.2
      });
      gsap.from(".hero-copy", { y: 25, opacity: 0, duration: 0.8, delay: 0.65 });
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 55, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%" }
        });
      });
      gsap.utils.toArray(".project-card").forEach((el, i) => {
        gsap.from(el, {
          y: 60, opacity: 0, duration: 0.8, delay: i * 0.05,
          scrollTrigger: { trigger: el, start: "top 88%" }
        });
      });
    }, root);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const go = (id) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={root} className="site">
      <header className="nav">
        <button className="brand" onClick={() => go("#home")}>SMG<span>.</span></button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["#about", "#skills", "#work", "#education", "#experience", "#contact"].map((id) => (
            <button key={id} onClick={() => go(id)}>{id.slice(1)}</button>
          ))}
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-grid">
            <div>
              <p className="hero-kicker"><span className="dot" /> BE-CSE • TECH-DRIVEN SECURITY BUILDER</p>
              <h1 className="hero-title">
                <span>TECH-DRIVEN</span>
                <span>SECURITY</span>
                <span><em>BUILDER.</em></span>
              </h1>
              <div className="hero-copy">
                <div className="hero-copy-main">
                  <p>
                    I'm <strong>Saanthosh M G</strong>, a Computer Science Engineering
                    student focused on cybersecurity, penetration testing, SOC operations,
                    automation, cloud fundamentals and practical software development.
                  </p>
                  <div className="hero-actions">
                    <button className="hero-cta primary" onClick={() => go("#work")}>
                      VIEW MY WORK <ArrowUpRight size={18} />
                    </button>
                    <button className="hero-cta secondary" onClick={() => go("#contact")}>
                      CONTACT ME <ArrowUpRight size={18} />
                    </button>
                  </div>
                  <div className="hero-socials">
                    <a href="https://github.com/SAANTHOSH-M-G" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB</a>
                    <a href="https://www.linkedin.com/in/saanthoshmg" target="_blank" rel="noreferrer"><Linkedin size={16} /> LINKEDIN</a>
                  </div>
                </div>
                <button className="round-link" onClick={() => go("#work")} aria-label="View my work">
                  <span>VIEW<br />WORK</span><ArrowUpRight size={21} />
                </button>
              </div>
            </div>
            <div className="hero-console">
              <div className="console-top">
                <span><i className="live-dot" /> SYSTEM ONLINE</span>
                <span>SMG / 001</span>
              </div>
              <div className="console-main">
                <div className="console-orbit">
                  <div className="console-core"><Shield size={54} strokeWidth={1.25} /></div>
                  <span className="orbit-label label-a">SIEM</span>
                  <span className="orbit-label label-b">SOC</span>
                  <span className="orbit-label label-c">NET</span>
                  <span className="orbit-label label-d">AI</span>
                </div>
                <div className="console-readout">
                  <div><span>FOCUS</span><strong>CYBERSECURITY</strong></div>
                  <div><span>MODE</span><strong>BUILD / TEST / LEARN</strong></div>
                  <div><span>STACK</span><strong>PYTHON · LINUX · WAZUH</strong></div>
                </div>
              </div>
              <div className="console-bars">
                <div><span>THREAT</span><b><i style={{width:"72%"}} /></b><em>72</em></div>
                <div><span>NETWORK</span><b><i style={{width:"84%"}} /></b><em>84</em></div>
                <div><span>AUTOMATION</span><b><i style={{width:"61%"}} /></b><em>61</em></div>
              </div>
              <div className="console-footer"><span>LOCAL NODE / INDIA</span><span>SCROLL TO EXPLORE ↓</span></div>
            </div>
          </div>
        </section>

        <div className="signal-strip" aria-hidden="true">
          <span>SECURITY</span><i /> <span>NETWORKS</span><i /> <span>AUTOMATION</span><i /> <span>SOFTWARE</span><i /> <span>SECURITY</span><i /> <span>NETWORKS</span><i /> <span>BUILD / TEST / LEARN</span>
        </div>

        <section id="about" className="about section-pad">
          <div className="section-head reveal">
            <span>01</span><p>ABOUT ME</p>
          </div>
          <div className="about-grid">
            <div className="about-title-wrap reveal">
              <span className="eyebrow">PROFILE / 01</span>
              <h2 className="display">CURIOUS.<br /><span>TECHNICAL.</span><br />SECURITY-MINDED.</h2>
            </div>
            <div className="about-text reveal">
              <p className="profile-role">ASPIRING CYBERSECURITY ANALYST · PENTESTING · VULNERABILITY ASSESSMENT · SOC FUNDAMENTALS</p>
              <p>
                I’m a BE-CSE student at Panimalar Engineering College focused on
                turning what I learn into practical projects.
              </p>
              <p>
                My current path combines cybersecurity, security operations,
                networking, AI-assisted automation and software development.
              </p>
              <p>
                I enjoy building, testing, breaking, debugging and learning from
                real systems rather than stopping at theory.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-pad">
          <div className="section-head reveal"><span>02</span><p>CAPABILITIES</p></div>
          <div className="skill-grid">
            {skills.map(([n, title, desc], i) => (
              <div className="skill-card reveal" key={title}>
                <div className="skill-card-head"><span>{n}</span><span className="skill-signal">0{i + 1} / ACTIVE</span></div>
                <div className="skill-icon">{i === 0 ? <LockKeyhole /> : i === 1 ? <Code2 /> : i === 2 ? <Network /> : i === 3 ? <Cpu /> : <Server />}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ArrowUpRight className="skill-arrow" size={19} />
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-head reveal"><span>03</span><p>SELECTED WORK</p></div>
          <div className="work-intro reveal">
            <h2 className="display">PROJECTS<br /><span>THAT I BUILD.</span></h2>
            <p>Selected technical work across cybersecurity, AI, networking and robotics.</p>
          </div>
          <div className="work-meta reveal"><span>04 PROJECTS</span><span>HANDS-ON / EXPERIMENTAL / ACADEMIC</span></div>
          <div className="projects neon-projects">
            {projects.map((p, i) => (
              <article className={`project-card neon-card neon-${(i % 4) + 1}`} key={p.no}>
                <div className="project-index">PROJECT / {p.no}</div>
                <div className="project-glow" />
                <div className="project-card-top">
                  <span className="project-number">{p.no}</span>
                  <span className="project-type">{p.type}</span>
                </div>
                <div className="project-visual">
                  <div className="visual-orbit visual-orbit-a" />
                  <div className="visual-orbit visual-orbit-b" />
                  <div className="project-icon">
                    {p.no === "01" ? <Shield /> : p.no === "02" ? <Network /> : p.no === "03" ? <BrainCircuit /> : <Terminal />}
                  </div>
                </div>
                <div className="project-bottom">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="project-actions">
                    <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                    {p.link !== "#" ? (
                      <a className="project-link" href={p.link} target="_blank" rel="noreferrer">VIEW PROJECT <ArrowUpRight size={18} /></a>
                    ) : <span className="project-link muted">CASE STUDY • COMING SOON</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="education section-pad">
          <div className="section-head reveal"><span>04</span><p>EDUCATION</p></div>
          <div className="education-grid">
            <div className="education-card reveal">
              <span className="card-code">EDU / 01</span>
              <span className="edu-year">2024 — 2028</span>
              <h3>PANIMALAR ENGINEERING COLLEGE</h3>
              <p>Bachelor of Engineering — Computer Science and Engineering</p>
            </div>
            <div className="education-card reveal">
              <span className="card-code">EDU / 02</span>
              <span className="edu-year">2022 — 2024</span>
              <h3>VELAMMAL BODHI CAMPUS</h3>
              <p>Higher School Diploma — Computer Science</p>
            </div>
          </div>
        </section>

        <section id="experience" className="experience section-pad">
          <div className="section-head reveal"><span>05</span><p>EXPERIENCE</p></div>
          <div className="timeline">
            {experience.map((e) => (
              <div className="timeline-row reveal" key={e.title}>
                <span className="year"><i />{e.year}</span>
                <div><h3>{e.title}</h3><p>{e.text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="section-head reveal"><span>06</span><p>CONTACT</p></div>
          <div className="contact-inner reveal">
            <div className="contact-stamp"><Activity size={16} /> OPEN TO LEARNING / BUILDING / COLLABORATION</div>
            <p className="hero-kicker">LET'S CONNECT</p>
            <h2 className="display">HAVE A<br /><span>PROJECT?</span></h2>
            <a className="email" href="mailto:mysoregsaanthosh@gmail.com">mysoregsaanthosh@gmail.com <ArrowUpRight /></a>
            <div className="socials">
              <a href="https://github.com/SAANTHOSH-M-G" target="_blank" rel="noreferrer"><Github /> GitHub</a>
              <a href="https://www.linkedin.com/in/saanthoshmg" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} SAANTHOSH M G</span>
        <span>CYBERSECURITY × AI × SOFTWARE</span>
        <button onClick={() => go("#home")}>BACK TO TOP ↑</button>
      </footer>

      <div className="side-note"><Code2 size={14} /> SMG / CYBERSECURITY / SOFTWARE</div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
