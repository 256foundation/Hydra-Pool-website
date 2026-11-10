# What a Check Can Show

Four checks come up whenever someone asks whether they have
to trust a pool. Each one shows a different fact. None of
them stands in for the others.

They also sit on four levels of assurance. A higher level
is not granted by a lower one.

1. **Inspection.** Read the published source. That is the
   next section.
2. **Recomputation.** From the records the pool publishes,
   check the arithmetic and recompute the split those rows
   describe. That is the export section. It is not proof
   the rows are the complete set.
3. **Completeness and non-equivocation.** Nothing eligible
   was omitted or invented, and a different caller was not
   shown a different history. The export does not show this.
4. **Enforcement.** The amounts were committed on Bitcoin,
   and a later holder of the funds cannot withhold them.
   Coinbase outputs are that section. Paying from the
   coinbase avoids later custody. It does not prove the
   inputs to the split were complete.

## You can read the source

Hydrapool is published under AGPL-3.0 at
[github.com/256foundation/hydrapool](https://github.com/256foundation/hydrapool).
Anyone can read that tree, build it, and diff a later
commit.

Reading the source tells you what that commit does. It
does not tell you which binary a remote operator is
running. A signature on a container image you pulled is
a check of that image. It is still not a check of someone
else's host. See [Build from source](/howto/build-from-source)
for the image name the v2.6.0 compose file actually uses.

## You can read an export

When the API is up, an operator can give you
`/pplns_shares`: a JSON file of PPLNS share records the
server still has, optionally between two times. The
[share API](/reference/share-api) has the path, the query
parameters, and the retention field.

With that file you can check its arithmetic. You can look
for your own workers and compare them with the log on your
miner. You can see whether the published rows add up the
way the file says they do.

You cannot treat the file as proof of the whole payout.
The export does not prove the operator included every
eligible share. It does not prove they omitted none, and
it does not prove a different caller was shown the same
history. A downloadable share list is not, by itself, a
complete ledger with proofs attached.

The v2.6.0 example sets `pplns_ttl_days = 7`. Rows older
than the operator's retention are not in the file. The
copy of `config.toml` in the git tree uses a different
value. Read the file the server actually loaded.

Published totals and percentages are the same kind of
check. If a dashboard shows shares of a total, you can
test whether the percentages of that total add up. You
cannot, from the percentages alone, know that the total
was everyone who should have been counted.

A rate-style contract is a different case. If a pool
publishes a formula and you know your own accepted work,
you can often check your own expected rate from that
formula and public network data. That check does not
need everyone else's shares. A PPLNS split of a real
block reward does. Hydrapool's documented accounting is
the second kind.

## You can read the coinbase

A coinbase output is on the Bitcoin chain. It shows which
script was paid in that block, and how much.

Hydrapool's documented payout path puts miner rewards in
that coinbase, so the operator does not have to hold the
coins and pay them later. Later custody is a real risk.
Removing it is useful. It does not prove the inputs to
the split were right. A coinbase can pay exactly the
outputs an operator chose, including a fee or a donation
they configured, and still be a bad account of the work.

The example config leaves donation and fee commented out.
An operator can enable them. The software does not stop
that. "The coins did not sit in a pool wallet" and "the
split matched the work" are separate sentences.

There is also a practical limit the project states
itself. The README says the software accommodates up to
about 100 users in the coinbase, for block-weight
reasons, and it tells operators to lower `blockmaxweight`
so the coinbase fits. Workers are limited by the
machine. That is a capacity note, not a fairness proof.

## You can ask who chose the template

The template is the block the miner is hashing, apart
from the share accounting. Stratum V2 job declaration
and DATUM are ways to move template construction toward
the miner. P2Pool V2's site describes that move, and
says those designs still leave share accounting on a
server the pool operates.

Hydrapool's current docs do not describe a Stratum V2
endpoint. This site does not claim one. Local templates
are a real improvement for transaction choice. They
leave the ledger where it was, unless a sharechain or
another check moves it.

## Keep the four apart

| Check | What it can show | What it cannot show |
| --- | --- | --- |
| Published source | What that commit does | Which binary a remote host runs |
| Share export or a published total | Arithmetic on the rows you were given, including your own | That the rows are the complete eligible set |
| Coinbase outputs | Who was paid in that block, and that those coins need not sit in a pool wallet afterward | That the split's inputs were complete |
| Template choice | Who selected the transactions | Who counted the shares |

[Two ledgers](/explanation/two-ledgers) is the design that
would put the ledger on a sharechain peers can recompute.
That design is P2Pool V2. Its public status is testnet4,
with the market unfinished. It is not what the Hydrapool
example config runs.
