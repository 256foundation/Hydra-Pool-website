# Design goals

Hydrapool is unfinished, and the current release is an
operator-run PPLNS pool. This page is what the project is
aiming at next. None of it ships in v2.6.0. There are no
dates.

::: warning Not built yet
Issue and pull request state was checked on 10 November
2026. Payout plugins, a Start9 package, an Umbrel package,
and a Stratum V2 endpoint are not in the release.
Lightning, Ark, and ecash are not Hydrapool features today.
:::

## Payout plugins

The headline goal is payout plugins. Hydrapool is being
designed so the accounting and the payout method can be
swapped out. Today's PPLNS payout would move into a plugin.
The issue asks for a score-based PPLNS plugin to be the
default.

The public write-up is [issue 43, "Build Payout Plugin
System"](https://github.com/256foundation/hydrapool/issues/43),
opened 19 March 2026 and still open. It asks for:

- Independent Rust crates for accounting, for payouts, or
  for both. A user would name the crate in `Cargo.toml`,
  or drop a `.so` file in a plugins directory, and turn
  the plugin on in `config.toml`.
- Documented traits so a plugin author can see the job.
  The issue names accounting work such as
  `fill_distribution_from_shares`, and coinbase work such
  as `build_coinbase_transaction`.
- A limited API to the share store. Some plugins would
  not need the store at all.
- The existing PPLNS code moved into a plugin, and a
  score-based PPLNS plugin written to be the default.
  The issue uses that default as the way to try the
  system on itself.

[Pull request 42, "Custom, user defined
payouts"](https://github.com/256foundation/hydrapool/pull/42),
is open work in progress. It is the change that prompted
the issue. The pull request describes two aims. One is a
local file of payout outputs that overrides the PPLNS
coinbase when the file is configured, and leaves default
PPLNS in place when it is not. The other is reading share
information so shares past a difficulty threshold can be
forwarded to an external pool. The author lists debugging,
edge cases, and documentation as still to do. A comment on
the pull request, from the issue's author, says this should
become a plugin rather than a change merged into the main
program. The pull request is not merged. It is not the
plugin system.

### What a developer could build

Once that interface exists, a developer could write a
plugin the project does not ship. Examples, not promises
and not features: Ark, ecash, Lightning, or a custom split.

Payouts made outside the block reward bring back trust in
whoever holds the funds, so each plugin carries its own
tradeoffs. A coinbase payout can keep the operator from
holding those coins after the block. A plugin that pays
later, from some other balance, puts that custody back.
The plugin would still be something an operator runs. It
would not remove the operator.

## Start9 and Umbrel

Packaging for Start9 and for Umbrel is a goal, so a home
operator can install the pool the way they install other
node software.

[Pull request 33, "add start9
package"](https://github.com/256foundation/hydrapool/pull/33),
is open. The author reports that the package builds, and
that it was not run on a Start9 device. It is not merged.
[Issue 38](https://github.com/256foundation/hydrapool/issues/38)
asks for an Umbrel package. No pull request for Umbrel is
open. A review on the Start9 pull request hoped the
published container images could be reused for Start9 and
Umbrel. That is a direction in the review, not a package
you can install.

## Stratum V2

A Stratum V2 endpoint is a goal. [Issue
41](https://github.com/256foundation/hydrapool/issues/41)
is open and describes pool-side Mining Protocol support.
The work it points at is on a fork, not in the v2.6.0
release of this repository. The README does not document
an SV2 port. This site does not treat that issue as a
shipped endpoint. [What a check can
show](/explanation/what-a-check-can-show) says what moving
template choice does and does not change: the ledger can
stay with the pool.

## What you can run today

Today the documented pool is still operator-run PPLNS, or
the solo mode the README names, with coinbase payouts when
you configure them. [Where Hydrapool is
today](/explanation/status) is that list. Lightning and
Ark are not features of that binary. [Two
ledgers](/explanation/two-ledgers) is the separate P2Pool
V2 design, which is not what you get by running Hydrapool.
