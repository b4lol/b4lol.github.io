# TELYRA Studio Cinema Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the official TELYRA website into "Studio Cinema" style (Apple TV & Infuse caliber, deep OLED dark tones, 4K TV mockup centerpiece, zero marketing superlatives, pure engineering facts, direct APK downloads).

**Architecture:** A lightweight React 19 + TypeScript + SSR pre-rendered architecture in Vite 8.3. Unified design system in `telyra.css`, structured multilingual factual data in `telyraData.ts`, decoupled presentation components (Navbar, Hero, TvMockupShowcase, FeatureGrid, TechnicalSpecsSection, LicensePortalSection, DownloadSection, PrivacySection, Footer).

**Tech Stack:** React 19, TypeScript 7.0, Vite 8.3, Oxlint, Node.js SSR Prerender.

**Spec:** `docs/superpowers/specs/2026-10-23-telyra-website-studio-cinema-design.md`

## Global Constraints

- Zero emojis across all code, text, icons, comments, and commits.
- Zero "open source", "açık kaynak", "FOSS" mentions.
- Zero marketing superlatives or ungrounded claims (no "%100", "rakipsiz", "devrimsel", "Model D").
- Visual identity: Deep OLED black (`#050608`), Obsidian (`#090a0f`), Titanium borders (`rgba(255, 255, 255, 0.08)`), subtle glass cards.
- Accurate technical data: <45MB heap budget, 6 universal sources (M3U, Xtream, Stalker/MAG, Jellyfin, Plex, Stremio HTTPS), Media3 & LibVLC dual player, AndroidKeyStore AES-256 StrongBox.
- Live Cloudflare Worker license check (`https://license.b4.lol/api/v1/license/check`).
- Accurate release APK metadata for v1.1.0 (`app-tv-release.apk` 85.6 MB and `app-mobile-release.apk` 178.9 MB with exact SHA-256 hashes).

## Review Focus

1. Clipboard copy fallback: When `navigator.clipboard.writeText` fails or is denied (e.g. in restricted webviews), the UI must still handle the event smoothly with fallback feedback.
2. License check API resilience: When `license.b4.lol` returns 404, 403, 429, or network fails, display clear, dignified status messages without crashing.
3. TV mockup aspect ratio and stability: The 4K TV mockup must maintain strict 16:9 ratio across all screen sizes without layout shift (CLS 0).
4. Responsive mobile scaling: The TV frame and technical matrices must scale down fluidly on small screens (<640px) without horizontal scrolling.
5. SSR Prerender integrity: `npm run build` must cleanly generate static HTML for `/telyra` and `/telyra/privacy` with zero runtime hydration errors.

---

### Task 1: Verification Suite & Standards Gate

