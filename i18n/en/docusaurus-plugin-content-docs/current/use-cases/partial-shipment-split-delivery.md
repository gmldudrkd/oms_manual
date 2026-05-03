---
sidebar_position: 1
---

# Partial Shipment / Split Delivery Scenario

## Situation

A customer ordered two units of product A and one unit of product B, but only product A has stock.

## Processing Flow

```mermaid
sequenceDiagram
    participant Operations
    participant OMS
    participant WMS

    Operations->>OMS: Request partial shipment (only 2 units of product A)
    OMS->>OMS: Order status -> PARTIAL_SHIPMENT_REQUESTED
    OMS->>WMS: Create Shipment #1 (product A)
    WMS-->>OMS: Picking/packing/delivery completed

    Note over OMS: Waiting for product B stock arrival

    Operations->>OMS: Request remaining shipment (1 unit of product B)
    OMS->>OMS: Order status -> SHIPMENT_REQUESTED
    OMS->>WMS: Create Shipment #2 (product B)
    WMS-->>OMS: Picking/packing/delivery completed

    OMS->>OMS: All shipments delivered -> order COMPLETED
```

## Key Points

- One order can be split into multiple Shipment cases
- All shipments must become `Delivered (DELIVERED)` before the order becomes `Completed (COMPLETED)`
- When partial shipment is requested, the shippable quantity of remaining items is calculated automatically
