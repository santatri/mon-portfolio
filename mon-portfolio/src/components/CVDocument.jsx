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
  Font,
} from "@react-pdf/renderer";
import { translations, contactInfo } from "../data/translations";

// Palette de couleurs raffinée et professionnelle
const colors = {
  primary: "#10233f",
  secondary: "#1e3a5f",
  accent: "#d69b42",
  accentDark: "#ae7428",
  accentLight: "#fff6e7",
  textPrimary: "#10233f",
  textSecondary: "#3f4c5c",
  textMuted: "#728096",
  textLight: "#bac5d3",
  sidebarBg: "#10233f",
  border: "#dbe2ea",
  highlight: "#f4f7fa",
  white: "#ffffff",
  success: "#48bb78",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: 8.3,
    color: colors.textPrimary,
    flexDirection: "row",
    paddingTop: 26,
    paddingBottom: 24,
  },

  // ================= SIDEBAR (27%) =================
  sidebar: {
    width: "27%",
    backgroundColor: colors.sidebarBg,
    marginTop: -26,
    marginBottom: -24,
    paddingTop: 50,
    paddingBottom: 48,
    paddingHorizontal: 14,
    flexDirection: "column",
  },
  
  profileImage: {
    width: 76,
    height: 76,
    borderRadius: 38,
    alignSelf: "center",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: colors.accent,
  },
  profileImagePlaceholder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: colors.secondary,
    alignSelf: "center",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: colors.accent,
    borderStyle: "dashed",
  },
  placeholderText: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    textAlign: "center",
  },

  decorativeLine: {
    width: 28,
    height: 3,
    backgroundColor: colors.accent,
    alignSelf: "center",
    marginBottom: 12,
    borderRadius: 1,
  },

  sidebarSectionTitle: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginTop: 14,
    marginBottom: 7,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#38506e",
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    paddingVertical: 1.5,
  },
  contactIcon: {
    width: 9,
    fontSize: 6,
    color: colors.accent,
    marginRight: 4,
    textAlign: "center",
  },
  contactText: {
    fontSize: 7,
    color: "#e4eaf1",
    lineHeight: 1.3,
    flex: 1,
  },
  contactLink: {
    color: "#f5c66b",
    textDecoration: "none",
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
  },

  skillCategoryTitle: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: "#f5c66b",
    marginTop: 5,
    marginBottom: 2,
    letterSpacing: 0.3,
  },
  skillTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
    marginBottom: 4,
  },
  skillTag: {
    fontSize: 6.5,
    color: "#edf2f7",
    backgroundColor: colors.secondary,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 1.5,
    borderWidth: 0.5,
    borderColor: "#456080",
  },

  eduItem: {
    marginBottom: 6,
    paddingLeft: 6,
    borderLeftWidth: 1.5,
    borderLeftColor: "#f5c66b",
  },
  eduDegree: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    lineHeight: 1.2,
  },
  eduSchool: {
    fontSize: 6.5,
    color: "#d7e0ea",
    marginTop: 0.5,
  },
  eduPeriod: {
    fontSize: 6,
    color: "#f5c66b",
    fontFamily: "Helvetica-Bold",
    marginTop: 0.5,
  },

  langRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: colors.secondary,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: "#456080",
  },
  langLabel: {
    fontSize: 7,
    color: colors.white,
    fontFamily: "Helvetica-Bold",
  },
  langLevel: {
    fontSize: 6,
    color: colors.primary,
    backgroundColor: "#f5c66b",
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 6,
    fontFamily: "Helvetica-Bold",
  },

  // ================= CONTENU PRINCIPAL (73%) =================
  main: {
    width: "73%",
    paddingHorizontal: 20,
    flexDirection: "column",
  },

  header: {
    marginBottom: 13,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: colors.accent,
  },
  name: {
    fontSize: 19,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    letterSpacing: 0.7,
    lineHeight: 1.12,
  },
  titleMain: {
    fontSize: 8.4,
    fontFamily: "Helvetica-Bold",
    color: colors.textMuted,
    marginTop: 4,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  bioText: {
    fontSize: 8.4,
    lineHeight: 1.5,
    color: colors.textSecondary,
    marginBottom: 12,
    padding: 9,
    backgroundColor: colors.highlight,
    borderRadius: 0,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    textAlign: "justify",
  },

  // ================= TITRES DE SECTION - ALIGNÉS À GAUCHE =================
  mainSectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    textAlign: "left",
    letterSpacing: 0.2,
    marginTop: 13,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    width: "100%",
  },

  // ================= EXPÉRIENCES - ALIGNÉES À GAUCHE =================
  expContainer: {
    width: "100%",
    marginBottom: 2,
  },
  expItem: {
    marginBottom: 8,
    paddingBottom: 7,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
    width: "100%",
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    width: "100%",
  },
  expTitleGroup: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  expRole: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    lineHeight: 1.2,
    marginBottom: 1,
    textAlign: "left",
  },
  expCompany: {
    fontSize: 8,
    color: colors.accentDark,
    fontFamily: "Helvetica-Bold",
    textAlign: "left",
  },
  expPeriod: {
    fontSize: 7,
    color: colors.textMuted,
    fontFamily: "Helvetica-Bold",
    textAlign: "right",
    marginLeft: 8,
    width: 80,
    flexShrink: 0,
    flexGrow: 0,
    wrap: false,
  },
  expSub: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Oblique",
    color: colors.textMuted,
    marginBottom: 4,
    textAlign: "justify",
    width: "100%",
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
    alignItems: "flex-start",
    width: "100%",
  },
  bulletDot: {
    fontSize: 7.5,
    color: colors.accentDark,
    marginRight: 4,
    marginTop: 0.5,
    width: 8,
    textAlign: "left",
  },
  bulletText: {
    fontSize: 8,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: 1.35,
    textAlign: "justify",
  },
  stackRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    gap: 3,
  },
  stackTag: {
    fontSize: 6.4,
    color: colors.secondary,
    backgroundColor: colors.highlight,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 1.5,
    fontFamily: "Helvetica-Bold",
    borderWidth: 0.5,
    borderColor: colors.border,
  },

  // ================= PROJETS - ALIGNÉS À GAUCHE =================
  projContainer: {
    width: "100%",
    marginTop: 4,
  },
  projectCategoryTitle: {
    fontSize: 7.2,
    fontFamily: "Helvetica-Bold",
    color: colors.accentDark,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 5,
    marginBottom: 4,
  },
  projItem: {
    marginBottom: 8,
    paddingBottom: 7,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
    width: "100%",
  },
  projHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    width: "100%",
  },
  projName: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    textAlign: "left",
    flex: 1,
  },
  projPeriod: {
    fontSize: 7,
    color: colors.textMuted,
    fontFamily: "Helvetica-Bold",
    textAlign: "right",
    marginLeft: 8,
    width: 80,
    flexShrink: 0,
    flexGrow: 0,
    wrap: false,
  },
  projDesc: {
    fontSize: 8,
    color: colors.textSecondary,
    lineHeight: 1.35,
    marginTop: 1,
    textAlign: "justify",
    width: "100%",
  },

  pageTwoProjects: {
    width: "100%",
    marginTop: "auto",
  },
});

