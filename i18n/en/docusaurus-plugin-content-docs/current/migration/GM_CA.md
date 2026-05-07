---
sidebar_position: 1
---

# 26.05.07 Core Operations

> Gentle Monster US and CA entities are being integrated into IIC OMS.  
> All features used in the existing system can still be used in the new system.  
> This document answers the question: **"Where do I perform the tasks I used to do in the existing system?"**

## 🔒 Login & Account

| | Existing System | New System |
|--|------------|------------|
| **Login method** | Separate login required for each brand and entity | Access all brands/entities with **one login** |
| **Brand/entity switching** | Move to another URL and log in again | Switch immediately from the **Brand & Corp** dropdown at the top |
| **Page after switching** | Start again from the beginning | Stay on the current menu; only the data changes |

**How to switch brand/entity in the new system:**

1. Click the **Brand & Corp** area at the top right of the screen.
2. Select the desired brand/entity combination from the dropdown.
3. The data switches to the selected entity immediately without refreshing the page.

#### 📹 <a href="https://drive.google.com/file/d/107bKYhSOBC6oniR9Y1PXStNxDkCFbFWH/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

:::tip
There is also a Timezone dropdown. When working with overseas entities, you can view data based on the local time.
:::

---

## 📎 Order

### Overview

| Existing System | New System |
|------------|------------|
| Order > General Orders (top Summary) | **Order > Overview** |

#### ✅ Changes
1. The dashboard is divided into Order and Claim tabs.
2. Details are separated into Order, Shipment, Store Pickup, Claim, and other sections, making it easier to understand the current status.

> Existing System

![GM OMS Overview](/img/gm_oms_overview.png)

> New System

#### 📹 <a href="https://drive.google.com/file/d/1rfRH8UesjtUJUGShD1iRe8ajWfMCG6Uv/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Order List

| Existing System | New System |
|------------|------------|
| Order > General Orders & Prescription Orders | **Order > Order List** |

#### ✅ Changes
1. ⚠️ Prescription menu has been integrated. Check it in Order List by filtering with `Order Attribute > Type = Rx`.
2. The filter structure has changed. In the existing system, status search was used to distinguish cases. In the new system, this is separated into two filters: Order Status Filter and Fulfillment Status Filter.
3. Brand, Corp, and Channel columns have been added.

> Existing System

#### 📹 <a href="https://drive.google.com/file/d/1R5d1fs1HeKcRPkMownLz3AZRsPGiF_ns/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

> New System

#### 📹 <a href="https://drive.google.com/file/d/1GHRh2cpE6IMLSUt7icIOG6G5GOe-Svww/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

### Order Detail Tab
#### ✅ Changes
1. Order-related information that was previously shown together in Order Detail is now separated into tabs.
2. Detailed order, claim, and log information can be viewed by tab.

> New System

![GM OMS Overview](/img/iic_oms_order_detail.png)


### Return, Exchange, Reshipment List
| Existing System | New System |
|------------|------------|
| (None) | **Order > Return, Exchange, Reshipment List** |

#### ✅ Changes
1. Return, exchange, and reshipment cases that were previously checked together in General Orders are now separated into a dedicated list.

> New System

![GM OMS Overview](/img/iic_oms_list.png)

### Export
#### ✅ Changes
1. The Export feature that was previously handled from General Orders is now separated into its own menu.

> Existing System

![GM OMS Overview](/img/gm_oms_export.png)

> New System

![GM OMS Overview](/img/iic_oms_export.png)

---

## ⌛ Order Status

> Order status values have changed.  
> Status is managed separately for Order, Shipment, Return, and Exchange.

### Order Status Comparison (Legacy vs New)

> In the new system, order status is managed in two separate areas: **Order** and **Shipment**.

| Legacy | New · Order | New · Shipment | Description |
|--------|------------|---------------|------|
| After | **Pending** | | Customer payment completed |
| Release | **Collected** | | Order stock allocation after payment completion (1 hour later), or allocation failed |
| Confirmed | **Partly Confirmed** | | Partial order stock allocation succeeded |
| Confirmed | **Partial Shipment Requested** | | Partial WMS outbound request created |
| Req-Allocation | **Shipment Requested** | **Picking Requested** | Full order WMS outbound request created |
| Allocation | | **Picked** | WMS picking completed |
| Packed | | **Packed** | WMS packing completed |
| Shipping | | **Shipped** | Shipment completed from the warehouse |
| Lost | | **Lost** (`final shipment status`) | Shipment lost during delivery |
| | | **Delivered** (`final shipment status`) | All deliveries for the order are completed |
| Delivered | **Completed** | **Delivered** (`final shipment status`) | All deliveries for the order are completed |
| Cancel | **Canceled** | **Canceled** (`final shipment status`) | Order canceled after collection |

