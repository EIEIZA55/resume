import React, { useEffect, useRef, useState } from "react";
import "./index.css";

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

export default function PortfolioPage() {
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
            <a className="nav-link" href="#education">
              Education
            </a>
            <a className="nav-link" href="#achievement">
              Achievement
            </a>
            <a className="nav-link" href="#works">
              Services
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
                ></p>
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
                  Hi! I’m Tanupat, a Computer Technology student who loves
                  building web applications. I enjoy learning, creating, and
                  improving my skills through real projects and teamwork. My
                  passion is turning simple ideas into something that actually
                  works.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          style={{
            backgroundColor: "#fdfaf4",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // ✅ จัดกลางแนวนอน
            padding: "80px 0",
          }}
        >
          {/* หัวข้อ Education */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(36px, 4vw, 48px)", // ✅ ขนาดเท่ากับ Services
                fontWeight: 800, // ✅ หนาแบบเดียวกัน
                color: "#2e2b23", // ✅ สีเดียวกับ Services
                marginBottom: "12px",
              }}
            >
              Education
            </h2>

            <p
              style={{
                textAlign: "center",
                color: "#6b6b6b",
                fontSize: "14px",
                marginBottom: "40px",
              }}
            >
              เส้นทางการศึกษาและผลการเรียนของผมตั้งแต่มัธยมต้นจนถึงมหาวิทยาลัย
            </p>
          </div>

          {/* กล่องเนื้อหา (รูปซ้าย + การศึกษาขวา) */}
          {/* Container รวมทั้งหมด */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "80px", // ✅ เพิ่มช่องว่างระหว่างรูปกับกล่อง
              maxWidth: "1200px", // ✅ กล่องกว้างขึ้น
              width: "100%",
            }}
          >
            {/* ซ้าย: รูปภาพ */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "220px", // ✅ ขยายขนาดรูปเดิมจาก 160 → 220px
                  height: "220px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "5px solid #d6b85a", // ✅ เส้นขอบหนาขึ้นเล็กน้อย
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  marginBottom: "16px",
                }}
              >
                <img
                  src="/img/profile.jpg"
                  alt="Tanupat Thalalerg"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  fontWeight: 600,
                  color: "#3f3a2b",
                  fontSize: "1.1rem", // ✅ ขยายชื่อ
                  marginBottom: "4px",
                }}
              >
                Tanupat Thalalerg
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#7b7465",
                }}
              >
                Computer Technology
              </div>
            </div>

            {/* ขวา: กล่องการศึกษา */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#ffffff",
                borderRadius: "20px", // ✅ มุมโค้งมากขึ้น
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 24px 40px rgba(0,0,0,0.08)", // ✅ shadow หนักขึ้นเล็กน้อย
                padding: "40px 48px", // ✅ เพิ่มระยะห่างในกล่อง
                lineHeight: 1.7,
                transform: "scale(1.02)", // ✅ ขยายทั้งกล่องเล็กน้อย (~2%)
              }}
            >
              {/* ============ แถวการศึกษา #1 มัธยมต้น ============ */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                {/* โลโก้สถาบัน */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    border: "2px solid #d6b85a",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/img/tpn.jpg"
                    alt="โรงเรียนมัธยมต้น"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* ข้อความ */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#3f3a2b",
                      marginBottom: "4px",
                      lineHeight: 1.4,
                    }}
                  >
                    โรงเรียนเตรียมอุดมศึกษาพัฒนาการนนทบุรี
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#6b6b6b",
                      marginBottom: "2px",
                      lineHeight: 1.4,
                    }}
                  >
                    ปีการศึกษา 2015–2018
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#8a8575",
                      lineHeight: 1.4,
                    }}
                  >
                    โครงการส่งเสริมความเป็นเลิศทางคณิตศาสตร์และวิทยาศาสตร์
                    (Gifted)
                  </div>
                </div>
              </div>

              {/* เส้นคั่น */}
              <div
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  margin: "8px 0 20px",
                }}
              />

              {/* ============ แถวการศึกษา #2 มัธยมปลาย ============ */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                {/* โลโก้สถาบัน */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    border: "2px solid #d6b85a",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/img/tpn.jpg"
                    alt="โรงเรียนมัธยมปลาย"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* ข้อความ */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#3f3a2b",
                      marginBottom: "4px",
                      lineHeight: 1.4,
                    }}
                  >
                    โรงเรียนเตรียมอุดมศึกษาพัฒนาการนนทบุรี
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#6b6b6b",
                      marginBottom: "2px",
                      lineHeight: 1.4,
                    }}
                  >
                    ปีการศึกษา 2018–2021
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#8a8575",
                      lineHeight: 1.4,
                    }}
                  >
                    สายการวิทย์-คณิต / ร่วมกิจกรรมด้านเทคโนโลยี
                  </div>
                </div>
              </div>

              {/* เส้นคั่น */}
              <div
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  margin: "8px 0 20px",
                }}
              />

              {/* ============ แถวการศึกษา #3 มหาวิทยาลัย ============ */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                {/* โลโก้สถาบัน */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    border: "2px solid #d6b85a",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/img/kmutnb.jpg"
                    alt="KMUTNB"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* ข้อความ */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#3f3a2b",
                      marginBottom: "4px",
                      lineHeight: 1.4,
                    }}
                  >
                    มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#6b6b6b",
                      marginBottom: "2px",
                      lineHeight: 1.4,
                    }}
                  >
                    2022 – ปัจจุบัน
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#8a8575",
                      lineHeight: 1.4,
                    }}
                  >
                    เทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ แขนงวิชาคอมพิวเตอร์
                  </div>
                </div>
              </div>

              {/* ปุ่ม Transcript (ลิงก์ไปที่รูปภาพแทน PDF) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "28px",
                }}
              >
                <a
                  href="/img/transcript///.jpg" // ✅ ลิงก์รูปแทน PDF
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
                  View Transcript (Image)
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

        {/* =========== ACHIEVEMENT SECTION =========== */}
        <section
          id="achievement"
          style={{
            backgroundColor: "#fdfaf4", // ✅ เปลี่ยนให้เข้าธีม warm tone
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 0",
          }}
        >
          {/* หัวข้อหลัก */}
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 48px)",
              fontWeight: 800,
              color: "#2e2b23", // ✅ ใช้สีเดียวกับหัวข้อ Education
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            ACHIEVEMENT
          </h2>

          {/* รายการผลงาน */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              maxWidth: "1000px",
              width: "100%",
              padding: "0 20px",
            }}
          >
            {/* การ์ด #1 */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 12px 28px rgba(0,0,0,0.07)", // ✅ เงาอบอุ่น นุ่มกว่าเดิม
                padding: "24px",
                textAlign: "center",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0,0,0,0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(0,0,0,0.07)";
              }}
            >
              <img
                src="/img/cdg.jpg"
                alt="Hackathon 2025"
                style={{
                  width: "75%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "7px",
                  marginBottom: "5px",
                }}
              />
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#3f3a2b", // ✅ สีเดียวกับส่วน Education
                  marginBottom: "6px",
                }}
              >
                1st Place in Hackathon 2025 Tokio Marine
              </h3>
              <p
                style={{
                  color: "#bfa044", // ✅ สีทองอ่อน เข้ากับธีม
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                FinTech
              </p>
              <p style={{ color: "#7a7463", fontSize: "14px" }}>2025</p>
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
                href="mailto:tonnam2917@gmail.com"
                style={{
                  textDecoration: "none",
                  color: "#5c5035",
                  wordBreak: "break-all",
                }}
              >
                tonnam2917@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ fontSize: "22px", color: "#4a4a4a" }}
              />
              <span style={{ color: "#5c5035" }}>+66-94-516-8101</span>
            </div>

            {/* GitHub */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: "22px", color: "#4a4a4a" }}
              />
              <a
                href="https://github.com/EIEIZA55"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#5c5035" }}
              >
                github.com/EIEIZA55
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
                linkedin.com/in/Tanupat
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

      <footer className="footer">
        © {new Date().getFullYear()} Tanupat Thalalerg
      </footer>
    </div>
  );
}
