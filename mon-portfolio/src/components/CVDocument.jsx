// src/components/CVDocument.jsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Image,
  Svg,
  Line,
} from "@react-pdf/renderer";
import { translations, contactInfo } from "../data/translations";

// ───────────────────────── Palette (reprise du PDF) ─────────────────────────
const colors = {
  sidebar: "#1f3a68",
  gold: "#d1a124",
  goldSoft: "#e0b94a",
  navy: "#1f3a68",
  ink: "#1a2233",
  gray: "#5b6470",
  grayLight: "#8a929c",
  pageBg: "#f7f7f5",
  line: "#d9d9d6",
  tagBg: "#eaefe9",
  tagBorder: "#d3dbd1",
  sideText: "#eef2f8",
  sideMuted: "#9fb0c9",
  sideBorder: "#4b6590",
  white: "#ffffff",
};

const MONO = "Courier";
const MONO_BOLD = "Courier-Bold";

const SIDEBAR_W = 190;
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const GRID = 24;

// Compétences clés (colonne gauche) — surchargeables via skills.highlights
const DEFAULT_HIGHLIGHTS = {
  fr: [
    "Analyse des besoins métiers",
    "Architecture logicielle",
    "Collaboration en équipe Agile",
    "Conception de bases de données",
    "Conception et développement d'API REST",
    "Développement Backend",
    "Développement Front-end",
    "Gestion de versions avec Git",
    "Intégration de nouvelles fonctionnalités",
    "Optimisation des performances",
    "Sécurité applicative et bonnes pratiques",
    "Tests, débogage et assurance qualité",
  ],
  en: [
    "Business requirements analysis",
    "Software architecture",
    "Agile team collaboration",
    "Database design",
    "REST API design and development",
    "Backend development",
    "Front-end development",
    "Version control with Git",
    "New feature integration",
    "Performance optimization",
    "Application security and best practices",
    "Testing, debugging and quality assurance",
  ],
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.pageBg,
    fontFamily: "Helvetica",
    fontSize: 8.3,
    color: colors.ink,
    flexDirection: "row",
    paddingTop: 34,
    paddingBottom: 30,
  },

  // ───────────── Fond de sidebar (répété sur chaque page) ─────────────
  sidebarBg: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: SIDEBAR_W,
    backgroundColor: colors.sidebar,
  },

  // ───────────── SIDEBAR ─────────────
  sidebar: {
    width: SIDEBAR_W,
    paddingHorizontal: 22,
    flexDirection: "column",
  },
  photoFrame: {
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: colors.gold,
    padding: 5,
    marginBottom: 16,
  },
  photo: {
    width: 118,
    height: 118,
    objectFit: "cover",
  },
  photoPlaceholder: {
    width: 118,
    height: 118,
    backgroundColor: "#2a4a80",
    justifyContent: "center",
    alignItems: "center",
  },
  photoPlaceholderText: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
  },
  sideName: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    lineHeight: 1.15,
  },
  sideTitle: {
    fontFamily: MONO,
    fontSize: 7.4,
    color: colors.gold,
    marginTop: 7,
  },

  sideSection: {
    marginTop: 18,
    marginBottom: 9,
    paddingBottom: 5,
    borderBottomWidth: 0.6,
    borderBottomColor: colors.sideBorder,
    flexDirection: "row",
  },
  sideSectionSlash: {
    fontFamily: MONO,
    fontSize: 7.4,
    color: colors.sideMuted,
    marginRight: 4,
  },
  sideSectionText: {
    fontFamily: MONO,
    fontSize: 7.4,
    color: colors.gold,
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  contactLabel: {
    fontFamily: MONO,
    fontSize: 7,
    color: colors.gold,
    width: 22,
    marginTop: 0.5,
  },
  contactValue: {
    fontSize: 7.3,
    color: colors.sideText,
    flex: 1,
    lineHeight: 1.3,
  },

  hlRow: {
    flexDirection: "row",
    marginBottom: 4.5,
    alignItems: "flex-start",
  },
  hlBullet: {
    fontSize: 8,
    color: colors.gold,
    width: 9,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1,
  },
  hlText: {
    fontSize: 7.3,
    color: colors.sideText,
    flex: 1,
    lineHeight: 1.3,
  },

  stackLabel: {
    fontSize: 7,
    color: colors.sideMuted,
    marginTop: 7,
    marginBottom: 4,
  },
  sideTags: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sideTag: {
    fontFamily: MONO,
    fontSize: 6.6,
    color: colors.sideText,
    borderWidth: 0.6,
    borderColor: colors.sideBorder,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 4,
    marginBottom: 4,
  },

  langRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  langLabel: { fontSize: 7.8, color: colors.white },
  langLevel: { fontFamily: MONO, fontSize: 6.8, color: colors.gold },

  interests: {
    fontSize: 7.8,
    color: colors.sideText,
    lineHeight: 1.5,
  },

  // ───────────── PRINCIPAL ─────────────
  main: {
    flex: 1,
    paddingLeft: 26,
    paddingRight: 30,
    flexDirection: "column",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
  },
  sectionNum: {
    fontFamily: MONO_BOLD,
    fontSize: 8.6,
    color: colors.gold,
    marginRight: 7,
  },
  sectionTitle: {
    fontFamily: MONO_BOLD,
    fontSize: 9.2,
    color: colors.navy,
  },
  sectionRule: {
    flex: 1,
    height: 0.8,
    backgroundColor: colors.line,
    marginLeft: 9,
  },

  bio: {
    fontSize: 8.6,
    lineHeight: 1.45,
    color: colors.ink,
    marginBottom: 14,
  },

  // Timeline expériences
  expItem: {
    position: "relative",
    marginLeft: 3,
    paddingLeft: 14,
    paddingBottom: 9,
    borderLeftWidth: 2,
    borderLeftColor: colors.line,
  },
  expMarker: {
    position: "absolute",
    left: -21,
    top: 1,
    width: 12,
    height: 12,
    borderWidth: 1.6,
    borderColor: colors.gold,
    backgroundColor: colors.pageBg,
  },
  expRole: {
    fontSize: 9.8,
    fontFamily: "Helvetica-Bold",
    color: colors.ink,
    lineHeight: 1.2,
  },
  expCompany: {
    fontSize: 8.4,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
    marginTop: 2.5,
  },
  expPeriod: {
    fontFamily: MONO,
    fontSize: 7,
    color: colors.gold,
    marginTop: 4,
    marginBottom: 4,
  },
  expDesc: {
    fontSize: 8,
    color: colors.gray,
    lineHeight: 1.4,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 1.8,
    alignItems: "flex-start",
  },
  bulletDot: {
    fontSize: 8.5,
    color: colors.gold,
    width: 10,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1,
  },
  bulletText: {
    fontSize: 8.1,
    color: colors.gray,
    flex: 1,
    lineHeight: 1.35,
  },
  stackRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  stackTag: {
    fontFamily: MONO,
    fontSize: 6.6,
    color: "#2a3a4f",
    backgroundColor: colors.tagBg,
    borderWidth: 0.6,
    borderColor: colors.tagBorder,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 4,
    marginBottom: 2,
  },

  // Formation
  eduItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderLeftWidth: 2.5,
    borderLeftColor: colors.line,
    paddingLeft: 10,
    marginBottom: 9,
    paddingVertical: 1,
  },
  eduLeft: { flex: 1, paddingRight: 8 },
  eduTitle: {
    fontSize: 9.2,
    fontFamily: "Helvetica-Bold",
    color: colors.ink,
    lineHeight: 1.25,
  },
  eduSchool: { fontSize: 8, color: colors.navy, marginTop: 2 },
  eduPeriod: {
    fontFamily: MONO,
    fontSize: 7,
    color: colors.gold,
    marginTop: 1.5,
  },

  // Projets
  projCategory: {
    fontFamily: MONO,
    fontSize: 7.4,
    color: colors.navy,
    marginTop: 8,
    marginBottom: 8,
  },
  projItem: {
    borderLeftWidth: 2.5,
    borderLeftColor: colors.line,
    paddingLeft: 10,
    marginBottom: 9,
    paddingBottom: 1,
  },
  projHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  projName: {
    flex: 1,
    fontSize: 9.4,
    fontFamily: "Helvetica-Bold",
    color: colors.ink,
    paddingRight: 8,
  },
  projNameSub: {
    fontSize: 8.2,
    fontFamily: "Helvetica",
    color: colors.gray,
  },
  projPeriod: {
    fontFamily: MONO,
    fontSize: 7,
    color: colors.gold,
    marginTop: 1.5,
  },
  projDesc: {
    fontSize: 8.2,
    color: colors.gray,
    lineHeight: 1.4,
    marginTop: 4,
  },
});

