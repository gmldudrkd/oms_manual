---
sidebar_position: 3
---

# Order Cancellation and Partial Shipment

This page explains how to cancel an order or ship only some of its items first. **What you can do depends on the order status.**

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_cancel.mov" />
  Your browser does not support the video tag.
</video>

---

## Which Statuses Allow Cancellation

| Order Status | Full Cancel | Cancel Individual Item/Quantity | Notes |
|-----------|:---------:|:------------------:|------|
| Pending | ✅ | ✅ | Stock not allocated |
| Collected | ✅ | ✅ | Stock not allocated |
| Partly Confirmed | ✅ | ✅ | Partially allocated |
| Partial Shipment Requested | ❌ | ✅ | **Only unshipped portion** can be canceled |
| Shipment Requested | ❌ | ❌ | Already shipped → handle via return/exchange |
| Completed | ❌ | ❌ | Handle via return/exchange |

:::warning
An order that has already been shipped (Shipment Requested) cannot be canceled. In that case, handle it via [Return](./return) or [Exchange](./exchange). If the shipment was lost, refer to [Reshipment](./reshipment).
:::

---

## Method 1 — Bulk Cancel Multiple Items from the List (Bulk Cancel) {#방법-1--목록에서-여러-건-일괄-취소-bulk-cancel}

Use this to cancel multiple orders at once for the same reason.

1. In the **Order List**, select the checkboxes for the orders you want to cancel.
   - Only items in a cancelable status (Pending / Collected / Partly Confirmed) can be selected.
2. Click the **"Bulk Cancel"** button at the top.
3. The **"Order Cancelation"** modal opens, showing the list of selected orders.
4. Select a **Cancelation reason** from the dropdown. *(Required)*
5. Click **"Cancel and Refund"** to confirm.
6. The result is shown as a notification, and the list and dashboard are refreshed.

:::note Automatic refund
Once cancellation is complete, the payment is processed as an **Auto Refund**, and the allocated stock returns to available inventory.
:::

---

## Method 2 — Partial Cancellation from the Details Screen (Individual Items/Quantities)

Use this to cancel a specific product or a portion of the quantity within a single order.

1. In the **Order List**, click the order number to open the details screen.
2. On the ORDER tab, click the **"Cancel Order"** button.
3. In the **"Cancel Order"** modal:
   - Select a cancellation reason (**Select a reason**).
   - Enter the **quantity to cancel** for each item in the product list. (Already-shipped quantities cannot be canceled.)
   - Review the cancellation details in the **Summary** at the bottom.
4. Confirm with the **"Cancel Order"** button.

:::tip Cancellation reason and fault
Depending on the cancellation reason, fault is automatically classified as **CUSTOMER** or **OPERATION**, which is reflected in refunds and settlement. Choose the reason accurately.
:::

---

## Partial Shipment Request {#부분-출고-요청}

When only some stock has been secured and the order is in **Partly Confirmed** status, you can ship the available items first.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_partly.mov" />
  Your browser does not support the video tag.
</video>

1. On the order details ORDER tab, click the **"Request Shipment"** button.
   - This button only appears when the status is **Partly Confirmed** or **Partial Shipment Requested**.
2. Confirm the items and quantities to ship first, then request the shipment.
3. After the shipment request, the order becomes **Partial Shipment Requested**, and the remaining items are shipped as additional stock becomes available.
4. Once all items have shipped, the order changes to **Shipment Requested**.

:::note
The related operational scenario is covered in detail in [Common Situations — Partial Shipment / Split Delivery](../use-cases/partial-shipment-split-delivery).
:::
