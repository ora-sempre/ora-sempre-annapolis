# CRA → Vite Migration

This project was migrated from Create React App (`react-scripts`) to **Vite 8**
(Rolldown-based). It remains plain JavaScript (no TypeScript). All routes, styling,
and behavior are preserved — this was a tooling migration only.

## What changed

### Toolchain
- **Removed** `react-scripts` and CRA-only/unused deps: `@testing-library/*`
  (no tests existed), `web-vitals`, `@babel/plugin-proposal-private-property-in-object`,
  and `react-leaflet` (was never imported — only vanilla `leaflet`'s CSS is used).
- **Added** `vite`, `@vitejs/plugin-react`, `sass-embedded`, `vite-plugin-svgr`.
- **Bumped** `react`/`react-dom` → `^19.2`, `react-router-dom` → `^7` (v6 import
  paths are unchanged in v7 — non-breaking here), `firebase` → `^12` (modular SDK,
  the `initializeApp`/`getFirestore`/`getAnalytics`/`getAuth`/`onAuthStateChanged`
  API used is unchanged), `react-slick` → `^0.31` (adds React 19 peer support).
- `firebase-admin` (`^12.4.0`) left as-is — only used by the Node scripts in
  `src/scripts/`, not part of the app build.

### Scripts (`package.json`)
| Old (CRA)              | New (Vite)        |
| --------------------- | ----------------- |
| `react-scripts start` | `vite` (`dev`)    |
| `react-scripts build` | `vite build`      |
| `react-scripts test`  | _(removed — no tests)_ |
| `react-scripts eject` | _(removed)_       |
| —                     | `vite preview`    |

The package stays **CommonJS** (no `"type": "module"`) so the `require()`-based
firebase-admin scripts in `src/scripts/` keep working; the Vite config is named
`vite.config.mjs` so it loads as ESM.

### HTML entry
- `public/index.html` → project-root `index.html`. `%PUBLIC_URL%` removed (Vite
  serves `public/` at `/`), and `<script type="module" src="/src/index.jsx">` added.
- `favicon.ico`, `manifest.json`, `robots.txt` remain in `public/`.

### JSX in `.js` files
Vite/esbuild does not transform JSX inside `.js` files, so all 31 JSX-containing
files were renamed `.js` → `.jsx` (components, pages, and the entry `src/index.jsx`).
Pure-JS files keep `.js`: `Firebase.config.js`, `hooks/useAuthStatus.js`,
`scripts/*.js`. Extensionless imports resolve to `.jsx` automatically, so no import
specifiers needed editing.

### SVGs
CRA's `import { ReactComponent as X } from './x.svg'` → Vite's
`import X from './x.svg?react'` (via `vite-plugin-svgr`) in `layout/TopCTA.jsx`.
URL-style SVG imports (Navbar, Product, TechnologyProduct) are unchanged.

### SCSS
`@import "~slick-carousel/..."` had the webpack `~` prefix removed (Vite resolves
bare specifiers from `node_modules`).

## Environment variable rename (ACTION REQUIRED)

Vite only exposes variables prefixed with `VITE_`. Update your local `.env*` files
**and your hosting/CI environment variables** (e.g. Vercel/Netlify/Firebase Hosting):

| Old (CRA)                              | New (Vite)                          |
| -------------------------------------- | ----------------------------------- |
| `REACT_APP_FIREBASE_API_KEY`             | `VITE_FIREBASE_API_KEY`             |
| `REACT_APP_FIREBASE_AUTH_DOMAIN`         | `VITE_FIREBASE_AUTH_DOMAIN`         |
| `REACT_APP_FIREBASE_PROJECT_ID`          | `VITE_FIREBASE_PROJECT_ID`          |
| `REACT_APP_FIREBASE_STORAGE_BUCKET`      | `VITE_FIREBASE_STORAGE_BUCKET`      |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | `VITE_FIREBASE_MESSAGING_SENDER_ID` |
| `REACT_APP_FIREBASE_APP_ID`              | `VITE_FIREBASE_APP_ID`              |
| `REACT_APP_FIREBASE_MEASUREMENT_ID`      | `VITE_FIREBASE_MEASUREMENT_ID`      |

A `.env.example` documenting these keys has been added. No `.env*` files exist in the
repo (they are gitignored) — create `.env.local` from `.env.example` for local dev.

## Build output directory change (ACTION REQUIRED)

CRA emitted to **`build/`**; Vite emits to **`dist/`**. Update any deployment config
(hosting publish directory, CI artifact paths) from `build/` to `dist/`. Both are
gitignored.

## Vulnerability summary (`npm audit`)

| | Vulnerabilities |
| --- | --- |
| Before (CRA) | **85** (15 low, 28 moderate, 38 high, 4 critical) |
| After (Vite) | **8 moderate** |

The remaining 8 are all transitive (`uuid`) under **`firebase-admin`** (used only by
the dev-only scripts in `src/scripts/`, not the app). They cannot be fixed without a
breaking major bump of `firebase-admin` and have no impact on the shipped client app.

## Verification

- `npm install` — clean, no peer-dependency conflicts.
- `npm run build` — succeeds (111 modules; all images, the hero video, SVGs, and
  SCSS bundle correctly).
- `npm run preview` — production build serves (HTTP 200), favicon served from `public/`.
- `npm run dev` — boots on port 3000 (HTTP 200), JSX transforms, SCSS compiles.

## Follow-ups (optional, out of scope)

- **Sass `@import` deprecation:** the SCSS still uses `@import` for partials, which
  Dart Sass 3.0 will remove (build emits deprecation warnings only — nothing breaks).
  Migrating to `@use`/`@forward` is a separate refactor.
- **Dead code:** `src/components/ServicesSection.jsx` is imported nowhere and
  references missing assets (`arrow_forward.svg`, `website-images/treatments/1-4.png`,
  `bg-images/bg-waves.png`). It can be deleted or its assets restored.
- **`public/manifest.json`** references `logo192.png`/`logo512.png` that don't exist
  (CRA defaults) and `name`/`short_name` still say "Create React App Sample".
- **Bundle size:** the JS chunk is ~618 kB (mostly Firebase). Consider code-splitting
  if startup performance matters.
- **`firebase-admin`** is in `dependencies` but only used by dev scripts; could move
  to `devDependencies`.
- ESLint: CRA's `eslintConfig` was removed. A modern flat-config ESLint (React +
  hooks) can be added if desired; intentionally left out to avoid blocking the build.