const CVDocument = ({ lang = "fr", photoUrl = null }) => {
  const data = translations[lang] ?? translations.fr;
  const { hero, about, skills, experience, projects, cv } = data;
  // The CV highlights the ongoing role first, then follows reverse chronology.
  const experienceItems = [...(experience.items || [])].sort((a, b) => {
    const ongoing = (item) => /présent|present/i.test(item.period) ? 1 : 0;
    if (ongoing(a) !== ongoing(b)) return ongoing(b) - ongoing(a);
    return 0;
  });

  const keepWordsTogether = (text) => text.replace(/ /g, "\u00A0");

  // Sidebar Component réutilisable — fixed = répété automatiquement sur
  // chaque page générée par la pagination naturelle du flux principal.
  const Sidebar = () => (
    <View style={styles.sidebar} fixed>
      {/* Photo */}
      {photoUrl ? (
        <Image src={photoUrl} style={styles.profileImage} />
      ) : (
        <View style={styles.profileImagePlaceholder}>
          <Text style={styles.placeholderText}>FN</Text>
        </View>
      )}

      <View style={styles.decorativeLine} />

      {/* Contact */}
      <Text style={styles.sidebarSectionTitle}>Contact</Text>
      
      <View style={styles.contactItem}>
        <Text style={styles.contactIcon}>LOC</Text>
        <Text style={styles.contactText}>{contactInfo.location}</Text>
      </View>
      
      <View style={styles.contactItem}>
        <Text style={styles.contactIcon}>TEL</Text>
        <Text style={styles.contactText}>{contactInfo.phone1}</Text>
      </View>
      
      <View style={styles.contactItem}>
        <Text style={styles.contactIcon}>@</Text>
        <Text style={styles.contactText}>{contactInfo.email}</Text>
      </View>
      
      <View style={styles.contactItem}>
        <Text style={styles.contactIcon}>WEB</Text>
        <Link src={contactInfo.portfolioUrl} style={styles.contactLink}>
          <Text style={styles.contactText}>{contactInfo.portfolio}</Text>
        </Link>
      </View>
      
      <View style={styles.contactItem}>
        <Text style={styles.contactIcon}>GIT</Text>
        <Link src={contactInfo.githubUrl} style={styles.contactLink}>
          <Text style={styles.contactText}>{contactInfo.github}</Text>
        </Link>
      </View>

      {/* Formations */}
      <Text style={styles.sidebarSectionTitle}>{cv.education}</Text>
      {cv.educationItems?.map((e, i) => (
        <View key={i} style={styles.eduItem}>
          <Text style={styles.eduDegree}>{e.title}</Text>
          <Text style={styles.eduSchool}>{e.school}</Text>
          <Text style={styles.eduPeriod}>{e.period}</Text>
        </View>
      ))}

      {/* Compétences */}
      <Text style={styles.sidebarSectionTitle}>{cv.skills}</Text>
      {skills.categories?.map((cat, i) => (
        <View key={i}>
          <Text style={styles.skillCategoryTitle}>{cat.title}</Text>
          <View style={styles.skillTags}>
            {cat.items.map((item, idx) => (
              <Text key={idx} style={styles.skillTag}>{item}</Text>
            ))}
          </View>
        </View>
      ))}

      {/* Langues */}
      <Text style={styles.sidebarSectionTitle}>{cv.languages}</Text>
      <View style={styles.langRow}>
        <Text style={styles.langLabel}>{cv.french}</Text>
        <Text style={styles.langLevel}>{lang === "fr" ? "Courant" : "Fluent"}</Text>
      </View>
      <View style={styles.langRow}>
        <Text style={styles.langLabel}>{cv.english}</Text>
        <Text style={styles.langLevel}>{lang === "fr" ? "Technique" : "Technical"}</Text>
      </View>
      <View style={styles.langRow}>
        <Text style={styles.langLabel}>Malagasy</Text>
        <Text style={styles.langLevel}>{lang === "fr" ? "Natif" : "Native"}</Text>
      </View>

      {/* Intérêts */}
      <Text style={styles.sidebarSectionTitle}>{lang === "fr" ? "Centres d'intérêt" : "Interests"}</Text>
      <View style={styles.skillTags}>
        <Text style={styles.skillTag}>Basketball</Text>
        <Text style={styles.skillTag}>Cinéma</Text>
        <Text style={styles.skillTag}>Design</Text>
        <Text style={styles.skillTag}>Lecture</Text>
        <Text style={styles.skillTag}>Voyages</Text>
      </View>
    </View>
  );

  // Composant Projects - ALIGNÉ À GAUCHE
  const Projects = ({ items }) => {
    const groups = items.reduce((result, project) => {
      const category = project.category || cv.projects;
      const currentGroup = result.find((group) => group.category === category);
      if (currentGroup) currentGroup.items.push(project);
      else result.push({ category, items: [project] });
      return result;
    }, []);

    return (
      <View style={styles.projContainer}>
        {items.length > 0 && (
          <>
            <Text style={styles.mainSectionTitle} wrap={false}>
              {keepWordsTogether(cv.projects)}
            </Text>
            {groups.map((group) => (
              <View key={group.category}>
                <Text style={styles.projectCategoryTitle}>{group.category}</Text>
                {group.items.map((p) => (
                  <View key={p.name} style={styles.projItem} wrap={false}>
                    <View style={styles.projHeader}>
                      <Text style={styles.projName}>{p.name}</Text>
                      <Text style={styles.projPeriod}>{p.period}</Text>
                    </View>
                    <Text style={styles.projDesc}>{p.desc}</Text>
                    <View style={styles.stackRow}>
                      {p.stack?.map((s, si) => (
                        <Text key={si} style={styles.stackTag}>{s}</Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </>
        )}
      </View>
    );
  };

  return (
    <Document
      title={`CV - ${hero.name}`}
      author={hero.name}
      subject={hero.title}
    >
      <Page size="A4" style={styles.page} wrap>
        <Sidebar />
        <View style={styles.main}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>{hero.name}</Text>
            <Text style={styles.titleMain}>{hero.title}</Text>
          </View>

          {/* Bio */}
          <Text style={styles.bioText}>{about.bio}</Text>

          {/* Expériences — toutes ensemble, la pagination se fait toute seule */}
          <Text style={styles.mainSectionTitle} wrap={false}>
            {keepWordsTogether(cv.experiences)}
          </Text>
          <View style={styles.expContainer}>
            {experienceItems.map((exp, i) => (
              <View key={i} style={styles.expItem} wrap={false}>
                <View style={styles.expHeader}>
                  <View style={styles.expTitleGroup}>
                    <Text style={styles.expRole}>{exp.title}</Text>
                    <Text style={styles.expCompany}>{exp.company}</Text>
                  </View>
                  <Text style={styles.expPeriod}>{exp.period}</Text>
                </View>
                {exp.desc && <Text style={styles.expSub}>{exp.desc}</Text>}

                {exp.bullets?.map((b, bi) => (
                  <View key={bi} style={styles.bulletRow}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>{b}</Text>
                  </View>
                ))}

                <View style={styles.stackRow}>
                  {exp.stack?.map((s, si) => (
                    <Text key={si} style={styles.stackTag}>{s}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Projets — tous ensemble, juste après les expériences */}
          <Projects items={projects.items || []} />
        </View>
      </Page>
    </Document>
  );
};

export default CVDocument;
