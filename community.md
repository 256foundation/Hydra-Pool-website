# Community and Contributing

Hydrapool is a [256 Foundation](https://256foundation.org)
project. The software is open, and so is the
conversation around running it. P2Pool V2 has its own
venues. Use the one that matches the work.

## Where things happen

- **[GitHub][repo]**: source, issues, and pull
  requests. Bug reports and changes to the pool
  belong here. The [forum about
  post][about] says the same thing.
- **[Hydrapool forum][category]**: setup and
  operations. Docker, the Bitcoin node, `config.toml`,
  solo and PPLNS, fees, dashboards, reverse proxies,
  and running a pool other people use. Show-and-tell
  belongs here too.
- **[The 256 Foundation forum][forum]**: the rest of
  the Foundation's projects, in the same place.
- **[Telegram][telegram]**: the Foundation's public
  group chat. It is chat. It is not the forum. The
  previous website called this link the public forum.
  That label was wrong.
- **[X][x]**: the Foundation's public account.
- **[P2Pool V2][p2pool]**: the sharechain project.
  Protocol and marketplace questions belong there, and
  on its [repository][p2pool-repo]. Hydrapool's forum
  will not be the spec for that design.

[repo]: https://github.com/256foundation/hydrapool
[about]: https://forum.256foundation.org/t/about-the-hydrapool-category/10
[category]: https://forum.256foundation.org/c/hydrapool
[forum]: https://forum.256foundation.org
[telegram]: https://t.me/the256foundation
[x]: https://x.com/256foundation
[p2pool]: https://p2poolv2.org/
[p2pool-repo]: https://github.com/p2poolv2/p2poolv2

There is no signup on this site, and the site does not
collect secrets. API passwords and RPC credentials stay
in your config file.

## The public instance is not office hours

`pool.256foundation.org:3333` is the Foundation's
hashrate donation. A block it finds pays the
Foundation. Pointing a miner there is not a support
request, and it is not how you join a paid pool. The
rules are on [Public instances](/reference/public-instances).

## Contributing code

The pool is Rust. The [repository
README](https://github.com/256foundation/hydrapool/blob/main/README.md)
is the build and deploy document. Issues are the place
to propose a change before a large pull request.

Jungly (Kulpreet Singh) is the architect the
Foundation's projects page names for Hydrapool, and he
maintains P2Pool V2 independently. Patches to Hydrapool
go to the Hydrapool repository. Patches to the
sharechain go to the P2Pool V2 repository. A change
that only bumps the shared library still needs a
Hydrapool release before a Hydrapool operator is
running it.

## Contributing to this site

This site is [its own
repository](https://github.com/256foundation/Hydra-Pool-website).
Every page ends with an edit link. `CONTRIBUTING.md` in
that repository covers commits and the preview build.
`AGENTS.md` records what the pages may claim.
The short version: do not write that an export proves
a payout, do not call the donation instance a paid
pool, and do not describe P2Pool V2 as a Foundation
product or as a feature you get by running Hydrapool
today.

## Supporting this work

Hydrapool does not take donations of its own. To fund
the Foundation's projects, use the [256
Foundation](https://256foundation.org). A hashrate
donation is the public instance above, with the payout
rule that page states. It is optional, and it is not a
fee for reading these docs.

## License

Hydrapool is licensed under the GNU Affero General
Public License v3.0. The crate field says `AGPLv3`.
GitHub reports `AGPL-3.0`.
