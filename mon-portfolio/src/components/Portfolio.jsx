// src/components/Portfolio.jsx
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  ExternalLink,
  Download,
  Menu,
  X,
  Code2,
  Database,
  Wrench,
  Terminal,
  Layers,
  GraduationCap,
  ChevronRight,
  Globe,
  Images as ImagesIcon,
  ZoomIn,
} from "lucide-react";
import { translations, contactInfo } from "../data/translations";
import CVDocument from "./CVDocument";

// Photo de profil (accueil + CV)
import profilImg from "../img/profil.png";

// Captures d'écran des projets réalisés en entreprise — associées
// aux expériences professionnelles (chaque expérience = un projet livré).
import cf1 from "../img/cfpm/cf1.jpg";
import cf2 from "../img/cfpm/cf2.jpg";
import cf3 from "../img/cfpm/cf3.jpg";
import cf4 from "../img/cfpm/cf4.jpg";
import cf5 from "../img/cfpm/cf5.jpg";
import cf6 from "../img/cfpm/cf6.jpg";
import cf7 from "../img/cfpm/cf7.jpg";

import ses1 from "../img/sesmed/ses1.jpg";
import ses2 from "../img/sesmed/ses2.jpg";
import ses3 from "../img/sesmed/ses3.jpg";
import ses4 from "../img/sesmed/ses4.jpg";
import ses5 from "../img/sesmed/ses5.jpg";
import ses6 from "../img/sesmed/ses6.jpg";
// Note: `users.jpg` was removed/renamed; omit it to avoid import error

import kd1 from "../img/4kdesign/4k1.jpg";
import kd2 from "../img/4kdesign/4k2.jpg";
import kd3 from "../img/4kdesign/4k3.jpg";
import kd4 from "../img/4kdesign/4k4.jpg";
import kd5 from "../img/4kdesign/4k5.jpg";
import kd6 from "../img/4kdesign/4k6.jpg";

import mtefopFrt from "../img/mtefop/frt.png";

import cr1 from "../img/crm/cr1.jpg";
import cr2 from "../img/crm/cr2.jpg";
import cr3 from "../img/crm/cr3.jpg";
import cr4 from "../img/crm/cr4.jpg";
import cr5 from "../img/crm/cr5.jpg";
import cr6 from "../img/crm/cr6.jpg";

// Captures d'écran des projets académiques / personnels
import spHome from "../img/sanpanera/homeSP.jpg";
import spAnnonce from "../img/sanpanera/annonceSP.jpg";
import spListe from "../img/sanpanera/listeSP.jpg";
import spComplet from "../img/sanpanera/complerSP.jpeg";
import spContact from "../img/sanpanera/contactSP.jpg";
import spHistorique from "../img/sanpanera/hystoriqueSP.jpeg";

// Index -> galerie d'images, dans le même ordre que experience.items /
// projects.items dans src/data/translations.js (identique FR/EN).
const EXPERIENCE_IMAGES = [
  [cr1, cr2, cr3, cr4, cr5, cr6], // GE — CRM Grossiste
  [cf1, cf2, cf3, cf4, cf5, cf6, cf7], // GE_CFPM
  [ses1, ses2, ses3, ses4, ses5, ses6], // S.E.S MED
  [kd1, kd2, kd3, kd4, kd5, kd6], // ERP / 4K Design
  [mtefopFrt], // MTEFOP
];

const getExperienceImages = (company) => {
  if (company.includes("CFPM")) return EXPERIENCE_IMAGES[1];
  if (company.includes("S.E.S MED")) return EXPERIENCE_IMAGES[2];
  if (company.includes("4K Design") || company.includes("4K Design")) return EXPERIENCE_IMAGES[3];
  if (company.includes("MTEFOP") || company.includes("Ministry of Labor")) return EXPERIENCE_IMAGES[4];
  return EXPERIENCE_IMAGES[0];
};

const PROJECT_IMAGES = [
  [spHome, spAnnonce, spListe, spComplet, spContact, spHistorique], // SansPanera
  [], // Logiciel de Gestion d'Employés
  [], // Mizaha
  [], // I-Kaly
];

const LANG_STORAGE_KEY = "sfn_portfolio_lang";

const CATEGORY_ICONS = {
  Frontend: Code2,
  Backend: Terminal,
  "Bases de données": Database,
  Databases: Database,
  "Outils & DevOps": Wrench,
  "Tools & DevOps": Wrench,
  Langages: Layers,
  Languages: Layers,
  Méthodologies: GraduationCap,
  Methodologies: GraduationCap,
};

function NavLink({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2b6cb0] transition-all duration-300 group-hover:w-full" />
    </button>
  );
}

