---
sidebar_position: 5
---

# Partial Inspection Refund

> **Situation**: Several items were collected through a return, but some are resalable (A) while others are defective (B/C), so the grades are mixed.

## Response Sequence

1. When the return reaches the **Received** (inbound / inspection) status, open the **Product Inspection Result** on the RETURN tab.
2. **Assign a grade individually to each collected quantity.**

   | Grade | Meaning | Stock Handling |
   |------|------|-----------|
   | **A** | Resalable | Returned to normal stock |
   | **B** | Minor defect | Separate stock pool |
   | **C** | Not sellable | Disposed |

3. After **assigning a grade to every quantity**, confirm the refund with **"Refund"**.

## Checkpoints

- If even one grade is left blank, the refund cannot proceed.
- The refund amount may vary depending on the grade and the **fault (Fault)** (per brand policy).
- For cases that must be refunded immediately without inspection, use **Force Refund**; the return card then displays a **"FORCE REFUND"** badge.

For the detailed inspection procedure, see [Return Processing — Inspection and Refund](../order/return#3-입고-확인-후-검수-및-환불-refund).
