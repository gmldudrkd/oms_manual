---
sidebar_position: 4
---

# Delivery Loss Scenario

## Situation

A product is lost during delivery.

## Processing Flow

1. Mark the shipment as **lost** when its status is `Shipped (SHIPPED)`.
2. Shipment status changes to `Lost (LOST)`.
3. If redelivery is required, register a **reshipment claim**.
4. Reshipment is created and a new delivery proceeds.

> **Loss Handling Feature (OMS-1911)**: Loss handling was added for shipments and reshipments.
