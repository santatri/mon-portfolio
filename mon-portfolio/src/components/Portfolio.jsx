// src/components/Portfolio.terminal.jsx
// Design minimaliste "terminal / développeur" : police monospace, fenêtres de terminal,
// commandes tapées à l'accueil, expériences façon `git log`, compétences façon JSON.
// Pour l'utiliser : importez ce fichier à la place de Portfolio.jsx (même export par défaut).
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { ExternalLink, Menu, X, ChevronRight, ZoomIn, Sun, Moon } from "lucide-react";
import { translations, contactInfo } from "../data/translations";
import CVDocument from "./CVDocument";
import useCVDownload from "../useCVDownload";

// Photo de profil (accueil + CV)
import profilImg from "../img/profil.png";

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

import spHome from "../img/sanpanera/homeSP.jpg";
import spAnnonce from "../img/sanpanera/annonceSP.jpg";
import spListe from "../img/sanpanera/listeSP.jpg";
import spComplet from "../img/sanpanera/complerSP.jpeg";
import spContact from "../img/sanpanera/contactSP.jpg";
import spHistorique from "../img/sanpanera/hystoriqueSP.jpeg";

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
  if (company.includes("4K Design")) return EXPERIENCE_IMAGES[3];
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
const THEME_STORAGE_KEY = "sfn_portfolio_theme";

// Couleurs liées au thème choisi sur le conteneur racine.
const C = {
  bg: "var(--c-bg)",
  panel: "var(--c-panel)",
  line: "var(--c-line)",
  text: "var(--c-text)",
  mute: "var(--c-mute)",
  green: "var(--c-green)",
  amber: "var(--c-amber)",
  cyan: "var(--c-cyan)",
};

const MONO = '"JetBrains Mono","Fira Code","SF Mono",ui-monospace,Menlo,Consolas,monospace';

const STYLES = `
@keyframes tm-type{to{width:calc(var(--n) * 1ch)}}
@keyframes tm-show{to{opacity:1}}
@keyframes tm-blink{50%{opacity:0}}
.tm-cmd{display:inline-block;overflow:hidden;white-space:nowrap;vertical-align:bottom;width:0;animation:tm-type .5s steps(var(--n)) var(--d) forwards}
.tm-out{opacity:0;animation:tm-show .01s linear var(--d) forwards}
.tm-cursor{display:inline-block;width:.6em;height:1.1em;background:${C.green};box-shadow:0 0 10px ${C.green};vertical-align:text-bottom;animation:tm-blink 1s steps(1) infinite}
.tm-blink{animation:tm-blink 1.2s steps(1) infinite}
.tm-link{color:${C.green};text-shadow:0 0 10px color-mix(in srgb,${C.green} 45%,transparent);text-decoration:underline;text-underline-offset:4px;text-decoration-color:transparent;transition:text-decoration-color .15s}
.tm-link:hover{text-decoration-color:${C.green}}
.tm-btn{border:1px solid ${C.green};color:${C.green};box-shadow:0 0 12px color-mix(in srgb,${C.green} 25%,transparent),inset 0 0 10px color-mix(in srgb,${C.green} 8%,transparent);padding:.5rem .9rem;transition:background .15s,color .15s,box-shadow .15s;display:inline-flex;align-items:center;gap:.5rem}
.tm-btn:hover{background:${C.green};color:${C.bg};box-shadow:0 0 22px color-mix(in srgb,${C.green} 55%,transparent)}
.tm-btn-ghost{border:1px solid ${C.line};color:${C.text};padding:.5rem .9rem;transition:border-color .15s,color .15s,box-shadow .15s;display:inline-flex;align-items:center;gap:.5rem}
.tm-btn-ghost:hover{border-color:${C.cyan};color:${C.cyan};box-shadow:0 0 14px color-mix(in srgb,${C.cyan} 32%,transparent)}
.portfolio-root .tm-btn,.portfolio-root .tm-btn-ghost{max-width:100%;white-space:normal;overflow-wrap:anywhere}
.portfolio-root h1,.portfolio-root h2{ text-shadow:0 0 18px color-mix(in srgb,var(--c-cyan) 28%,transparent) }
.portfolio-root .border{transition:border-color .2s,box-shadow .2s}
.portfolio-root .border:hover{box-shadow:0 0 18px color-mix(in srgb,var(--c-cyan) 12%,transparent)}
.tm-photo{filter:grayscale(1) contrast(1.05);transition:filter .4s}
.tm-photo-wrap:hover .tm-photo{filter:none}
@media (prefers-reduced-motion:reduce){
  .tm-cmd{width:auto;animation:none}
  .tm-out{opacity:1;animation:none}
  .tm-cursor,.tm-blink{animation:none}
}
`;

