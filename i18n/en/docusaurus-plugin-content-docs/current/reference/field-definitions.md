---
sidebar_position: 2
---

# Field Definitions by Screen / Menu

## Order List Screen

| Field | Description |
|-------|-------------|
| Order No. | OMS internal order ID |
| Origin Order No. | Order number assigned by the sales channel |
| Purchase No. | Payment-related unique number |
| Brand | GM / TAM / NUD / NUF / ATS |
| Channel | Sales channel name |
| Order Type | NORMAL / GIFT / RX |
| Received Method | ADDRESS_DELIVERY / STORE_PICKUP |
| Tag | PREORDER, etc. |
| Order Status | PENDING ~ COMPLETED |
| Ordered At | Order received time |
| Orderer Name | Customer name (masked) |

## Order Detail Screen - Product Information

| Field | Description |
|-------|-------------|
| SKU | Product unique code |
| Product Code | Internal product code (SAP Code) |
| Product Name | Product name |
| UPC | Barcode |
| Category | Product category |
| Ordered Qty | Quantity ordered by the customer |
| Allocated Qty | Quantity secured from stock |
| Canceled Qty | Canceled quantity |
| Shipped Qty | Quantity processed for shipment |
| Delivered Qty | Quantity delivered to the customer |
| Returned Qty | Quantity processed as returned |
| Reshipped Qty | Quantity processed as reshipment |
| Unit Price | Price per product |
| Subtotal | Ordered Qty x Unit Price |

## Return / Exchange Detail Screen

| Field | Description |
|-------|-------------|
| Return / Exchange No. | Unique number of the return or exchange case |
| Origin Order No. | Original order number |
| Status | Current progress status |
| Claim Reason | Reason for return/exchange |
| Responsibility | Customer responsibility / Operation responsibility |
| Pickup Shipping Info | Carrier, tracking number, tracking URL |
| Inspection Result | Product-level inspection grade (A/B/C) |
| Refund Info | Refund amount and details (for returns) |
