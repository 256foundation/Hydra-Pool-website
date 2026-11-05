---
layout: home

hero:
  name: Hydrapool
  text: Open source Bitcoin mining pool software
  tagline: >-
    Unfinished, operator-run software you can inspect and host.
    Solo and PPLNS are the documented modes. The Foundation's
    public instance donates hashrate. It does not pay you.
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
  - title: Run the bookkeeper
    details: >-
      You host the pool and you can read the code that keeps its
      ledger. That is the job Hydrapool is for.
    link: /explanation/two-ledgers
    linkText: Operator pool and sharechain
  - title: Pay from the coinbase
    details: >-
      Configured that way, miner rewards are outputs in the block
      itself. The operator need not hold them afterward. Custody
      is not the same as a fair split.
    link: /explanation/what-a-check-can-show
    linkText: What a check can show
  - title: A donation instance
    details: >-
      pool.256foundation.org:3333 is the Foundation's public
      test pool. A block it finds pays the Foundation, not the
      miners who connected.
    link: /reference/public-instances
    linkText: Instances and endpoints
  - title: Built in the open
    details: >-
      AGPL-3.0 Rust, a Docker path, and Grafana dashboards.
      Code is on GitHub. Setup talk is on the forum.
    link: /community
    linkText: Join in
---

## The problem, and the software

Pooled mining usually means one operator keeps the book of who
did the work. Hydrapool is unfinished software the [256
Foundation](https://256foundation.org) supports for that job. It
is open. You can inspect it. You can host it yourself.

Hydrapool aims to let you inspect and run the bookkeeper. P2Pool V2 aims to remove the single authoritative bookkeeper.

Those are two different designs. [Two ledgers](/explanation/two-ledgers)
keeps them apart. [Where Hydrapool is today](/explanation/status)
says what the current software does and what is still someone
else's project.

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
