# SANTATRINIAINA Feno Nasandratra — Portfolio

Bilingual (FR/EN) developer portfolio with an embedded PDF resume generator.

## Stack
- React 18 + Vite
- Tailwind CSS (dark "Tech Architect" theme — slate background, `#2b6cb0` electric blue accent)
- lucide-react (icons)
- @react-pdf/renderer (generates `CV_SANTATRINIAINA_FR.pdf` / `CV_SANTATRINIAINA_EN.pdf` on demand)

## Project structure
```
src/
  data/translations.js     # single source of truth for all bilingual content (UI + CV)
  components/CVDocument.jsx  # @react-pdf/renderer A4 resume, driven by translations.cv
  components/Portfolio.jsx   # full one-page site: nav, hero, about, skills, experience, projects, contact
  App.jsx
  main.jsx
  index.css
```

## How the i18n works
Everything — nav labels, hero text, experience bullet points, project descriptions, even the
PDF resume's section headers — comes from one object: `translations.fr` / `translations.en` in
`src/data/translations.js`. The `Portfolio` component holds `lang` state (`"fr" | "en"`,
default `"fr"`); flipping it re-renders the whole UI and regenerates the `CVDocument` PDF
content instantly, since `CVDocument` just reads `translations[lang]` too. Contact details
(email, phone, GitHub, etc.) live in a separate `contactInfo` export since they don't change
between languages.

## Run locally
```bash
npm install
npm run dev     
npm run build   
```

## Notes
- The `PDFDownloadLink` button (header + hero) renders a styled Tailwind button with a
  download icon and downloads the correctly-named, correctly-localized PDF for whichever
  language is currently active.
- `CVDocument`'s `StyleSheet.create({...})` uses fixed pt-based sizing tuned for clean A4
  output (single page, two-column projects/education block, tag-style stack chips).
- To extend with more languages, add a new key to `translations` (e.g. `mg` for Malagasy) and
  add it to the toggle logic in `Portfolio.jsx`.
