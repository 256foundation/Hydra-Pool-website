# Example Server Pictures

These pictures are from the previous hydrapool.org
guide: one operator's Dell Optiplex, Ubuntu Server
24.04.3 LTS, Bitcoin Core from Snap, and Docker. They
show the shape of that install. They are not the
command list to follow.

The commands to follow are in [Run with
Docker](/howto/run-with-docker) and in the [software
README](https://github.com/256foundation/hydrapool/blob/main/README.md).
The old narrative had drifted. It repeated the donation
fields where the fee fields belong, it restarted
Prometheus before the stack existed, and one `chown`
path did not match the username in the same paragraph.
Those steps are not reproduced here.

::: info Pictures, not measurements
The Grafana shot is from that guide. The hashrate,
uptime, and addresses in it are whatever that capture
showed. They are not a current statistic for any pool.
:::

## Ubuntu Server image

The guide started from the Ubuntu release directory and
the 24.04.3 live server ISO.

![Ubuntu release listing](/guide/ubuntu01.png)

The files it kept were the ISO, `SHA256SUMS`, and
`SHA256SUMS.gpg`.

![Downloaded ISO and checksum files](/guide/ubuntu04.png)

## Check the ISO

Verification follows [Ubuntu's
tutorial](https://ubuntu.com/tutorials/how-to-verify-ubuntu#1-overview).
The first `gpg --verify` tells you which key signed the
checksums, if you do not have it yet.

![GPG reporting the signing key](/guide/verify01.png)

After the key is imported and the signature checks out,
`sha256sum` on the ISO should match the line in
`SHA256SUMS`.

![Checksum comparison](/guide/verify04.png)

## Install the machine

The guide flashed the ISO to a USB stick, then booted
the Optiplex from that stick. Any flasher works. The
picture is Ubuntu's Startup Disk Creator.

![Selecting the ISO and the USB stick](/guide/flashing01.png)

The firmware boot menu on that Dell was F12. Other
machines differ. Pick the USB device, then the install
entry.

![Dell firmware boot menu](/guide/flashing02.png)

## A data disk

The guide put the Bitcoin data directory on a second
disk and added it to `/etc/fstab` so it mounted on
boot. The picture is that fstab line. Copy your disk's
UUID from `blkid`. Do not copy the UUID out of the
picture.

![An fstab line for the data disk](/guide/mount03.png)

## Bitcoin Core

The guide installed Bitcoin Core with Snap, wrote a
`bitcoin.conf`, and watched initial block download.
The log picture is early sync, height around 1500, on
22 November 2025. It shows the daemon moving, not a
finished node.

![bitcoind debug log during initial sync](/guide/bitcoin01.png)

Use the `bitcoin.conf` fragment in [Run with
Docker](/howto/run-with-docker), including a password
you chose. The old guide hardcoded example RPC
credentials. Do not reuse those.

## Docker, then the pool

Docker's own Ubuntu instructions are the ones the old
guide linked, and they are still the right place for
the engine install:
[Install Docker Engine on
Ubuntu](https://docs.docker.com/engine/install/ubuntu/).
`docker run hello-world` is the smoke test.

![hello-world from Docker](/guide/docker02.png)

Hydrapool itself is the release compose file, not a
long local script. After it is up, Grafana is on port
3000. Change the default admin password before that
port is public. The [Docker guide](/howto/run-with-docker)
has the defaults the v2.6.0 file ships with.

![Grafana pool dashboard from the old guide](/guide/grafana.png)

## Where to ask

The [forum](https://forum.256foundation.org/c/hydrapool)
is where operators compare installs: a VPS, a home
server, a different Bitcoin client. The pictures above
are one case, not a requirement.
