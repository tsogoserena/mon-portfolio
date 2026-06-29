import { useState, useEffect, useRef, useCallback } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Project {
  title: string;
  desc: string;
  tags: string[];
  type: "web" | "mobile" | "data";
  emoji: string;
  color: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const TYPED_STRINGS = [
  "Fullstack Developer",
  "React & React Native",
  "Data Analyst · Power BI",
  "JavaScript Architect",
  "Mobile App Builder",
];

const PROJECTS: Project[] = [
  {
    title: "NexusFlow ERP",
    desc: "Plateforme logistique import/export avec tableau de bord en temps réel, gestion des entrepôts et suivi des expéditions.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    type: "web",
    emoji: "🚀",
    color: "#7C3AED",
  },
  {
    title: "Lumen CRM",
    desc: "CRM analytique avec pipeline de vente interactif, KPIs en temps réel et visualisations Recharts avancées.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    type: "web",
    emoji: "💡",
    color: "#06B6D4",
  },
  {
    title: "TrackMobile",
    desc: "Application de tracking livraison cross-platform avec notifications push, cartes et scan de codes-barres.",
    tags: ["React Native", "Expo", "Redux", "Firebase"],
    type: "mobile",
    emoji: "📱",
    color: "#8B5CF6",
  },
  {
    title: "SalesIntelligence BI",
    desc: "Dashboard Power BI connecté à Azure SQL pour l'analyse des ventes, prévisions et segmentation client.",
    tags: ["Power BI", "DAX", "Azure SQL", "Python"],
    type: "data",
    emoji: "📊",
    color: "#0EA5E9",
  },
  {
    title: "StoreApp",
    desc: "E-commerce mobile avec paiement intégré, gestion panier offline-first et synchronisation temps réel.",
    tags: ["React Native", "Stripe", "Node.js", "MongoDB"],
    type: "mobile",
    emoji: "🛍️",
    color: "#A855F7",
  },
  {
    title: "DataPulse Analytics",
    desc: "Outil d'analyse de données opérationnelles avec rapports automatisés, alertes et export Excel dynamique.",
    tags: ["Power BI", "Excel", "Python", "SQL"],
    type: "data",
    emoji: "📈",
    color: "#22D3EE",
  },
];

const SKILLS: Skill[] = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "React Native", level: 90, category: "Mobile" },
  { name: "Expo", level: 85, category: "Mobile" },
  { name: "Node.js", level: 87, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "Power BI", level: 92, category: "Data" },
  { name: "DAX / SQL", level: 88, category: "Data" },
  { name: "Python", level: 75, category: "Data" },
  { name: "PostgreSQL", level: 80, category: "Backend" },
  { name: "MongoDB", level: 78, category: "Backend" },
  { name: "Git / CI-CD", level: 85, category: "DevOps" },
];

