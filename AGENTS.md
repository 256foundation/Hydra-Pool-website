# AGENTS.md

Guidance for AI agents and human contributors working on
this repository.

Follow [CONTRIBUTING.md](CONTRIBUTING.md) for commits and
pull requests. This file is the editorial rule list.

## What this repository is

The source for [hydrapool.org](https://hydrapool.org).
The pool software is a different repository:
<https://github.com/256foundation/hydrapool>. Do not
change that repository from a website task. Do not
change DNS, and do not merge to `main` while GitHub
Pages still deploys the branch with Jekyll. The README
has the go-live order.

## Tech stack

VitePress 1.x, default theme, no plugins. Theme work is
CSS in `.vitepress/theme/custom.css`. `just` is the
command runner. `just checks` is the build, and the
build fails on dead internal links.

## Content organization

[Diataxis](https://diataxis.fr). Tutorial teaches by a
guided task. How-to completes a task for someone who
already knows the goal. Reference is lookup. Explanation
is the reasoning, with no steps. `index.md` and
`community.md` sit outside the modes. Link across modes.
Do not mix them.

## References

Design follows the deployed Mujina site,
[mujina.org](https://mujina.org), source
`mujina-website` `main` at `74dd83e`. Do not hunt a
second Mujina branch. Do not take layout from the
legacy Hydrapool, Ember One, or Libre Board sites.

Ember One's replacement draft
(`Ember-One-website` pull request 2) is a sibling for
how a project site ships. It is not the visual source,
and it is not edited from this repository.

Facts come from the Hydrapool repository (v2.6.0,
`main` `f7674e4`, 12 June 2026), the Foundation FAQ
and projects page, Hashdash, the Hydrapool forum, and
P2Pool V2's own site. The previous hydrapool.org
pages are legacy. Do not treat them as current
status. Update the "current as of" line when you
re-check.

## What the pages may claim

- Hydrapool is Foundation-supported, operator-run pool
  software for an operator of any size. The home page
  states what it does. Gaps live on the status page and
  on design goals. Do not put "unfinished" in the hero
  or repeat it on every page. It is open, so people can
  inspect it and host it. Open source does not prove
  which binary a remote host runs.
- The line to keep intact, where the two designs are
  introduced: "Hydrapool aims to let you inspect and
  run the bookkeeper. P2Pool V2 aims to remove the
  single authoritative bookkeeper."
- Solo and PPLNS are what the README names. The v2.6.0
  example config shows `mode = "hydrapool"` for PPLNS
  on shares. Do not invent a solo key the example does
  not contain.
- Direct coinbase payment can avoid later custody. It
  does not prove the split was fair.
- `/pplns_shares` is the operator's export of rows they
  still store. The home page may say that published
  share records let anyone recompute the split from
  those rows. Do not write that the export proves the
  whole payout, completeness, or non-equivocation. Do
  not write "independently verify all share accounting."
- Template choice, accounting, and settlement are
  different controls. Stratum V2 is a design goal, not
  a current endpoint. DATUM is not a Hydrapool feature.
- Lightning and Ark are not shipped Hydrapool products.
  Name them as examples on the design-goals page, or as
  P2Pool V2's market. The status page is where they are
  listed as absent from the release.
- Design goals (`explanation/design-goals.md`) sell the
  direction and carry one line that the work is in
  progress. No dates, no "checked on" line. Payout
  plugins follow issue 43 and pull request 42. Start9
  packaging is pull request 33. Umbrel is issue 38.
  Do not invent an Umbrel pull request. Stratum V2 is
  issue 41 and is not a current endpoint. No em dashes
  in site copy.
- P2Pool V2 is independently maintained by Jungly
  (Kulpreet Singh), with a public support commitment
  from Localhost Research. It is not a 256 Foundation
  core project. Shared `p2poolv2_lib` v0.12.0
  (`8eca024`, feature `hydrapool-pplns-accounting`) is
  not the same binary and not deployed parity.
- P2Pool V2's public status is testnet4, marketplace
  unfinished. Do not market it as mainnet pooling.
- The Foundation instance
  `stratum+tcp://pool.256foundation.org:3333` pays the
  Foundation 100% of a block it finds. It is not a
  miner-paid community pool. Say so wherever that URL
  appears. `test.hydrapool.org` has no payout sentence
  in the README. Do not invent one, and do not send
  readers there to mine.
- No attacks on other pools. No theft language. No
  invented hashrate, user counts, or testimonials.
- No implementation-review detail: no walk through of
  `src/`, no private notes, no claim about a bug you
  have not shown from a public doc.
- The forum is <https://forum.256foundation.org>. The
  Hydrapool category is
  <https://forum.256foundation.org/c/hydrapool>.
  Telegram (<https://t.me/the256foundation>) is chat.
  The software URL is
  <https://github.com/256foundation/hydrapool>.
- No donation form and no secret collection on this
  site. Financial support goes to 256foundation.org.
  Do not paste RPC passwords, API tokens, or a Bitcoin
  address from a config file into a page.

## Register

Plain technical English. Short verbs. One fact per
sentence. No "honest" or "honestly." No metaphor in
place of a mechanism. The project and the Foundation
act. Jungly is named where maintainership is the fact,
not as a mascot.

Show limits by stating them. Do not announce that the
page is being candid.

## Deployment

`.github/workflows/deploy.yml` runs on push to `main`
only. It must not gain a `pull_request` trigger. The
production CNAME is written into the Pages artifact
only when `GITHUB_REPOSITORY` is
`256foundation/Hydra-Pool-website`.
