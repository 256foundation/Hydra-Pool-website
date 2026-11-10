# Export Share Records

This is how an operator, or a miner the operator has
given credentials to, downloads the share file the
server still holds. It is a file transfer. It is not a
proof of the whole payout.

Read [What a check can show](/explanation/what-a-check-can-show)
once, so the limits are in mind before the command.

## What you need

- The API host and port. The v2.6.0 example binds
  `0.0.0.0:46884`.
- The API username and password. Those are the ones you
  passed to `gen-auth`, not the token string in the
  config. See [Run with Docker](/howto/run-with-docker).
- A retention window you understand. The release
  example keeps shares for 7 days
  (`pplns_ttl_days`). Older work is gone.

## Download

The README's URL is:

```text
http://HOST:PORT/pplns_shares
```

Optional query parameters `start_time` and `end_time`
are RFC3339 timestamps. The README's example shape is
`1996-12-19T16:39:57-08:00`.

A basic-auth request, same scheme as the README's
`/health` check:

```bash
curl -u 'USERNAME:PASSWORD' \
  'http://127.0.0.1:46884/pplns_shares'
```

To bound the range, add the query. Quote the URL so
the shell does not eat the timestamp:

```bash
curl -u 'USERNAME:PASSWORD' \
  --get \
  --data-urlencode 'start_time=2026-11-01T00:00:00Z' \
  --data-urlencode 'end_time=2026-11-05T00:00:00Z' \
  'http://127.0.0.1:46884/pplns_shares'
```

Replace the host if you are not on the pool machine.
If the port is public, the README says to put nginx in
front of it.

The health check from the README, so you know the
process is answering before you pull the file:

```bash
curl -u 'USERNAME:PASSWORD' http://127.0.0.1:46884/health
```

## What to do with the file

- Check that your workers appear, and compare them
  with the accepted-work log on the miner.
- Check the arithmetic of the rows that are present.
- Check the timestamps against `pplns_ttl_days`. A
  short file may be retention, not a short pool.

## What not to claim from the file

- That every eligible share is in it.
- That the operator showed the same file to everyone.
- That the coinbase paid the split these rows suggest.
- That the host which served the file is a particular
  git commit.

Those are different checks. The export is the
operator's copy of the rows they kept. [The reference](/reference/share-api)
has the parameters in one place.
