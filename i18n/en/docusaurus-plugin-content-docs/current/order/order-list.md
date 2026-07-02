---
sidebar_position: 2
---

# Order Search and Details (Order List)

Use the **Order → Order List** menu on the left to search for orders and view the details of individual orders. The Return, Exchange, and Reshipment lists share the same structure, so once you learn how to use this screen, the same approach applies to the others.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_orderlist.mov" />
  Your browser does not support the video tag.
</video>

---

## Searching for Orders

Set your conditions in the search form at the top and click **"Search"**.

### Searching by Keyword

Choose a **search field** from the dropdown to the left of the search box, then enter a value. You can search multiple values at once by separating them with line breaks (usually up to 100 entries).

| Search Field | Description |
|-----------|------|
| **Order No** | OMS order number |
| **Purchase No** | Original order number from the sales channel |
| **Orderer Name / Email / Phone** | Orderer's name, email, or phone number (partial match) |
| **Shipment No** | Shipment number |
| **SKU Code** | Product code |

### Narrowing Down with Filters

| Filter | Description |
|------|------|
| **Period** | Period based on the order received date. Includes `Today` `Week` `Month` `3 Month` shortcut buttons |
| **Order Status Filter** | Multi-select order statuses (Pending, Collected, Completed, etc.) |
| **Fulfillment Status Filter** | Multi-select fulfillment statuses (Picking Requested through Delivered) |
| **Channel Filter** | Sales channel (within your permission scope) |
| **Receive Methods / Types / Tags** | Receive method (delivery/pickup), order type (NORMAL/GIFT/RX), tags (PREORDER, etc.) |

:::warning Note when searching completed/canceled items
When searching for closed orders such as Completed/Canceled/Deleted, you **must specify a Period**. The data volume is too large to search without one.
:::

---

## Viewing the List

The search results table displays the following information.

| Column | Description |
|------|------|
| Brand / Corp / Channel | Brand, corporation, channel |
| **Order No** | Click to go to the details screen |
| Receive Method | Blue = Delivery, purple = Store Pickup |
| Type / Tags | Order type, tags |
| **Status** | Order status chip |
| **Shipment Status** | Fulfillment status chip |
| Order Date | Order date |
| Recipient Name / Phone | Recipient information |
| Shipment No / Tracking No | Shipment number, tracking number |

- Use **"Refresh"** at the top right to update the list.
- Selecting rows enables **"Bulk Cancel"**. → See [Order Cancellation](./order-cancel)

---

## Order Details Screen

Click an **Order No** in the list to open the details screen. The tabs at the top let you view all the history tied to this order in one place.

| Tab | Content |
|----|------|
| **ORDER** | Order basics, products, payment, fulfillment/delivery info + action buttons |
| **RETURN** | Returns originating from this order |
| **EXCHANGE** | Exchanges |
| **RESHIPMENT** | Reshipments |
| **LOG-HISTORY** | Full change history (chronological) |

### Information on the ORDER Tab

- **Order header**: Channel, order date, order status, receive method, order type, tags
- **Orderer / Recipient**: Name, contact, address (personal data masked)
- **Order items**: SKU, product name, unit price, status by quantity (ordered/allocated/canceled/shipped/delivered/returned quantities)
- **Fulfillment info**: Shipment number, tracking number, fulfillment status
- **Payment info**: Payment method, amount, tax, shipping fee, currency
- **Refund history**: Refunds arising from returns/exchanges

### Action Buttons That Appear by Status

The ORDER tab displays **only the action buttons available for the current order status**.

| Button | Display Condition | Action |
|------|-----------|------|
| **Cancel Order** | Cancelable status (Pending, etc.) | Cancel the order → [Order Cancellation](./order-cancel) |
| **Request Shipment** | Partly Confirmed / Partial Shipment Requested | Request partial shipment → [Order Cancellation & Partial Shipment](./order-cancel#부분-출고-요청) |
| **Register Claim** | Completed | Register a claim such as a return or exchange |

### LOG-HISTORY Tab

Order status changes, fulfillment events, store pickup, and return/exchange/reshipment history are recorded **chronologically**. The **Type** filter at the top (All / Order / Return / Exchange / Reshipment) lets you view only a specific type of history, which is useful for tracing "why this order is in its current state."

:::tip
The full rules for which actions (cancel, edit, claim) are possible in each status are summarized in the [Reference — Status Code Table](../reference/status-codes).
:::
