import { useEffect, useRef, useState } from "react";
import "./index.css";

/* FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faReact,
  faPhp,
  faCss3Alt,
  faJava,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faDatabase,
  faCode,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [navHidden, setNavHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const HIDE_AFTER = 80;
    const DELTA = 6;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      if (y <= HIDE_AFTER) {
        setNavHidden(false);
        lastY.current = y;
        return;
      }

      const diff = y - lastY.current;
      if (diff > DELTA) setNavHidden(true); // ลง → ซ่อน
      else if (diff < -DELTA) setNavHidden(false); // ขึ้น → โชว์

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --------- DATA: Skills --------- */
  const codingSkills = [
    { name: "React", icon: faReact },
    { name: "PHP", icon: faPhp },
    { name: "CSS", icon: faCss3Alt },
    { name: "Java", icon: faJava },
  ];

  const devopsSkills = [
    { name: "GitHub", icon: faGithub },
    { name: "Docker", icon: faDocker },
    { name: "MySQL", icon: faDatabase }, // ใช้ไอคอน database แทน mysql
  ];

  return (
    <div className="app">
      <header
        className={`navbar ${navHidden ? "nav-hidden" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container nav-inner">
          <div className="brand">My Portfolio</div>
          <nav className="nav-menu">
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#works">
              Works
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="content">
        {/* =========== HOME (Hero) =========== */}
        <section id="home" className="section section-home hero">
          <div
            className="hero-inner"
            style={{
              maxWidth: "1700px",
              margin: "0 auto",
              paddingLeft: "clamp(70px, 9vw, 160px)",
              paddingRight: "clamp(70px, 9vw, 160px)",
              paddingTop: "40px",
            }}
          >
            <div
              className="hero-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  "minmax(520px, 1.2fr) minmax(440px, 0.8fr)",
                columnGap: "clamp(220px, 16vw, 360px)",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "calc(100vh - var(--nav-h))",
              }}
            >
              {/* ซ้าย */}
              <div
                className="hero-left"
                style={{
                  maxWidth: "min(60ch, 48vw)",
                  justifySelf: "end",
                }}
              >
                <h1
                  className="display-name"
                  style={{
                    fontSize: "clamp(96px, 10vw, 150px)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.02em",
                    margin: "0 0 24px 0",
                    color: "#6b5c3a",
                  }}
                >
                  <span className="first">Tanupat</span>
                  <span className="last">Thalalerg</span>
                </h1>

                <p
                  className="intro"
                  style={{
                    marginBottom: 20,
                    fontSize: 18,
                    color: "#5c5035",
                    lineHeight: 1.6,
                  }}
                >
                  I am a self-taught full-stack developer interested in creating
                  websites and small tools on the internet.
                </p>

                <div className="hero-actions">
                  <a
                    className="btn outline"
                    href="/transcript.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View my Transcript 📄
                  </a>
                </div>
              </div>

              {/* ขวา */}
              <div
                className="hero-right"
                style={{
                  maxWidth: "60ch",
                  justifySelf: "start",
                  color: "#5c5035",
                  fontSize: 16,
                  lineHeight: 1.7,
                }}
              >
                <p>
                  With a passion for modern web technologies, I’ve had the
                  privilege of building robust web apps and crafting delightful
                  user experiences.
                </p>
                <p>
                  I turn ideas into clean, performant interfaces while sweating
                  the small details that make products feel great.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          style={{
            minHeight: "100vh", 
            width: "100%", 
            backgroundColor: "#fffaf3", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "80px 0",
          }}
        >
          {/* หัวข้อ */}
          <div style={{ maxWidth: "900px", width: "90%" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 800,
                color: "#3f3a2b",
                margin: "0 0 8px 0",
                lineHeight: 1.15,
              }}
            >
              Education
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#8a8575",
                lineHeight: 1.5,
                margin: "0 0 32px 0",
              }}
            >
              เส้นทางการศึกษาและผลการเรียนของผมตั้งแต่มัธยมจนถึงมหาวิทยาลัย
            </p>
          </div>

          {/* แถวหลัก: ซ้าย (รูป/ชื่อ) + ขวา (กล่องการศึกษา) */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "40px",
              maxWidth: "900px",
              width: "90%",
            }}
          >
            {/* ซ้าย: โปรไฟล์ */}
            <div
              style={{
                minWidth: "210px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "210px",
                  height: "210px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid #d6b85a",
                  boxShadow: "0 16px 32px rgba(0,0,0,0.12)",
                  margin: "0 auto",
                }}
              >
                <img
                  src="/img/profile.jpg"
                  alt="Tanupat Thalalerg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div style={{ marginTop: "14px" }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#4a4330",
                    lineHeight: 1.4,
                  }}
                >
                  Tanupat Thalalerg
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#8a8575",
                    lineHeight: 1.4,
                    marginTop: "2px",
                  }}
                >
                  Computer Technology
                </div>
              </div>
            </div>

            {/* ขวา: กล่องการศึกษา */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 24px 40px rgba(0,0,0,0.06)",
                padding: "28px 32px 32px",
                lineHeight: 1.5,
              }}
            >
              {/* มัธยมต้น */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#3f3a2b",
                    marginBottom: "4px",
                  }}
                >
                  โรงเรียนมัธยมต้น …
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#6b6b6b",
                    marginBottom: "2px",
                  }}
                >
                  ปีการศึกษา 2015–2018
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#8a8575",
                  }}
                >
                  สายการเรียนทั่วไป / ร่วมกิจกรรมด้านเทคโนโลยี
                </div>
              </div>

              {/* เส้นคั่นบางๆ */}
              <div
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  margin: "16px 0",
                }}
              />

              {/* มัธยมปลาย */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#3f3a2b",
                    marginBottom: "4px",
                  }}
                >
                  โรงเรียนมัธยมปลาย …
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#6b6b6b",
                    marginBottom: "2px",
                  }}
                >
                  ปีการศึกษา 2018–2021
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#8a8575",
                  }}
                >
                  แผนการเรียนวิทย์–คอมพิวเตอร์ / พัฒนาเว็บไซต์
                </div>
              </div>

              {/* เส้นคั่นบางๆ */}
              <div
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  margin: "16px 0",
                }}
              />

              {/* มหาลัย */}
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#3f3a2b",
                    marginBottom: "4px",
                  }}
                >
                  มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#6b6b6b",
                    marginBottom: "2px",
                  }}
                >
                  2022 – ปัจจุบัน
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#8a8575",
                  }}
                >
                  คณะเทคโนโลยีอุตสาหกรรม สาขาเทคโนโลยีคอมพิวเตอร์
                </div>
              </div>

              {/* ปุ่ม Transcript */}
              <div style={{ marginTop: "28px" }}>
                <a
                  href="/transcript.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#d6b85a",
                    color: "#3f3a2b",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: 1.2,
                    padding: "10px 16px",
                    borderRadius: "10px",
                    border: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 10px 18px rgba(214,184,90,0.3)",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "all .18s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#bfa044";
                    e.currentTarget.style.boxShadow =
                      "0 12px 20px rgba(191,160,68,0.35)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#d6b85a";
                    e.currentTarget.style.boxShadow =
                      "0 10px 18px rgba(214,184,90,0.3)";
                  }}
                >
                  View Transcript (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========== WORKS / SERVICES (แบบแนวตั้ง Coding / DevOps) =========== */}
        <section id="works" className="section section-works top-align">
          <div className="section-inner">
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Services
            </h2>
            <p className="lead"></p>
            <div className="services-vertical">
              {/* Coding */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-index"></div>
                  <div>
                    <div className="service-icon-title">
                      <FontAwesomeIcon icon={faCode} />
                      <span>&nbsp;Coding</span>
                    </div>
                    <p className="service-sub">
                      ภาษาหลักและเฟรมเวิร์กที่คุ้นเคย
                    </p>
                  </div>
                </div>

                <ul className="skill-list">
                  {codingSkills.map((s) => (
                    <li key={s.name} className="skill-row">
                      <span>{s.name}</span>
                      <FontAwesomeIcon icon={s.icon} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* DevOps / Tools */}
              <div className="service-card">
                <div className="service-header">
                  <div className="service-index"></div>
                  <div>
                    <div className="service-icon-title">
                      <FontAwesomeIcon icon={faServer} />
                      <span>&nbsp;DevOps / Tools</span>
                    </div>
                    <p className="service-sub">
                      เครื่องมือที่ใช้ในการพัฒนา/ดีพลอย
                    </p>
                  </div>
                </div>

                <ul className="skill-list">
                  {devopsSkills.map((s) => (
                    <li key={s.name} className="skill-row">
                      <span>{s.name}</span>
                      <FontAwesomeIcon icon={s.icon} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========== CONTACT =========== */}
        <section
          id="contact"
          className="section section-contact"
          style={{
            background: "#fff",
            color: "#2c2c2c",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px 20px",
          }}
        >
          {/* หัวข้อ */}
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "800",
              color: "#5c5035",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Contact
          </h2>

          {/* คำอธิบายสั้น */}
          <p
            style={{
              fontSize: "18px",
              color: "#7a6b4f",
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.6,
              marginBottom: "40px",
            }}
          >
            Feel free to reach out — collaboration, internship, or just say hi
            👋
          </p>

          {/* กล่องข้อมูลติดต่อ */}
          <div
            style={{
              display: "grid",
              rowGap: "20px",
              background: "#faf8f2",
              borderRadius: "16px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
              padding: "32px 36px",
              width: "min(480px, 90%)",
              fontSize: "18px",
              fontWeight: 600,
              color: "#2c2c2c",
            }}
          >
            {/* Email */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: "22px", color: "#4a4a4a" }}
              />
              <a
                href="mailto:you@example.com"
                style={{
                  textDecoration: "none",
                  color: "#5c5035",
                  wordBreak: "break-all",
                }}
              >
                you@example.com
              </a>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ fontSize: "22px", color: "#4a4a4a" }}
              />
              <span style={{ color: "#5c5035" }}>+66-8x-xxx-xxxx</span>
            </div>

            {/* GitHub */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: "22px", color: "#4a4a4a" }}
              />
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5c5035" }}
              >
                github.com/yourname
              </a>
            </div>

            {/* LinkedIn */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: "22px", color: "#4a4a4a" }}
              />
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5c5035" }}
              >
                linkedin.com/in/yourname
              </a>
            </div>

            {/* YouTube */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ fontSize: "22px", color: "#4a4a4a" }}
              />
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5c5035" }}
              >
                YouTube Channel
              </a>
            </div>
          </div>

          {/* บรรทัดล่างเล็ก ๆ */}
          <p
            style={{
              marginTop: "32px",
              fontSize: "14px",
              color: "#7a6b4f",
              textAlign: "center",
            }}
          >
            Based in Thailand 🇹🇭 · Open to internship & freelance opportunities
          </p>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Your Name</footer>
    </div>
  );
}
