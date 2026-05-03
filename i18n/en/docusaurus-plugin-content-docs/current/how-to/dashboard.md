---
sidebar_position: 7
---

# Dashboard Usage

## Dashboard Overview

The dashboard shows a **current status summary** for orders, shipments, store pickups, returns, exchanges, and reshipments at a glance.

> **Default search period**: Aggregated based on the last 30 days.

## Dashboard Structure

The dashboard is organized as domain-level cards. Each card is divided into **Pending / In Progress / Final** groups.

### Orders

| Group | Included Statuses |
|-------|-------------------|
| Pending | `PENDING` |
| In Progress | `COLLECTED`, `PARTLY_CONFIRMED`, `PARTIAL_SHIPMENT_REQUESTED`, `SHIPMENT_REQUESTED` |
| Final | `COMPLETED`, `CANCELED`, `DELETED` |

### Shipments

| Group | Included Statuses |
|-------|-------------------|
| In Progress | `PICKING_REQUESTED`, `PICKED`, `PACKED`, `SHIPPED` |
| Final | `CANCELED`, `PICKING_REJECTED`, `DELIVERED`, `LOST` |

### Store Pickups

| Group | Included Statuses |
|-------|-------------------|
| In Progress | `PICKUP_REQUESTED`, `SHIPPED`, `PREPARED` |
| Final | `COMPLETED`, `CANCELED` |

### Returns

| Group | Included Statuses |
|-------|-------------------|
| Pending | `PENDING` |
| In Progress | `PICKUP_REQUESTED`, `PICKUP_ONGOING`, `RECEIVED` |
| Final | `REFUNDED`, `CANCELED` |

### Exchanges

| Group | Included Statuses |
|-------|-------------------|
| Pending | `PENDING` |
| In Progress | `PICKUP_REQUESTED`, `PICKUP_ONGOING`, `RECEIVED`, `INSPECTED`, `SHIPMENT_REQUESTED` |
| Final | `EXCHANGED`, `CANCELED` |

### Reshipments

| Group | Included Statuses |
|-------|-------------------|
| In Progress | `PICKING_REQUESTED`, `PICKED`, `PACKED`, `SHIPPED` |
| Final | `DELIVERED`, `LOST`, `CANCELED` |

## Channel Filter

When you select a channel at the top of the dashboard, only data for that channel is aggregated.

> **Important**: Users can only see data for channels they have permission to access. If the user has no permission for a channel, that channel's counts are not included in the dashboard.

## Behavior When Clicking a Card

Clicking the number in each status group moves to a list screen filtered by that status.

- Click "In Progress" in the order card -> order list is filtered to in-progress statuses
- Click "Pending" in the return card -> return list is filtered to `PENDING`

> **Order Dashboard Expansion (OMS-1995)**: Store pickup aggregation was added to the dashboard.
