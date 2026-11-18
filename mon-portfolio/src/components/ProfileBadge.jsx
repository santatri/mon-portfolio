// src/components/ProfileBadge.jsx
// Badge photo de profil avec 4 modèles : "pro" | "medal" | "card" | "shield"
import React from "react";

const KEYFRAMES = `
@keyframes badge-swing{from{transform:rotate(-1.5deg)}to{transform:rotate(1.5deg)}}
@keyframes badge-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.badge-anim{animation:none!important}}
`;

const HEX = "polygon(50% 0,100% 22%,100% 78%,50% 100%,0 78%,0 22%)";

/* 1 — Badge pro : carte d'identité suspendue à un cordon */
function BadgePro({ src, name, role, city }) {
  const fade = "linear-gradient(to bottom, transparent, #000 60%)";
  return (
    <div
      className="badge-anim relative w-52 pt-14 sm:w-60 md:w-64"
      style={{ transformOrigin: "50% 0", animation: "badge-swing 5s ease-in-out infinite alternate" }}
    >
      <span
        className="absolute -top-20 left-1/2 h-32 w-5 -translate-x-1/2 bg-[#2b6cb0]"
        style={{ WebkitMaskImage: fade, maskImage: fade }}
      />
      <span className="absolute left-1/2 top-9 z-10 h-6 w-9 -translate-x-1/2 rounded-md bg-slate-400" />
      <div className="relative rounded-2xl border border-slate-700 bg-slate-900 px-4 pb-4 pt-9 shadow-2xl shadow-black/50">
        <span className="absolute left-1/2 top-3 h-2.5 w-14 -translate-x-1/2 rounded-full border border-slate-700 bg-[#151516]" />
        <img
          src={src}
          alt={name}
          className="aspect-[4/4.6] w-full rounded-xl object-cover object-top"
        />
        <p className="mt-4 text-base font-bold leading-tight text-white">{name}</p>
        <p className="text-sm text-[#4d9fef]">{role}</p>
        <div className="mt-3 flex justify-between border-t border-dashed border-slate-700 pt-3 font-mono text-[11px] text-slate-400">
          <span>{city}</span>
          <span>ID&nbsp;#001</span>
        </div>
      </div>
    </div>
  );
}

/* 2 — Médaillon : photo ronde + texte circulaire qui tourne */
function BadgeMedal({ src, name, ringText, status }) {
  return (
    <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
      <svg
        viewBox="0 0 340 340"
        aria-hidden="true"
        className="badge-anim absolute inset-0 h-full w-full"
        style={{ animation: "badge-spin 28s linear infinite" }}
      >
        <defs>
          <path id="badge-ring" d="M170,170 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0" />
        </defs>
        <text
          fill="#97a1b0"
          fontFamily="ui-monospace, monospace"
          fontSize="13"
          letterSpacing="2"
        >
          <textPath href="#badge-ring">{ringText}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[13%] overflow-hidden rounded-full border-[3px] border-[#4d9fef] shadow-[0_0_0_8px_#151516,0_0_0_9px_#2a3140,0_0_60px_rgba(77,159,239,0.25)]">
        <img src={src} alt={name} className="h-full w-full object-cover object-top" />
      </div>
      <span className="absolute bottom-[13%] right-[4%] flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        {status}
      </span>
    </div>
  );
}

/* 3 — Carte profil : coins bleus + puces flottantes */
function BadgeCard({ src, name, role, chips }) {
  const chipCls =
    "absolute rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-100 shadow-xl shadow-black/40";
  return (
    <div className="relative w-52 p-3 sm:w-60 md:w-64">
      <span className="absolute left-0 top-0 h-14 w-14 rounded-tl-2xl border-l-2 border-t-2 border-[#4d9fef]" />
      <span className="absolute bottom-0 right-0 h-14 w-14 rounded-br-2xl border-b-2 border-r-2 border-[#4d9fef]" />
      <img
        src={src}
        alt={name}
        className="aspect-[4/4.8] w-full rounded-xl object-cover object-top"
      />
      {chips[0] && <span className={`${chipCls} -left-3 top-16 sm:-left-8`}><i className="mr-1.5 not-italic text-[#4d9fef]">◆</i>{chips[0]}</span>}
      {chips[1] && <span className={`${chipCls} -right-3 top-44 sm:-right-8`}><i className="mr-1.5 not-italic text-[#4d9fef]">◆</i>{chips[1]}</span>}
      {chips[2] && <span className={`${chipCls} -left-1 bottom-14 sm:-left-5`}><i className="mr-1.5 not-italic text-[#4d9fef]">◆</i>{chips[2]}</span>}
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2b6cb0] px-4 py-1.5 font-mono text-xs text-white">
        {role}
      </span>
    </div>
  );
}

/* 4 — Écusson hexagonal avec contour dégradé et ruban */
function BadgeShield({ src, name, role }) {
  return (
    <div
      className="relative h-72 w-60 sm:h-80 sm:w-64 md:h-96 md:w-72"
      style={{ filter: "drop-shadow(0 0 26px rgba(77,159,239,0.35))" }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#4d9fef] via-[#2b6cb0] to-[#1b3a63]"
        style={{ clipPath: HEX }}
      />
      <div className="absolute inset-[7px] overflow-hidden" style={{ clipPath: HEX }}>
        <img src={src} alt={name} className="h-full w-full object-cover object-top" />
      </div>
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#4d9fef] bg-slate-900 px-4 py-1.5 font-mono text-xs text-white">
        {role}
      </span>
    </div>
  );
}

export default function ProfileBadge({
  variant = "pro",
  src,
  name,
  role = "Full Stack Developer",
  city = "Antananarivo",
  lang = "fr",
}) {
  const fr = lang === "fr";
  const chips = fr
    ? ["Analyse", "Développement", "Déploiement"]
    : ["Analysis", "Development", "Deployment"];
  const ringText = fr
    ? "DÉVELOPPEUR FULL STACK JUNIOR • ANTANANARIVO • MADAGASCAR • "
    : "JUNIOR FULL STACK DEVELOPER • ANTANANARIVO • MADAGASCAR • ";
  const status = fr ? "Disponible" : "Available";

  return (
    <>
      <style>{KEYFRAMES}</style>
      {variant === "pro" && <BadgePro src={src} name={name} role={role} city={city} />}
      {variant === "medal" && <BadgeMedal src={src} name={name} ringText={ringText} status={status} />}
      {variant === "card" && <BadgeCard src={src} name={name} role={role} chips={chips} />}
      {variant === "shield" && <BadgeShield src={src} name={name} role={role} />}
    </>
  );
}
