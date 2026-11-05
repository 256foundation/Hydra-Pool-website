# Where Hydrapool Is Today

Hydrapool is unfinished pool software. You can run an
operator's ledger with it now. You cannot yet point it at
a peer-validated sharechain and call that the same
product.

::: info Current as of November 2026
Checked against Hydrapool `main` at `f7674e4` (release
v2.6.0, 12 June 2026), the v2.6.0 release files, the
project README, and the public Foundation pages, on
5 November 2026. [Follow the work](#follow-the-work) is
where a later change shows up first.
:::

## What you can run now

The published software is an operator-run pool:

- AGPL-3.0, written in Rust. The crate asks for Rust
  1.88.
- Solo and PPLNS are both named in the README. The
  v2.6.0 example config sets `mode = "hydrapool"` for
  PPLNS on shares. That file does not show a separate
  solo key.
- Docker Compose is the documented way to start it.
  Release v2.6.0 attaches `docker-compose.yml` and
  `config-example.toml`.
- The same release publishes Linux binaries for x86_64
  and aarch64, a `.deb`, and an installer script.
  Changelog 2.5.3 says Windows and macOS builds were
  removed. The README still mentions them. Trust the
  release assets.
- Payouts can be coinbase outputs. Donation and operator
  fee are optional settings in the example. They are
  comments until you enable them.
- A share export, `/pplns_shares`, with optional time
  bounds. It is behind whatever API authentication the
  operator configured.
- Prometheus and Grafana dashboards for pool, user, and
  worker hashrate.
- A public Foundation instance at
  `pool.256foundation.org:3333`. It donates hashrate.
  It pays the Foundation. See [Public
  instances](/reference/public-instances).

Hydrapool 2.6.0 links `p2poolv2_lib` v0.12.0 (commit
`8eca024`) with `hydrapool-pplns-accounting`. That is
shared engineering inside an operator-run binary. It is
not a second deployed program. [Two
ledgers](/explanation/two-ledgers) keeps the distinction.

## What is not this product today

- A peer-validated sharechain. That is P2Pool V2's
  design. Its site says testnet4, and that the market
  is still being built.
- Lightning or Ark payouts. They appear in P2Pool V2's
  description of the market it is building. They are
  not Hydrapool features in the current README or
  release.
- Proof that a remote host runs this source, or that an
  export is the complete set of eligible work. [What a
  check can show](/explanation/what-a-check-can-show)
  says what the real checks are.
- A Stratum V2 listening port. The current docs do not
  describe one.
- Inter-instance pooling. The previous website listed
  talking to other Hydrapool instances, other payout
  schemes, and encrypted transport as longer-term
  goals. The v2.6.0 README does not describe them as
  current behavior. This page does not assign them a
  date.

## The public instance is a test, not a network

The software is something you can deploy. The host at
`pool.256foundation.org` is the Foundation's donation
instance. Treat it as a way to see a running server and
to give hashrate to the Foundation. Do not treat it as
the production payout pool for your machines.

The project does not publish adoption numbers on this
site, and this draft does not invent them.

## Follow the work

- [GitHub](https://github.com/256foundation/hydrapool):
  commits, releases, and issues. Code review belongs
  here.
- [Forum category](https://forum.256foundation.org/c/hydrapool):
  setup, configuration, and operating a pool.
- [P2Pool V2](https://p2poolv2.org/): status of the
  sharechain and the market. That site is the source
  for P2Pool V2's own claims.
