# Two Ledgers

Hydrapool and P2Pool V2 share code and a problem. They are
not the same system, and running one does not give you the
other.

Hydrapool aims to let you inspect and run the bookkeeper. P2Pool V2 aims to remove the single authoritative bookkeeper.

## Operator-run pooling

Hydrapool is the operator-run one. An operator deploys it,
points it at a Bitcoin node, and accepts miners over
Stratum. The documented modes are solo and PPLNS. The
v2.6.0 example config sets `mode = "hydrapool"` and says
that mode uses PPLNS based on shares. It does not wait for
a sharechain (`wait_for_chain_sync = false`).

The operator's server stores the shares. Miners can be
paid from the block coinbase, so the operator need not
take custody of those outputs later. The operator still
chooses the template, the accounting, and the outputs that
go into that coinbase, unless something else checks those
choices.

You can read the code because it is AGPL-3.0. You can host
it because the project ships Docker files, a Linux build,
and a config example. That is the sense in which the
bookkeeper is inspectable and runnable.

## Peer-validated sharechain

P2Pool V2 is the other design. Its [own site](https://p2poolv2.org/)
describes a sharechain that peers replicate, a PPLNS
window they recompute, and coinbase outputs they can
check. The same page says the chain, the accounting, and
the coinbase payouts run on testnet4 today, and that the
market is what the project is building now.

That market is not finished. The site's "being built"
list includes share trading, with swap designs that
mention Lightning and Ark. None of that is a Hydrapool
product. This site does not offer Lightning or Ark
payouts.

A sharechain still has people running gateways and nodes.
It does not mean there is no operator at all.

P2Pool V2 is maintained independently by Jungly (Kulpreet
Singh). [Localhost Research](https://lclhost.org/blog/mining-unit/)
has published a commitment to support that work, alongside
Jungly, including sharechain design and transferable
shares. P2Pool V2 is not a 256 Foundation core project.
The Foundation does not own it. The code lives at
[p2poolv2/p2poolv2](https://github.com/p2poolv2/p2poolv2).

The Foundation's projects page names Jungly as Hydrapool's
architect and lead maintainer. He also maintains P2Pool
V2. Those are related roles. They are not one project
under the Foundation.

## Shared code is real, and limited

Hydrapool 2.6.0 on `main` (`f7674e4`) depends on
`p2poolv2_lib` v0.12.0 from that repository, commit
`8eca024`, with the feature `hydrapool-pplns-accounting`
enabled. The same tag supplies `p2poolv2_api`,
`p2poolv2_cli`, and `bitcoindrpc`.

Sharing a library is not the same as shipping the same
binary, the same default mode, or the same deployed
program. Hydrapool's example config selects hydrapool
mode. P2Pool V2's node is a separate program, on its own
release line, with its own public status: testnet4, and
a marketplace still being built.

Using Hydrapool today is not running a decentralized
sharechain.

## How to talk about the pair

Say which ledger you mean.

- "I operate Hydrapool" means you run the operator-run
  software.
- "P2Pool V2" means the peer-validated sharechain, as far
  as that project has actually shipped it. Today that
  public evidence is testnet4, not a finished mainnet
  pool with a market.

[Where Hydrapool is today](/explanation/status) is the
status page. [What a check can show](/explanation/what-a-check-can-show)
says what source, an export, and a coinbase each prove.
