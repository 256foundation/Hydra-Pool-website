# Share API

The pool process starts an HTTP API on the port in
`config.toml`. In the v2.6.0 example that port is
`46884`. The README documents one path for share
records.

::: info Current as of the v2.6.0 README
Paths and parameters below are from that README. The
[how-to](/howto/export-shares) is the short procedure.
[What a check can show](/explanation/what-a-check-can-show)
says what the file does and does not prove.
:::

## `GET /pplns_shares`

Returns a JSON file of the PPLNS shares the server is
tracking for block-reward distribution.

Optional query parameters:

| Parameter | Format |
| --- | --- |
| `start_time` | RFC3339, for example `1996-12-19T16:39:57-08:00` |
| `end_time` | RFC3339 |

Both bound the range of rows in the download. Rows the
server has already dropped are not there. See
`pplns_ttl_days` in the [config reference](/reference/config).
The release example uses 7 days. The git-tree config
uses another value. The server follows the file it
loaded.

## `GET /health`

The README uses `/health` with HTTP basic
authentication as a connectivity check. The v2.6.0
compose healthcheck calls the same path.

## Authentication

The README says the API is secured with the credentials
in the config. Prometheus uses them to build the
dashboard. Miners use them to download shares, if you
give the credentials out.

Basic authentication is the scheme in the README's curl
example: `Authorization: Basic` plus the base64 of
`username:password`. Generate the config token with
`hydrapool_cli gen-auth`, not by inventing the string.
The how-to has the Docker form of that command.

If you expose the port, put a reverse proxy in front of
it. The README recommends nginx, the same way it
recommends a proxy for Grafana.

## What the JSON is

It is the server's record of the shares it kept. You
can check the arithmetic of those rows, and you can
look for your own workers.

It is not a proof that the set is complete. It is not a
proof that the coinbase paid the split those rows
imply. It is not a proof of which binary produced the
file. Do not describe a download as an independent
proof of the whole payout. The export cannot do that
job.
