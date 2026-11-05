# Build from Source

Use this when you want a binary you compiled, or when
you are checking a commit rather than pulling
`latest`. Operators who only want to run a pool should
use [Run with Docker](/howto/run-with-docker).

::: info Current as of v2.6.0
`Cargo.toml` on `main` (`f7674e4`) says version 2.6.0,
edition 2024, Rust 1.88.0, license AGPL-3.0. The
release assets were listed on 12 June 2026.
:::

## Clone

```bash
git clone https://github.com/256foundation/hydrapool.git
cd hydrapool
```

The README and `Cargo.toml` still print
`https://github.com/256-Foundation/Hydrapool/`. That
older form redirects to the same repository. Use the
`256foundation/hydrapool` URL. It is the public name.

## Build

The README's command:

```bash
cargo build --release
```

You need Rust 1.88 or newer. Check with
`rustc --version`. The README's troubleshooting says
that if the build fails for missing libraries, install
`libssl-dev`, `pkg-config`, `clang`, and `libclang-dev`
on Debian or Ubuntu, then build again.

The binaries are:

- `target/release/hydrapool`
- `target/release/hydrapool_cli`

Run `hydrapool` with a `config.toml` you have edited.
The [config reference](/reference/config) says which
example to start from. `hydrapool_cli --help` lists
the client commands, including `gen-auth`.

## Release binaries

v2.6.0 publishes, among other files:

- `hydrapool-x86_64-unknown-linux-gnu.tar.xz`
- `hydrapool-aarch64-unknown-linux-gnu.tar.xz`
- `hydrapool_2.6.0-1_amd64.deb`
- `hydrapool-installer.sh`
- `docker-compose.yml`
- `config-example.toml`

The README's installer line is a shell script piped to
`sh`. You can instead download the tarball or the
`.deb` from the [release
page](https://github.com/256foundation/hydrapool/releases/tag/v2.6.0)
and inspect it first. The installer URL in the README
uses the older `256-Foundation/Hydrapool` path. The
release page above is the same artifacts.

Changelog 2.5.3 removed Windows and macOS builds. The
README still says those binaries exist. The v2.6.0
asset list does not include them.

The README also shows a cosign command for
`ghcr.io/256-foundation/hydrapool:<TAG>`. The v2.6.0
compose file pulls `ghcr.io/256foundation/hydrapool`
(no hyphen in `256foundation`). Verify the name you
pulled. A signature check on an image you downloaded
tells you about that image. It does not tell you what
a stranger's server is running.

## Libraries this commit links

`Cargo.toml` and `Cargo.lock` on `f7674e4` pin:

```text
p2poolv2_lib 0.12.0
git+https://github.com/p2poolv2/p2poolv2?tag=v0.12.0#8eca024bde6c2de74620dce2f9cc7fb9a544c5c0
feature hydrapool-pplns-accounting
```

The same tag and commit supply `p2poolv2_api`,
`p2poolv2_cli`, `p2poolv2_config`, and `bitcoindrpc`.

That pin is real shared code. The Hydrapool binary and
the P2Pool V2 node are still different programs. [Two
ledgers](/explanation/two-ledgers) is the explanation.
Do not read the pin as "this binary is P2Pool V2."
