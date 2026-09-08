import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import FooterNav from "./components/FooterNav";
import ParticleBackground from "./components/ParticleBackground";
import ScrollTopButton from "./components/ScrollTopButton";
import cssLogo from "../assets/image/css.webp";
import jsLogo from "../assets/image/js.webp";
import phpLogo from "../assets/image/php.webp";
import htmlLogo from "../assets/image/HTML Logotype.webp";
import vscodeLogo from "../assets/image/Vscode Logotype.webp";
import githubLogo from "../assets/image/GitHub (1).webp";
import bootstrapLogo from "../assets/image/Bootstrap Logotype.webp";
import figmaLogo from "../assets/image/Figma (1).webp";
import pythonCertificate from "../assets/image/python fundamental-1.webp";
import networkCertificate from "../assets/image/network-1.webp";
import linuxCertificate from "../assets/image/linux-1.webp";
import vmCertificate from "../assets/image/vm-1.webp";
import instagramIcon from "../assets/image/ig.webp";
import facebookIcon from "../assets/image/fb.webp";
import whatsappIcon from "../assets/image/wa.webp";
import githubIcon from "../assets/image/github.webp";

function ProfilePage({ children }) {
  return (
    <div className="container my-5">
      <div className="row g-4 align-items-start">
        <div className="col-lg-4 col-md-5"><ProfileCard /></div>
        <div className="col-lg-8 col-md-7">{children}</div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <ProfilePage>
      <div className="details-card">
        <div className="section">
          <h3 className="hover-text">ABOUT ME</h3>
          <p>
            My name Ahmad Reyhan Maghribi. I’m usually called &quot;Deku&quot; by
            my friends. I am a computer science student who is currently diving
            deeper into the world of programming. <br />
            My dream is to become a full-stack programmer. I also enjoy watching
            anime in my free time. <strong><br />よろしくお願いします ✌️</strong>
          </p>
        </div>
        <div className="section">
          <h3 className="hover-text">PERSONAL INFORMATION</h3>
          <p>
            Date of birth: Tulungagung 28-08-2005 <br />
            Place of birth: Tulungagung, East Java
            <br />
            Email: Reyhanmagribi57@mail.com
          </p>
        </div>
        <div className="section">
          <h3 className="hover-text">MY LIFE MOTTO</h3>
          <p>Chill Guy...</p>
        </div>
        <div className="stats-section">
          <Link to="/certificate" className="stat-link">
            <div className="stat-box"><h4>CERTIFICATE</h4><p>2</p></div>
          </Link>
          <Link to="/project" className="stat-link">
            <div className="stat-box"><h4>PROJECT</h4><p>~</p></div>
          </Link>
        </div>
      </div>
    </ProfilePage>
  );
}

function EducationPage() {
  return (
    <ProfilePage>
      <div className="details-card">
        <h2 className="text-center mb-4">EDUCATION</h2>
        <div className="section">
          <h3 className="hover-text">JUNIOR HIGH SCHOOL</h3>
          <p>2018 - 2021 <br />SMPN 1 Campurdarat <br />Kec. Campurdarat Kab. Tulungagung</p>
        </div>
        <div className="section">
          <h3 className="hover-text">SENIOR HIGH SCHOOL</h3>
          <p>2021 - 2024 <br />MAN 1 Tulungagung <br />Kec. Boyolangu Kab. Tulungagung</p>
        </div>
        <div className="section">
          <h3 className="hover-text">COLLEGE</h3>
          <p>2024 - Now <br />Bhinneka PGRI University <br />Kec. Kedungwaru Kab. Tulungagung</p>
        </div>
      </div>
    </ProfilePage>
  );
}

function OrganizationPage() {
  return (
    <ProfilePage>
      <div className="details-card">
        <h2 className="text-center mb-4">Organization</h2>
        <div className="section">
          <h3 className="hover-text">HUMAS IPNU-IPPNU RANTING PELEM</h3>
          <p style={{ fontWeight: 600 }}>Term of office <br />2021 - 2022</p>
        </div>
        <div className="section">
          <h3 className="hover-text">WAKIL KETUA ORGANISASI PELAJAR MDTQ</h3>
          <p style={{ fontWeight: 600 }}>Term of office <br />2021 - 2023</p>
        </div>
        <div className="section">
          <h3 className="hover-text">REMAS TANWIRUL QULUB</h3>
          <p style={{ fontWeight: 600 }}>Term of office <br />2024 - now</p>
        </div>
      </div>
    </ProfilePage>
  );
}

