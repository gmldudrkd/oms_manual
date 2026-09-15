---
sidebar_position: 7
---

# Reshipment Processing (Reshipment)

A reshipment is **resending an item whose shipment failed or was lost**. The same product is sent again at no additional charge to the customer. Look them up via the **Order → Reshipment List** menu on the left, and process them on the **RESHIPMENT tab** of the order details.

---

## When Reshipment Occurs

| Cause | How it proceeds |
|-----------|-----------------|
| **Picking Rejected** | Shipment failed due to insufficient stock, etc. → reship after securing stock |
| **Delivery Lost (Lost)** | Lost during delivery → a new shipment is created when reshipment is chosen |
| **Manual registration (Register Claim)** | Registered directly by an operator when only a **shipment without collection** is needed, e.g. for defects or losses |

### Registering a Reshipment Manually

On the order details screen, selecting **Register Claim → Claim Type = Reshipment** creates **a shipment only**, with no pickup (collection) step. It corresponds to a manual shipment, and is used when a product must be sent again — for a defect or a loss — but the original product does not need to be collected.

Items registered this way appear in **Order → Reshipment List** and on the **RESHIPMENT tab** of the order details.

:::warning Reshipments consume channel stock
**Reshipments arising from exchanges, defects, or losses — not from an order — also deduct channel stock.** Without channel stock the reshipment cannot proceed, so use [Stock Transfer](../stock/overview#stock-transfer) to move stock into the channel first.
:::

---

## Reshipment Status Flow

Reshipment follows the same status flow as a regular shipment.

```mermaid
graph LR
    A[Picking Requested] --> B[Picked] --> C[Packed] --> D[Shipped] --> E[Delivered]
    A -.->|Out of stock| F[Picking Rejected]
```

---

## Reshipment Processing Steps

Expand the reshipment card on the **RESHIPMENT tab** of the order details screen to process it.

### Re-Ship

1. When the reshipment status is **Picking Rejected**, the **"Re-Ship"** button appears.
2. Click it to request shipment again with stock secured.

### Edit Recipient Info

If you need to change the delivery address or contact, use the **"Edit Recipient Info"** button.

### Cancel Reshipment

1. When the status is **Picking Requested**, you can cancel with the **"Cancel Reshipment"** button.
2. If the button shows **"(WMS Confirm needed)"**, it means the action requires warehouse (WMS) confirmation.

:::note
The full Picking Rejected → reshipment flow is covered step by step in [Common Situations — Shipment Rejection and Reshipment](../use-cases/shipment-rejection-reshipment).
:::