### Key Changes

**1. Status areas are separated**
- Legacy managed the entire flow through Order status, but the new system separates **Order** (order collection/confirmation) and **Shipment** (outbound/delivery).
- The previous single `Req-Allocation` status is now represented by two statuses: `Shipment Requested` in the Order area and `Picking Requested` in the Shipment area.

**2. Confirmed is divided into two statuses**
- Legacy `Confirmed` is divided into two statuses in the new system depending on the situation.
  - Partial stock allocation succeeded → `Partly Confirmed`
  - Partial WMS outbound request created → `Partial Shipment Requested`

> Handling Partly Confirmed

:::note
When an order is in `[Partly Confirmed]` status, the operator must choose whether to proceed with shipment or cancel it.
:::

#### 📹 <a href="https://drive.google.com/file/d/1ueoyuWwkNyafqdEpyF1TFzgd0n6ENuw-/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Claim Status Comparison (Legacy vs New)
> Return

| Legacy | New | Description |
|--------|------------|-----|
| ReqReturn | **Pending** | Return request completed |
| ReqPickup | **Pickup Requested** | Return intake in progress |
| Pickup | **Pickup Ongoing** | Pickup in progress |
| Receive | **Received** | Awaiting receipt confirmation |
| Refund | **Refund** | Received; customer refunded |

> Exchange
> In the new system, reshipment is processed automatically after Inspected.

| Legacy | New | Description |
|--------|------------|-----|
| Req-Exchange | **Pending** | Return request completed |
| Exch-ReqPickup | **Pickup Requested** | Return intake in progress |
| Exch-Pickup | **Pickup Ongoing** | Pickup in progress |
| Exch-Return | **Received** | Awaiting receipt confirmation |
| Exchange | **Inspected** | Received; before reshipment |


👉 For more details about order status codes, refer to the [Status Codes](/docs/reference/status-codes) document.

### RX Status
#### ✅ Changes
- Receives RX Confirm/Reject from BO
- After completion, the tracking number is tracked during customer delivery and the status is updated to Delivered

![GM OMS Overview](/img/iic_oms_rx.png)

---

## 📢 Claim Handling
### Cancel

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Orders can be canceled in Req-Allocation status using the 'Cancel Order' button (partial or full cancellation). | 'Cancel Order' can be used from Pending until before the Shipment status becomes Picking Requested (partial or full cancellation). |
| | When the Shipment status is Picking Requested, 'Cancel Shipment' can be used (full shipment cancellation). |

:::note
👉 For more detailed usage, refer to the [cancel-shipment-partial-shipment](/docs/how-to/cancel-shipment-partial-shipment) document.
:::

> Existing System

![GM OMS Overview](/img/gm_oms_cancel.png)

> New System

#### 📹 <a href="https://drive.google.com/file/d/1hAjB7lYmQ-IZqXa2CeKfZURHoKq0S3Lj/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>



### Return / Exchange / Reshipment

#### ✅ Changes

1. The Change Status button has been changed to Register Claim.
2. Register Claim supports all claim types, including Return, Exchange, Reshipment, and Force Refund.
3. Pickup Option and Force Refund features have been added.
    - [Pickup Option > Do Not Request Pickup]: Use when the returned quantity or product is different from what has already been received.
    - [Force Refund]: Process a refund without receiving the product due to a strong customer complaint or a defect.

> Registration Method

| Existing System | New System |
|------------|------------|
| Order > Change Status | **Order > Register Claim** |
| Order > Manual Shipment | **Order > Register Claim > Reshipment** |

:::note
👉 For more detailed usage, refer to the [register-claim](/docs/how-to/register-claim) document.
:::


> Existing System

#### 📹 <a href="https://drive.google.com/file/d/19q2fHNf729mxFJfJ6XEf9ix3jOc3NTnI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

> New System

#### 📹 <a href="https://drive.google.com/file/d/1-SNRGJRRoQXKi9KyRQUmrs8FKWLVU_sI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>



### Lost

| Case | Existing System | New System |
|------|------------|------------|
| Lost outbound shipment | Click Lost in Shipping status -> processed as Cancel | Click Lost in Shipping status -> choose Force Refund or Reshipment |
| Lost inbound return | Click Lost in Pickup status -> processed as Refund | Cancel the lost return case -> use Register Claim to choose Force Refund or Reshipment |

#### Notes
- After selecting the LOST button and clicking Confirm, the status immediately changes to Lost.
- If Force Refund or Reshipment was not processed on the next screen, it must be handled through Register Claim with Lost selected as the reason.

#### 📹 <a href="https://drive.google.com/file/d/11ThdwHfmMm2cLGewoud1nspeVuF64vDg/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

