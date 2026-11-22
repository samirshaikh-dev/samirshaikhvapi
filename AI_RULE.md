# AI Rules & Engineering Directives — meelTe Next.js Website

> **Repository:** `nextjs-website`  
> **Brand:** meelTe (Hyper-local Community Platform)  
> **Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, npm  
> **Companion Directives:** [`AGENTS.md`](./AGENTS.md), [`docs/`](./docs) (all files), [`meelTe-context.md`](./meelTe-context.md), [`AVOID.md`](./AVOID.md)

---

## 1. The Golden Directive: Mandatory Context & Skills Protocol

### 1.1 Mandatory Context Reading (Before Skills)

> [!CAUTION]
> ### STRICT ENFORCEMENT: ZERO IMPLEMENTATION WITHOUT READING THE PROJECT CONTEXT DOCUMENTS
> Before proposing any changes, writing a single line of code, creating new files, or editing existing files, the AI **MUST ALWAYS read the documents below in full, plus every file in the `docs/` folder (see 1.3)**. No exceptions, no partial reads, no relying on memory from an earlier session.

| # | Document | Why it is mandatory |
| :--- | :--- | :--- |
| 1 | **Code Review Graph** (`.code-review-graph/graph.db`) | Current routes, components, architecture boundaries, dependencies, execution flows, and change impact analysis. Run `python -m code_review_graph status` to verify graph health. |
| 2 | **Prevent AI Slop** (`AVOID.md`) | UI/UX design anti-patterns: generic AI aesthetics, excessive cards, typography mistakes, decorative gradients, unnecessary animations, and visual clutter. Every visual decision must have a clear design purpose. |

**Required step:** read all of the above plus every file in `docs/` (see 1.3), then state which parts of the requested change they govern, before reading skills or touching code.

**Conflict rule:** if these documents disagree with each other or with the code, surface the conflict explicitly and resolve it deliberately. Never silently pick one, and never let "the website says it" override what the product actually does.

### 1.2 Mandatory Skills Protocol

> [!CAUTION]
> ### STRICT ENFORCEMENT: ZERO IMPLEMENTATION WITHOUT READING SKILLS
> Before proposing any changes, writing a single line of code, creating new files, or editing existing files, the AI **MUST ALWAYS load and read the applicable skill file(s) from `.agents/skills/` using `view_file`**.

### 1.3 Mandatory Docs Folder Reading

> [!CAUTION]
> ### STRICT ENFORCEMENT: ZERO IMPLEMENTATION WITHOUT READING ALL DOCS IN `docs/`
> Before proposing any changes, writing a single line of code, creating new files, or editing existing files, the AI **MUST read every document inside the [`docs/`](./docs) folder in full**. This includes, but is not limited to, `docs/DESIGN.MD`, `docs/SEO.MD`, `docs/FEEL.md`, and `docs/TARGET-CUSTOMER.md`. Treat this folder as a living source of truth: re-scan `docs/` for new or renamed files before each task, since the contents may expand over time.

### Skill & Agent Locations
- **Skills:** `.agents/skills/<skill-id>/SKILL.md` — 16 discipline skills (note the leading dot). OpenCode also discovers this path automatically.
- **OpenCode agents:** `.opencode/agents/<agent-id>.md` — V2 frontmatter (`description`, `mode`, `permissions`); the ID comes from the filename.
- **GitHub Copilot agents:** `.github/agents/<agent-id>.agent.md` — same six roles, keep in sync with the OpenCode copies.

### Primary Discipline Routing:
- **UI & Visual Design:** [`.agents/skills/ui-ux-engineer/SKILL.md`](./.agents/skills/ui-ux-engineer/SKILL.md) — Layout, color tokens, typography, bento grids, responsive aesthetics.
- **Frontend & Components:** [`.agents/skills/frontend-engineer/SKILL.md`](./.agents/skills/frontend-engineer/SKILL.md) — Next.js 16 App Router, React 19, Server vs. Client boundaries, zero CLS, interactive forms.
- **Accessible Animation & Motion Tiering:** [`.agents/skills/accessible-animation/SKILL.md`](./.agents/skills/accessible-animation/SKILL.md) — WCAG 2.3.3 / C39, `prefers-reduced-motion` tiering (Tier 1 vestibular removal, Tier 2 soften/fade, Tier 3 keep feedback).
- **AI Output Judgement & Quality Review:** [`.agents/skills/ai-output-judgement/SKILL.md`](./.agents/skills/ai-output-judgement/SKILL.md) — Anti-slop review rubric (tokens over arbitrary hex, native semantics, intentional layout, error/loading/empty states).
- **Technical SEO & AEO:** [`.agents/skills/seo-engineer/SKILL.md`](./.agents/skills/seo-engineer/SKILL.md) & [`.agents/skills/seo-strategy/SKILL.md`](./.agents/skills/seo-strategy/SKILL.md) — Schema.org JSON-LD, sitemaps, robots.txt, metadata, `llms.txt` for AI answer engines.
- **Accessibility:** [`.agents/skills/accessibility-engineer/SKILL.md`](./.agents/skills/accessibility-engineer/SKILL.md) — Semantic HTML, keyboard operability, color contrast, ARIA labels.
- **Performance:** [`.agents/skills/performance-engineer/SKILL.md`](./.agents/skills/performance-engineer/SKILL.md) — Core Web Vitals (LCP, CLS, INP), asset optimization, code splitting.

