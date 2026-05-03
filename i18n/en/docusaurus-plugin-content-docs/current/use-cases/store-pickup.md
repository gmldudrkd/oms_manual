---
sidebar_position: 6
---

# Store Pickup Scenario

## Situation

A customer orders online and picks up the product directly at a store.

## Processing Flow

```
Order received (received method: STORE_PICKUP)
    |
Product arrives at the store (B2B outbound shipment)
    |
Store preparation completed (PREPARED)
    |
Customer visits store -> pickup completed (COMPLETED)
    |
Order completed
```

## Store Pickup Statuses

| Status | Meaning |
|--------|---------|
| PICKUP_REQUESTED | Created automatically when the order is created |
| SHIPPED | Product shipped from logistics center to store |
| PREPARED | Store completed preparation for customer pickup |
| COMPLETED | Customer picked up the product at the store |
| CANCELED | Store pickup canceled |

> **Store Pickup Feature (OMS-1913 ~ OMS-1917)**: Store pickup entities and event handling were newly developed. Store pickup status can be used as a filter in the order list.
