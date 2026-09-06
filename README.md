# Yashraj Portfolio — React

Your portfolio, converted to a React + Vite project. The visual design is untouched — same CSS,
same layout, same neobrutalist look — it's just split into components and data files now.

## 1. Install and run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## 2. Add your assets

The original HTML referenced local images and a resume PDF. Vite serves anything in `public/`
at the site root, so drop your files in:

- `public/Images/` → `java.svg`, `python.svg`, `javascript.svg`, `html.svg`, `css.svg`,
  `github.svg`, `Lnct icon.png`
- `public/CV/Resume.pdf`

These paths already match what the components expect (`/Images/...`, `/CV/Resume.pdf`).

## 3. Project structure

```
src/
  main.jsx              entry point, imports the global CSS
  App.jsx               assembles every section in order
  style.css             your original stylesheet, unchanged
  responsive.css        your original breakpoints, unchanged
  components/
    Header.jsx
    Hero.jsx
    TechSlider.jsx       reusable — used twice, like in your original HTML
    About.jsx
    Certifications.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    GitHubActivity.jsx
    Now.jsx
    Contact.jsx
    Footer.jsx
  data/
    certifications.js
    skills.js            also holds the tech-slider list
    projects.js
    experience.js
    now.js
```

Certifications, skills, projects, experience, and the "Now" cards are now plain JS arrays in
`src/data/`. To add or edit an entry, edit the array — the component maps over it automatically,
so you don't need to touch JSX for content changes.

## 4. Contact form (EmailJS)

The form now uses the `@emailjs/browser` SDK the React way — a form ref, `emailjs.sendForm`, and
React state for the sending/success/error UI — instead of the old inline script.

Open `src/components/Contact.jsx` and fill in your own values:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'tJGcnrE2x6VvmO6T_'   // carried over from your original code
```

Get the service and template IDs from your EmailJS dashboard. Since the public key ends up in
client-side JS either way, this matches how it worked in your original HTML.

## 5. What changed from the original HTML

- Split one big `index.html` into components, one per section — same markup, same class names,
  so all your CSS keeps working with zero changes.
- Fixed one bit of invalid nesting: the "Download CV / Contact" buttons were sitting inside the
  `<h1>` tag in your original file. They're now siblings of it — same visual result, valid HTML.
- Repeated content (certifications, skills, projects, experience, "Now" cards, the tech-marquee
  words) moved into `src/data/*.js` arrays so the JSX stays readable and new entries are a
  one-line add.
- The contact form's EmailJS wiring is now idiomatic React (ref + state) instead of vanilla DOM
  `getElementById` calls.

Everything else — fonts, Font Awesome, the GitHub contribution chart, all your links — is carried
over as-is.
