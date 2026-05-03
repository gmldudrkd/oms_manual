---
sidebar_position: 1
---

# Order Search / Filters / Download

## Searching the Order List

**Available search filters:**

| Filter | Description | Input Limit |
|--------|-------------|-------------|
| Origin Order No. | Order number from the sales channel | Up to 100 |
| Shipment No. | Shipment number | Up to 100 |
| SKU | Product code | Up to 100 |
| Orderer Name | Customer name | Partial search available |
| Orderer Email | Customer email | Partial search available |
| Orderer Phone | Customer phone number | Partial search available |
| Order Type | NORMAL / GIFT / RX | Multiple selection available |
| Order Status | PENDING ~ COMPLETED | Multiple selection available |
| Shipment Status | PICKING_REQUESTED ~ DELIVERED | Multiple selection available |
| Store Pickup Status | Store pickup progress status | Multiple selection available |
| Channel | Sales channel | Only within the user's permission scope |
| Received Method | Delivery / Store Pickup | Multiple selection available |
| Tag | PREORDER, etc. | Multiple selection available |
| Date Range | Based on order received date | Required when searching completed orders |

> **Caution**: When searching completed, canceled, or deleted orders, you must set a date range.

> **Store Pickup Status Filter (OMS-2022)**: You can filter store pickup orders by progress status.

> **Received Method Filter (OMS-2017)**: You can search delivery orders and store pickup orders separately.

> **Tag Filter (OMS-2045)**: You can search only orders with the `PREORDER` tag.

## Viewing Order Details

Click an order to view the following information:

- **Header**: Order number, brand, channel, order type, received method, tag, ordered at
- **Orderer/recipient information**: Name, contact information, address (masked)
- **Payment information**: Payment method, payment amount, tax, duties, shipping fee, currency
- **Order items**: SKU, product code, product name, category, quantity-level statuses
  - Ordered Qty, Allocated Qty, Canceled Qty, Shipped Qty, Delivered Qty, Returned Qty, Reshipped Qty
- **Related shipment list**: Shipments connected to the order
- **Related store pickup**: Store pickup information, if applicable
- **Refund history**: Refund payment history related to returns/exchanges

> **Response Field Expansion (OMS-2000, OMS-2001)**: Reshipment quantity, store pickup information, refund payment history, and other fields were added.

## Viewing Order History

You can view the full change history of an order in chronological order:

- Order status change history
- Shipment event history
- Store pickup event history
- Return/exchange event history
- Reshipment event history

> **History Expansion (OMS-1996)**: Store pickup and reshipment history were added to order history.

## Order Download (Export)

You can download order data as an Excel file.

**Download types:**

| Type | Description |
|------|-------------|
| ALL | All order data |
| ORDER | Order information only |
| SHIPMENT | Shipment information |
| STORE_PICKUP | Store pickup information |
| ORDER_CANCEL | Canceled orders |
| RETURN | Return data |
| EXCHANGE | Exchange data |
| RESHIPMENT | Reshipment data |

> **Download Type Addition (OMS-1999)**: STORE_PICKUP and RESHIPMENT types were newly added.

> **Personal Information Protection**: Excel files are encrypted when downloaded, and personal information access logs are recorded automatically.
