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

## What the pages may claim

Checked against Hydrapool `main` `f7674e4` (v2.6.0,
12 June 2026) and the public pages named in the docs.
Update the "current as of" line when you re-check.

- Hydrapool is unfinished, Foundation-supported,
  operator-run pool software. It is open, so people can
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
  still store. A miner can check arithmetic and look
  for their own work. Do not write that they can
  recompute or prove the whole payout from that export.
  Do not write "independently verify all share
  accounting."
- Template choice, accounting, and settlement are
  different controls. Stratum V2 and DATUM are not
  Hydrapool features on this site.
- Lightning and Ark are not shipped Hydrapool products.
  They belong, if at all, to P2Pool V2's unfinished
  market, described on p2poolv2.org.
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
