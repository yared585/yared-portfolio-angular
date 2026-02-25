# Yared Fesshaye — Portfolio

Real Angular 17 app with TypeScript, Angular Router, and component-based architecture.

---

## 🚀 Setup & Run

```bash
# 1. Install Node.js (v18 or higher)
#    Download from: https://nodejs.org

# 2. Install Angular CLI globally
npm install -g @angular/cli

# 3. Install project dependencies
cd yared-portfolio
npm install

# 4. Run dev server
ng serve

# 5. Open browser
#    http://localhost:4200
```

---

## 📁 Project Structure

```
yared-portfolio/
├── src/
│   ├── index.html               ← Entry HTML
│   ├── main.ts                  ← Bootstrap entry point
│   ├── styles.scss              ← Global styles & CSS variables
│   └── app/
│       ├── app.module.ts        ← NgModule (all declarations)
│       ├── app-routing.module.ts← RouterModule.forRoot(routes)
│       ├── app.component.ts     ← Root component (<router-outlet>)
│       ├── models/
│       │   └── portfolio.model.ts  ← TypeScript interfaces
│       ├── services/
│       │   └── portfolio.service.ts ← @Injectable data service
│       └── components/
│           ├── navbar/          ← Fixed nav, routerLinkActive
│           ├── home/            ← Hero landing page
│           ├── about/           ← Bio + details
│           ├── skills/          ← Tech cards grid
│           ├── experience/      ← Accordion job history
│           ├── education/       ← Degrees + certs
│           └── contact/         ← NgForm + two-way binding
├── angular.json                 ← Angular CLI config
├── tsconfig.json                ← TypeScript config
└── package.json                 ← Dependencies
```

---

## 🔧 Customize

Update your real contact info in:
- `src/app/components/contact/contact.component.html`
  - Replace `yared.fesshaye@email.com`
  - Replace `linkedin.com/in/yared-fesshaye`
  - Replace `github.com/yaredf`

Change brand color:
- `src/styles.scss` → `--teal: #0CB89E`

---

## 🏗️ Build for Production

```bash
ng build
# Output: dist/yared-portfolio/
# Deploy that folder to any static host (Netlify, Vercel, GitHub Pages)
```
