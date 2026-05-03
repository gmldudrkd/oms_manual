---
sidebar_position: 2
---

# Shipment Cancellation / Partial Shipment

## Shipment Cancellation

You can cancel a shipment if it has not yet been handed over to the carrier.

**Cancellation conditions:**
- Shipment status is `Picking Rejected (PICKING_REJECTED)`
- Cancellation reason is required

**Procedure:**
1. Select the shipment from the order detail page.
2. Click **Cancel Shipment**.
3. Enter the cancellation reason.
4. Complete cancellation. Allocated stock is restored automatically.

> **Cancellation is not available in `Shipped (SHIPPED)` status.** In this case, proceed with return processing.

## Partial Shipment

You can ship only some items in an order first.

**Procedure:**
1. Click **Request Partial Shipment** in the order detail page.
2. Select the products and quantities to ship.
3. Complete the partial shipment request.

**Status changes:**
- Partial shipment request -> order status changes to `Partial Shipment Requested (PARTIAL_SHIPMENT_REQUESTED)`
- When requesting shipment for remaining items -> changes to `Shipment Requested (SHIPMENT_REQUESTED)`

> **Split Delivery**: One order can be divided into multiple shipments. All shipments must be delivered before the order is completed.