function SectionHeading({ index, label }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-xs text-[#4d9fef] tracking-widest">{index}</span>
      <h2 className="min-w-0 break-words text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">{label}</h2>
      <span className="h-px flex-1 bg-slate-800" />
    </div>
  );
}

// Petite galerie de captures d'écran affichée sous une expérience ou un
// projet. Cliquer sur une vignette l'ouvre en grand via le Lightbox.
function ImageGallery({ images, onOpen }) {
  if (!images || images.length === 0) return null;
  const previewImages = images.slice(0, 5);
  const remainingCount = images.length - previewImages.length;
  return (
    <div className="mt-5 border-t border-slate-800/80 pt-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="min-w-0 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.1em] text-slate-500 sm:text-[11px] sm:tracking-[0.12em]">
          <ImagesIcon size={13} />
          <span>Captures du projet</span>
        </div>
        <span className="shrink-0 rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-400">
          {images.length} vue{images.length > 1 ? "s" : ""}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:grid-rows-2">
        {previewImages.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onOpen(images, i)}
            className={`group relative min-h-24 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 text-left transition-all duration-300 hover:z-10 hover:border-[#4d9fef] hover:shadow-[0_0_24px_rgba(43,108,176,0.2)] ${
              i === 0 ? "col-span-2 row-span-2 min-h-52" : "min-h-24"
            }`}
            aria-label={`Ouvrir la capture ${i + 1} sur ${images.length}`}
          >
            <img
              src={src}
              alt={`Capture d'écran ${i + 1} du projet`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors group-hover:bg-slate-950/35">
              <ZoomIn size={i === 0 ? 24 : 16} className="text-white opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            {i === 0 && (
              <span className="absolute bottom-2 left-2 rounded bg-slate-950/80 px-2 py-1 text-[10px] font-mono text-slate-200 backdrop-blur-sm">
                Aperçu
              </span>
            )}
            {remainingCount > 0 && i === previewImages.length - 1 && (
              <span className="absolute inset-0 flex items-center justify-center bg-slate-950/65 text-sm font-bold text-white backdrop-blur-[1px]">
                +{remainingCount}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// Visionneuse plein écran pour parcourir les captures d'un projet donné.
function Lightbox({ images, index, onClose, onNavigate }) {
  if (!images) return null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Fermer"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            className="absolute left-3 sm:left-6 text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Précédent"
          >
            <ChevronRight size={26} className="rotate-180" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            className="absolute right-3 sm:right-6 text-slate-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
      />

      {images.length > 1 && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-mono text-slate-400">
          {index + 1} / {images.length}
        </span>
      )}
    </div>
  );
}

