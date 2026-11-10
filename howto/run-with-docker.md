# Run with Docker

This guide starts Hydrapool from the release files, on a
machine that already has Docker and a Bitcoin node. It
follows the project README and the v2.6.0 compose file.
It does not start a miner.

::: info Current as of release v2.6.0
The asset names below were present on the v2.6.0
release (12 June 2026). `releases/latest` is what the
README tells you to download. If a later release
renames a file, the release page wins.
:::

There is a second write-up in the repository at
`docker/README.md`. It assumes you have a clone and are
standing in the `docker/` directory. The steps here are
the no-clone path from the top-level README. Where the
two disagree, this page says so.

## Get the two files

```bash
curl --proto '=https' --tlsv1.2 -LsSf \
  -o docker-compose.yml \
  https://github.com/256foundation/hydrapool/releases/latest/download/docker-compose.yml

curl --proto '=https' --tlsv1.2 -LsSf \
  -o config.toml \
  https://github.com/256foundation/hydrapool/releases/latest/download/config-example.toml
```

The second file is the example, saved under the name
the compose file mounts. Read it before you start the
process. The [config reference](/reference/config) is a
map of the fields. In particular:

- Replace `bootstrap_address` unless you intend the
  default written in the file.
- Set `network`, `zmqpubhashblock`, and `bitcoinrpc` to
  your node.
- Leave donation and fee commented out until you mean
  to turn them on.

The example's RPC URL uses port 8332. `docker/README.md`
shows 38332 in its example. Use the port your node
actually listens on.

If the node is on the same machine, the README's
`bitcoin.conf` fragment is:

```ini
rpcbind=0.0.0.0
rpcallowip=172.16.0.0/12
```

That `rpcbind` listens on every interface. Keep
`rpcallowip` to the Docker range you use, and set a
password that is not the placeholder in the example.

## Change the API credentials

The compose file's healthcheck calls the API as the
user `hydrapool` with the password `hydrapool`. Grafana
in that file logs in as `admin` / `admin`, and anonymous
viewers are enabled. Those are defaults from the
release file. Change them before the ports are
reachable by anyone but you.

Generate an API token:

```bash
docker compose run --rm hydrapool-cli gen-auth USERNAME PASSWORD
```

The password is an argument, so it can land in your
shell history. The command is the one the README
documents.

Put the username and token in `config.toml`. Then put
the same username and password in the Prometheus scrape
config and in the compose healthcheck. The README's
"Securing your server" section lists that order,
including the `prometheus.yml` template on GitHub. The
in-repo helper `docker/cli.sh gen-auth` is the same
tool for people who cloned the repository.

`docker/README.md` also says to change the Grafana
admin password before you expose Grafana.

## Start

From the directory that holds the two files:

```bash
docker compose -f docker-compose.yml up -d
```

`docker/README.md` uses `docker compose up -d` after
you `cd docker`. Same idea, different working
directory.

The README says this brings up Stratum on port 3333 and
the dashboard on port 3000. The v2.6.0 compose file
also publishes the API on 46884 and Prometheus on 9090.
On the machine itself:

- Stratum: `stratum+tcp://localhost:3333`
- API: `http://localhost:46884`
- Grafana: `http://localhost:3000`
- Prometheus: `http://localhost:9090`

The README prints the dashboard URL with two colons
(`http://localhost::3000`). That is a typo. Use one.

Watch the log:

```bash
docker compose logs -f hydrapool
```

## Point miners only after the payout is set

Nothing above points a miner at the new port. When you
are ready, use [Point a miner](/howto/point-a-miner).
If the config still has a bootstrap address you did not
choose, fix that first.

The Foundation's public host is not this instance. Do
not describe your pool with that host's rules, or the
reverse.

## Upgrade

The README's upgrade, while the old containers are
still up:

```bash
docker compose pull
docker compose up -d --force-recreate
```

From v1 to v2 the database schema changed. The README
says to reset it once:

```bash
docker compose pull
docker compose down -v
docker compose up -d
```

`down -v` deletes the volumes. That includes the share
store. Do it only on that major upgrade, or when you
mean to wipe the data.

Images in the compose file are
`ghcr.io/256foundation/hydrapool`,
`ghcr.io/256foundation/hydrapool-prometheus`, and
`ghcr.io/256foundation/hydrapool-grafana`, tag
`latest`. The README's cosign example uses
`ghcr.io/256-foundation/hydrapool` (a hyphen in the
owner). That string does not match the compose file.
Verify the image you actually pulled. [Build from
source](/howto/build-from-source) quotes both lines.
