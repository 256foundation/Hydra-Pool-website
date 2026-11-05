# Name the Pool

In this lesson you decide which pool you are about to join, and
who gets paid if it finds a block. You will not start a miner.
You will not send hashrate anywhere.

Expect about ten minutes. You need a browser.

::: info Current as of November 2026
The Foundation pages and Hashdash were checked on 5 November
2026. The software notes match Hydrapool v2.6.0 (`f7674e4` on
`main`, 12 June 2026).
:::

## Two different computers

A mining pool has a bookkeeper. Someone's computer stores the
shares and builds the coinbase. Before you point a machine at a
host, name that computer.

There are two you will meet in these docs:

1. The Foundation's public instance, at
   `pool.256foundation.org`.
2. An instance you run, from the [Hydrapool][repo] source, on a
   machine you control.

They can run the same software. They do not pay the same people.

[repo]: https://github.com/256foundation/hydrapool

## The Foundation's instance

Read this, then check it on the pages that publish it.

The [Foundation FAQ](https://256foundation.org/faq) says a
hashrate donation is pointing a miner at
`pool.256foundation.org:3333`. If that instance finds a block,
the reward goes to the Foundation. [Hashdash](https://dash.256f.org)
is where you watch that hashrate. The [projects
page](https://256foundation.org/projects) lists the same host.

::: warning 100% to the Foundation
This instance is not a miner-paid pool. Connecting does not
mean you are owed a share of a block. The whole winning goes
to the Foundation.
:::

Hashdash tells donors to set the stratum user to
`username.workername`. The username is a label: a Nostr npub,
an X handle, or a website token. One example on that page is
`@256foundation.bitaxe-1`. That string is not a payout address.
The software changelog describes why a label works here: a
100% donation setting skips Bitcoin-address checks on
usernames (entries 2.1.4 and 2.1.5).

The [forum about post](https://forum.256foundation.org/t/about-the-hydrapool-category/10)
(25 March 2026) calls this host a live test instance. It does
not restate the payout. Use the FAQ and Hashdash for that.

Write down, in your own words:

- Who keeps the ledger.
- Who is paid if a block is found.
- What the username is for.

If any answer is "the miner who connected," read the warning
again.

## An instance you run

On a pool you operate, you edit the config before anyone else
connects. The v2.6.0 example file sets `mode = "hydrapool"` and
its comment says that mode uses PPLNS based on shares. It tells
you to replace `bootstrap_address` with your own Bitcoin
address. Donation and fee lines in that example are comments.
You choose whether to turn them on.

The README also names solo mining. The example file does not
show a separate solo key. Confirm the setting you need in the
current README before you rely on solo. Details are on the
[config reference](/reference/config).

The coinbase can pay miners directly, so you need not hold
those coins in a wallet afterward. That says who received the
outputs in that block. It does not, by itself, prove the split
matched the work. [What a check can show](/explanation/what-a-check-can-show)
is the longer version. Read it before you invite other people
onto a pool you run.

## Stop here if you only wanted the map

You now know which host pays whom.

- To run the software, follow [Run with Docker](/howto/run-with-docker).
- To point a miner, follow [Point a miner](/howto/point-a-miner).
  Do that only after the payout rule is the one you intend.
- To see every public hostname these docs mention, open
  [Public instances](/reference/public-instances).
