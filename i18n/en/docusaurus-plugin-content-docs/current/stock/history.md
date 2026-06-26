---
sidebar_position: 3
---

# Stock History

From the left menu **Stock → History**, you can review how a specific SKU's stock has changed over time using a **graph and table**. Use it to trace the cause of stock discrepancies or sudden changes.

---

## How to Search

Fill in all items in the search form at the top and run the search.

| Item | Description |
|------|------|
| **Start Date / End Date** | Search period (start date ≤ end date) |
| **Time Unit** | Aggregation unit — `Daily` / `Hourly` |
| **Search term** | Select `SAP Code` or `SKU Code` and enter the value (product name search requires at least 2 characters) |

---

## Viewing Results

### Graph

The stock trend for the selected SKU is shown as a **line graph**, so you can grasp the increase/decrease flow at a glance.

### Snapshot Table

The table shows stock at each point in time.

| Item | Description |
|------|------|
| **DateTime** | Snapshot time (click to view details) |
| Online Qty | ERP / ERP Update / Safety / Undistributed |
| Channel Qty | Channel / Distributed / Pre-order / Used / Shipped / Available |

- Click a **DateTime link** to open a window showing the detailed change history at that point in time.
- If today's date falls within the search period, a real-time log entry in the form **"[time] ~ Now"** is also displayed.

:::tip When stock doesn't match
If you see a discrepancy such as "the channel has stock but OMS shows 0," find the point of change in History and check the cause (distribution batch, bulk order, cancellation, etc.). For how to respond, see [Common Situations — Inventory Mismatch / Sync Delay](../use-cases/inventory-mismatch-sync-delay).
:::
