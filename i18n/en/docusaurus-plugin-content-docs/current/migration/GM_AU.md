---
sidebar_position: 4
---

# GM_AU Core Operations

> The Gentle Monster AU entity is being integrated into IIC OMS.  
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
> Existing System
![GM OMS Overview](/img/gm_oms_order_detail.png)

> New System
![GM OMS Overview](/img/iic_oms_order_detail.png)


### Return, Exchange, Reshipment List
| Existing System | New System | 
|------------|------------|
| (None) | **Order > Return List** | 

#### ✅ Changes
1. Return, exchange, and reshipment cases that were previously checked together in General Orders are now separated into a dedicated list.

> New System
![GM OMS Overview](/img/iic_oms_list.png)

###  Export
#### ✅ Changes
1. The Export feature that was previously handled from General Orders is now separated into its own menu.
 
--- 

## ⌛ Order Status

> Order status values have changed.  
> Status is managed separately for Order, Shipment, and Return.
 
### Order Status
 
> In the new system, order status is managed in two separate areas: **Order** and **Shipment**.
 
 
 ![GM OMS Overview](/img/order_status_au.png)
 

 
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

### RX Status
#### ✅ Changes
[GM - AU]
- Receives RX Confirm/Reject from .COM
- After completion, the tracking number is tracked during customer delivery and the status is updated to Delivered

![GM OMS Overview](/img/iic_oms_rx_au.png)

--- 


### Claim Status Comparison (Legacy vs New)
> Return  

| Legacy | New | Description |
|--------|------------|-----|
| ReqReturn | **Pending** | Return request completed |
| ReqPickup | **Pickup Requested** | Return intake in progress |
| Refund | **Refund** | Received; customer refunded |

👉 For more details about order status codes, refer to the [Status Codes](/docs/reference/status-codes) document.

## 📢 Claim Handling
### Cancel

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Orders can be canceled in Req-Allocation status using the 'Cancel Order' button (partial or full cancellation). | 'Cancel Order' can be used from Pending until before the Shipment status becomes Picking Requested (partial or full cancellation). |
|  | 'Cancel Shipment' can be used until before the Shipment status becomes Shipped (full shipment cancellation). |


> Existing System

![GM OMS Overview](/img/gm_oms_cancel.png)

> New System

#### 📹 <a href="https://drive.google.com/file/d/1hAjB7lYmQ-IZqXa2CeKfZURHoKq0S3Lj/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>



### Return
 
#### ✅ Changes

1. The Change Status button has been changed to Register Claim.
2. Register Claim supports all claim types, including Return and Force Refund.
3. The Force Refund feature has been added.
    - [Force Refund]: Process a refund without receiving the product due to a strong customer complaint or a defect.

> Registration Method  

| Existing System | New System |
|------------|------------|
| Order > Change Status | **Order > Register Claim**|
| Order > Manual Shipment | **Order > Register Claim > Reshipment**|


> Existing System

#### 📹 <a href="https://drive.google.com/file/d/19q2fHNf729mxFJfJ6XEf9ix3jOc3NTnI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

> New System

#### 📹 <a href="https://drive.google.com/file/d/1-SNRGJRRoQXKi9KyRQUmrs8FKWLVU_sI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

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
| Inventory > Status/Distribution | **Stock > Overview**|

1. Divided into Online Stock Setting and Channel Stock Setting tabs.
   - [Online Stock Setting]: Handles overall stock.
   - [Channel Stock Setting]: Handles stock distributed to channels.
2. For more detailed field information, refer to the [stock-overview](/docs/stock/overview) document.

### Channel Stock Distribution Rate Setting

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Channel Distribution Rate + Product Distribution Rate| **Stock > Distribution Setting**|

- Channel-level and product-level distribution rate settings are integrated into one menu, 'Distribution Setting', and separated by tabs.
    - [Channel Default Rate] tab: Set the default distribution rate by channel.
    - [Product Rate] tab: Set the distribution rate by product.

> New System

#### 📹 <a href="https://drive.google.com/file/d/10s4eoyF5_4bFRcXDRsc842Vl-enuyOiQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Safety Stock Setting

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Safety Stock | **Stock > Online Stock Setting tab > 'Change Safety Stock'**|

> Existing System
#### 📹 <a href="https://drive.google.com/file/d/1Aq7yHJAv0hzb7f3Q2-cqCezxJD9ZFsgg/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

> New System
#### 📹 <a href="https://drive.google.com/file/d/1kh7fjXzkOBICnNUd5sx6xVxUft7sRq2J/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Channel Stock Send Status Setting

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Unlink | **Stock > Channel Stock Setting tab > 'Change Channel Send Status'**|

- Feature definition: Sets whether stock is sent to the channel during channel distribution after end-of-day stock is received.

> New System

#### 📹 <a href="https://drive.google.com/file/d/1WNKHbfG5H3xsoIh-0b5uxPVFX7Ows-rs/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Stock Transfer
#### ✅ Feature Definition 
- After end-of-day stock distribution, use this feature to move the stock needed for each channel.
- When necessary, move the stock in a product's Undistributed Qty to a specific channel.
#### ✅ Feature Location
- Stock > Online Stock Setting tab > 'Stock Transfer' button
#### ✅ Configurable Search and Product Conditions
- Search condition: When the selected product has only one channel.
- Product condition: When the selected product's **Channel Send Status is all 'ON'**.
#### ✅ How to Use
1. Check the selected product's information, its current available stock (Available Qty), and its undistributed stock (Undistributed Qty).
2. Enter the **additional stock quantity** to send to each product in Transfer Stock.
    - Example of the resulting sent stock value ⇒ `Available Stock : 1 / Transfer Stock : 4 → Transferred Stock : 5`
    - If the entered quantity is greater than the selected product's Undistributed Stock by even one, the transfer is not allowed.
    - **Entering negative stock (deducting stock) is not possible.**
3. When the 'save' button is clicked, the transferred stock behaves as follows.
    1. If unallocated stock exists, it is allocated.
    2. The remaining stock is sent to the channel **immediately**.

### Send Stock Quantity to Channel Immediately

#### ✅ Feature Definition 
- This feature lets you send the current Available quantity to a channel immediately.
- Use it when you need to temporarily pause sales or reflect stock after a pre-order ends.
- Based on the Available quantity, it can be applied to only one channel at a time.
#### ✅ Feature Location
- Stock > Channel Stock Setting tab > 'Send Available Qty' button
#### ✅ Configurable Search and Product Conditions
- Product condition: It can be applied to only one channel at a time.
#### ✅ How to Use
1. Check the selected product's information and its current available stock (Available Qty).
2. Click the 'Send Available Qty' button.
3. Check the Available Qty information at the time of clicking.
3. When the 'save' button is clicked, the stock is sent to the channel immediately.

![Send Stock Quantity to Channel Immediately](/img/send_available_qty.png)