**Files:**
- Create: `scripts/verify-telyra-standards.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: Files inside `src/telyra/` and `docs/superpowers/`
- Produces: CLI verification script returning exit code 0 if all rules pass, 1 if any emoji, banned word, or unapproved term is found.

- [ ] **Step 1: Write verification script `scripts/verify-telyra-standards.mjs`**

Implement regex scanning for emojis (`/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u`), banned phrases (`open source`, `açık kaynak`, `foss`), and forbidden marketing superlatives (`%100`, `rakipsiz`, `devrimsel`).

- [ ] **Step 2: Add `verify` script to `package.json`**

Add `"verify:telyra": "node scripts/verify-telyra-standards.mjs"` to `package.json`.

- [ ] **Step 3: Run verification script to check baseline**

Run: `node scripts/verify-telyra-standards.mjs`
Expected: Outputs scan results for existing codebase.

- [ ] **Step 4: Commit**

```bash
git add scripts/verify-telyra-standards.mjs package.json
git commit -m "chore: add TELYRA standards and zero-emoji verification gate"
```

---

### Task 2: Multilingual Factual Data Dictionary (`telyraData.ts`)

**Files:**
- Modify: `src/telyra/data/telyraData.ts`

**Interfaces:**
- Consumes: Design spec definitions for The Four Pillars, Hardware Matrix, v1.1.0 release details.
- Produces: `TELYRA_CONTENT` object with complete `tr` and `en` structures adhering to the factual, dignified tone.

- [ ] **Step 1: Update TypeScript interfaces in `telyraData.ts`**

Update `FeatureItem`, `DownloadItem`, `HudTelemetryPreset`, and replace `ComparisonRow` with `TechnicalSpecGroup` / `CodecSpecRow`.

- [ ] **Step 2: Overhaul Turkish (`tr`) content dictionary**

Write pure engineering facts:
- Headline: "Televizyon deneyimi, kusursuzlaştırıldı."
- 4 Pillars: 60 FPS Kararlı Arayüz (<45MB bellek bütçesi), Evrensel Medya Entegrasyonu (6 protokol), Çift Çekirdekli Oynatıcı Motoru (Media3 ExoPlayer & LibVLC), Donanımsal Kriptografik İzolasyon (AndroidKeyStore StrongBox AES-256).
- Technical Specs: Amlogic, MediaTek Pentonic, Realtek çipsetleri; HEVC, AV1, VP9, MPEG-TS, Passthrough Dolby Atmos / TrueHD / DTS-HD.
- Downloads: v1.1.0 metadata, SHA-256 hashes, Downloader talimatları.
- Legal & Privacy: 5846 FSEK ve uluslararası telif hakları uyum beyanı.

- [ ] **Step 3: Overhaul English (`en`) content dictionary**

Write exact counterpart in dignified, understated English:
- Headline: "The television experience, perfected."
- Subtitle: "Purpose-built, hardware-accelerated independent IPTV and media client for Android TV and Google TV. Zero telemetry, zero ads, zero compromise."
- Counterparts for 4 Pillars, Technical Matrix, Downloads, and Legal disclaimers.

- [ ] **Step 4: Verify standards and TypeScript types**

Run: `npm run typecheck && node scripts/verify-telyra-standards.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit**

```bash
git add src/telyra/data/telyraData.ts
git commit -m "feat(telyra): rewrite multilingual content dictionary to Studio Cinema standard"
```

---

### Task 3: Studio Cinema Design Tokens & Stylesheet Overhaul (`telyra.css`)

**Files:**
- Modify: `src/telyra/styles/telyra.css`

**Interfaces:**
- Consumes: Apple TV / Infuse color palette, typography tokens, TV bezel styling.
- Produces: Clean, modern, responsive CSS rules for all TELYRA sections without neon or cyberpunk bloat.

- [ ] **Step 1: Overhaul `:root` variables and typography in `telyra.css`**

Define `--telyra-bg: #050608`, `--telyra-surface: #090a0f`, `--telyra-surface-raised: #11131a`, `--telyra-border: rgba(255, 255, 255, 0.08)`, `--telyra-border-subtle: rgba(255, 255, 255, 0.04)`, `--telyra-text: #f5f5f7`, `--telyra-text-muted: #86868b`, `--telyra-accent-blue: #2997ff`.

- [ ] **Step 2: Add 4K TV bezel, screen glare, and stand styles**

Implement `.telyra-tv-bezel`, `.telyra-tv-screen`, `.telyra-tv-stand`, `.telyra-tv-shadow` with authentic 16:9 ratio, subtle bevel borders, and D-Pad focus styling.

- [ ] **Step 3: Add Four Pillars and Hardware Matrix styles**

Implement `.telyra-pillars-grid`, `.telyra-pillar-card`, `.telyra-spec-table`, `.telyra-spec-chip` with refined titanium borders and subtle hover glass effects.

- [ ] **Step 4: Add Direct Downloads and License Portal styles**

Implement `.telyra-download-grid`, `.telyra-apk-card`, `.telyra-hash-box`, `.telyra-license-card` with high-contrast text and crisp buttons.

- [ ] **Step 5: Verify CSS build and lint**

Run: `npm run lint`
Expected: PASS with 0 errors.

