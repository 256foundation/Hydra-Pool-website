# Point a Miner

This guide is the connection step, after the pool's
payout rule is settled. [Name the pool](/tutorial/name-the-pool)
is that decision. Come back here only when you know who
is paid if a block is found.

The project does not ask for an account on this website.
There is no signup.

## Your own instance

The v2.6.0 compose file listens for Stratum on port
3333. From a miner that can reach the host:

```text
stratum+tcp://YOUR_HOST:3333
```

On the pool machine itself the host is `localhost`.
From another machine it is that machine's address, and
only if you have deliberately published the port.

What you type as the username depends on the mode you
configured.

- The Foundation's donation instance wants a label.
  That rule is [below](#the-foundations-donation-instance).
  It is not the default for a pool you just installed.
- The changelog says a 100% donation setting is what
  skips Bitcoin-address checks. If you did not set
  that, the project expects addresses. The release
  example tells you to put your address in
  `bootstrap_address`. Set every payout address in the
  config before other people connect.
- This guide does not invent a worker-name grammar for
  paying pools beyond that. The README does not give
  one. If your firmware wants `address.worker`, confirm
  it against a current Hydrapool issue or the forum
  before you treat it as a rule.

The worker password is whatever your firmware sends.
The Hydrapool README does not document a required
password for Stratum.

Then watch your Grafana, if you started it, and the
pool log. A worker that appears there is a worker the
server accepted. It is not yet a statement about a
future coinbase.

## The Foundation's donation instance

::: warning You are not paid
`stratum+tcp://pool.256foundation.org:3333` gives
hashrate to the 256 Foundation. A block found by that
instance pays the Foundation, 100%. It is not a
community PPLNS pool.
:::

Hashdash, at [dash.256f.org](https://dash.256f.org), is
the stat page. Checked 5 November 2026, it tells you:

- URL: `stratum+tcp://pool.256foundation.org:3333`
- User: `username.workername`
- Username: a Nostr npub, an X handle, or a website
  token
- Example shape: `@256foundation.bitaxe-1`

Do not put a Bitcoin address there and expect it to be
paid. The label is how the dashboard shows your
worker.

The [forum about post](https://forum.256foundation.org/t/about-the-hydrapool-category/10)
invites a test on this host and does not restate the
payout. The [FAQ](https://256foundation.org/faq) does.
Follow the FAQ.

## The host this guide does not use

`test.hydrapool.org` is named in the software README
as an instance on mainnet. The README does not say who
is paid. The old hardware page asked miners to connect
there. Do not use that page as a payout promise. See
[Public instances](/reference/public-instances).

## When something fails

Setup talk belongs on the [Hydrapool
forum](https://forum.256foundation.org/c/hydrapool):
Docker, the node, `config.toml`, solo versus PPLNS,
fees, and dashboards. Bugs in the software belong as
issues on [GitHub](https://github.com/256foundation/hydrapool).
The [Telegram group](https://t.me/the256foundation) is
the Foundation's chat. It is not the forum, and it is
not a support ticket system.
