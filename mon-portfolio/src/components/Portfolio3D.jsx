import React, { useEffect, useMemo, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";
import { Download, Globe2, RotateCcw } from "lucide-react";
import { contactInfo, translations } from "../data/translations";
import CVDocument from "./CVDocument";
import useCVDownload from "../useCVDownload";
import profileImage from "../img/profil.png";

const LANG_KEY = "sfn_portfolio_lang";
const FONT = '"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace';

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
}

function makeMenuTexture(item, index, selected = false) {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 280;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 640, 280);
  gradient.addColorStop(0, selected ? "rgba(33,36,93,.98)" : "rgba(12,16,43,.95)");
  gradient.addColorStop(1, "rgba(21,13,52,.97)");
  roundedRect(ctx, 5, 5, 630, 270, 36);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = item.color;
  ctx.lineWidth = selected ? 7 : 4;
  ctx.shadowColor = item.color;
  ctx.shadowBlur = selected ? 28 : 13;
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = item.color;
  ctx.font = "700 25px Arial";
  ctx.fillText(`0${index + 1}  /  PORTFOLIO`, 42, 70);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 47px Arial";
  ctx.fillText(item.title, 42, 151, 540);
  ctx.fillStyle = "#aab5dc";
  ctx.font = "24px Arial";
  ctx.fillText(item.subtitle, 44, 202, 540);
  ctx.fillStyle = item.color;
  ctx.font = "700 21px Arial";
  ctx.fillText(selected ? "OPEN  ↗" : "CLICK TO OPEN  ↗", 44, 247);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeContentTexture(item) {
  const canvas = document.createElement("canvas");
  canvas.width = 1100;
  canvas.height = 760;
  const ctx = canvas.getContext("2d");
  const background = ctx.createLinearGradient(0, 0, 1100, 760);
  background.addColorStop(0, "rgba(11,15,42,.98)");
  background.addColorStop(1, "rgba(22,12,54,.98)");
  roundedRect(ctx, 4, 4, 1092, 752, 42);
  ctx.fillStyle = background;
  ctx.fill();
  ctx.strokeStyle = item.color;
  ctx.lineWidth = 6;
  ctx.shadowColor = item.color;
  ctx.shadowBlur = 24;
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.fillStyle = item.color;
  ctx.font = "700 26px Arial";
  ctx.fillText(item.eyebrow, 60, 82, 970);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 72px Arial";
  ctx.fillText(item.title, 60, 158, 970);
  ctx.fillStyle = "rgba(112,234,255,.55)";
  ctx.fillRect(60, 192, 980, 2);

  ctx.fillStyle = "#d0d7f1";
  ctx.font = "42px Arial";
  const maxWidth = 970;
  const lineHeight = 48;
  let y = 254;
  item.lines.slice(0, 9).forEach((text) => {
    const words = String(text).split(/\s+/);
    let line = "";
    const lines = [];
    words.forEach((word) => {
      const next = line ? `${line} ${word}` : word;
      if (ctx.measureText(next).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else line = next;
    });
    if (line) lines.push(line);
    lines.slice(0, 2).forEach((content, lineIndex) => {
      if (y > 650) return;
      ctx.fillStyle = lineIndex === 0 ? item.color : "#d0d7f1";
      ctx.fillText(lineIndex === 0 ? "›" : "", 62, y);
      ctx.fillStyle = "#d0d7f1";
      ctx.fillText(content, 100, y, maxWidth - 40);
      y += lineHeight;
    });
    y += 13;
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createScene(host, menuItems, onChoose, initialIndex) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#070817");
  scene.fog = new THREE.FogExp2("#070817", 0.019);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 12.5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  host.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0x9cacff, 1.65));
  const keyLight = new THREE.PointLight(0x00eaff, 48, 22);
  keyLight.position.set(-4, 4, 5);
  scene.add(keyLight);
  const fillLight = new THREE.PointLight(0x8e43ff, 55, 26);
  fillLight.position.set(4, -2, -3);
  scene.add(fillLight);

  const universe = new THREE.Group();
  scene.add(universe);
  const globe = new THREE.Group();
  universe.add(globe);

  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(1.35, 64, 64),
    new THREE.MeshPhysicalMaterial({ color: 0x142058, emissive: 0x18256e, emissiveIntensity: 0.65, metalness: 0.72, roughness: 0.22, clearcoat: 1 })
  );
  globe.add(planet);
  const wire = new THREE.Mesh(
    new THREE.SphereGeometry(1.39, 28, 20),
    new THREE.MeshBasicMaterial({ color: 0x28e9ff, wireframe: true, transparent: true, opacity: 0.35 })
  );
  globe.add(wire);
  const innerGlow = new THREE.Mesh(
    new THREE.SphereGeometry(1.43, 48, 48),
    new THREE.MeshBasicMaterial({ color: 0x6648ff, side: THREE.BackSide, transparent: true, opacity: 0.16 })
  );
  globe.add(innerGlow);

  const orbits = [
    { radius: 2.05, color: 0x00eaff, rotation: [0.85, 0.15, 0.15] },
    { radius: 2.4, color: 0x975aff, rotation: [1.22, 0.5, 0.85] },
    { radius: 2.72, color: 0x7bffcf, rotation: [0.45, 1.05, 1.15] },
  ].map(({ radius, color, rotation }) => {
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.012, 8, 180),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.7 })
    );
    orbit.rotation.set(...rotation);
    globe.add(orbit);
    return orbit;
  });

  const starsPosition = new Float32Array(1200 * 3);
  for (let i = 0; i < 1200; i += 1) {
    starsPosition[i * 3] = (Math.random() - 0.5) * 36;
    starsPosition[i * 3 + 1] = (Math.random() - 0.5) * 24;
    starsPosition[i * 3 + 2] = (Math.random() - 0.5) * 28 - 4;
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute("position", new THREE.BufferAttribute(starsPosition, 3));
  const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0x96aaff, size: 0.026, transparent: true, opacity: 0.78 }));
  scene.add(stars);

  const menuMeshes = menuItems.map((item, index) => {
    const angle = (index / menuItems.length) * Math.PI * 2 - Math.PI / 2;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.95, 0.86),
      new THREE.MeshBasicMaterial({ map: makeMenuTexture(item, index, index === initialIndex), transparent: true, side: THREE.DoubleSide, depthWrite: false })
    );
    mesh.position.set(Math.cos(angle) * 3.12, Math.sin(angle) * 3.12, 0.15);
    mesh.userData.index = index;
    globe.add(mesh);
    return mesh;
  });

  const panel = new THREE.Group();
  const panelShell = new THREE.Mesh(
      new THREE.BoxGeometry(7, 4.82, 0.14),
    new THREE.MeshPhysicalMaterial({ color: 0x0c1235, metalness: 0.55, roughness: 0.25, transparent: true, opacity: 0.98, emissive: 0x131a47, emissiveIntensity: 0.35 })
  );
  panel.add(panelShell);
  const panelFace = new THREE.Mesh(
      new THREE.PlaneGeometry(6.9, 4.72),
    new THREE.MeshBasicMaterial({ map: makeContentTexture(menuItems[initialIndex]), side: THREE.DoubleSide, transparent: true })
  );
  panelFace.position.z = 0.078;
  panel.add(panelFace);
  scene.add(panel);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.minDistance = 8.5;
  controls.maxDistance = 28;
  controls.minPolarAngle = Math.PI * 0.2;
  controls.maxPolarAngle = Math.PI * 0.8;
  controls.target.set(0, 0, 0);

  let isMobileLayout = false;
  let selectedIndex = initialIndex;
  let hoveredIndex = -1;

  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    isMobileLayout = width < 1100;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.z = isMobileLayout ? (width < 500 ? 18.5 : 13.5) : 12.5;
    universe.position.set(isMobileLayout ? 0 : -3.8, isMobileLayout ? 1.6 : 0, 0);
    panel.position.set(isMobileLayout ? 0 : 4.5, isMobileLayout ? -4.5 : 0, -2.4);
    panel.scale.setScalar(isMobileLayout ? 1.1 : 1);
    const menuRadius = isMobileLayout ? 2.25 : 3.12;
    menuMeshes.forEach((mesh, index) => {
      const angle = (index / menuMeshes.length) * Math.PI * 2 - Math.PI / 2;
      mesh.position.set(Math.cos(angle) * menuRadius, Math.sin(angle) * menuRadius, 0.15);
      mesh.scale.setScalar((isMobileLayout ? 0.78 : 1) * (index === selectedIndex ? 1.08 : 1));
    });
    camera.updateProjectionMatrix();
    controls.update();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let pointerStart = null;
  const textureFor = (index, selected) => makeMenuTexture(menuItems[index], index, selected);
  const setSelected = (index) => {
    selectedIndex = index;
    menuMeshes.forEach((mesh, i) => {
      const oldTexture = mesh.material.map;
      mesh.material.map = textureFor(i, i === index);
      mesh.material.map.needsUpdate = true;
      oldTexture?.dispose();
      mesh.scale.setScalar((isMobileLayout ? 0.78 : 1) * (i === index ? 1.08 : 1));
    });
    const oldPanelTexture = panelFace.material.map;
    panelFace.material.map = makeContentTexture(menuItems[index]);
    panelFace.material.map.needsUpdate = true;
    oldPanelTexture?.dispose();
    onChoose(index);
  };
  const getIntersectedMenu = (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(menuMeshes, false)[0]?.object ?? null;
  };
  const onPointerDown = (event) => { pointerStart = { x: event.clientX, y: event.clientY }; };
  const onPointerUp = (event) => {
    if (!pointerStart || Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) > 7) {
      pointerStart = null;
      return;
    }
    const target = getIntersectedMenu(event);
    if (target) setSelected(target.userData.index);
    pointerStart = null;
  };
  const onPointerMove = (event) => {
    const target = getIntersectedMenu(event);
    const nextHovered = target?.userData.index ?? -1;
    if (nextHovered !== hoveredIndex) {
      if (hoveredIndex >= 0 && hoveredIndex !== selectedIndex) menuMeshes[hoveredIndex].scale.setScalar(isMobileLayout ? 0.78 : 1);
      if (nextHovered >= 0) menuMeshes[nextHovered].scale.setScalar((isMobileLayout ? 0.78 : 1) * (nextHovered === selectedIndex ? 1.1 : 1.06));
      hoveredIndex = nextHovered;
      renderer.domElement.style.cursor = target ? "pointer" : "grab";
    }
  };
  renderer.domElement.addEventListener("pointerdown", onPointerDown);
  renderer.domElement.addEventListener("pointerup", onPointerUp);
  renderer.domElement.addEventListener("pointermove", onPointerMove);

  let frame = 0;
  const clock = new THREE.Clock();
  const animate = () => {
    frame = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    planet.rotation.y += 0.0018;
    planet.rotation.x = Math.sin(elapsed * 0.2) * 0.08;
    wire.rotation.copy(planet.rotation);
    orbits.forEach((orbit, index) => { orbit.rotation.z += (index % 2 ? -1 : 1) * 0.0008; });
    menuMeshes.forEach((mesh, index) => {
      mesh.position.z = 0.15 + Math.sin(elapsed * 0.8 + index) * 0.07;
      mesh.quaternion.copy(globe.quaternion.clone().invert().multiply(camera.quaternion));
    });
    stars.rotation.y = elapsed * 0.002;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  return () => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    controls.dispose();
    renderer.domElement.removeEventListener("pointerdown", onPointerDown);
    renderer.domElement.removeEventListener("pointerup", onPointerUp);
    renderer.domElement.removeEventListener("pointermove", onPointerMove);
    scene.traverse((object) => {
      object.geometry?.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => { material.map?.dispose(); material.dispose(); });
      }
    });
    renderer.dispose();
    renderer.domElement.remove();
  };
}

