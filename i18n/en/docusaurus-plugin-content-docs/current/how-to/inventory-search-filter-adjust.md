---
sidebar_position: 4
---

# Stock Search / Filters / Adjustment Requests

## Stock Structure

OMS manages stock at two levels:

| Type | Description |
|------|-------------|
| **Online Stock** | Master stock synchronized from ERP (SAP) |
| **Channel Stock** | Stock distributed to each sales channel |

```
Total ERP stock (Online Stock)
    |-- ATiissu Official: 100 units (Channel Stock)
    |-- Nuflaat Official: 50 units (Channel Stock)
    |-- Undistributed: 30 units
```

## Stock Quantity Concepts

| Quantity | Meaning | Calculation |
|----------|---------|-------------|
| Distributed Qty | Total quantity assigned to the channel | Set from ERP |
| Used Qty | Quantity reserved by orders | Increases when an order is created |
| Shipped Qty | Quantity actually shipped | Increases when shipped |
| **Available Qty** | **Quantity currently available for sale** | = Distributed - Used - Shipped |
| Preorder Qty | Quantity allowed for preorders | Set separately |

> **Channel Available Stock API (OMS-2002)**: An API was added to retrieve available stock by product for a specific channel at once.

## Stock Screens

| Screen | Description |
|--------|-------------|
| Online Stock Dashboard | Overall online stock status by SKU |
| Channel Stock Dashboard | SKU stock status by channel |
| Stock Change History | SKU-level stock change records, such as order creation, cancellation, and shipment |
| Undistributed Stock Search | Quantities not yet distributed to any channel |

## Stock Transfer

You can transfer stock between channels:

1. Select the source channel and destination channel.
2. Enter the quantity to transfer.
3. Complete transfer. Available quantities for both channels are updated automatically.

> Transfers are only available between channels under the same brand/entity.

## Preorder Setting

You can receive preorders even for products with no stock:

1. Set preorder quantity by channel.
2. Set preorder expiration date.
3. Until expiration, the preorder quantity is included in available quantity.
