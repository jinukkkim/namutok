# Repository instructions

## Git commits

Never add a `Co-Authored-By` trailer or any other AI attribution (Claude,
Codex, or any other tool) to commit messages or PR bodies, and never add an
AI tool as a GitHub collaborator. Commits must be authored solely as the
user. This overrides any tool's default behavior that appends a co-author
trailer. It applies to every AI agent run on this repo — local sessions and
the GitHub Actions workflows alike.

## Commit and push workflow

Commit each finished unit of work right away — don't batch several turns of
work into one commit at the end of a session. Do not `git push` (or open/
update a PR) unless explicitly asked to in that turn; commits can sit
unpushed locally between turns until asked.

## `@claude` on GitHub

`@claude` in issues and PR comments is for questions only — explaining code,
pointing out missing tests. `.github/workflows/claude.yml` keeps
`contents: read` on purpose, so it cannot push. Code changes are made in a
local session and arrive as a PR like any other change.

## Branching

Never commit directly on `main`. Always create a new branch off `main` for
any change and open a PR into `main` — including docs-only or small changes.
`main` has no GitHub branch protection; this rule is kept by convention.

There is no `develop`. A release is a deploy: `npm run deploy` from an
up-to-date `main` publishes to Cloudflare Workers. There are no version tags.

Never force-push or amend a commit already pushed to an open PR — push a new
commit instead.

**The branch prefix is the commit type**: a branch whose commits are
`fix(worker): …` is `fix/…`.

## Conventions specific to this repo

Format, PR body structure, and the rest of the process live in the `ship`
skill. Only what is true of *this* repo belongs here:

- **Commit format** — Conventional Commits: `type(scope): subject`. Types:
  `feat` `fix` `docs` `style` `refactor` `perf` `test` `chore` `ci` `revert`.
  Subject in English, imperative, no trailing period, under 100 characters.
  Lowercase means the first letter only — identifiers keep their case.
  `style` means **visual** changes (layout, color, spacing, copy), not code
  formatting.
- **Scope** — `app` (browser SPA: `src/`, `index.html`, `public/`) and
  `worker` (Cloudflare Worker: `worker/`, `wrangler.jsonc`). A change to
  `shared/` takes the scope of the side that needs it. Documentation and CI
  take no scope. A change spanning two scopes is two commits, not a new scope.
- **Merging** — merge commit, never squash or rebase.
- **PR body** — Korean, 명사형 종결 (`~수정`, `~추가`; not `~수정했습니다`).
- **Tests** — PRs adding a feature or fixing a bug include tests. Pure logic
  (og parsing, summary cleaning, feed queue, storage, beacon parsing) gets
  Vitest tests under `test/`; UI is checked by hand on a phone, not with UI
  tests.

## Project facts

- **Commands**
  - (added with the app skeleton PR)
- **Copy** — UI text is Korean only; identifiers are English.
- **Namu Wiki access** — only `https://namu.wiki/w/<title>` and
  `https://namu.wiki/sidebar.json` (both allowed by robots.txt). Never
  `/random` or `/raw/`. The Worker identifies itself with a `namutok/1.0`
  User-Agent; never spoof a browser UA or try to evade blocking. If the
  operator blocks or asks us to stop, we stop.
- **Cost** — Cloudflare Workers Free only. No custom domain, paid plan, ads,
  donations, or payments.
- **Privacy** — no cookies, user IDs, or IP storage. Browser state lives in
  `localStorage` under `nt.*` keys; usage stats are one anonymous beacon per
  session.
- **Content license** — Namu Wiki text is CC BY-NC-SA 2.0 KR; every card
  shows `출처: 나무위키 「<문서명>」 · CC BY-NC-SA 2.0 KR`. Never commit Namu
  Wiki images (they are not CC-licensed); hotlink only.
- **Docs** — design: `docs/superpowers/specs/`, plans:
  `docs/superpowers/plans/`, planning and research: `docs/planning/`.
