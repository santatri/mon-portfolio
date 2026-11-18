// src/App.jsx
import React, { useState } from "react";
import PortfolioDeveloper from "./components/Portfolio";
import PortfolioSimple from "./components/PortfolioSimple";
import Portfolio3D from "./components/Portfolio3D";
import "./index.css";

const DISPLAY_MODE_KEY = "sfn_portfolio_display_mode";

export default function App() {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "simple";
    try {
      const savedMode = window.localStorage.getItem(DISPLAY_MODE_KEY);
      return ["simple", "developer", "3d"].includes(savedMode) ? savedMode : "simple";
    } catch {
      return "simple";
    }
  });

  const changeMode = (event) => {
    const next = event.target.value;
    setMode(next);
    try {
      window.localStorage.setItem(DISPLAY_MODE_KEY, next);
    } catch {
      // Le choix s'applique au moins jusqu'à la fermeture de la page.
    }
  };

  const PortfolioView = mode === "developer"
    ? PortfolioDeveloper
    : mode === "3d"
      ? Portfolio3D
      : PortfolioSimple;

  return (
    <>
      <PortfolioView />
      <label
        className={`fixed bottom-5 right-5 z-[90] rounded-full border px-4 py-2 text-xs font-semibold shadow-xl ${mode === "3d" ? "portfolio-mode-switch-3d" : ""}`}
        style={{
          color: "#fff",
          borderColor: "#8b5cf6",
          background: "linear-gradient(135deg, #7c3aed, #2563eb)",
          boxShadow: "0 0 20px rgba(124,58,237,.45)",
        }}
      >
        <span className="sr-only">Choisir le mode du portfolio</span>
        <select
          value={mode}
          onChange={changeMode}
          aria-label="Choisir le mode du portfolio"
          className="cursor-pointer appearance-none bg-transparent text-white outline-none"
        >
          <option value="simple" className="bg-slate-900">Mode simple</option>
          <option value="developer" className="bg-slate-900">Mode développeur</option>
          <option value="3d" className="bg-slate-900">Mode 3D</option>
        </select>
        <span aria-hidden="true" className="ml-2">⌄</span>
      </label>
    </>
  );
}
