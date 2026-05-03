---
sidebar_position: 5
---

# Return Approval / Rejection + Refund After Receipt

## Full Return Process

```
1. Claim registered -> Return created (PENDING)
2. Pickup requested (PICKUP_REQUESTED)
3. Pickup ongoing (PICKUP_ONGOING) -> pickup completed
4. Received (RECEIVED)
5. Inspection completed -> refunded (REFUNDED)
```

## Inspection Complete

**Inspection input fields:**

| Field | Description | Required |
|-------|-------------|----------|
| Product Code (productCode) | Code of the returned product | Required |
| Quantity (quantity) | Inspection quantity | Required |
| Grade (grade) | A / B / C | Required |

**Inspection rules:**
1. A grade must be entered for every returned product. Missing values are not allowed.
2. The inspected quantity must exactly match the return quantity.
3. Only A, B, and C grades are valid. NONE and CANCEL grades cannot be entered.

**Inspectable statuses:** PICKUP_REQUESTED, PICKUP_ONGOING, RECEIVED

## Force Complete

Use this when completion is required without inspection:

- Only available in `Received (RECEIVED)` status
- Uninspected products are automatically assigned the `CANCEL` grade
- Refund proceeds normally

## Return Cancellation

Returns can be canceled in the following statuses:

- PENDING, PICKUP_REQUESTED, PICKUP_ONGOING, RECEIVED

## Recipient Information Change

Change the pickup address for returned products:

- Only available in `Pending (PENDING)` status

## Estimated Refund Amount Search

You can preview the refund amount during return processing:

- Estimated refund amount is calculated based on the original payment amount
- Includes taxes, duties, and shipping fees

> **Brand Differences**: ATiissu calculates the estimated refund amount inside OMS, while Nuflaat calculates it through an external API.