export default function Portfolio() {
  // Langue persistée : le contenu est mis à jour sans rechargement complet.
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "fr";
    return window.localStorage.getItem(LANG_STORAGE_KEY) || "fr";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { images, index }
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);
  const t = translations[lang];
  const orderedExperienceItems = useMemo(
    () => [...t.experience.items].sort((a, b) => {
      const ongoing = (item) => /présent|present/i.test(item.period) ? 1 : 0;
      return ongoing(b) - ongoing(a);
    }),
    [t]
  );

  useEffect(() => {
    const isFrench = lang === "fr";
    const title = isFrench
      ? "SANTATRINIAINA Feno Nasandratra | Développeur Full Stack Junior"
      : "SANTATRINIAINA Feno Nasandratra | Junior Full Stack Developer";
    const description = isFrench
      ? "Portfolio de SANTATRINIAINA Feno Nasandratra, Développeur Full Stack Junior à Antananarivo : React, Angular, Node.js, applications CRM et ERP."
      : "Portfolio of SANTATRINIAINA Feno Nasandratra, a Junior Full Stack Developer in Antananarivo working with React, Angular, Node.js, CRM and ERP applications.";
    document.documentElement.lang = lang;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [lang]);

  useEffect(() => {
    if (!isLanguageChanging) return undefined;
    const timer = window.setTimeout(() => setIsLanguageChanging(false), 450);
    return () => window.clearTimeout(timer);
  }, [isLanguageChanging]);

  const openLightbox = useCallback((images, index) => {
    setLightbox({ images, index });
  }, []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const navigateLightbox = useCallback((delta) => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const len = prev.images.length;
      return { ...prev, index: (prev.index + delta + len) % len };
    });
  }, []);

  const toggleLang = useCallback(() => {
    const next = lang === "fr" ? "en" : "fr";
    setIsLanguageChanging(true);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch (e) {
      // localStorage indisponible (mode privé, etc.) — on continue quand même
    }
    setLang(next);
  }, [lang]);

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Memoized so the PDF isn't regenerated on every unrelated re-render.
  const cvDoc = useMemo(() => <CVDocument lang={lang} photoUrl={profilImg} />, [lang]);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-[#151516] text-slate-200 font-sans selection:bg-[#10151a] selection:text-white">
      {isLanguageChanging && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-[#151516]/95 text-white backdrop-blur-sm"
          role="status"
          aria-live="polite"
        >
          <span className="h-10 w-10 animate-spin rounded-full border-2 border-slate-600 border-t-[#4d9fef]" />
          <span className="text-sm font-mono text-slate-300">
            {lang === "fr" ? "Changement de langue..." : "Switching language..."}
          </span>
        </div>
      )}
      {/* Background grid texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0f1a]/80 border-b border-slate-800/80">
        <nav className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-mono text-sm font-bold text-white tracking-tight"
          >
            SFN<span className="text-[#4d9fef]">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-700 text-xs font-mono text-slate-300 hover:border-[#2b6cb0] hover:text-white transition-colors"
              aria-label="Toggle language"
              disabled={isLanguageChanging}
            >
              <Globe size={13} />
              {lang === "fr" ? "FR / EN" : "EN / FR"}
            </button>
            <PDFDownloadLink
              document={cvDoc}
              fileName={t.meta.cvFileName}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#2b6cb0] hover:bg-[#3a7fcf] text-white text-xs font-semibold transition-colors"
            >
              {({ loading }) => (
                <>
                  <Download size={13} />
                  {loading ? t.nav.generating : t.nav.downloadCV}
                </>
              )}
            </PDFDownloadLink>
          </div>

          <button
            className="md:hidden text-slate-200"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#0a0f1a] px-4 py-4 flex flex-col gap-4 sm:px-6">
            {navItems.map((item) => (
              <NavLink key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-700 text-xs font-mono text-slate-300"
              disabled={isLanguageChanging}
              >
                <Globe size={13} />
                {lang === "fr" ? "FR / EN" : "EN / FR"}
              </button>
              <PDFDownloadLink
                document={cvDoc}
                fileName={t.meta.cvFileName}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#2b6cb0] text-white text-xs font-semibold"
              >
                {({ loading }) => (loading ? t.nav.generating : t.nav.downloadCV)}
              </PDFDownloadLink>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative max-w-6xl mx-auto px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 md:pt-36 md:pb-40"
      >
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#4d9fef] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4d9fef] animate-pulse" />
              {t.hero.location}
            </div>
            <h1 className="max-w-3xl break-words text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-6xl">
              {t.hero.name}
            </h1>
            <p className="mt-5 break-words text-base font-medium text-[#4d9fef] sm:text-lg md:text-xl max-w-2xl">
              {t.hero.title}
            </p>
            <p className="mt-5 text-base text-slate-400 max-w-xl leading-relaxed">
              {t.hero.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2b6cb0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3a7fcf] sm:w-auto"
              >
                {t.hero.ctaPrimary}
                <ChevronRight size={16} />
              </button>
              <PDFDownloadLink
                document={cvDoc}
                fileName={t.meta.cvFileName}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-[#2b6cb0] sm:w-auto"
              >
                {({ loading }) => (
                  <>
                    <Download size={16} />
                    {loading ? t.nav.generating : t.hero.ctaSecondary}
                  </>
                )}
              </PDFDownloadLink>
            </div>
          </div>

          {/* Photo de profil */}
          <div className="flex shrink-0 justify-center md:justify-end">
            <div className="relative w-44 sm:w-52 md:w-64">
              <span className="absolute -inset-4 rounded-3xl bg-[#2b6cb0]/20 blur-2xl" />
              <span className="absolute -left-2 -top-2 h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-[#4d9fef]" />
              <span className="absolute -bottom-2 -right-2 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-[#4d9fef]/70" />
              <div className="relative overflow-hidden rounded-2xl border border-[#4d9fef]/50 bg-slate-900 p-1.5 shadow-2xl shadow-black/40">
                <img
                  src={profilImg}
                  alt={t.hero.name}
                  className="aspect-[4/5] w-full rounded-xl object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-700 bg-[#151516] px-3 py-1 text-[10px] font-mono text-[#8fc5ff] shadow-lg">
                Full Stack Developer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-14 border-t border-slate-800/70 sm:px-6 sm:py-20">
        <SectionHeading index="01" label={t.about.heading} />
        <div className="grid md:grid-cols-5 gap-12">
          <p className="md:col-span-3 text-slate-300 leading-relaxed text-base">
            {t.about.bio}
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:col-span-2">
            {t.about.pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-[#2b6cb0]/60 transition-colors"
              >
                <p className="text-sm font-bold text-white mb-1">{pillar.title}</p>
                <p className="text-xs text-slate-400 leading-snug">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-14 border-t border-slate-800/70 sm:px-6 sm:py-20">
        <SectionHeading index="02" label={t.skills.heading} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.skills.categories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.title] || Code2;
            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#2b6cb0]/60 hover:bg-slate-900 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-md bg-[#2b6cb0]/10 text-[#4d9fef]">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, ii) => (
                    <span
                      key={ii}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-14 border-t border-slate-800/70 sm:px-6 sm:py-20">
        <SectionHeading index="03" label={t.experience.heading} />
        <div className="relative ml-2 border-l border-slate-800 pl-6 sm:ml-5 sm:pl-10">
          {orderedExperienceItems.map((exp, i) => (
            <div
              key={i}
              className="group relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[35px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#151516] bg-[#2b6cb0] text-[9px] font-bold text-white shadow-[0_0_0_1px_rgba(77,159,239,0.35)] sm:-left-[52px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#2b6cb0]/60 group-hover:bg-slate-900/60">
                <div className="flex flex-col gap-3 border-b border-slate-800/80 bg-slate-950/30 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-5">
                  <div className="min-w-0">
                    <p className="mb-1 text-[11px] font-mono font-medium uppercase tracking-[0.16em] text-[#4d9fef]">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-2">
                      <h3 className="min-w-0 break-words text-base font-bold leading-snug text-white">{exp.title}</h3>
                      {exp.link && (
                        <a
                          href={`https://${exp.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-slate-500 transition-colors hover:text-[#4d9fef]"
                          aria-label={`Visiter le site de ${exp.company}`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-[#2b6cb0]/30 bg-[#2b6cb0]/10 px-2.5 py-1 text-[11px] font-mono text-[#8fc5ff]">
                    {exp.period}
                  </span>
                </div>

                <div className="px-4 py-4 sm:px-5">
                  <p className="text-sm leading-relaxed text-slate-400">{exp.desc}</p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                        <ChevronRight size={14} className="mt-0.5 shrink-0 text-[#4d9fef]" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
                    {exp.stack.map((s, si) => (
                      <span
                        key={si}
                        className="rounded-md border border-slate-700 bg-slate-800/70 px-2 py-1 text-[11px] font-mono text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <ImageGallery images={getExperienceImages(exp.company)} onOpen={openLightbox} />
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-14 border-t border-slate-800/70 sm:px-6 sm:py-20">
        <SectionHeading index="04" label={t.projects.heading} />
        <div className="grid sm:grid-cols-2 gap-5">
          {t.projects.items.map((p, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#2b6cb0]/60 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="mb-1.5 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <h3 className="break-words text-base font-bold text-white">{p.name}</h3>
                <span className="shrink-0 text-xs font-mono text-slate-500">{p.period}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s, si) => (
                  <span
                    key={si}
                    className="text-[11px] font-mono px-2 py-0.5 rounded border border-slate-700 text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ImageGallery images={PROJECT_IMAGES[i]} onOpen={openLightbox} />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-14 border-t border-slate-800/70 sm:px-6 sm:py-20">
        <SectionHeading index="05" label={t.contact.heading} />
        <p className="text-slate-400 mb-8 max-w-lg">{t.contact.subheading}</p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-[#2b6cb0]/60 transition-colors"
          >
            <Mail size={18} className="text-[#4d9fef]" />
            <div>
              <p className="text-xs text-slate-500">{t.contact.emailLabel}</p>
              <p className="break-all text-sm text-slate-200">{contactInfo.email}</p>
            </div>
          </a>
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-[#2b6cb0]/60 transition-colors"
          >
            <MessageCircle size={18} className="text-[#4d9fef]" />
            <div>
              <p className="text-xs text-slate-500">{t.contact.phoneLabel}</p>
              <p className="text-sm text-slate-200">{contactInfo.phone1}</p>
            </div>
          </a>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
            <MapPin size={18} className="text-[#4d9fef]" />
            <div>
              <p className="text-xs text-slate-500">{t.contact.locationLabel}</p>
              <p className="text-sm text-slate-200">{contactInfo.location}</p>
            </div>
          </div>
          <a
            href={contactInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-[#2b6cb0]/60 transition-colors"
          >
            <Github size={18} className="text-[#4d9fef]" />
            <div>
              <p className="text-xs text-slate-500">{t.contact.githubLabel}</p>
              <p className="text-sm text-slate-200">{contactInfo.github}</p>
            </div>
          </a>
          <a
            href={contactInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-[#2b6cb0]/60 transition-colors"
          >
            <Linkedin size={18} className="text-[#4d9fef]" />
            <div>
              <p className="text-xs text-slate-500">{t.contact.linkedinLabel}</p>
              <p className="text-sm text-slate-200">{contactInfo.linkedin}</p>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:px-6 sm:text-left text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {t.hero.name} — {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </footer>

      {/* LIGHTBOX — visionneuse plein écran des captures de projets */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </div>
  );
}
