# AI Rules & Engineering Directives — meelTe Next.js Website

> **Repository:** `nextjs-website`  
> **Brand:** meelTe (Hyper-local Community Platform)  
> **Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, npm  
> **Companion Directives:** [`AGENTS.md`](./AGENTS.md), [`docs/target_customer.md`](./docs/target_customer.md), [`meelTe-context.md`](./meelTe-context.md), [`docs/Design.md`](./docs/Design.md)

---

## 1. The Golden Directive: Mandatory Context & Skills Protocol

### 1.1 Mandatory Context Reading (Before Skills)

> [!CAUTION]
> ### STRICT ENFORCEMENT: ZERO IMPLEMENTATION WITHOUT READING THE PROJECT CONTEXT DOCUMENTS
> Before proposing any changes, writing a single line of code, creating new files, or editing existing files, the AI **MUST ALWAYS read all four documents below in full**. No exceptions, no partial reads, no relying on memory from an earlier session.

| # | Document | Why it is mandatory |
| :--- | :--- | :--- |
| 1 | **Code Review Graph** (`.code-review-graph/graph.db`) | Current routes, components, architecture boundaries, dependencies, execution flows, and change impact analysis. Run `python -m code_review_graph status` to verify graph health. |
| 2 | **Prevent AI Slop** (`AVOID.md`) | UI/UX design anti-patterns: generic AI aesthetics, excessive cards, typography mistakes, decorative gradients, unnecessary animations, and visual clutter. Every visual decision must have a clear design purpose. |

**Required step:** read all six, then state which parts of the requested change they govern, before reading skills or touching code.

**Conflict rule:** if these documents disagree with each other or with the code, surface the conflict explicitly and resolve it deliberately. Never silently pick one, and never let "the website says it" override what the product actually does.

### 1.2 Mandatory Skills Protocol

> [!CAUTION]
> ### STRICT ENFORCEMENT: ZERO IMPLEMENTATION WITHOUT READING SKILLS
> Before proposing any changes, writing a single line of code, creating new files, or editing existing files, the AI **MUST ALWAYS load and read the applicable skill file(s) from `.agents/skills/` using `view_file`**.

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

### 1.3 Code Review Graph — Primary Codebase Intelligence

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
