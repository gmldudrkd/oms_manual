---
sidebar_position: 3
---

# Shipment Rejection -> Reshipment Scenario

## Situation

WMS rejected picking due to a stock mismatch.

## Processing Flow

```mermaid
sequenceDiagram
    participant OMS
    participant WMS

    OMS->>WMS: Shipment request (Shipment #1)
    WMS-->>OMS: Picking rejected (PICKING_REJECTED)

    Note over OMS: Operations decides to reship

    OMS->>OMS: Create reshipment claim (RESHIPMENT)
    OMS->>WMS: Create Reshipment
    WMS-->>OMS: Picking/packing/delivery completed
    OMS->>OMS: Complete order
```

> **Reshipment Feature Expansion (OMS-1998)**: Shipment cancellation, loss handling, and rejection-related features were added for reshipments as well. If a reshipment is lost during delivery, it transitions to `LOST`, and a reshipment claim can be registered again.
