---
sidebar_position: 6
---

# Inventory Mismatch / Sync Delay (Inventory Mismatch)

> **Situation**: The stock quantity differs between the sales channel and OMS, or orders arrive in OMS late.

Because OMS exchanges data with external systems (sales channels, warehouses, ERP), temporary mismatches can occur due to differences in sync timing.

## Why It Happens

| Symptom | Cause |
|------|------|
| Order appears in OMS late | Channel order collection happens **periodically** (not in real time) |
| Channel has stock but OMS shows 0 | The stock distribution batch hasn't been applied yet |
| OMS stock is higher than the channel | Some shipment confirmations are missing/delayed |
| Invoice appears late | Status transmission from the warehouse (WMS) to OMS is delayed |

## Operator Verification Sequence

1. **Check the header Brand & Corp** — The most common cause is that you're viewing a different corporation, making it appear empty.
2. **Wait a moment, then Refresh** — Order collection and status transmission are periodic, so they will be reflected after some time.
3. **Check the [Stock History](../stock/history)** — Trace when and why the quantity changed.
4. **Check the distribution settings** — In [Channel Distribution Settings](../stock/distribution-setting), confirm that the ratios are as intended.
5. **Escalate to the system owner if it persists** — If it isn't resolved after a certain time, it may be an integration (channel/warehouse/ERP) issue, so pass it to the backend/infrastructure owner.

:::tip Expected Reflection Times (Reference)
- Order collection: takes some time depending on the channel (not real time)
- Shipment status / invoice: usually reflected within a few minutes
- Stock distribution: reflected on a daily-batch basis

If these times are significantly exceeded, it may be more than a simple delay, so ask the owner to investigate.
:::
