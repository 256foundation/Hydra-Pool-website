# Public Instances

Hydrapool the software and a host running Hydrapool are
different things. This page lists the hostnames current
public docs actually use.

::: info Current as of 5 November 2026
Ports below were checked by opening a TCP connection.
Nothing was sent that would start mining.
:::

::: warning Read this before you point a miner
The Foundation's public instance pays the Foundation,
not you. Details are below. A pool that pays connecting
miners is one you run. Start with [Name the
pool](/tutorial/name-the-pool).
:::

## The Foundation donation instance

| | |
| --- | --- |
| Stratum | `stratum+tcp://pool.256foundation.org:3333` |
| Stats | [dash.256f.org](https://dash.256f.org) (Hashdash) |
| Who is paid | The 256 Foundation, if a block is found |
| Username | A label, not a payout address |

This is the host named by the [Foundation
FAQ](https://256foundation.org/faq), the [projects
page](https://256foundation.org/projects), Hashdash, the
[forum about post](https://forum.256foundation.org/t/about-the-hydrapool-category/10),
and the previous hydrapool.org homepage.

The FAQ calls it a hashrate donation: your miner adds
work, and a block reward goes to the Foundation. The
FAQ also describes TeleHash as an occasional Foundation
event that uses this kind of instance. Visitors point
hashrate at it. A block found there pays the Foundation.

On 5 November 2026, TCP port 3333 on
`pool.256foundation.org` accepted a connection. Hashdash
was serving its donation page, and that page's
instructions were: stratum user `username.workername`,
with the username a Nostr npub, an X handle, or a
website token.

Do not add a Bitcoin address and expect this host to
pay it. The 100% donation mode in the changelog exists
so the username does not have to be an address.

## test.hydrapool.org

The software README says: "We have an instance mining on
mainnet at test.hydrapool.org." It does not say who is
paid if that host finds a block.

On 5 November 2026:

- TCP 3333 accepted a connection.
- HTTPS on the same name redirected to `/login` and
  served a Grafana page.

The previous hardware-test page told people to mine at
`stratum+tcp://test.hydrapool.org:3333` for a few
minutes. This site does not repeat that request. The
README sentence is not a payout policy, so this draft
will not invent one.

If you operate that host, the payout rule belongs in
the forum thread where miners will see it.

## Your own instance

A self-hosted pool listens where you bind it. The
v2.6.0 compose file publishes:

| Service | Port |
| --- | --- |
| Stratum | 3333 |
| API | 46884 |
| Grafana | 3000 |
| Prometheus | 9090 |

Those ports on localhost are your pool. They are not
the Foundation's. [Run with Docker](/howto/run-with-docker)
is the setup. [Point a miner](/howto/point-a-miner) is
the connection, after you have set who gets paid.
