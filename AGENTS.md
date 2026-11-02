<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

- Next.js 16.4.3 + React 19.3.0. APIs differ from older versions — read `node_modules/next/dist/docs/` first.
- Keep the agent-rules block above; `next dev` re-adds it.
- App Router only (`src/app/`). `pages/` not used.
- Auth: `better-auth` + `@better-auth/mongo-adapter`. Needs `MONGODB_URI` (see `src/app/lib/auth.ts`).
- Studio data is fetched from `http://localhost:5000` (external backend), not MongoDB directly in pages.
- `components.json`: shadcn/ui config (`style: base-nova`, aliases in `src/components/ui`).
- Tailwind v4 (`@tailwindcss/turbopack`) configured in `next.config.ts` and `globals.css`.
- Experimental flags enabled: `agentFeedback: true`, `reactCompiler: true`. Don't disable without reason.
- Commands: `npm run dev`, `npm run build`, `npm run lint` (`eslint`).
- No `.env` file in repo; set `MONGODB_URI` locally if testing auth.
