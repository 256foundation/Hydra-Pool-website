---
layout: home

hero:
  name: Hydrapool
  text: A PPLNS pool you can run and check
  tagline: >-
    Open source, for an operator of any size.
    Payouts come straight from the block reward.
    Published share records let anyone recompute the split.
  image:
    src: /hydra.webp
    alt: >-
      The Hydrapool mascot, a four-headed cartoon hydra with a
      Bitcoin mark on its chest.
  actions:
    - theme: brand
      text: Start here
      link: /tutorial/name-the-pool
    - theme: alt
      text: Run your own
      link: /howto/run-with-docker
    - theme: alt
      text: GitHub
      link: https://github.com/256foundation/hydrapool

features:
  - title: Run it yourself
    details: >-
      Open-source PPLNS. You host the pool, from one miner
      to a large operation, and you can read the code.
    link: /howto/run-with-docker
    linkText: Run with Docker
  - title: Paid from the block
    details: >-
      Miners are paid straight from the block reward, in the
      coinbase. The operator need not hold those coins afterward.
    link: /explanation/what-a-check-can-show
    linkText: What a check can show
  - title: Recompute the split
    details: >-
      Share records are published. Anyone can recompute the
      split from those records.
    link: /explanation/what-a-check-can-show
    linkText: What the export shows
  - title: A donation instance
    details: >-
      pool.256foundation.org:3333 is the Foundation's public
      test pool. A block it finds pays the Foundation, not the
      miners who connected.
    link: /reference/public-instances
    linkText: Instances and endpoints
---

## The pool you can run

Hydrapool is open-source PPLNS pool software. An operator of
any size can run it, from a home miner to a large operation.
You host it yourself. Miners are paid straight from the block
reward, in the coinbase. The pool publishes share records so
anyone can recompute the split.

It is part of the [256 Foundation](https://256foundation.org)'s
open mining stack, with [Mujina](https://mujina.org) and Ember One.

Hydrapool aims to let you inspect and run the bookkeeper. P2Pool V2 aims to remove the single authoritative bookkeeper.

It is also a platform for how miners get paid.
[Design goals](/explanation/design-goals) is the payout-plugin
work: swap the accounting and the payout method.

[Two ledgers](/explanation/two-ledgers) keeps the operator-run
pool apart from the P2Pool V2 sharechain. [Where Hydrapool is
today](/explanation/status) is the list of what the current
release actually runs.

::: warning The public instance does not pay miners
`stratum+tcp://pool.256foundation.org:3333` is a hashrate
donation to the 256 Foundation. If that instance finds a block,
100% of the winnings go to the Foundation. It is not a
community PPLNS pool that pays the people who connect. Stats
are on [Hashdash](https://dash.256f.org). A pool that pays its
miners is one you configure and run. See [Name the
pool](/tutorial/name-the-pool).
:::

## Find the project

- [Source and issues on GitHub](https://github.com/256foundation/hydrapool)
- [Hydrapool on the forum](https://forum.256foundation.org/c/hydrapool)
- [The 256 Foundation forum](https://forum.256foundation.org)
- [Telegram group](https://t.me/the256foundation) (chat, not the forum)
- [256 Foundation](https://256foundation.org)