- [ ] **Step 6: Commit**

```bash
git add src/telyra/styles/telyra.css
git commit -m "style(telyra): implement Studio Cinema design system and TV frame styling"
```

---

### Task 4: Hero & 4K Cinema TV Mockup Centerpiece

**Files:**
- Modify: `src/telyra/components/HeroSection.tsx`
- Modify: `src/telyra/components/TvMockupShowcase.tsx`

**Interfaces:**
- Consumes: `TELYRA_CONTENT[lang].hero`, `TELYRA_CONTENT[lang].mockup`, icons from `TelyraIcons.tsx`.
- Produces: Integrated Hero and 4K TV Mockup showcasing real UI screens (Live TV, EPG Guide, Movies, Sources).

- [ ] **Step 1: Refactor `HeroSection.tsx`**

Implement dignified headline, release status pill, primary download action, Downloader quick-copy code with clipboard error fallback.

- [ ] **Step 2: Refactor `TvMockupShowcase.tsx`**

Implement 4K OLED TV frame mockup with realistic bezel and stand:
- Top status bar: 10-foot navigation tabs (Canlı TV, EPG Rehberi, Filmler, Kaynaklar).
- Screen preview: High-resolution screenshots (`tv-home.webp`, `tv-live.webp`, etc.) with HUD telemetries (Direct Stream 1080p50, Media3 ExoPlayer, AES-256 StrongBox active).
- Interactive tab switching with keyboard and mouse support.

- [ ] **Step 3: Run typecheck and verify standards**

Run: `npm run typecheck && node scripts/verify-telyra-standards.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/telyra/components/HeroSection.tsx src/telyra/components/TvMockupShowcase.tsx
git commit -m "feat(telyra): build Studio Cinema hero and 4K OLED TV showcase centerpiece"
```

---

### Task 5: The Four Engineering Pillars & Technical Specs Matrix

**Files:**
- Modify: `src/telyra/components/FeatureGrid.tsx`
- Rename/Modify: `src/telyra/components/ComparisonMatrix.tsx` -> `src/telyra/components/TechnicalSpecsSection.tsx`

**Interfaces:**
- Consumes: `TELYRA_CONTENT[lang].pillars`, `TELYRA_CONTENT[lang].specs`.
- Produces: 4 solid engineering cards and factual chipset & codec compatibility matrix.

- [ ] **Step 1: Refactor `FeatureGrid.tsx` for The Four Pillars**

Render the 4 engineering pillars (Memory & 60 FPS, Universal Sources, Dual-Core Player, Hardware Isolation) with clean tags and structured bullet points.

- [ ] **Step 2: Create `TechnicalSpecsSection.tsx`**

Replace the old competitor comparison table with the Chipset & Format Compatibility Matrix:
- Chipsets: Amlogic (S905X4, S928X), MediaTek (Pentonic 700/1000), Realtek RTD1619B, Google TV Streamer, Fire TV Cube 3rd Gen.
- Video: H.264/AVC, H.265/HEVC Main 10, AV1, VP9 Profile 2, MPEG-2 TS.
- Audio & Passthrough: Dolby Digital Plus with Atmos, Dolby TrueHD, DTS-HD Master Audio, AAC, FLAC.

- [ ] **Step 3: Run typecheck and verify standards**

Run: `npm run typecheck && node scripts/verify-telyra-standards.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/telyra/components/FeatureGrid.tsx src/telyra/components/TechnicalSpecsSection.tsx src/telyra/components/ComparisonMatrix.tsx
git commit -m "feat(telyra): implement Four Pillars and Hardware Compatibility Matrix"
```

---

### Task 6: Direct Downloads Hub & License Portal

**Files:**
- Modify: `src/telyra/components/DownloadSection.tsx`
- Modify: `src/telyra/components/LicensePortalSection.tsx`

**Interfaces:**
- Consumes: `TELYRA_CONTENT[lang].downloads`, Cloudflare Worker `https://license.b4.lol/api/v1/license/check`.
- Produces: High-contrast direct APK download cards with SHA-256 copy and refined license verification portal.

