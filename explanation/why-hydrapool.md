# Why Hydrapool

This page is the context. It is not a setup guide.

## Three jobs sit in one operator

When miners pool hashrate, an operator usually does three
jobs:

- Choose the block template the miners work on.
- Keep the ledger of which shares count.
- Pay the miners, often from a wallet the operator holds
  after the block.

Those jobs are different. Moving one of them does not move
the others. A design that lets a miner build the template
can still leave the ledger, and the payout, with the pool.
Direct payment from the coinbase can leave the operator
without later custody of those coins, and still say nothing
about whether every eligible share was in the split.

Hydrapool is for the operator's side of this. It is
unfinished pool software the 256 Foundation supports. You
can read it, and you can run it.

Hydrapool aims to let you inspect and run the bookkeeper. P2Pool V2 aims to remove the single authoritative bookkeeper.

## What "open" changes, and what it does not

Open source means you can inspect the published code and
you can host it yourself. It does not prove which binary a
remote host is running. A public instance is still
someone's deployment. You can read Hydrapool. You cannot,
from the license alone, know that a given IP is that code.

The [256 Foundation](https://256foundation.org) lists
Hydrapool as one of its four core projects, next to Ember
One, Libre Board, and Mujina. The pool is the layer that
turns work into a block and a payout. The other three are
hardware and firmware. They are adjacent. A claim about
firmware is not a claim about share accounting.

## What this project is not claiming

Hydrapool does not remove the operator. You are the
operator, or you are using someone who is.

Many pools publish formulas and account data. Checking
your own accepted work against a published rate is a real
check. A proportional split of a found block still depends
on everyone else's eligible work. That total is the hard
part to authenticate. [What a check can
show](/explanation/what-a-check-can-show) separates these
cases.

A published payout formula, and a design that moves
template choice to the miner, are different tools from
this ledger. This site does not argue with them. Template
choice and the ledger are different controls.

## Where to go next

[Two ledgers](/explanation/two-ledgers) is the pair: the
operator-run pool, and the peer-validated sharechain.
[Where Hydrapool is today](/explanation/status) says which
of those you can run now.
