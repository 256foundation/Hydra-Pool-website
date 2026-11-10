# Design goals

Hydrapool pays from the block, with PPLNS, today. The
work in progress is a platform: the operator chooses how
miners get paid, and a developer can add a new method.

## Payout plugins

Swap the accounting and the payout method. Write it as a
plugin. Turn it on in the pool you already run.

Today's PPLNS payout moves into a plugin. A score-based
PPLNS plugin is the planned default, so the pool you run
now stays the normal path, and new methods sit beside it.

A developer could build Ark, ecash, Lightning, or a custom
split. Those are examples of what the interface is for.

The shape of that interface, from the open design:

- An independent Rust crate, or a drop-in library. Name it
  in `Cargo.toml`, or place a `.so` file in a plugins
  directory, and turn it on in `config.toml`.
- Documented traits for accounting and for building the
  coinbase. The design names
  `fill_distribution_from_shares` and
  `build_coinbase_transaction`.
- A limited API to the share store, for the plugins that
  need it.

Payouts made outside the block reward bring back trust in
whoever holds the funds, so each plugin carries its own
tradeoffs.

## Where operators already install software

Start9 and Umbrel packages, so Hydrapool installs the way
other node software does.

## Stratum V2

A Stratum V2 endpoint, so a miner can take the block
template while the pool still accounts for the shares.
[What a check can show](/explanation/what-a-check-can-show)
is that split: template choice and the ledger are
different controls.

## Follow the work

- [Issue 43, Build Payout Plugin System](https://github.com/256foundation/hydrapool/issues/43).
  Rust crates or drop-in libraries, documented traits,
  and PPLNS moved into a plugin.
- [Pull request 42, Custom, user defined payouts](https://github.com/256foundation/hydrapool/pull/42).
  Work in progress: a local file of coinbase outputs, and
  a way to forward shares past a difficulty threshold.
  The plugin issue grew out of this change.
- [Pull request 33, add start9 package](https://github.com/256foundation/hydrapool/pull/33).
- [Issue 38, Umbrel](https://github.com/256foundation/hydrapool/issues/38).
- [Issue 41, Stratum v2 Mining Protocol support](https://github.com/256foundation/hydrapool/issues/41).

[Where Hydrapool is today](/explanation/status) is what
the release runs now.