const STATS = [
  { value: 30, label: "Projets livrés", suffix: "+" },
  { value: 5, label: "Années d'expérience", suffix: "" },
  { value: 98, label: "Clients satisfaits", suffix: "%" },
  { value: 12, label: "Apps mobiles", suffix: "" },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────
function useTypewriter(strings: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % strings.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return displayed;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useCounter(target: number, visible: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [target, visible, duration]);
  return count;
}

// ─── Particles ───────────────────────────────────────────────────────────────
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${p.alpha})`;
        ctx.fill();
      });
      // draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124,58,237,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

// ─── StatCard ─────────────────────────────────────────────────────────────────
function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { ref, visible } = useInView();
  const count = useCounter(value, visible);
  return (
    <div ref={ref} style={{
      background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)",
      borderRadius: 16, padding: "28px 24px", textAlign: "center",
      transition: "transform 0.3s, box-shadow 0.3s",
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(124,58,237,0.25)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
    >
      <div style={{ fontSize: 42, fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif", background: "linear-gradient(135deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {count}{suffix}
      </div>
      <div style={{ color: "#94A3B8", fontSize: 14, marginTop: 6, fontFamily: "'Inter', sans-serif" }}>{label}</div>
    </div>
  );
}

// ─── SkillBar ─────────────────────────────────────────────────────────────────
function SkillBar({ skill, visible }: { skill: Skill; visible: boolean }) {
  const catColor: Record<string, string> = {
    Frontend: "#7C3AED", Mobile: "#8B5CF6", Backend: "#06B6D4", Data: "#0EA5E9", DevOps: "#22D3EE",
  };
  const color = catColor[skill.category] || "#7C3AED";
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ color: "#F8FAFC", fontFamily: "'Inter',sans-serif", fontSize: 14 }}>{skill.name}</span>
        <span style={{ color: color, fontFamily: "'JetBrains Mono',monospace", fontSize: 13 }}>{skill.level}%</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 999, height: 6, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 999,
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          width: visible ? `${skill.level}%` : "0%",
          transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
        }} />
      </div>
    </div>
  );
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────
function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { ref, visible } = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} style={{
        opacity: visible ? 1 : 0,
        transform: hovered
          ? "translateY(-8px)"
          : visible
          ? "translateY(0)"
          : "translateY(40px)",
        transition: `opacity 0.7s ${delay}ms, transform 0.5s ${delay}ms cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, background 0.3s, border-color 0.3s`,
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? project.color + "55" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 20,
        padding: 28,
        cursor: "pointer",
        boxShadow: hovered ? `0 24px 60px ${project.color}20` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontSize: 36, marginBottom: 12 }}>{project.emoji}</div>
      <div style={{
        display: "inline-block", fontSize: 11, fontFamily: "'JetBrains Mono',monospace",
        color: project.color, background: `${project.color}18`,
        border: `1px solid ${project.color}33`, borderRadius: 999,
        padding: "3px 10px", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1,
      }}>
        {project.type === "web" ? "Web App" : project.type === "mobile" ? "Mobile" : "Data / BI"}
      </div>
      <h3 style={{ color: "#F8FAFC", fontFamily: "'Space Grotesk',sans-serif", fontSize: 19, fontWeight: 700, marginBottom: 10, margin: "0 0 10px" }}>{project.title}</h3>
      <p style={{ color: "#94A3B8", fontFamily: "'Inter',sans-serif", fontSize: 14, lineHeight: 1.65, margin: "0 0 16px" }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((t) => (
          <span key={t} style={{
            fontSize: 12, fontFamily: "'JetBrains Mono',monospace", color: "#94A3B8",
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 6, padding: "2px 8px",
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Portfolio ───────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "data">("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const typed = useTypewriter(TYPED_STRINGS);
  const { ref: skillsRef, visible: skillsVisible } = useInView();
  const { ref: aboutRef, visible: aboutVisible } = useInView();

  const filtered = PROJECTS.filter((p) => activeFilter === "all" || p.type === activeFilter);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  const navItems = ["À propos", "Compétences", "Projets", "Contact"];
  const navIds = ["about", "skills", "projects", "contact"];

  return (
    <>
      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0A0F1E; color: #F8FAFC; font-family: 'Inter', sans-serif; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0F1E; }
        ::-webkit-scrollbar-thumb { background: #7C3AED44; border-radius: 999px; }
        ::selection { background: #7C3AED44; }
        .section-fade { opacity: 0; transform: translateY(30px); transition: opacity 0.8s, transform 0.8s cubic-bezier(0.16,1,0.3,1); }
        .section-fade.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 768px) {
          .hero-title { font-size: 36px !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backdropFilter: "blur(20px)", background: "rgba(10,15,30,0.85)",
        borderBottom: "1px solid rgba(124,58,237,0.15)",
        padding: "0 clamp(20px,5vw,80px)", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 18, background: "linear-gradient(135deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {"<Serena.dev />"}
        </span>
        <div className="nav-desktop" style={{ display: "flex", gap: 32 }}>
          {navItems.map((item, i) => (
            <button key={item} onClick={() => scrollTo(navIds[i])} style={{
              background: "none", border: "none", color: "#94A3B8", fontFamily: "'Inter',sans-serif",
              fontSize: 14, cursor: "pointer", transition: "color 0.2s", padding: 0,
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F8FAFC")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
            >{item}</button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{
            background: "linear-gradient(135deg,#7C3AED,#6D28D9)", border: "none", color: "#fff",
            fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 600,
            padding: "8px 20px", borderRadius: 999, cursor: "pointer",
          }}>Me contacter</button>
        </div>
        {/* burger */}
        <button className="nav-mobile" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: "none", background: "none", border: "none", color: "#F8FAFC",
          fontSize: 24, cursor: "pointer", flexDirection: "column", gap: 5, padding: 4,
        }}>
          <div style={{ width: 22, height: 2, background: "#F8FAFC", transition: "0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <div style={{ width: 22, height: 2, background: "#F8FAFC", transition: "0.3s", opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: 22, height: 2, background: "#F8FAFC", transition: "0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "rgba(10,15,30,0.97)", borderBottom: "1px solid rgba(124,58,237,0.15)",
          padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16,
        }}>
          {navItems.map((item, i) => (
            <button key={item} onClick={() => scrollTo(navIds[i])} style={{
              background: "none", border: "none", color: "#94A3B8", fontSize: 16,
              cursor: "pointer", textAlign: "left", fontFamily: "'Inter',sans-serif",
            }}>{item}</button>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 64 }}>
        <Particles />
        {/* gradient orbs */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.18),transparent 70%)", pointerEvents: "none", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "0%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,0.12),transparent 70%)", pointerEvents: "none", filter: "blur(40px)" }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 clamp(20px,8vw,140px)", maxWidth: 900 }}>
          {/* badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: 999, padding: "6px 16px", marginBottom: 28,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E" }} />
            <span style={{ color: "#94A3B8", fontFamily: "'Inter',sans-serif", fontSize: 13 }}>Disponible pour de nouveaux projets</span>
          </div>

          <h1 className="hero-title" style={{
            fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800,
            fontSize: "clamp(36px,5.5vw,68px)", lineHeight: 1.1, marginBottom: 16,
          }}>
            Bonjour, je suis{" "}
            <span style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              NTSOPGO sonna ange serena
            </span>
          </h1>

          {/* terminal typewriter */}
          <div style={{
            background: "rgba(0,0,0,0.4)", border: "1px solid rgba(124,58,237,0.25)",
            borderRadius: 12, padding: "12px 20px", display: "inline-flex", alignItems: "center", gap: 10,
            marginBottom: 28, maxWidth: "100%",
          }}>
            <span style={{ color: "#7C3AED", fontFamily: "'JetBrains Mono',monospace", fontSize: 15 }}>{"~$"}</span>
            <span style={{ color: "#06B6D4", fontFamily: "'JetBrains Mono',monospace", fontSize: 15 }}>{typed}</span>
            <span style={{
              width: 2, height: 18, background: "#7C3AED", display: "inline-block",
              animation: "blink 1s step-end infinite",
            }} />
          </div>
          <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

          <p style={{
            color: "#94A3B8", fontFamily: "'Inter',sans-serif", fontSize: "clamp(15px,1.8vw,18px)",
            lineHeight: 1.75, maxWidth: 560, marginBottom: 40,
          }}>
            Développeuse Fullstack passionnée, je conçois des applications web performantes, des apps mobiles cross-platform et transforme vos données en insights visuels avec Power BI.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("projects")} style={{
              background: "linear-gradient(135deg,#7C3AED,#6D28D9)", border: "none", color: "#fff",
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15,
              padding: "14px 32px", borderRadius: 12, cursor: "pointer",
              boxShadow: "0 8px 32px rgba(124,58,237,0.35)", transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 40px rgba(124,58,237,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(124,58,237,0.35)"; }}
            >Voir mes projets →</button>
            <button onClick={() => scrollTo("contact")} style={{
              background: "transparent", border: "1px solid rgba(124,58,237,0.4)", color: "#F8FAFC",
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15,
              padding: "14px 32px", borderRadius: 12, cursor: "pointer", transition: "border-color 0.2s, background 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#7C3AED"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(124,58,237,0.4)"; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
            >Me contacter</button>
          </div>
        </div>

        {/* scroll indicator */}
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ color: "#475569", fontFamily: "'Inter',sans-serif", fontSize: 12 }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom,#7C3AED,transparent)" }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "80px clamp(20px,8vw,140px)" }}>
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "80px clamp(20px,8vw,140px)" }}>
        <div ref={aboutRef} className={`section-fade${aboutVisible ? " visible" : ""}`}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          {/* Avatar */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                width: 280, height: 280, borderRadius: "50%",
                background: "linear-gradient(135deg,#7C3AED22,#06B6D422)",
                border: "2px solid rgba(124,58,237,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 100,
              }}>👩🏽‍💻</div>
              {/* floating badges */}
              {[
                { icon: "⚛️", label: "React", top: -10, right: -10, color: "#7C3AED" },
                { icon: "📱", label: "Mobile", bottom: 20, left: -20, color: "#06B6D4" },
                { icon: "📊", label: "Power BI", top: 60, left: -30, color: "#8B5CF6" },
              ].map((b) => (
                <div key={b.label} style={{
                  position: "absolute", top: b.top, bottom: b.bottom, left: b.left, right: b.right,
                  background: `${b.color}18`, border: `1px solid ${b.color}44`,
                  borderRadius: 12, padding: "6px 12px", display: "flex", alignItems: "center", gap: 6,
                  animation: "float 3s ease-in-out infinite", animationDelay: `${Math.random() * 1}s`,
                }}>
                  <span>{b.icon}</span>
                  <span style={{ color: "#F8FAFC", fontFamily: "'Inter',sans-serif", fontSize: 12, fontWeight: 500 }}>{b.label}</span>
                </div>
              ))}
              <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }`}</style>
            </div>
          </div>
          {/* Text */}
          <div>
            <div style={{ color: "#7C3AED", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, marginBottom: 12 }}>// À propos</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,36px)", marginBottom: 20 }}>
              Code, Data & Passion
            </h2>
            <p style={{ color: "#94A3B8", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
              Avec 5 ans d'expérience, je développe des solutions numériques complètes — du backend robuste aux interfaces mobiles intuitives, en passant par des dashboards Power BI qui transforment des données brutes en décisions stratégiques.
            </p>
            <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: 15 }}>
              Je crois qu'un bon produit naît à l'intersection du code propre, d'une UX soignée et d'une data exploitable. Mon expertise couvre tout le stack JavaScript moderne, React Native pour le mobile et l'écosystème Microsoft Power Platform pour la business intelligence.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              {["JavaScript", "TypeScript", "React", "React Native", "Power BI", "Node.js"].map((t) => (
                <span key={t} style={{
                  background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)",
                  color: "#A78BFA", borderRadius: 8, padding: "4px 12px",
                  fontFamily: "'JetBrains Mono',monospace", fontSize: 12,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "80px clamp(20px,8vw,140px)", background: "rgba(124,58,237,0.03)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ color: "#7C3AED", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, marginBottom: 10 }}>// Mes outils</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,36px)" }}>Compétences techniques</h2>
        </div>
        <div ref={skillsRef} className="skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          {["Frontend", "Mobile", "Backend", "Data"].map((cat) => (
            <div key={cat}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20,
                color: "#F8FAFC", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15,
              }}>
                <span style={{ color: "#7C3AED" }}>{"▸"}</span> {cat}
              </div>
              {SKILLS.filter((s) => s.category === cat).map((s) => (
                <SkillBar key={s.name} skill={s} visible={skillsVisible} />
              ))}
            </div>
          ))}
        </div>
        {/* DevOps separate */}
        <div style={{ marginTop: 40, maxWidth: 500 }}>
          <div style={{ color: "#F8FAFC", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15, marginBottom: 20 }}>
            <span style={{ color: "#7C3AED" }}>{"▸"}</span> DevOps
          </div>
          {SKILLS.filter((s) => s.category === "DevOps").map((s) => (
            <SkillBar key={s.name} skill={s} visible={skillsVisible} />
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "80px clamp(20px,8vw,140px)" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ color: "#7C3AED", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, marginBottom: 10 }}>// Mon travail</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,36px)", marginBottom: 32 }}>Projets sélectionnés</h2>
          {/* filters */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            {(["all", "web", "mobile", "data"] as const).map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                background: activeFilter === f ? "linear-gradient(135deg,#7C3AED,#6D28D9)" : "rgba(255,255,255,0.04)",
                border: activeFilter === f ? "none" : "1px solid rgba(255,255,255,0.1)",
                color: activeFilter === f ? "#fff" : "#94A3B8",
                fontFamily: "'Inter',sans-serif", fontSize: 13, fontWeight: 500,
                padding: "8px 20px", borderRadius: 999, cursor: "pointer", transition: "all 0.2s",
              }}>{f === "all" ? "Tous" : f === "web" ? "Web App" : f === "mobile" ? "Mobile" : "Data / BI"}</button>
            ))}
          </div>
        </div>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {filtered.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 80} />)}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "80px clamp(20px,8vw,140px) 120px", background: "rgba(124,58,237,0.03)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#7C3AED", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, marginBottom: 10 }}>// Travaillons ensemble</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,40px)", marginBottom: 16 }}>
            Un projet en tête ?
          </h2>
          <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.75, marginBottom: 48 }}>
            Que ce soit pour une app web, mobile ou un dashboard BI, je serais ravie d'échanger sur votre vision.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Email", value: "sophie.mballa@dev.io", icon: "✉️" },
              { label: "LinkedIn", value: "linkedin.com/in/sophie-mballa", icon: "💼" },
              { label: "GitHub", value: "github.com/sophie-mballa", icon: "🐙" },
            ].map((c) => (
              <div key={c.label} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.15)",
                borderRadius: 12, padding: "16px 24px", display: "flex", alignItems: "center", gap: 16,
                transition: "border-color 0.2s, background 0.2s", cursor: "pointer",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.4)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.06)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.15)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)"; }}
              >
                <span style={{ fontSize: 22 }}>{c.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ color: "#475569", fontFamily: "'Inter',sans-serif", fontSize: 12 }}>{c.label}</div>
                  <div style={{ color: "#F8FAFC", fontFamily: "'JetBrains Mono',monospace", fontSize: 14 }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
          <button style={{
            marginTop: 40, background: "linear-gradient(135deg,#7C3AED,#06B6D4)", border: "none",
            color: "#fff", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16,
            padding: "16px 48px", borderRadius: 12, cursor: "pointer",
            boxShadow: "0 8px 32px rgba(124,58,237,0.35)", transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 44px rgba(124,58,237,0.5)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(124,58,237,0.35)"; }}
          >Envoyer un message ✉️</button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px clamp(20px,8vw,140px)",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ color: "#475569", fontFamily: "'JetBrains Mono',monospace", fontSize: 13 }}>
          {"<Sophie.dev /> © 2025"}
        </span>
        <span style={{ color: "#475569", fontFamily: "'Inter',sans-serif", fontSize: 13 }}>
          Crafted with ⚛️ React + TypeScript
        </span>
      </footer>
    </>
  );
}