# Config File

The file the Docker instructions download is
`config-example.toml` from the [v2.6.0
release](https://github.com/256foundation/hydrapool/releases/tag/v2.6.0).
You copy it to `config.toml` and edit it. This page is a
map of that example. It does not replace the comments in
the file.

::: info Current as of v2.6.0
The example file and the `config.toml` committed on
`main` are not the same file. Deploy the release
example, then edit. Do not assume the git-tree copy is
what Docker will run.
:::

## Which file you have

The release example (the one `releases/latest` serves as
`config-example.toml`):

- Says to replace `bootstrap_address` with your address.
- Leaves `donation` and `fee` commented out.
- Sets `pplns_ttl_days = 7`.
- Sets `url = "http://host.docker.internal:8332"`.
- Sets `mode = "hydrapool"` and
  `wait_for_chain_sync = false`.

The `config.toml` in the git tree differs. Its donation
lines are not comments. Its retention value is not 7.
Its RPC URL is not the example's URL. If you edit the
git-tree file by mistake, you are not following the
Docker guide.

This page does not copy addresses, passwords, or API
tokens out of either file. The example ships with
placeholder RPC credentials and an API token. Replace
them before anyone else can reach the process.

## Fields you set

`bootstrap_address`. The address used for the first jobs,
before shares exist. The example's comment says this
receives a payout if a block is found in the first
seconds after boot. Put an address you control, unless
you mean to use the default the file ships with. Read
that default in the file. Do not take an address from
this website. The git tree, the release example, and
Hashdash do not all show one address.

`donation_address` and `donation`. Optional. The unit is
basis points: 100 is 1%. Commented out in the release
example.

`fee_address` and `fee`. Optional operator fee, same
unit. Commented out in the release example.

`zmqpubhashblock`. The node's ZMQ endpoint. The example
uses `tcp://host.docker.internal:28334` when the node is
on the Docker host.

`network`. `main`, `testnet4`, or `signet`.

`mode`. The example sets `hydrapool` and comments that
this is PPLNS based on shares. The README also names
solo mining. The example does not show a solo key.
Confirm solo in the current README before you depend on
it.

`wait_for_chain_sync`. The example sets `false` and says
standalone PPLNS does not wait for sharechain sync.
That matches operator-run mode, not a peer sharechain.
See [Two ledgers](/explanation/two-ledgers).

`difficulty_multiplier`. The example comment names a
P2Pool V2 wiki page, "Difficult-Multiplier," for how to
choose it. That slug did not resolve on 5 November 2026
(the wiki index did). Read the comment in the file you
deployed, and the [P2Pool V2 wiki](https://github.com/p2poolv2/p2poolv2/wiki)
if the page has been added.

`pool_signature`. Optional, 16 bytes at most. Comment
it out for blocks without a signature. The example uses
`hydrapool`.

`bitcoinrpc`. URL, username, and password for your node.
The release example's value is port 8332, which is
Bitcoin Core's default mainnet RPC port. A comment in
that file, and an example in `docker/README.md`, also
mention port 38332. Use the port your node is actually
listening on. The two docs do not agree with each other.

`api`. Bind address and port. The example uses
`0.0.0.0` and `46884`. `auth_user` and `auth_token`
protect the API. Generate a token with the command in
[Run with Docker](/howto/run-with-docker). Then make
Prometheus and the compose healthcheck use the same
username and password. The README's "Securing your
server" section is the step list.

## Bitcoin node

The pool needs a node that speaks Bitcoin RPC, and ZMQ
for new blocks. For Docker on the same machine as the
node, the README's `bitcoin.conf` fragment is:

```ini
rpcbind=0.0.0.0
rpcallowip=172.16.0.0/12
```

`rpcbind=0.0.0.0` listens beyond localhost. Pair it with
`rpcallowip` tight enough for your network, and with a
real RPC password. The README also explains the case
where the node is on another host: container traffic is
NATed and appears to come from the Docker host.

Coinbase weight is a separate knob. The README says to
leave room with `blockmaxweight`, and it includes a
table of rough P2PKH sizes. It also says the project
accommodates up to about 100 users in the coinbase for
weight reasons. Read that section in the README when
you raise the user cap. This page does not copy the
table, so the numbers stay in one place.

## Retention

`pplns_ttl_days` is how long share rows stay stored.
The export cannot show rows the server has already
dropped. Seven days is the release example. Whatever
you set is the window a miner can download. Say so if
you run a public pool.
