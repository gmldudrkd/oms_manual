---
sidebar_position: 2
---

# Field Definitions

This is a summary of the meaning of the items (fields) that appear frequently on screen.

## Order Fields

| Field | Meaning |
|------|------|
| **Order No** | The OMS order number |
| **Purchase No** | The original order number from the sales channel |
| **Receive Method** | The receiving method — `DELIVERY` / `STORE_PICKUP` |
| **Order Type** | The order type — `GIFT` / `RX` / `LENS_ONLY` (empty for normal orders) |
| **Tags** | Order tags — e.g. `PRE-ORDER` |
| **Shipping Fee** | The order's shipping fee. In the order Excel export it appears next to `Tax` and is shown on every product row |
| **Pickup** | (Return/Exchange) Whether a pickup instruction was sent — `Requested` / `Not Requested` |
| **Return Method** | (Return) How the item is collected — `PARCEL` / `IN STORE` / `FORCE REFUND` |
| **Orderer** | The orderer's information (name / email / phone) |
| **Recipient** | The recipient's information (name / phone / address) |
| **Shipment No** | The shipment number |
| **Tracking No** | The courier tracking number |

### Receive Method · Type · Tag Combinations

Values are combined according to the order information as follows.

| Order information | Receive Method | Type | Tag |
|-------------------|----------------|------|-----|
| Delivery | `DELIVERY` | — | — |
| Delivery + Gift | `DELIVERY` | `GIFT` | — |
| Pickup | `STORE_PICKUP` | — | — |
| Pre-order + Pickup | `STORE_PICKUP` | — | `PRE-ORDER` |
| RX | `DELIVERY` | `RX` | — |
| Pre-order | `DELIVERY` | — | `PRE-ORDER` |
| Lens Only | `DELIVERY` | `LENS_ONLY` | — |
| Pre-order + Pickup + Gift | `STORE_PICKUP` | `GIFT` | `PRE-ORDER` |

## Order Item Quantity Fields

| Field | Meaning |
|------|------|
| **Ordered quantity** | The quantity the customer ordered |
| **Allocated quantity** | The quantity stock has been allocated for |
| **Canceled quantity** | The quantity canceled |
| **Shipped quantity** | The quantity shipped |
| **Delivered quantity** | The quantity delivered |
| **Returned / Reshipped quantity** | The quantity returned/reshipped |

## Stock Fields

| Field | Meaning |
|------|------|
| **ERP** | Stock quantity per the ERP |
| **ERP Update** | Changes applied since the daily batch |
| **Safety** | Safety stock |
| **Undistributed** | Undistributed quantity |
| **Distribution Ratio** | The channel distribution ratio (%) |
| **Distributed** | The quantity distributed to channels |
| **Pre-order** | The pre-order quantity |
| **Used** | The in-use quantity (Pending–Packed) |
| **Shipped** | The shipped/delivered quantity |
| **Available** | The sellable quantity = (Distributed + Pre-order) − (Used + Shipped) |
| **Stock Status** | IN_STOCK / OUT_OF_STOCK / OVERSELLING |
| **Channel Send Status** | Channel exposure ON / OFF |

## Product Fields

| Field | Meaning |
|------|------|
| **SKU Code** | The minimum sellable unit code |
| **SAP Code** | The SAP (ERP) product code |
| **Model Code** | The model code |
| **UPC Code** | The barcode code |
| **Product Type** | Single / Bundle |
| **Product Info Status** | Complete / Incomplete |
