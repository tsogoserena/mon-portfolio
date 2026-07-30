import React, { useState } from 'react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { value: "+5", label: "ANS D'EXPÉRIENCE" },
    { value: "+30", label: "PROJETS LIVRÉS" },
    { value: "+15", label: "DASHBOARDS BI" },
    { value: "100%", label: "ENGAGEMENT" },
  ];

  const competences = [
    {
      title: "Fullstack Web & Mobile",
      description: "Applications web et mobiles performantes, du backend au frontend.",
      tags: ["React", "React Native", "Node.js"],
      icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H13.5A2.25 2.25 0 0115.75 3.75v16.5a2.25 2.25 0 01-2.25 2.25H10.5a2.25 2.25 0 01-2.25-2.25V3.75A2.25 2.25 0 0110.5 1.5zM12 18.75h.008v.008H12v-.008z" /></svg>
    },
    {
      title: "Data Analyst & PowerBI",
      description: "Analyse, visualisation et storytelling de données business.",
      tags: ["PowerBI", "SQL", "Python"],
      icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
    },
    {
      title: "Frontend Moderne",
      description: "Interfaces réactives, accessibles et soignées au pixel.",
      tags: ["React", "TypeScript", "Tailwind"],
      icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-3.388 1.62a15.094 15.094 0 01-3.473-1.47m7.041-4.13a16.201 16.201 0 003.969-2.527 4.5 4.5 0 00-6.364-6.364 16.201 16.201 0 00-2.527 3.969m6.922 4.922a15.316 15.316 0 01-3.698-3.698m3.698 3.698l-5.656-5.656m0 0a15.316 15.316 0 013.698 3.698L13.03 9.423z" /></svg>
    },
    {
      title: "Backend & APIs",
      description: "APIs REST robustes, scalables et bien documentées.",
      tags: ["Express", "Node.js", "REST"],
      icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m-15 0a2.247 2.247 0 00.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 12v.878m13.5-3A2.25 2.25 0 0119.5 12v.878m-15 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 15v.878m13.5-3A2.25 2.25 0 0119.5 15v.878m-15 0a2.247 2.247 0 00.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 18v.75A2.25 2.25 0 006.75 21h10.5a2.25 2.25 0 002.25-2.25V18m-15 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128" /></svg>
    },
    {
      title: "Bases de données",
      description: "Modélisation, requêtes optimisées et migrations.",
      tags: ["PostgreSQL", "MongoDB"],
      icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5-3.75v3.75" /></svg>
    },
    {
      title: "Design moderne",
      description: "creation des interfaces modernes et adapates.",
      tags: ["Figma",],
      icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5-3.75v3.75" /></svg>
    },
    {
      title: "Code & Qualité",
      description: "Architecture propre, tests et bonnes pratiques.",
      tags: ["TypeScript", "Git", "CI/CD"],
      icon: <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
    }
  ];

  const tools = [
    "React", "TypeScript", "TailwindCSS", "JavaScript", "Node.js", "Express.js", "PowerBI", "SQL", "Git", "HTML", "CSS", "figma"
  ];

  const projects = [
    {
      
      category: "Fullstack",
      title: "NexusOPS ERP",
      description: "Plateforme logistique import/export avec tableau de bord en temps réel, gestion des entrepôts et suivi des expéditions.",
      link: "#"
    },
    {
      category: "React Native",
      title: "App mobile e-commerce shosea",
      description: "Application iOS/Android avec paiement, panier et notifications.",
      link: "#"
    },
    {
      category: "Fullstack",
      title: "Kollectiv",
      description: "apllicattion de commerce social Kollectiv supprime les intermédiaires entre vendeurs et acheteurs. Découvrez, échangez, et achetez directement auprès des artisans, artistes et innovateurs — sans frustration, sans abandon..",
      link: "#"
    },
    {
      category: "web",
      title: "A.SLuxuryPackagingBox",
      description: "site web pour une entreprise  de conception et fabrication des coffrets et emballages haut de gamme, colorés et audacieux, pour les entreprises , les marques , et les particuliers .",
      link: "#"
    },
    {
      category: "frontEnd",
      title: "Lumen CRM",
      description: "CRM analytique avec pipeline de vente interactif, KPIs en temps réel et visualisations Recharts avancées.",
      link: "#"
    },
    {
      category: "Frontend",
      title: "vineta plateforme de e-commerce",
      description: "application de e-commerce .",
      link: "#"
    },
    {
      category: "UI / UX design",
      title: "Design drepanocare",
      description: "design UI/UX de l'application de don de sante pour les personnes atteintes de drepanocytose.",
      link: "#"
    }
  ];

  // Fonction utilitaire pour un défilement fluide
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-400 font-sans bg-grid-pattern relative overflow-x-hidden selection:bg-orange-500 selection:text-white">
      
      {/* 1. HEADER / NAVBAR */}
      <header className="border-b border-zinc-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-white text-lg">
            <span className="bg-orange-500 text-black w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-base">A</span>
            <span>Serena<span className="text-orange-500">.dev</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['About', 'Skills', 'Stack', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="hover:text-white transition-colors duration-200"
              >
                {item === 'Projects' ? 'Réalisations' : item}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-orange-500/10 hover:scale-[1.02]"
            >
              Me contacter
            </a>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none p-2" aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}</svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-zinc-900 px-6 py-6 absolute w-full left-0 animate-fadeIn z-50">
            <nav className="flex flex-col gap-4 text-base font-medium mb-6">
              {['About', 'Skills', 'Stack', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => handleScroll(e, item.toLowerCase())} 
                  className="hover:text-white transition-colors py-2"
                >
                  {item === 'Projects' ? 'Réalisations' : item}
                </a>
              ))}
            </nav>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')} 
              className="block text-center bg-orange-500 text-black font-semibold px-6 py-3 rounded-full text-sm w-full"
            >
              Me contacter
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-16 flex flex-col justify-between min-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          <div className="lg:col-span-8 space-y-6 md:space-y-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>Disponible pour de nouveaux projets
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Je construis des <span className="text-orange-500 inline-block">produits digitaux</span> qui ont du sens.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
              Développeur <strong className="text-zinc-200 font-semibold">fullstack web & mobile</strong>, <strong className="text-zinc-200 font-semibold">data analyst</strong> et expert <strong className="text-zinc-200 font-semibold">PowerBI</strong>. Je transforme des idées en applications rapides, fiables et pilotées par la donnée.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, 'projects')}
                className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 text-base shadow-lg shadow-orange-500/10 group"
              >
                Voir mes projets <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              </a>
              <a href="/cv.pdf" download className="border border-zinc-900 hover:border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900/60 text-zinc-200 px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-200 text-base">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>Télécharger le CV
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl border border-zinc-900 bg-gradient-to-br from-zinc-950/60 to-zinc-950/20 flex items-center justify-center backdrop-blur-sm relative group transition-all duration-300 hover:border-orange-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <svg className="w-14 h-14 sm:w-16 sm:h-16 text-orange-500 transform group-hover:scale-105 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-24 border border-zinc-900 bg-zinc-950/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 divide-y-0 md:divide-x divide-zinc-900 relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col justify-center px-2 sm:px-4 ${index % 2 === 1 ? 'border-l border-zinc-900 md:border-l-0' : ''}`}>
              <span className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1 tracking-tight">{stat.value}</span>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. À PROPOS SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-t border-zinc-900/60 relative z-10">
        <div className="lg:col-span-7 space-y-6 max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-orange-500 uppercase">
            <span className="w-8 h-[1px] bg-orange-500 inline-block"></span>À propos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Code, data & <br className="hidden sm:inline" />
            <span className="text-orange-500">exécution rigoureuse.</span>
          </h2>
          <div className="space-y-4 text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
            <p>Je conçois des applications web et mobiles de bout en bout, et j'aide les équipes à décider plus vite grâce à la data et aux dashboards PowerBI. Priorité : des interfaces fluides, performantes et maintenables.</p>
            <p className="text-zinc-500 text-sm md:text-base">De la maquette à la mise en production : architecture, accessibilité, tests, SEO et suivi des performances.</p>
          </div>
        </div>
        <div className="lg:col-span-5 w-full">
          <div className="w-full rounded-2xl border border-zinc-800/60 bg-[#0d0d0d]/90 backdrop-blur-sm shadow-2xl overflow-hidden font-mono text-sm relative group transition-all duration-300 hover:border-orange-500/10">
            <div className="px-5 py-4 border-b border-zinc-900 flex items-center gap-4 bg-[#080808]/50">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500/90 block"></span><span className="w-3 h-3 rounded-full bg-zinc-800 block"></span><span className="w-3 h-3 rounded-full bg-zinc-800 block"></span></div>
              <span className="text-xs text-zinc-500 tracking-wide select-none">~/profile.ts</span>
            </div>
            <div className="p-6 overflow-x-auto whitespace-pre scrolling-touch">
              <code className="text-zinc-300 block leading-relaxed">
                <span className="text-orange-500 font-semibold">const</span> <span className="text-white">me</span> = {'{'} <br />
                &nbsp;&nbsp;<span className="text-orange-400">role</span>: <span className="text-zinc-400">"Fullstack & Data"</span>,<br />
                &nbsp;&nbsp;<span className="text-orange-400">stack</span>: <span className="text-zinc-400">[</span><span className="text-zinc-300">"React"</span><span className="text-zinc-500">, </span><span className="text-zinc-300">"TypeScript"</span><span className="text-zinc-400">]</span><br />
                {'};'}
              </code>
            </div>
            <div className="px-4 pb-3 pt-1 flex items-center justify-between text-zinc-700 bg-[#0d0d0d]">
              <span className="text-[10px] select-none cursor-pointer hover:text-zinc-500">◀</span>
              <div className="w-full mx-3 h-1.5 rounded-full bg-zinc-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-2/5 bg-zinc-700/60 rounded-full"></div>
              </div>
              <span className="text-[10px] select-none cursor-pointer hover:text-zinc-500">▶</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPÉTENCES SECTION */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-zinc-900/60 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-orange-500 uppercase">
              <span className="w-8 h-[1px] bg-orange-500 inline-block"></span>Compétences
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">Ce que je sais <span className="text-orange-500">faire</span>.</h2>
          </div>
          <p className="text-zinc-500 text-sm md:text-base max-w-sm font-normal leading-relaxed md:mb-1">Six expertises complémentaires pour livrer un produit complet, du design à la donnée.</p>
        </div>
        <div className="border border-zinc-900 bg-zinc-950/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {competences.map((comp, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="w-10 h-10 rounded-xl border border-orange-500/20 bg-orange-500/5 flex items-center justify-center transition-all duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/10">{comp.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-orange-400 transition-colors duration-200">{comp.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">{comp.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {comp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md border border-zinc-800/80 bg-zinc-900/30 text-[11px] font-mono text-zinc-500 tracking-wide">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STACK SECTION */}
      <section id="stack" className="py-20 border-t border-zinc-900/60 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-orange-500 uppercase">
              <span className="w-8 h-[1px] bg-orange-500 inline-block"></span>Stack
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">Outils du <span className="text-orange-500">quotidien</span>.</h2>
          </div>
        </div>
        <div className="w-full relative flex items-center bg-zinc-950/10 py-4 border-y border-zinc-900/30">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
          <div className="animate-marquee flex items-center gap-4">
            {tools.map((tool, idx) => (
              <div key={`set1-${idx}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-900/80 bg-zinc-950/40 font-mono text-xs sm:text-sm text-zinc-400 select-none hover:border-orange-500/20 hover:text-white transition-colors">
                <span className="text-orange-500/60 font-bold">#</span>{tool}
              </div>
            ))}
            {tools.map((tool, idx) => (
              <div key={`set2-${idx}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-900/80 bg-zinc-950/40 font-mono text-xs sm:text-sm text-zinc-400 select-none hover:border-orange-500/20 hover:text-white transition-colors">
                <span className="text-orange-500/60 font-bold">#</span>{tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROJETS / RÉALISATIONS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 md:py-28 border-t border-zinc-900/60 relative z-10">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-orange-500 uppercase">
            <span className="w-8 h-[1px] bg-orange-500 inline-block"></span>Projets
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Sélection de <span className="text-orange-500">réalisations</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.link}
              className={`border border-zinc-900 bg-zinc-950/10 hover:bg-zinc-900/20 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:border-zinc-800 relative overflow-hidden ${
                idx === 6 ? 'md:col-span-2' : '' // Le 7ème projet prend toute la largeur sur grand écran
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="px-3 py-1 rounded-md border border-orange-500/20 bg-orange-500/5 font-mono text-[11px] text-orange-400 tracking-wide">
                  {project.category}
                </span>
                <svg className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-orange-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal max-w-xl">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 pb-28 border-t border-zinc-900/60 relative z-10">
        <div className="max-w-4xl mx-auto border border-zinc-900 bg-zinc-950/30 backdrop-blur-sm rounded-3xl p-10 md:p-16 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-orange-500/[0.01] pointer-events-none"></div>
          
          <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-widest text-orange-500 uppercase">
            <span className="w-8 h-[1px] bg-orange-500 inline-block"></span>
            Contact
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-[1.15]">
            Discutons de votre <span className="text-orange-500">prochain projet</span>.
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
            Une idée, un produit à lancer, un dashboard à construire ? Je serais ravi d'en parler.
          </p>

          {/* Boutons / Liens de contact configurables */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
          
              href="mailto:angentsopgo@gmail.com" 
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2.5 transition-all duration-200 text-sm shadow-lg shadow-orange-500/5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              angentsopgo@gmail.com
            </a>
            
            <a 
              href="https://github.com/tsogoserena" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-zinc-900 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-200 px-6 py-3.5 rounded-xl flex items-center gap-2.5 transition-all duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>

            <a 
              href="https://www.linkedin.com/in/ange-ntsopgo-5b0723426/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-zinc-900 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-200 px-6 py-3.5 rounded-xl flex items-center gap-2.5 transition-all duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <p className="text-center text-[11px] text-zinc-700 tracking-wide pt-12">© 2026 Alex.dev. Tous droits réservés.</p>
      </section>

    </div>
  );
}