- [ ] **Step 1: Refactor `DownloadSection.tsx`**

Render TV APK card (`app-tv-release.apk`, 85.6 MB) and Mobile APK card (`app-mobile-release.apk`, 178.9 MB):
- Verified download link to `https://github.com/b4lol/telyra-releases/releases/download/v1.1.0/...`.
- One-click copy for SHA-256 checksum with fallback.
- 3-step Downloader instructions for Fire TV / Google TV.

- [ ] **Step 2: Refactor `LicensePortalSection.tsx`**

Style with Studio Cinema dark titanium container:
- Input form for license key (auto-formatting uppercase).
- Resilience for all error codes (404 Not Found, 403 Revoked, 429 Rate Limit, Offline).
- Displays Plan, Expiry Date, and Server Time upon verification.

- [ ] **Step 3: Run typecheck and verify standards**

Run: `npm run typecheck && node scripts/verify-telyra-standards.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/telyra/components/DownloadSection.tsx src/telyra/components/LicensePortalSection.tsx
git commit -m "feat(telyra): refactor Direct Downloads Hub and License Portal to Studio Cinema"
```

---

### Task 7: Navigation, Privacy Section, Footer & App Orchestration

**Files:**
- Modify: `src/telyra/components/TelyraNavbar.tsx`
- Modify: `src/telyra/components/PrivacySection.tsx`
- Modify: `src/telyra/components/TelyraFooter.tsx`
- Modify: `src/telyra/TelyraApp.tsx`

**Interfaces:**
- Consumes: All sections, language state, privacy modal toggle.
- Produces: Clean, coherent root page without cyber glows or neon auras.

- [ ] **Step 1: Refactor `TelyraNavbar.tsx`**

Minimal dark bar with subtle border, 5 section jump links, language toggle button (TR / EN), and direct APK download button.

- [ ] **Step 2: Refactor `PrivacySection.tsx` and `TelyraFooter.tsx`**

Dignified legal statement clarifying independent player status, copyright compliance, and zero content hosting. Clean footer with legal modal trigger.

- [ ] **Step 3: Update `TelyraApp.tsx`**

Remove `.telyra-aura` divs, assemble the updated components in exact 8-part sequence: Navbar, Hero + TV Showcase, Four Pillars, Technical Specs, License Portal, Downloads Hub, Legal & Privacy, Footer.

- [ ] **Step 4: Run typecheck and verify standards**

Run: `npm run typecheck && node scripts/verify-telyra-standards.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit**

```bash
git add src/telyra/components/TelyraNavbar.tsx src/telyra/components/PrivacySection.tsx src/telyra/components/TelyraFooter.tsx src/telyra/TelyraApp.tsx
git commit -m "feat(telyra): assemble Studio Cinema root application and clean navigation"
```

---

### Task 8: End-to-End Build, SSR Prerender & Quality Verification

**Files:**
- Test / Verify all touched files in `src/telyra/`

**Interfaces:**
- Consumes: Entire portfolio codebase.
- Produces: Production build in `dist/` with valid SSR prerendered HTML files.

- [ ] **Step 1: Run comprehensive standards verification**

Run: `node scripts/verify-telyra-standards.mjs`
Expected: PASS (0 emojis, 0 banned phrases, 0 superlatives).

- [ ] **Step 2: Run linter and typechecker**

Run: `npm run lint && npm run typecheck`
Expected: PASS with 0 warnings or errors.

- [ ] **Step 3: Run full production build with SSR prerendering**

Run: `npm run build`
Expected: Both client build, SSR build, and `prerender.mjs` succeed, producing `dist/telyra/index.html` and `dist/telyra/privacy/index.html`.

- [ ] **Step 4: Final verification commit and push to origin**

```bash
git add .
git commit -m "build(telyra): complete Studio Cinema website redesign and verify SSR build"
git push origin main
```