const styles = `
.p3d{position:fixed;inset:0;z-index:0;background:#070817;color:#eff3ff;font-family:${FONT};overflow:hidden}
.p3d:before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(ellipse at 50% 48%,rgba(35,54,139,.19),transparent 36%),linear-gradient(180deg,rgba(8,8,22,.08),rgba(5,6,16,.3))}
.p3d-scene{position:absolute;inset:0;z-index:0;touch-action:none;cursor:grab}.p3d-scene:active{cursor:grabbing}.p3d-scene canvas{display:block;width:100%;height:100%}
.p3d-head{position:absolute;z-index:2;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:1.1rem clamp(1rem,4vw,3.5rem);background:linear-gradient(180deg,rgba(5,7,23,.8),transparent);pointer-events:none}
.p3d-brand{color:#f4f5ff;font:700 .76rem ${FONT};letter-spacing:.22em}.p3d-brand b{color:#00eaff;text-shadow:0 0 16px #00eaff}
.p3d-actions{display:flex;align-items:center;gap:.55rem;pointer-events:auto}.p3d-btn{display:inline-flex;align-items:center;justify-content:center;gap:.4rem;padding:.58rem .78rem;border:1px solid rgba(112,139,255,.36);border-radius:999px;background:rgba(11,15,40,.82);color:#dfeaff;font:600 .67rem ${FONT};text-decoration:none;cursor:pointer;backdrop-filter:blur(12px);transition:.2s}
.p3d-btn:hover{border-color:#00eaff;color:#6ff7ff;box-shadow:0 0 18px rgba(0,234,255,.25)}.p3d-btn.primary{border-color:rgba(150,111,255,.7);background:linear-gradient(115deg,rgba(89,46,184,.92),rgba(17,70,137,.92))}
.p3d-hint{position:absolute;z-index:2;bottom:1.4rem;left:50%;transform:translateX(-50%);color:#8996bd;text-align:center;font:500 .62rem ${FONT};letter-spacing:.13em;white-space:nowrap;pointer-events:none}
.p3d-instruction{position:absolute;z-index:2;left:50%;top:5.1rem;transform:translateX(-50%);padding:.45rem .75rem;border:1px solid rgba(124,147,235,.2);border-radius:999px;background:rgba(9,12,32,.6);color:#a9b6dd;text-align:center;font:500 .62rem ${FONT};letter-spacing:.06em;pointer-events:none}
.p3d-live{position:absolute;z-index:2;right:1.25rem;bottom:1.3rem;color:#98a6cf;text-align:right;font:500 .62rem ${FONT};pointer-events:none}.p3d-live strong{display:block;margin-bottom:.25rem;color:#50ecff;letter-spacing:.14em}
.p3d-info-panel{position:absolute;z-index:2;top:50%;right:clamp(.75rem,1.5vw,1.75rem);width:min(760px,52vw);max-height:82vh;display:flex;flex-direction:column;transform:translateY(-43%) perspective(1000px) rotateY(-10deg) rotateX(2deg);border:1px solid rgba(120,234,255,.65);border-radius:1.25rem;background:linear-gradient(140deg,rgba(12,18,47,.95),rgba(16,10,43,.92));box-shadow:18px 28px 80px rgba(0,0,0,.55),0 0 38px rgba(0,234,255,.2),inset 0 0 35px rgba(111,89,255,.12);backdrop-filter:blur(18px);overflow:hidden;pointer-events:auto}
.p3d-info-head{padding:1.55rem 1.9rem 1.3rem;border-bottom:1px solid color-mix(in srgb,var(--accent) 42%,transparent);box-shadow:inset 5px 0 0 var(--accent)}
.p3d-info-head span{font:600 .65rem ${FONT};letter-spacing:.13em;color:var(--accent)}.p3d-info-head h1{margin:.65rem 0 0;color:#fff;font:700 1.4rem/1.3 Arial,sans-serif}
.p3d-info-content{padding:1rem 1.9rem 1.6rem;overflow:auto;overscroll-behavior:contain}.p3d-info-content p{position:relative;margin:.75rem 0;padding-left:1.2rem;color:#c5cee9;font:400 .92rem/1.65 Arial,sans-serif}.p3d-info-content p:before{content:"";position:absolute;left:0;top:.6em;width:.42rem;height:.42rem;border-radius:50%;background:var(--accent,#00eaff);box-shadow:0 0 10px var(--accent,#00eaff)}
@media(max-width:1100px){.p3d-info-panel{top:auto;right:2vw;bottom:2.25rem;width:96vw;max-height:34svh;transform:perspective(1000px) rotateX(3deg)}.p3d-info-head{padding:.8rem 1rem .65rem}.p3d-info-head h1{font-size:1.05rem}.p3d-info-content{padding:.35rem 1rem .9rem}.p3d-info-content p{font-size:.8rem;line-height:1.5;margin:.45rem 0}.p3d-live{display:none}}
@media(max-width:760px){.p3d-head{padding:.7rem .75rem}.p3d-brand{font-size:.61rem;letter-spacing:.1em}.p3d-btn{padding:.48rem .55rem;font-size:.57rem}.p3d-actions{gap:.35rem}.p3d-instruction{top:3.8rem;width:max-content;max-width:92vw;font-size:.52rem}.p3d-info-head h1{font-size:1rem}.p3d-info-content p{font-size:.76rem;line-height:1.45}.p3d-hint{bottom:.45rem;font-size:.45rem;opacity:.8}}
@media(max-width:430px){.p3d-brand span{display:none}.p3d-download-label{display:none}.p3d-actions{gap:.3rem}.p3d-btn{padding:.48rem}}
@media(max-height:680px) and (max-width:1100px){.p3d-instruction{display:none}.p3d-info-panel{max-height:30svh;bottom:1.8rem}.p3d-hint{display:none}}
@media(max-width:1100px){.portfolio-mode-switch-3d{bottom:calc(34svh + 3rem)!important;right:.75rem!important}}
@media(max-height:680px) and (max-width:1100px){.portfolio-mode-switch-3d{bottom:calc(30svh + 2.5rem)!important}}
`;

