---
sidebar_position: 5
---

# Stock Mismatch / Sync Delay Scenario

## Situation

ERP (SAP) stock and OMS channel stock do not match.

## Causes

- Stock synchronization from ERP may be delayed
- Temporary quantity differences due to simultaneous orders
- Differences between physical stock in the logistics center and system stock

## How to Check

1. Check **stock change history** to review recent changes.
2. Check **undistributed stock** to see quantities not yet distributed to channels.
3. Check **available stock by channel** to confirm actual sellable quantity.

## How to Respond

- Wait for stock synchronization, which usually recovers automatically
- Resolve imbalance by transferring stock between channels
- Temporarily allow sales by setting preorder
- Manually assign undistributed stock to the relevant channel
