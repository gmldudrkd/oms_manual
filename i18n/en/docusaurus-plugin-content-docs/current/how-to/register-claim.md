---
sidebar_position: 3
unlisted: true
---

# Register Claim

## What Is a Claim?

A claim is a unit for managing **post-order requests**. Returns, exchanges, cancellations, and reshipment requests are all managed as claims.

## Claim Types

| Type | Description |
|------|-------------|
| Cancel (CANCEL) | Cancel an order or some items |
| Return (RETURN) | Return delivered products -> refund |
| Return Force Refund (RETURN_FORCE_REFUND) | Special return -> immediate refund |
| Exchange (EXCHANGE) | Return delivered products -> ship other products |
| Reshipment (RESHIPMENT) | Reship after a shipment failure |

## Responsibility

| Type | Description | Examples |
|------|-------------|----------|
| Customer Responsibility (CUSTOMER) | Caused by the customer | Change of mind, size mismatch |
| Operation Responsibility (OPERATION) | Caused by the company/carrier | Wrong delivery, product defect, delivery damage |

## Claim Registration Procedure

1. Go to the order detail screen.
2. Click **Register Claim**.
3. Select type, reason, and responsibility.
4. Select target products and quantities.
5. Complete registration.

> When a claim is registered, a **Return**, **Exchange**, or **Reshipment** entity is automatically created depending on the claim type.
