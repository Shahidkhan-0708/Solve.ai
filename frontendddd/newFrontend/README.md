# SOLVE frontend

Next.js 16 App Router + React 19 + TypeScript. The chat interface is the entry point.

## Run

Node.js 20.9+ (Node 22 LTS recommended).

```bash
cd newFrontend
npm install
npm run dev
```

Open http://localhost:3000. For the production PWA:

```bash
npm run build
npm start
```

The production build also generates `public/sw.js` and public offline app shells. Serve the entire project through `next start`; copying `public/` alone is not a deployment. The service worker runs only in production on HTTPS or localhost. After its first successful installation, reload to check offline access. Updates require choosing **Workspace actions → Update and reload**.

The included `pnpm-lock.yaml` supports reproducible installation with `pnpm install --frozen-lockfile`. Runtime dependencies are Next.js, React, and React DOM; build dependencies are Tailwind/PostCSS and TypeScript.

## Scope and source gaps

The complete attached ZIP contains **one HTML screen**, **one 1600×1280 screenshot**, and **DESIGN.md**. The only exported screen is **Learning Workspace / Chat**. Its five states are First-use, Returning User, Text Entered, Attachment Menu, and Attachment Added.

No existing SOLVE chat implementation, `newFrontend`, or `AGENTS.md` was supplied or found in the available workspace. This is a new standalone project and leaves other projects unchanged.

Study, Plan, Knowledge Graph, Target Status, and Settings appear as navigation links in the export but have no corresponding designs. They lead to explicit **Design source missing** pages. They are not presented as exact Stitch implementations. The mobile layout is a responsive adaptation because there is no separate mobile export or screenshot.

The ZIP contains no local fonts or standalone image assets. Its referenced Inter fonts, Material Symbols, and logo/profile images were downloaded and bundled locally, with provenance in `docs/asset-provenance.json`. PWA icons are padded derivatives of that original logo. The export names JetBrains Mono but never loads it; the reference shows a serif fallback in code/metadata labels. That source behavior is preserved rather than introducing a different font.

## Working flows

- Chat submission by Enter or send button; Shift+Enter preserves newlines; IME composition is respected.
- Explicit demo AI replies and escaped, restricted Markdown rendering. No AI or authentication backend is connected.
- Browser-tab session history, search, reopening sessions, and New session.
- Supported local file selection (PDF, DOCX, JPG, JPEG, PNG, maximum 25 MB each), removal, sample attachments, and validated HTTP(S) links.
- Attachment menu arrow-key navigation and Escape dismissal.
- Desktop collapse/reopen; mobile drawer with focus containment and Escape dismissal.
- Dialogs with keyboard focus containment/restore, backdrop dismissal, and preferences.
- Exported feature-card details and all five demo states.
- Install action and platform-specific installation guidance. Voice recording and resource analysis are explicitly unavailable in this demo.

User messages are never inserted as HTML. History uses `sessionStorage` in the current tab, and file bytes are never uploaded or persisted. The service worker precaches a fixed list of public build artifacts using requests without credentials. Network HTML, RSC payloads, authenticated requests, API responses, and user uploads are never added to caches. Its offline HTML is produced at build time from static public pages. Revisit this boundary before integrating a real authenticated backend.

## Checks

```bash
npm run build
npm run typecheck
npm test
```

The worker runtime tests require the generated production worker, so run the build before `npm test`.

For browser verification on your machine, keep the production server running on localhost:

```bash
npx playwright install chromium
npm run test:browser
```

`SOLVE_TEST_URL` can override the localhost URL, but service-worker tests require HTTPS or localhost. The browser script verifies flows, mobile layout, safe rendering, the manifest, and an actual offline reload, and captures desktop screenshots at 1280×1024 CSS pixels / 1.25 device scale (1600×1280 image pixels). Native operating-system installation still needs a device test.

See `docs/design-inventory.json`, `docs/verification.md`, and `docs/precache-manifest.json` for source coverage and verification limits.