/* Fenêtre de terminal avec barre de titre */
function Win({ title, children, className = "" }) {
  return (
    <div className={`border ${className}`} style={{ borderColor: C.line, background: C.panel }}>
      <div className="flex items-center gap-3 border-b px-3 py-2 text-xs" style={{ borderColor: C.line, color: C.mute }}>
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="block h-2 w-2" style={{ background: "#ff6b6b" }} />
          <i className="block h-2 w-2" style={{ background: C.amber }} />
          <i className="block h-2 w-2" style={{ background: C.green }} />
        </span>
        <span className="truncate">{title}</span>
      </div>
      {children}
    </div>
  );
}

/* Titre de section : la commande + le titre */
function Section({ id, cmd, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs sm:text-sm" style={{ color: C.mute }}>
        <span style={{ color: C.green }}>$</span> {cmd}
      </p>
      <h2 className="mb-8 mt-2 text-xl font-bold sm:text-2xl" style={{ color: C.text }}>{title}</h2>
      {children}
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="border px-2 py-0.5 text-[11px]" style={{ borderColor: C.line, color: C.cyan }}>
      {children}
    </span>
  );
}

// Galerie de captures d'écran. Cliquer sur une vignette l'ouvre en grand.
function ImageGallery({ images, onOpen }) {
  if (!images || images.length === 0) return null;
  const previewImages = images.slice(0, 5);
  const remainingCount = images.length - previewImages.length;
  return (
    <div className="mt-5 border-t pt-4" style={{ borderColor: C.line }}>
      <p className="mb-3 text-[11px]" style={{ color: C.mute }}>
        <span style={{ color: C.green }}>$</span> ls captures/ <span style={{ color: C.amber }}>({images.length})</span>
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:grid-rows-2">
        {previewImages.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onOpen(images, i)}
            className={`group relative min-h-24 overflow-hidden border text-left transition-colors hover:border-[#3ddc84] ${
              i === 0 ? "col-span-2 row-span-2 min-h-52" : "min-h-24"
            }`}
            style={{ borderColor: C.line, background: C.bg }}
            aria-label={`Ouvrir la capture ${i + 1} sur ${images.length}`}
          >
            <img
              src={src}
              alt={`Capture d'écran ${i + 1} du projet`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
              <ZoomIn size={i === 0 ? 22 : 16} className="text-white opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            {remainingCount > 0 && i === previewImages.length - 1 && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/70 text-sm font-bold" style={{ color: C.green }}>
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
  useEffect(() => {
    if (!images) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images, onClose, onNavigate]);

  if (!images) return null;

  const navBtn = "absolute p-2 text-slate-300 transition-colors hover:text-[#3ddc84]";
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10" onClick={onClose}>
      <button onClick={onClose} className={`${navBtn} right-5 top-5`} aria-label="Fermer">
        <X size={24} />
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            className={`${navBtn} left-3 sm:left-6`}
            aria-label="Précédent"
          >
            <ChevronRight size={26} className="rotate-180" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            className={`${navBtn} right-3 sm:right-6`}
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
        className="max-h-full max-w-full border object-contain"
        style={{ borderColor: C.line }}
      />
      {images.length > 1 && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs" style={{ color: C.mute }}>
          {index + 1} / {images.length}
        </span>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem(THEME_STORAGE_KEY) || "dark";
  });
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "fr";
    return window.localStorage.getItem(LANG_STORAGE_KEY) || "fr";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { images, index }
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);
  const t = translations[lang];

  const isOngoing = (item) => /présent|present/i.test(item.period);
  const orderedExperienceItems = useMemo(
    () => [...t.experience.items].sort((a, b) => (isOngoing(b) ? 1 : 0) - (isOngoing(a) ? 1 : 0)),
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

  const openLightbox = useCallback((images, index) => setLightbox({ images, index }), []);
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
      // localStorage indisponible (mode privé, etc.)
    }
    setLang(next);
  }, [lang]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch (e) {
        // Le thème reste actif pour cette session si localStorage est indisponible.
      }
      return next;
    });
  }, []);

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const cvDoc = useMemo(() => <CVDocument lang={lang} photoUrl={profilImg} />, [lang]);
  const { download: downloadCV, isGenerating: isGeneratingCV } = useCVDownload(cvDoc, t.meta.cvFileName);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  const contactRows = [
    { k: "email", v: contactInfo.email, href: `mailto:${contactInfo.email}`, label: t.contact.emailLabel },
    { k: "tel", v: contactInfo.phone1, href: contactInfo.whatsappUrl, ext: true, label: t.contact.phoneLabel },
    { k: "lieu", v: contactInfo.location, label: t.contact.locationLabel },
    { k: "github", v: contactInfo.github, href: contactInfo.githubUrl, ext: true, label: t.contact.githubLabel },
    { k: "linkedin", v: contactInfo.linkedin, href: contactInfo.linkedinUrl, ext: true, label: t.contact.linkedinLabel },
  ];

  return (
    <div
      className="portfolio-root min-h-screen w-full overflow-x-clip text-sm leading-relaxed selection:bg-[#3ddc84] selection:text-black"
      style={{
        "--c-bg": theme === "dark" ? "#080519" : "#f5f3ff",
        "--c-panel": theme === "dark" ? "#100b2a" : "#ffffff",
        "--c-line": theme === "dark" ? "#38246b" : "#b9a7ff",
        "--c-text": theme === "dark" ? "#f1eaff" : "#211044",
        "--c-mute": theme === "dark" ? "#b4a7d5" : "#625080",
        "--c-green": theme === "dark" ? "#b6ff00" : "#6c00ff",
        "--c-amber": theme === "dark" ? "#ffb000" : "#e04400",
        "--c-cyan": theme === "dark" ? "#00e5ff" : "#0077ff",
        background: C.bg,
        color: C.text,
        fontFamily: MONO,
      }}
    >
      <style>{STYLES}</style>

      {isLanguageChanging && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0d0a]/95"
          role="status"
          aria-live="polite"
          style={{ color: C.green }}
        >
          {lang === "fr" ? "chargement de la langue..." : "loading language..."}
          <span className="tm-cursor ml-1" />
        </div>
      )}

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: C.line, background: theme === "dark" ? "rgba(10,13,10,.88)" : "rgba(245,247,245,.9)" }}>
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <button onClick={() => scrollTo("home")} className="text-xs sm:text-sm" style={{ color: C.green }}>
            sfn@portfolio<span style={{ color: C.mute }}>:~$</span>
          </button>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs transition-colors hover:text-[#3ddc84]"
                style={{ color: C.mute }}
              >
                ./{item.label.toLowerCase()}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 text-xs lg:flex">
            <button onClick={toggleTheme} className="tm-btn-ghost" aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"} title={theme === "dark" ? "Mode clair" : "Mode sombre"}>
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              {theme === "dark" ? "Clair" : "Sombre"}
            </button>
            <button onClick={toggleLang} disabled={isLanguageChanging} className="tm-btn-ghost" aria-label="Toggle language">
              [{lang === "fr" ? "FR|en" : "fr|EN"}]
            </button>
            <button type="button" onClick={downloadCV} disabled={isGeneratingCV} className="tm-btn disabled:opacity-60">
              {isGeneratingCV ? t.nav.generating : t.nav.downloadCV}
            </button>
          </div>

          <button className="lg:hidden" style={{ color: C.text }} onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t px-4 py-4 sm:px-6 lg:hidden" style={{ borderColor: C.line, background: C.bg }}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left text-xs" style={{ color: C.text }}>
                ./{item.label.toLowerCase()}
              </button>
            ))}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <button onClick={toggleTheme} className="tm-btn-ghost" aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}>
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                {theme === "dark" ? "Clair" : "Sombre"}
              </button>
              <button onClick={toggleLang} disabled={isLanguageChanging} className="tm-btn-ghost">
                [{lang === "fr" ? "FR|en" : "fr|EN"}]
              </button>
              <button type="button" onClick={downloadCV} disabled={isGeneratingCV} className="tm-btn disabled:opacity-60">
                {isGeneratingCV ? t.nav.generating : t.nav.downloadCV}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="mx-auto max-w-5xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-start">
          <Win title="sfn@portfolio: ~">
            <div className="space-y-5 p-4 sm:p-6">
              <div>
                <p>
                  <span style={{ color: C.green }}>$</span>{" "}
                  <span className="tm-cmd" style={{ "--n": 6, "--d": ".1s" }}>whoami</span>
                </p>
                <h1 className="tm-out mt-2 break-words text-2xl font-bold leading-tight sm:text-3xl md:text-4xl" style={{ "--d": ".7s", color: C.text }}>
                  {t.hero.name}
                </h1>
              </div>

              <div>
                <p>
                  <span style={{ color: C.green }}>$</span>{" "}
                  <span className="tm-cmd" style={{ "--n": 12, "--d": ".8s" }}>cat role.txt</span>
                </p>
                <p className="tm-out mt-1" style={{ "--d": "1.4s", color: C.amber }}>{t.hero.title}</p>
              </div>

              <div>
                <p>
                  <span style={{ color: C.green }}>$</span>{" "}
                  <span className="tm-cmd" style={{ "--n": 14, "--d": "1.5s" }}>echo $LOCATION</span>
                </p>
                <p className="tm-out mt-1" style={{ "--d": "2.1s" }}>{t.hero.location}</p>
              </div>

              <div>
                <p>
                  <span style={{ color: C.green }}>$</span>{" "}
                  <span className="tm-cmd" style={{ "--n": 16, "--d": "2.2s" }}>cat tagline.txt</span>
                </p>
                <p className="tm-out mt-1 max-w-xl" style={{ "--d": "2.8s", color: C.mute }}>{t.hero.tagline}</p>
              </div>

              <div>
                <p>
                  <span style={{ color: C.green }}>$</span>{" "}
                  <span className="tm-cmd" style={{ "--n": 13, "--d": "2.9s" }}>./actions.sh</span>
                  <span className="tm-cursor ml-1" />
                </p>
                <div className="tm-out mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ "--d": "3.5s" }}>
                  <button onClick={() => scrollTo("projects")} className="tm-btn justify-center">
                    {t.hero.ctaPrimary}
                  </button>
                  <button type="button" onClick={downloadCV} disabled={isGeneratingCV} className="tm-btn-ghost justify-center disabled:opacity-60">
                    {isGeneratingCV ? t.nav.generating : t.hero.ctaSecondary}
                  </button>
                </div>
              </div>
            </div>
          </Win>

          {/* Photo de profil */}
          <Win title="profil.png" className="mx-auto w-full max-w-xs md:max-w-none">
            <div className="tm-photo-wrap p-3">
              <img
                src={profilImg}
                alt={t.hero.name}
                className="tm-photo aspect-[4/5] w-full object-cover object-top"
              />
              <p className="mt-3 text-xs" style={{ color: C.mute }}>
                role: <span style={{ color: C.cyan }}>"Full Stack Developer"</span>
              </p>
            </div>
          </Win>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" cmd="cat about.md" title={t.about.heading}>
        <div className="grid gap-8 md:grid-cols-5">
          <p className="md:col-span-3" style={{ color: C.text }}>{t.about.bio}</p>
          <div className="space-y-4 border-l pl-4 md:col-span-2" style={{ borderColor: C.line }}>
            {t.about.pillars.map((pillar, i) => (
              <div key={i}>
                <p style={{ color: C.green }}>// {pillar.title}</p>
                <p className="text-xs" style={{ color: C.mute }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" cmd="cat skills.json" title={t.skills.heading}>
        <Win title="skills.json">
          <div className="min-w-0 space-y-4 overflow-x-hidden p-4 sm:p-6">
            <p style={{ color: C.mute }}>{"{"}</p>
            {t.skills.categories.map((cat, i) => (
              <div key={i} className="pl-4">
                <p>
                  <span style={{ color: C.green }}>"{cat.title}"</span>
                  <span style={{ color: C.mute }}>: [</span>
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 pl-4">
                  {cat.items.map((item, ii) => (
                    <span key={ii} style={{ color: C.cyan }}>
                      "{item}"<span style={{ color: C.mute }}>,</span>
                    </span>
                  ))}
                </div>
                <p style={{ color: C.mute }}>],</p>
              </div>
            ))}
            <p style={{ color: C.mute }}>{"}"}</p>
          </div>
        </Win>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" cmd="git log --stat" title={t.experience.heading}>
        <div className="relative ml-1 border-l border-dashed pl-6 sm:pl-8" style={{ borderColor: C.line }}>
          {orderedExperienceItems.map((exp, i) => {
            const live = isOngoing(exp);
            return (
              <article key={i} className="relative pb-12 last:pb-0">
                <span
                  className={`absolute -left-[31px] top-0 text-base leading-none sm:-left-[39px] ${live ? "tm-blink" : ""}`}
                  style={{ color: live ? C.amber : C.mute, background: C.bg }}
                  aria-hidden="true"
                >
                  ●
                </span>
                <p className="text-xs" style={{ color: live ? C.amber : C.mute }}>{exp.period}</p>
                <p className="mt-1 text-xs" style={{ color: C.green }}>{exp.company}</p>
                <div className="mt-1 flex items-center gap-2">
                  <h3 className="min-w-0 flex-1 break-words text-base font-bold" style={{ color: C.text }}>{exp.title}</h3>
                  {exp.link && (
                    <a
                      href={`https://${exp.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 transition-colors hover:text-[#3ddc84]"
                      style={{ color: C.mute }}
                      aria-label={`Visiter le site de ${exp.company}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="mt-2 max-w-3xl" style={{ color: C.mute }}>{exp.desc}</p>

                <ul className="mt-3 space-y-1">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2">
                      <span style={{ color: C.green }}>+</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((s, si) => (
                    <Tag key={si}>{s}</Tag>
                  ))}
                </div>

                <ImageGallery images={getExperienceImages(exp.company)} onOpen={openLightbox} />
              </article>
            );
          })}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" cmd="ls -la projects/" title={t.projects.heading}>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.projects.items.map((p, i) => (
            <Win key={i} title={`projects/${p.name}`} className="h-full">
              <div className="p-4">
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="min-w-0 flex-1 break-words text-base font-bold" style={{ color: C.text }}>{p.name}</h3>
                  <span className="shrink-0 text-xs" style={{ color: C.amber }}>{p.period}</span>
                </div>
                <p className="mb-3" style={{ color: C.mute }}>{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s, si) => (
                    <Tag key={si}>{s}</Tag>
                  ))}
                </div>
                <ImageGallery images={PROJECT_IMAGES[i]} onOpen={openLightbox} />
              </div>
            </Win>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" cmd="./contact.sh" title={t.contact.heading}>
        <p className="mb-6 max-w-lg" style={{ color: C.mute }}>{t.contact.subheading}</p>
        <div className="space-y-2">
          {contactRows.map((r, i) => (
            <div key={i} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <span className="w-24 shrink-0" style={{ color: C.mute }}>
                <span style={{ color: C.green }}>&gt;</span> {r.k}
              </span>
              {r.href ? (
                <a
                  href={r.href}
                  {...(r.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="tm-link break-all"
                >
                  {r.v}
                </a>
              ) : (
                <span className="break-all">{r.v}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="mx-auto max-w-5xl px-4 py-8 text-xs sm:px-6" style={{ color: C.mute }}>
          <p>
            <span style={{ color: C.green }}>$</span> exit
            <span className="tm-cursor ml-1" />
          </p>
          <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {t.hero.name} — {t.footer.rights}
            </p>
            <p>{t.footer.builtWith}</p>
          </div>
        </div>
      </footer>

      {lightbox && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={closeLightbox} onNavigate={navigateLightbox} />
      )}
    </div>
  );
}
