# Potifolo Website — Idowu Elijah Portfolio

Premium full-stack developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Live stack

- **Framework:** Next.js 16 (App Router)
- **UI:** Tailwind CSS v4, shadcn-style components
- **Deploy:** [Vercel](https://vercel.com) (recommended)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import this repo in [Vercel](https://vercel.com/new).
2. Framework preset: **Next.js** (defaults are fine).
3. Deploy.

## Project structure

- `src/app/` — pages and routes
- `src/components/` — UI and sections
- `src/data/` — site content (projects, services, testimonials)
- `public/` — images and static assets

## Customize

- Profile & copy: `src/data/site.ts`
- Projects: `src/data/projects.ts`
- Profile photo: `public/profile/idowu.png`
- Chat answers: `src/lib/chat-assistant.ts`

## Auto-sync to GitHub

**Option A — Cursor (recommended):** This repo includes `.cursor/hooks.json`. After each Agent session ends, changes are committed and pushed to GitHub automatically. Restart Cursor once if hooks do not run.

**Option B — Manual:** Run `npm run sync` to commit and push all changes.

**Option C — After every git commit:** One-time setup:

```bash
git config core.hooksPath .githooks
```

Then any `git commit` also runs `git push`.

## Portfolio chat assistant

The floating chat button uses `/api/chat` with smart answers about services, pricing, timeline, and hiring — no API keys required. Works on Vercel out of the box.
