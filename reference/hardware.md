# Hardware

Hydrapool speaks Stratum to whatever miner you point at
it. The project does not ship a compatibility certificate.
The previous website kept a table of machines people were
invited to try. This page keeps the result of that table
and drops the invitation.

::: info Current as of the previous site table
The old page did not say when a row was tested. Four
rows were marked successful. The other 109 were marked
not tested. No row was marked failed.
:::

## Recorded as tested

The firmware column is what the old table wrote. The
hash-power and efficiency figures in the [full
catalog](/reference/hardware-catalog) are the numbers
that table listed. They look like catalog figures for
the machine, not a measurement campaign run by
Hydrapool. They are not repeated here, so this page
does not turn a nameplate into a result.

| Make | Model | Firmware in the old table |
| --- | --- | --- |
| Bitaxe | Gamma | ESP Miner v2.7.1 |
| Bitaxe | Supra | ESP Miner v2.7.1 |
| Futurebit | Apollo I | Apollo API v2.0.6 |
| Ember One | 00 | test firmware |

"Ember One / 00" is the board the Foundation spells
EmberOne/00. The old table's "test firmware" note does
not name a Mujina version. A successful Stratum session
is not a statement about that board's hashrate.

## Everyone else

The [catalog](/reference/hardware-catalog) lists the
remaining models as not tested, with the old page's
figures beside them. A yellow cell on that page meant
"not tested," not "incompatible."

## Do not use the old test endpoint

The old page asked for five to ten minutes of hashrate
at `stratum+tcp://test.hydrapool.org:3333`. The
software README names that host and does not say who is
paid. This site does not ask you to mine there.

The Foundation's documented public endpoint is the
[donation instance](/reference/public-instances). It
pays the Foundation, not you. To learn whether your
miner speaks to Hydrapool, point it at a pool whose
payout rule you have read. The safest one is an
instance you just configured.
