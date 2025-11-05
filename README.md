## Open Mining Pool
Hydra Pool is an [open-source](https://www.gnu.org/licenses/gpl-3.0.html) Bitcoin mining pool built to be one-click deployable and self-hosted. 

Help us test Hydra Pool by pointing your miner to: `stratum+tcp://stratum.hydrapool.org:3333`

Use any vanity username you want, no need to add a BTC address. The test iteration of Hydra Pool is configured to payout to the 256 Foundation BTC address.

Pool Statistics can be monitored at: [test.hydrapool.org](https://test.hydrapool.org)

A table of the tested hardware is presented <a href="/hardware-tests.html" target="blank" rel="noopener noreferrer">here</a>.

<br>

## Motivation
Mining pools are naturally and increasingly centralized, we set out to change that with this grant. In the event that authoritative governments attempt to coerce mining pools to do things that mining operators disagree with, there needs to be easily deployable options readily available to quickly divert hashrate from such choke points. For example, these threats could be in the form of forcing pools to KYC their users, or forcing pools to censor OFAC transactions, or orphaning blocks containing transactions they want censored based on any arbitrary factor. If anyone can spin up a mining pool on their Ember One mining system, with a self-hosted computer, or a VPS and this open-source project then mining operators are going to be able to pool their resources back together faster and the pressure will grow exponentially on the resources needed to uphold misaligned demands. In short, Hydra Pool is a project to make deploying a mining pool server with a Bitcoin node and Stratum v1/v2 server as easy as "one-click". 

<p align="center">
<img width="500" src="assets/Hydra-Pool-Lander.jpg">
</p>

If this sounds like a grant you want to support, then send The 256 Foundaton a tax deductible donation [here](https://pay.zaprite.com/pl_ZRWeSGjRWG)! Or use The 256 Foundation [PayNym](https://paynym.rs/+appetizingadministration90)!

<br>

## Scope
One Project Manager position and one developer position to fulfill the mission of The 256 Foundation, “Dismantle the proprietary mining empire to make Bitcoin and freedom tech accessible to anyone”. This grant proposal aims to secure funding for:

* The grant officially launched April 5, 2025.
* One project manager to oversee and ensure mission adherence, timeliness, and execution. 
* One developer to build the Hydra Pool software.
* Hydra Pool specifics: Fully open-source “one-click” deployable Bitcoin mining software packaged with a full node and Stratum v1/v2 server support.   
* User-friendly dashboard.
* Dockerized or at least multi-OS builds. 
* Supporting documentation and specifications. 
* This project is fully open-source GPLv3 licensed.
* Excluded from this proposal are sales, distribution, marketing, and customer technical support.

* <br>

## Deliverables
* Pool application for linux that talks to bitcoind and provides stratum work to users and stores received shares.
* Scalable and robust database support to save received shares.
* Run share accounting on the stored shares.
* Implement payment mechanisms to pay out miners based on the share accounting.
* Provide two operation modes: Solo mining and PPLNS (or Tides) based payout mechanism, with payouts from coinbase only. (All other payout mechanism are out of scope of this project for now).
* Rolling upgrades: Tools and scripts to upgrade server with zero downtime.
* Dashboard: Pool stats view only dashboard with support to filter miner payout addresses.
* Documentation: Setup and other help pages, as required.

The initial release of Hydra Pool is being built in such a way that it supports long-term goals like alternative payout models such as echash, communicating with other Hydra Pool instances, Local store of shares for Ember One, and a user-friendly interface that puts controls at the user's fingertips, and supports the ability for upstream pool proxying. 

<br>

## Timeline
The timeline for this grant proposal is six months with the opportunity to extend the grant cycle at the conclusion of each six month period, pending negotiations.

<br>

## Materials
Materials for this project’s initial release are included in the budget. Potential materials for the project may include but are not limited to various common mining rigs for testing and various other tools or software.

<br>

## Community Support
For help with Hydra Pool, please use [The 256 Foundation public forum](https://t.me/the256foundation) on Telegram.

<br>

## Team Members
Lead Developer = [@jungly](https://x.com/jungly)

Project Manager = [@econoalchemist](https://x.com/econoalchemist)

<br>

## Budget
For security reasons, exact dollar amounts are kept confidential. This project budget covers fair-market compensation for one project manager as well as the materials, travel expenses, and living expenses for one developer for six months. Funds are disbursed monthly in equal amounts. Within 30-days prior to the expiration of this grant cycle, a renewal opportunity will open and be subject to review and negotiation.
