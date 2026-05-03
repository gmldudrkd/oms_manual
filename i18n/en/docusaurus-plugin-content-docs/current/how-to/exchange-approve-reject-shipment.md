---
sidebar_position: 6
---

# Exchange Approval / Rejection + Exchange Shipment

## Full Exchange Process

```
1. Claim registered -> Exchange created (PENDING)
2. Return pickup (same as return)
3. Received (RECEIVED)
4. Inspection completed (INSPECTED)
5. Exchange shipment requested (SHIPMENT_REQUESTED)
6. Delivered -> exchange completed (EXCHANGED)
```

## Exchange Shipment Management

An exchange is managed through a separate **ExchangeShipment** case.

**Exchange shipment statuses:**

| Status | Meaning |
|--------|---------|
| Picking Requested (PICKING_REQUESTED) | Picking requested to WMS |
| Picked (PICKED) | Product picking completed |
| Packed (PACKED) | Packing completed |
| Shipped (SHIPPED) | Handed over to the carrier |
| Delivered (DELIVERED) | Delivered to the customer |
| Picking Rejected (PICKING_REJECTED) | Rejected due to insufficient stock, etc. |
| Canceled (CANCELED) | Shipment canceled |
| Lost (LOST) | Lost during delivery |

**Available actions for exchange shipments:**

| Action | Condition | Description |
|--------|-----------|-------------|
| Change shipping recipient | PENDING ~ PICKUP_ONGOING | Change delivery address for the exchange product |
| Request shipment cancellation | Picking rejected status | Cancel exchange shipment |
| Mark lost | Shipped (SHIPPED) | Record delivery loss |
| Request reshipment | Picking rejected status | Create a new shipment |

## Exchange Cancellation

To cancel the full exchange:

- Only available in PENDING, PICKUP_REQUESTED, PICKUP_ONGOING, and RECEIVED statuses
- Return pickup and exchange shipment are both stopped when canceled
