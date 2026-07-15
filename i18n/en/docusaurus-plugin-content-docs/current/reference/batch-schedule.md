---
sidebar_position: 4
---

# Batch Schedule

A table of the scheduled batch jobs that run regularly in OMS (order collection/receipt, claims, etc.). Times are in KST.

:::note
For the D2C (own-brand) mall, both orders and claims are integrated in real time.
:::

## GM KR
| Job | Run Time (KST) | Frequency | Description |
| --- | --- | --- | --- |
| Kakao paid-order collection | :20 | Hourly | Collects paid orders from the Kakao channel. (Orders that already have a shipping address are received during the ShopLinker paid-order collection.) |
| Kakao pre-address cancellation check | :00, :20, :40 | Hourly | Checks for cancellations before order confirmation on the Kakao channel. |
| ShopLinker paid-order collection (SIV, SSG, SSF) | :15 | Hourly | Collects paid orders from the SIV, SSG, SSF channels. |
| ShopLinker order confirmation (SIV, SSG, SSF) | :00, :20, :40 | Hourly | Confirms orders (Preparing for Shipment) for orders placed more than 1 hour ago. |
| ShopLinker claim collection (SIV, SSG, SSF) | :25 | Hourly | Collects cancellation/return claims received on the SIV, SSG, SSF channels. |
| Farfetch paid-order collection | :30 | Hourly | Collects paid orders from the Farfetch channel. |
| Farfetch order confirmation / tracking-number creation | :00, :20, :40 | Hourly | Confirms Farfetch orders placed more than 1 hour ago and updates the tracking number. |
| Farfetch shipment request | :40 | Hourly | Processes shipment requests for confirmed Farfetch orders. |
| Farfetch claim collection | :35 | Hourly | Collects cancellation/return claims received on the Farfetch channel. |