---

## 📦 Stock

### Menu Name Change
  - Inventory -> Stock

### Stock Process Change
#### ✅ Changes
| / | Existing System | New System |
|-----|------------|------------|
| ERP stock receipt | Received hourly | Distributed once per day |
| Automatic channel stock distribution | Distributed hourly | Distributed once per day |
| Manual channel stock transfer | X | Available whenever stock needs to be moved to a channel (**increase only**) |
| ERP updated stock receipt | X | When stock is moved to the online warehouse |

### Stock Search

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Status/Distribution | **Stock > Overview** |

1. Divided into Online Stock Setting and Channel Stock Setting tabs.
   - [Online Stock Setting]: Handles overall stock.
   - [Channel Stock Setting]: Handles stock distributed to channels.
2. For more detailed field information, refer to the [register-claim](/docs/how-to/register-claim) document.

### Channel Stock Distribution Rate Setting

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Channel Distribution Rate + Product Distribution Rate | **Stock > Distribution Setting** |

- Channel-level and product-level distribution rate settings are integrated into one menu, 'Distribution Setting', and separated by tabs.
    - [Channel Default Rate] tab: Set the default distribution rate by channel.
    - [Product Rate] tab: Set the distribution rate by product.


> Existing System

ADD_IMAGE_HERE

> New System

#### 📹 <a href="https://drive.google.com/file/d/10s4eoyF5_4bFRcXDRsc842Vl-enuyOiQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Safety Stock Setting

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Safety Stock | **Stock > Online Stock Setting tab > 'Change Safety Stock'** |

> Existing System

#### 📹 <a href="https://drive.google.com/file/d/1Aq7yHJAv0hzb7f3Q2-cqCezxJD9ZFsgg/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

> New System

#### 📹 <a href="https://drive.google.com/file/d/1kh7fjXzkOBICnNUd5sx6xVxUft7sRq2J/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

### Updated Stock Setting

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Placeholder | **Stock > Channel Stock Setting tab > 'ERP Update'** |

1. Placeholder feature definition
    - This feature was used for pre-sales when physical stock existed in ERP but not in OMS because updated stock moved to ERP had not been received.
2. ERP Update field definition
    - Stock moved to the online warehouse in ERP is received immediately and shown in the ERP Update field.

:::note
Because stock moved within ERP can now be received immediately, the Placeholder feature is no longer needed and has been removed. The information can be checked through ERP Update instead.
:::

> Existing System

![GM OMS Overview](/img/gm_oms_placeholder.png)

> New System

![GM OMS Overview](/img/iic_oms_erpupdate.png)


### Channel Stock Send Status Setting

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Unlink | **Stock > Channel Stock Setting tab > 'Change Channel Send Status'** |

- Feature definition: Sets whether stock is sent to the channel during channel distribution after end-of-day stock is received.

> Existing System

ADD_IMAGE_HERE

> New System

#### 📹 <a href="https://drive.google.com/file/d/1WNKHbfG5H3xsoIh-0b5uxPVFX7Ows-rs/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

---

## 📄 SCM Handling

:::note
This section is for CA SCM teams using local logistics.
:::

### Grading on Return/Exchange Receipt
#### 1. Return Receipt Grading
  - The 'Refund' button is enabled when a return has been received and is in [received] status.
  - Clicking Refund opens a modal where grading can be processed by product.
  - After all products are graded and Confirm is clicked, the refund is processed automatically.

#### 📹 <a href="https://drive.google.com/file/d/1SYM_vIcti5_JyXQuBpq7m-Ram_aUudCu/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

#### 2. Exchange Receipt Grading
  - The 'Inspect' button is enabled when an exchange product has been received and is in [received] status.
  - Clicking Inspect opens a modal where grading can be processed by product.
  - After all products are graded and Confirm is clicked:
    - If there is no exchange shipment in progress, the exchange shipment is automatically created.

#### 📹 <a href="https://drive.google.com/file/d/1eUtG6Sc7NMs_AkCibPJa01_MFK_JkFRv/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

### Crcode Printing
#### ✅ Feature Definition
> This feature prints the serial card packed together with the product during shipment.  
> It is an external system, not a feature supported by OMS.

#### ✅ How to Use
1. Go to the [Crcode site](https://crcode.gentlemonster.com/index.php).
2. In the serial creation menu, click the Online US Renewal button at the bottom.
3. Enter any title.
4. Select the shipment date.
5. Check Canada, add the products and quantities to print, then click the register button.
6. In the generated menu, click the 2020 serial button and print.

#### 📹 <a href="https://drive.google.com/file/d/1pukbBNIv0POu3wB7oITO6-Kw9W_6RgVa/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>
