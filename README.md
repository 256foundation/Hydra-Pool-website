# hydrapool.org

The source for [hydrapool.org](https://hydrapool.org), the
website of Hydrapool, the 256 Foundation's open source
Bitcoin mining pool software. The site is built with
[VitePress](https://vitepress.dev). The code for the pool itself lives
at <https://github.com/256foundation/hydrapool>.

This tree is a draft. `main` still serves the previous
Jekyll site. Do not merge it until the go-live note
below is done.

## Run the site locally

You need Node.js and [just](https://just.systems/).

```
just install   # npm install
just dev       # dev server with hot reload
```

Run `just` with no arguments to list the other recipes.
Run `just checks` before you open a pull request. It
builds the site and fails on dead internal links.

## Where things are

Pages are markdown, organized by
[Diataxis](https://diataxis.fr): `tutorial/`, `howto/`,
`reference/`, `explanation/`. `index.md` is the landing
page. `community.md` sits outside the modes.

- Nav and sidebar: `.vitepress/config.mts`.
- Theme: CSS-only overrides in `.vitepress/theme/custom.css`.
- Images and other static assets: `public/`.

[AGENTS.md](AGENTS.md) is the content rule list: what
the pages may say about payouts, the public instance,
and P2Pool V2.

## Go-live

Out of scope for the draft pull request. GitHub Pages
for this repository is **Deploy from a branch**
(`main`, folder `/`), with custom domain
`hydrapool.org`. A merge while that setting stands
would Jekyll-publish this tree and replace the live
site.

Do these together, and not before a human has accepted
the draft:

1. In the repository Pages settings, set the source to
   **GitHub Actions**.
2. Merge the pull request to `main`.

The workflow is not on `main` until that merge, so the
two steps belong in one sitting. The merge push builds
with base `/`, writes `hydrapool.org` into the Pages
artifact, and deploys. DNS and the Pages domain are
untouched. Fork builds use base `/<repo-name>/` and
write no CNAME, so a fork cannot take the domain.

The workflow does not run on pull requests. Pushing the
draft branch does not deploy.

## Design reference

The visual reference is the deployed Mujina site,
[mujina.org](https://mujina.org). Its source is
`256foundation/mujina-website` `main` at
`74dd83e3178d91e2abd746c0c1724c3cffaab8ac`
(26 September 2026). That is the site this draft
follows: VitePress, Diataxis, the text face, the
PCB-grid hero, and the Foundation footer.

The live Hydrapool, Ember One, and Libre Board sites
are legacy. They are not the visual target, and they
are not sources for current project status.

Ember One's replacement draft is
[Ember-One-website pull request 2](https://github.com/256foundation/Ember-One-website/pull/2),
branch `cursor/vitepress-emberone-site-7761`. It was
used for the same Pages go-live caution as this
draft. It is not a substitute for mujina.org, and the
live emberone.org site was not used.