### 1.4 Code Review Graph — Primary Codebase Intelligence

Code Review Graph is the primary codebase intelligence tool for this project. See `code-review-install-guide.txt` for setup and usage.

Before making any change:
1. Inspect the existing codebase graph (`.code-review-graph/graph.db`).
2. Understand the architecture, modules, dependencies, and execution flows relevant to the task.
3. Identify affected components and dependencies before modifying files.
4. Use graph-based context to avoid unnecessary repository-wide exploration.

When making changes:
1. Consider the impact on dependent components.
2. Identify potentially affected tests.
3. Follow the existing architecture and coding conventions.
4. Avoid unnecessary refactoring.

After making changes:
1. Update the code graph if needed.
2. Analyze the change impact and potential regressions.
3. Report affected files, dependencies, and testing recommendations.

Do not assume the graph contains up-to-date information. Check its status when necessary.

---

## 2. Reuse Over Reinvention

> [!IMPORTANT]
> Do NOT write everything from scratch. Before implementing any feature, utility, or component, the AI **MUST first research** whether a free, open-source library or package already solves the problem.

### Required Order of Work

1. **Research first.** Check whether a suitable free, open-source library or package exists (search npm, the package registry, and the existing `package.json` dependencies).
2. **Prefer the existing dependency.** If the project already ships a package that does the job, use it instead of hand-rolling an equivalent.
3. **Only then implement.** If — and only if — no suitable library exists, or adding one would be a net negative (bundle size, maintenance, license, lock-in), implement it yourself.

### Selection Checklist

Before adopting a package, confirm it is:

- **Free & open-source** — permissive license (MIT, Apache-2.0, BSD, ISC) compatible with this project. No copyleft traps unless explicitly approved.
- **Actively maintained** — recent releases, no known unresolved critical CVEs.
- **Fit for the stack** — compatible with Next.js 16, React 19, Tailwind CSS v4, and the App Router.
- **Lightweight** — justify the bundle/dependency cost against the value it provides.

### Red Flags

- Reimplementing something a well-known package already does.
- Adding a heavy dependency for a trivial one-liner utility.
- Introducing a new library when the project already has one that fits.

When a library is chosen, record the reason briefly (what it replaces, why it beats a hand-rolled version, license confirmed).

---

## 3. Design Inspiration Source

> [!IMPORTANT]
> Use [`design-reference-link.txt`](./design-reference-link.txt) as the primary source for UI inspiration and design direction before designing or building any new page, section, or component.

### How to Use

1. **Consult first.** Before producing a visual design or layout, review the references in `design-reference-link.txt` (UI trends, galleries, typography, motion, pricing/plan pages, portfolio patterns).
2. **Translate, don't copy.** Adapt patterns, spacing, hierarchy, and typography from the references to fit meelTe's brand, audience, and existing design system.
3. **Stay consistent.** New work must still obey `docs/Design.md`, `AVOID.md`, and the existing color/typography tokens — the references are inspiration, not a replacement for the project's design rules.
4. **Keep the list fresh.** When a strong new reference is found, add it to `design-reference-link.txt` with a one-line note on why it's useful.

---

## 4. Rich Graphics, Motion & Smoothness

> [!IMPORTANT]
> Prefer rich, high-quality graphics and motion. Use established libraries for graphics, animation, transitions, and smooth scrolling/rendering as much as possible rather than hand-rolling effects.

### Preferred Libraries

- **Motion / animation:** Framer Motion (`motion`), GSAP (+ ScrollTrigger).
- **Smooth scrolling:** Lenis (`@studio-freight/lenis` / `lenis`).
- **3D / graphics:** Three.js via React Three Fiber (`@react-three/fiber`, `@react-three/drei`).
- **Transitions / page & view transitions:** View Transitions API + a library fallback; `framer-motion` `AnimatePresence`.

Choose the lightest library that delivers the effect (see Section 2). Reuse what's already in `package.json` before adding new dependencies.

### Guardrails (mandatory)

- **Honor `prefers-reduced-motion`** — follow `.agents/skills/accessible-animation/SKILL.md` tiering (Tier 1 remove vestibular motion, Tier 2 soften/fade, Tier 3 keep feedback). Never ignore reduced-motion users.
- **No slop motion** — every animation must have a clear purpose and obey `AVOID.md` (no decorative gradients, gratuitous looping animations, or visual clutter).
- **Performance first** — animate `transform`/`opacity` only, avoid layout thrash, respect Core Web Vitals (LCP, CLS, INP). Lazy-load heavy 3D/graphics so they never block first paint.
- **Graceful fallback** — content must remain usable if JS or WebGL is unavailable.

---