// Courier (police standard PDF) ne contient pas « → » : on utilise « -> ».
const fmtPeriod = (p = "") => p.replace(/\s*(→|–|—)\s*/g, " -> ");

const CVDocument = ({ lang = "fr", photoUrl = null }) => {
  const data = translations[lang] ?? translations.fr;
  const { hero, about, skills, experience, projects, cv } = data;
  const L = lang === "fr" ? "fr" : "en";

  // Expérience en cours en premier, puis ordre d'origine
  const experienceItems = [...(experience.items || [])].sort((a, b) => {
    const ongoing = (item) => (/présent|present/i.test(item.period) ? 1 : 0);
    return ongoing(b) - ongoing(a);
  });

  // Nom : mot(s) en MAJUSCULES = nom de famille, le reste = prénom(s)
  const words = (hero.name || "").split(" ").filter(Boolean);
  const isUpper = (w) => w === w.toUpperCase() && /[A-Z]/.test(w);
  const lastName = words.filter(isUpper).join(" ") || words[0] || "";
  const firstName =
    words.filter((w) => !isUpper(w)).join(" ") || words.slice(1).join(" ");

  const highlights = skills.highlights || DEFAULT_HIGHLIGHTS[L];

  const interests =
    L === "fr"
      ? "Basketball · Animé · Intelligence Artificielle"
      : "Basketball · Anime · Artificial Intelligence";

  // ───── Petits composants ─────
  const SideTitle = ({ children }) => (
    <View style={styles.sideSection}>
      <Text style={styles.sideSectionSlash}>//</Text>
      <Text style={styles.sideSectionText}>{children}</Text>
    </View>
  );

  const SectionHeader = ({ num, title }) => (
    <View style={styles.sectionHeader} wrap={false} minPresenceAhead={60}>
      <Text style={styles.sectionNum}>{num}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionRule} />
    </View>
  );

  const SideGrid = () => {
    const v = Math.floor(SIDEBAR_W / GRID);
    const h = Math.floor(PAGE_H / GRID);
    return (
      <Svg
        width={SIDEBAR_W}
        height={PAGE_H}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {Array.from({ length: v + 1 }).map((_, i) => (
          <Line
            key={`v${i}`}
            x1={i * GRID + 6}
            y1={0}
            x2={i * GRID + 6}
            y2={PAGE_H}
            stroke="#ffffff"
            strokeOpacity={0.08}
            strokeWidth={0.6}
          />
        ))}
        {Array.from({ length: h + 1 }).map((_, i) => (
          <Line
            key={`h${i}`}
            x1={0}
            y1={i * GRID + 6}
            x2={SIDEBAR_W}
            y2={i * GRID + 6}
            stroke="#ffffff"
            strokeOpacity={0.08}
            strokeWidth={0.6}
          />
        ))}
      </Svg>
    );
  };

  // Projets groupés par catégorie
  const projectGroups = (projects.items || []).reduce((acc, p) => {
    const category = p.category || cv.projects;
    const g = acc.find((x) => x.category === category);
    if (g) g.items.push(p);
    else acc.push({ category, items: [p] });
    return acc;
  }, []);

  const splitName = (name = "") => {
    const i = name.indexOf(" — ");
    return i === -1
      ? { main: name, sub: "" }
      : { main: name.slice(0, i), sub: name.slice(i) };
  };

  return (
    <Document
      title={`CV - ${hero.name}`}
      author={hero.name}
      subject={hero.title}
    >
      <Page size="A4" style={styles.page} wrap>
        {/* Fond bleu + quadrillage, répétés sur chaque page */}
        <View style={styles.sidebarBg} fixed>
          <SideGrid />
        </View>

        {/* ───────────── SIDEBAR ───────────── */}
        <View style={styles.sidebar}>
          <View style={styles.photoFrame}>
            {photoUrl ? (
              <Image src={photoUrl} style={styles.photo} />
            ) : (
              <View style={styles.photoPlaceholder}>
                <Text style={styles.photoPlaceholderText}>FN</Text>
              </View>
            )}
          </View>

          <Text style={styles.sideName}>{lastName}</Text>
          <Text style={styles.sideName}>{firstName}</Text>
          <Text style={styles.sideTitle}>{hero.title}</Text>

          {/* Contact */}
          <SideTitle>contact</SideTitle>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>loc</Text>
            <Text style={styles.contactValue}>{contactInfo.location}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>tel</Text>
            <Text style={styles.contactValue}>{contactInfo.phone1}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>mail</Text>
            <Text style={styles.contactValue}>{contactInfo.email}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>web</Text>
            <Link
              src={contactInfo.portfolioUrl}
              style={{ flex: 1, textDecoration: "none" }}
            >
              <Text style={styles.contactValue}>{contactInfo.portfolio}</Text>
            </Link>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>git</Text>
            <Link
              src={contactInfo.githubUrl}
              style={{ flex: 1, textDecoration: "none" }}
            >
              <Text style={styles.contactValue}>{contactInfo.github}</Text>
            </Link>
          </View>

          {/* Compétences clés */}
          <SideTitle>{L === "fr" ? "compétences" : "skills"}</SideTitle>
          {highlights.map((h, i) => (
            <View key={i} style={styles.hlRow} wrap={false}>
              <Text style={styles.hlBullet}>›</Text>
              <Text style={styles.hlText}>{h}</Text>
            </View>
          ))}

          {/* Stack */}
          <SideTitle>stack</SideTitle>
          {skills.categories?.map((cat, i) => (
            <View key={i}>
              <Text style={styles.stackLabel} minPresenceAhead={30}>
                {cat.title}
              </Text>
              <View style={styles.sideTags}>
                {cat.items.map((item, idx) => (
                  <Text key={idx} style={styles.sideTag}>
                    {item}
                  </Text>
                ))}
              </View>
            </View>
          ))}

          {/* Langues */}
          <SideTitle>{L === "fr" ? "langues" : "languages"}</SideTitle>
          <View style={styles.langRow}>
            <Text style={styles.langLabel}>{cv.french}</Text>
            <Text style={styles.langLevel}>
              {L === "fr" ? "courant" : "fluent"}
            </Text>
          </View>
          <View style={styles.langRow}>
            <Text style={styles.langLabel}>{cv.english}</Text>
            <Text style={styles.langLevel}>
              {L === "fr" ? "technique" : "technical"}
            </Text>
          </View>
          <View style={styles.langRow}>
            <Text style={styles.langLabel}>Malagasy</Text>
            <Text style={styles.langLevel}>
              {L === "fr" ? "natif" : "native"}
            </Text>
          </View>

          {/* Intérêts */}
          <SideTitle>{L === "fr" ? "intérêts" : "interests"}</SideTitle>
          <Text style={styles.interests}>{interests}</Text>
        </View>

        {/* ───────────── CONTENU PRINCIPAL ───────────── */}
        <View style={styles.main}>
          {/* 01 Profil */}
          <SectionHeader num="01" title={L === "fr" ? "Profil" : "Profile"} />
          <Text style={styles.bio}>{about.bio}</Text>

          {/* 02 Expériences */}
          <SectionHeader num="02" title={cv.experiences} />
          {experienceItems.map((exp, i) => (
            <View key={i} style={styles.expItem}>
              <View wrap={false}>
                <View style={styles.expMarker} />
                <Text style={styles.expRole}>{exp.title}</Text>
                <Text style={styles.expCompany}>{exp.company}</Text>
                <Text style={styles.expPeriod}>{fmtPeriod(exp.period)}</Text>
                {exp.desc && <Text style={styles.expDesc}>{exp.desc}</Text>}
              </View>

              {exp.bullets?.map((b, bi) => (
                <View key={bi} style={styles.bulletRow} wrap={false}>
                  <Text style={styles.bulletDot}>›</Text>
                  <Text style={styles.bulletText}>{b}</Text>
                </View>
              ))}

              {exp.stack?.length > 0 && (
                <View style={styles.stackRow} wrap={false}>
                  {exp.stack.map((s, si) => (
                    <Text key={si} style={styles.stackTag}>
                      {s}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}

          {/* 03 Formation */}
          {cv.educationItems?.length > 0 && (
            <>
              <View style={{ height: 8 }} />
              <SectionHeader num="03" title={cv.education} />
              {cv.educationItems.map((e, i) => (
                <View key={i} style={styles.eduItem} wrap={false}>
                  <View style={styles.eduLeft}>
                    <Text style={styles.eduTitle}>{e.title}</Text>
                    <Text style={styles.eduSchool}>{e.school}</Text>
                  </View>
                  <Text style={styles.eduPeriod}>{fmtPeriod(e.period)}</Text>
                </View>
              ))}
            </>
          )}

          {/* 04 Projets */}
          {projectGroups.length > 0 && (
            <>
              <View style={{ height: 8 }} />
              <SectionHeader num="04" title={cv.projects} />
              {projectGroups.map((group) => (
                <View key={group.category}>
                  <Text style={styles.projCategory} minPresenceAhead={50}>
                    {group.category}
                  </Text>
                  {group.items.map((p) => {
                    const { main, sub } = splitName(p.name);
                    return (
                      <View key={p.name} style={styles.projItem} wrap={false}>
                        <View style={styles.projHeader}>
                          <Text style={styles.projName}>
                            {main}
                            {sub ? (
                              <Text style={styles.projNameSub}>{sub}</Text>
                            ) : null}
                          </Text>
                          <Text style={styles.projPeriod}>
                            {fmtPeriod(p.period)}
                          </Text>
                        </View>
                        {p.desc ? (
                          <Text style={styles.projDesc}>{p.desc}</Text>
                        ) : null}
                        {p.stack?.length > 0 && (
                          <View style={styles.stackRow}>
                            {p.stack.map((s, si) => (
                              <Text key={si} style={styles.stackTag}>
                                {s}
                              </Text>
                            ))}
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              ))}
            </>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default CVDocument;