export default function Portfolio3D() {
  const hostRef = useRef(null);
  const [lang, setLang] = useState(() => {
    try { return window.localStorage.getItem(LANG_KEY) === "en" ? "en" : "fr"; }
    catch { return "fr"; }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sceneVersion, setSceneVersion] = useState(0);
  const t = translations[lang] ?? translations.fr;
  const cvDoc = useMemo(() => <CVDocument lang={lang} photoUrl={profileImage} />, [lang]);
  const { download: downloadCV, isGenerating: isGeneratingCV } = useCVDownload(cvDoc, t.meta.cvFileName);

  const menuItems = useMemo(() => {
    const colors = ["#00eaff", "#a878ff", "#62ffd0", "#ffbd4a", "#53aaff", "#ff6cc8"];
    const titleList = [t.about.heading, t.skills.heading, t.experience.heading, t.cv.education, t.projects.heading, t.contact.heading];
    const detail = [
      [t.about.bio],
      t.skills.categories.map((category) => `${category.title} : ${category.items.join(" · ")}`),
      t.experience.items.map((item) => `${item.period} — ${item.title} / ${item.company}. ${item.desc}`),
      (t.cv.educationItems || []).map((item) => `${item.title} — ${item.school} (${item.period})`),
      t.projects.items.map((item) => `${item.name} (${item.period}) — ${item.desc}`),
      [contactInfo.email, contactInfo.phone1, contactInfo.location, contactInfo.github, contactInfo.portfolio],
    ];
    return titleList.map((title, index) => ({
      title,
      subtitle: ["PROFILE", "SKILLS / STACK", "CAREER TIMELINE", "EDUCATION", "SELECTED PROJECTS", "GET IN TOUCH"][index],
      eyebrow: `SECTION 0${index + 1}  /  ${title.toUpperCase()}`,
      color: colors[index],
      lines: detail[index],
    }));
  }, [t]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    return createScene(host, menuItems, setSelectedIndex, selectedIndex);
    // The scene is rebuilt when language changes so every 3D card updates together.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuItems, sceneVersion]);

  const toggleLang = () => {
    const next = lang === "fr" ? "en" : "fr";
    setLang(next);
    setSelectedIndex(0);
    try { window.localStorage.setItem(LANG_KEY, next); } catch { /* session only */ }
  };

  const resetView = () => {
    setSelectedIndex(0);
    setSceneVersion((version) => version + 1);
  };
  const activeItem = menuItems[selectedIndex] ?? menuItems[0];

  return (
    <div className="p3d">
      <style>{styles}</style>
      <div ref={hostRef} className="p3d-scene" aria-label="Globe 3D interactif : faites glisser pour le tourner et cliquez sur un menu" />
      <header className="p3d-head">
        <div className="p3d-brand">SFN <b>◈</b><span> INTERACTIVE WORLD</span></div>
        <div className="p3d-actions">
          <button type="button" className="p3d-btn" onClick={toggleLang} aria-label="Changer la langue"><Globe2 size={14} />{lang.toUpperCase()}</button>
          <button type="button" onClick={downloadCV} disabled={isGeneratingCV} className="p3d-btn primary">
            <Download size={14} /><span className="p3d-download-label">{isGeneratingCV ? t.nav.generating : t.nav.downloadCV}</span>
          </button>
          <button type="button" className="p3d-btn" onClick={resetView} aria-label={lang === "fr" ? "Réinitialiser la vue" : "Reset view"}><RotateCcw size={14} /></button>
        </div>
      </header>
      <div className="p3d-instruction">
        {lang === "fr" ? "TOURNEZ LE GLOBE · CLIQUEZ SUR UN CADRE POUR OUVRIR" : "ROTATE THE GLOBE · CLICK A FRAME TO OPEN"}
      </div>
      <section className="p3d-info-panel" aria-live="polite" aria-label={activeItem.title}>
        <div className="p3d-info-head" style={{ "--accent": activeItem.color }}>
          <span>{activeItem.eyebrow}</span>
          <h1>{activeItem.title}</h1>
        </div>
        <div className="p3d-info-content">
          {activeItem.lines.map((line, index) => <p key={`${selectedIndex}-${index}`}>{line}</p>)}
        </div>
      </section>
      <div className="p3d-hint">{lang === "fr" ? "GLISSER : ORBITER  ·  MOLETTE / PINCE : ZOOMER" : "DRAG: ORBIT  ·  WHEEL / PINCH: ZOOM"}</div>
      <div className="p3d-live"><strong>{lang === "fr" ? "MENU 3D" : "3D MENU"}</strong>{menuItems[selectedIndex]?.title}</div>
    </div>
  );
}