const socialAccounts = [
  { title: "Instagram", href: "https://www.instagram.com/zetsunaaaa/", icon: instagramIcon, alt: "Instagram", text: "@zetsunaaaa" },
  { title: "Facebook", href: "https://www.facebook.com/zetsunaaaa", icon: facebookIcon, alt: "Facebook", text: "zetsuna" },
  { title: "WhatsApp", href: "https://wa.me/qr/O5SXGZNVKHLCG1", icon: whatsappIcon, alt: "WhatsApp", text: "+62 82333009757" },
  { title: "GitHub", href: "https://github.com/Deku-foryou", icon: githubIcon, alt: "GitHub", text: "github.com/deku-foryou" },
];

function SocialMediaPage() {
  return (
    <ProfilePage>
      <div className="details-card">
        <div className="section"><h2 className="text-center">SOCIAL MEDIA</h2></div>
        {socialAccounts.map((account) => (
          <div className="section" key={account.title}>
            <h3 className="hover-text">{account.title}</h3>
            <a href={account.href} className="social-link" target="_blank" rel="noreferrer">
              <img src={account.icon} alt={account.alt} className="social-icon" width="28" height="28" loading="lazy" />
              <b>{account.text}</b>
            </a>
          </div>
        ))}
      </div>
    </ProfilePage>
  );
}

const techStack = [
  [cssLogo, "CSS"], [jsLogo, "JavaScript"], [phpLogo, "PHP"], [htmlLogo, "HTML"],
  [vscodeLogo, "VS CODE"], [githubLogo, "GITHUB"], [bootstrapLogo, "Bootstrap"], [figmaLogo, "FIGMA"],
];

function TechStackPage() {
  return (
    <section className="container text-center mt-5">
      <h2 className="hover-text">My Tech Stack</h2>
      <p className="text-secondary mb-4">Some of the tech stack &amp; Tools I use:</p>
      <div className="tech-box">
        {techStack.map(([image, name]) => (
          <div className="tech-item" key={name}><img src={image} alt={name} width="70" height="70" loading="lazy" /><p>{name}</p></div>
        ))}
      </div>
    </section>
  );
}

const certificates = [
  [pythonCertificate, "Python Fundamental"],
  [networkCertificate, "Network Fundamental"],
  [linuxCertificate, "Linux Fundamental"],
  [vmCertificate, "Virtual Machine Fundamental"],
];

function CertificatePage() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="container mt-5 text-center certificate-page">
      <h2 className="hover-text">Training &amp; Bootcamp</h2>
      <p className="text-secondary mb-4">Completed Trainings :</p>
      <div className="row justify-content-center g-4">
        {certificates.map(([image, title]) => (
          <div className="col-10 col-md-4" key={title}>
            <div
              className="certificate-card"
              onClick={() => setSelectedCertificate({ image, title })}
              role="button"
              tabIndex="0"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedCertificate({ image, title });
                }
              }}
            >
              <img src={image} className="certificate-img" alt={title} width="2339" height="1653" loading="lazy" />
              <p className="cert-title">{title}</p>
              <p className="cert-desc">Aguna Course - 2024</p>
            </div>
          </div>
        ))}
      </div>
      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="certificate-modal-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="certificate-modal-close" aria-label="Close certificate" onClick={() => setSelectedCertificate(null)}>×</button>
            <img src={selectedCertificate.image} className="popup-image" alt={selectedCertificate.title} width="2339" height="1653" />
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectPage() {
  return <section className="container mt-5" aria-label="Projects" />;
}

function PageLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/tech-stack" element={<TechStackPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </main>
      <FooterNav />
      <footer className="copyright">© 2025 DEKU / Ahm Reyhan M (24161562078) • All Rights Reserved</footer>
      <ParticleBackground />
      <ScrollTopButton />
    </>
  );
}

export default function App() {
  return <PageLayout />;
}
