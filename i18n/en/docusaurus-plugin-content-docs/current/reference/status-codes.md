---
sidebar_position: 1
---

# Status Guide

Every action in the OMS is determined by **what is possible in the current status**. This table summarizes the meaning of and the actions available in each order, shipment, store pickup, return, exchange, and reshipment status, following the same criteria as the **Status Guide** on screen.

---

## Order

| Status | Meaning | Edit Recipient | Full Cancel | Partial Cancel | Available Claims |
|------|------|:----------:|:--------:|:--------:|---------------|
| **Pending** | Stock not allocated, awaiting confirmation | ✅ | ✅ | ✅ | Order Cancel |
| **Collected** | Order confirmed, stock not allocated | ✅ | ✅ | ✅ | Order Cancel |
| **Partly Confirmed** | Stock partially allocated (partial shipment possible) | ✅ | ✅ | ✅ | Order Cancel |
| **Partial Shipment Requested** | Part of the order has been requested for shipment | ❌ | ❌ | ✅ (unshipped portion) | Order Cancel (unshipped portion) |
| **Shipment Requested** | The entire order has been requested for shipment | ❌ | ❌ | ❌ | Return, Exchange (shipped portion) |
| **Completed** | All shipments delivered | ❌ | ❌ | ❌ | Return, Exchange |
| **Canceled** | Order canceled (automatic refund) | ❌ | ❌ | ❌ | — |

---

## Shipment

| Status | Meaning | Cancel Shipment | Available Claims |
|------|------|:--------:|---------------|
| **Picking Requested** | Picking instruction sent to the WMS | ✅ (WMS confirmation required) | Shipment Cancel |
| **Picking Rejected** | Picking failed due to insufficient stock, etc. (reshipment/cancellation possible) | ✅ | Shipment Cancel |
| **Picked** | Picking complete | ❌ | — |
| **Packed** | Packing complete | ❌ | — |
| **Shipped** | Shipping started | ❌ | Return, Exchange |
| **Lost** | Lost in transit | ❌ | Force Refund, Reshipment |
| **Delivered** | Delivered | ❌ | Return, Exchange |
| **Canceled** | Shipment canceled | ❌ | — |

---

## Store Pickup

| Status | Meaning | Cancel | Available Claims |
|------|------|:----:|---------------|
| **Pickup Requested** | Preparing shipment to the store | ✅ | Order Cancel |
| **Shipped** | Transfer from warehouse → store complete | ✅ | Order Cancel |
| **Prepared** | Arrived at store, awaiting pickup | ✅ | Order Cancel |
| **Completed** | Customer pickup complete | ❌ | — |
| **Canceled** | Pickup canceled | ❌ | — |

---

## Return

| Status | Meaning | Cancel Return | Refund |
|------|------|:--------:|------|
| **Pending** | Awaiting collection (collection can be requested) | ✅ | — |
| **Pickup Requested** | Collection instruction sent | ✅ | — |
| **Pickup Ongoing** | Collection in progress | ✅ | — |
| **Received** | Received and inspected | ✅ | Refund based on inspection grade |
| **Refunded** | Refund complete | ❌ | Refund completed |
| **Canceled** | Return canceled | ❌ | — |

---

## Exchange

| Status | Meaning | Cancel Exchange |
|------|------|:--------:|
| **Pending** | Awaiting collection | ✅ |
| **Pickup Requested** | Collection instruction sent | ✅ |
| **Pickup Ongoing** | Collection in progress | ✅ |
| **Received** | Original item received | ✅ |
| **Inspected** | Inspection complete | ❌ |
| **Shipment Requested** | New item requested for shipment | ❌ |
| **Exchanged** | New item shipped | ❌ |
| **Canceled** | Exchange canceled | ❌ |

---

## Reshipment

Reshipment follows the same status flow as a Shipment.

| Status | Meaning | Cancel |
|------|------|:----:|
| **Picking Requested** | Picking instruction sent | ✅ (WMS confirmation required) |
| **Picking Rejected** | Picking failed (reshipment/cancellation possible) | ✅ |
| **Picked / Packed** | Picking/packing complete | ❌ |
| **Shipped** | Shipping started | ❌ |
| **Delivered** | Delivered | ❌ |
| **Canceled** | Canceled | ❌ |

---

## Claim Type

| Type | Meaning | Collection Required |
|------|------|:--------:|
| **CANCEL** | Order cancellation | ❌ |
| **RETURN** | Return + refund | ✅ |
| **RETURN_FORCE_REFUND** | Immediate refund without inspection | ✅ |
| **EXCHANGE** | Collection + sending a new item | ✅ |
| **RESHIPMENT** | Re-sending a failed/lost shipment | ❌ |

**Fault**: `CUSTOMER` (customer's fault) / `OPERATION` (operations' fault) — reflected in refunds and settlement.
