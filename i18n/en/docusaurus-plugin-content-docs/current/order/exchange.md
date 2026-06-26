---
sidebar_position: 6
---

# Exchange Processing (Exchange)

An exchange is a claim in which the **original product is collected and a new product is sent**. Look them up via the **Order → Exchange List** menu on the left, and process them on the **EXCHANGE tab** of the order details. It is similar to a return, but with an added final step of **sending the new product**.

---

## Exchange Status Flow

```mermaid
graph LR
    A[Pending] --> B[Pickup Requested]
    B --> C[Pickup Ongoing]
    C --> D[Received<br/>Received]
    D --> E[Inspected<br/>Inspection complete]
    E --> F[Shipment Requested<br/>New product shipment requested]
    F --> G[Exchanged<br/>Exchange complete]
```

| Status | Meaning | Available actions |
|------|------|-------------|
| **Pending** | Exchange received, awaiting pickup | Edit recipient, cancel |
| **Pickup Requested / Ongoing** | Collecting the original product | Edit recipient, cancel |
| **Received** | Original product received | Inspect (Refund Grading), cancel |
| **Inspected** | Inspection complete | Request shipment of new product (Request Shipment) |
| **Shipment Requested** | New product shipment in progress | (Wait) |
| **Exchanged** | New product sent | (Closed) |

---

## Exchange Processing Steps

Expand the exchange card on the **EXCHANGE tab** of the order details screen to process it.

### 1. Collection Stage

- Collect the original product the same way as a return (Pickup Requested → Ongoing → Received).
- If the delivery address for the new product needs to change, edit it with **"Edit Recipient Info"**. (Only possible before shipment.)

### 2. Inspection (Refund Grading)

Once the original product is received and reaches **Received** status, inspect it.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_exchange_grading.mov" />
  Your browser does not support the video tag.
</video>

1. Click the **"Refund Grading"** button.
2. Assign a **grade (A/B/C)** to each quantity of the collected product. (Grading criteria are the same as in [Return Inspection](./return#3-입고-확인-후-검수-및-환불-refund).)
3. Once you confirm the inspection, the status changes to **Inspected**.

### 3. Request Shipment of New Product (Request Shipment)

1. When the status becomes **Inspected**, the **"Request Shipment"** button appears.
2. Click it to request shipment of the **new product (Resend)**.
3. In the **Resend Shipment Information** of the EXCHANGE tab, you can check the new product's shipment number, tracking number, and status.
4. Once the new product has been sent, the status becomes **Exchanged**.

---

## Canceling an Exchange

You can cancel an exchange up until inspection begins.

1. On the EXCHANGE tab, click the **"Cancel Exchange"** button.
2. Cancelable statuses: **Pending / Pickup Requested / Pickup Ongoing / Received**
3. After **Inspected** (inspection complete, new product shipment in progress), it cannot be canceled.

You can also select multiple items in the **Exchange List** and cancel them at once with **"Bulk Cancel"**.

:::note
For responses to various exchange situations, see [Common Situations — Exchange Scenarios](../use-cases/exchange-scenarios).
:::
