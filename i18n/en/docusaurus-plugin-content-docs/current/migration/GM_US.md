---
sidebar_position: 2
---

# 26.05.11 New Features

> Gentle Monster US and CA entities are being integrated into IIC OMS.
> For features previously available in the existing system, please refer to the [26.05.07 Core Operations](./GM_CA.md) document.
> This document is a guide on **"how to use the newly added features"**.


## 📦 Stock
### Stock Transfer
#### ✅ Feature Definition
- After end-of-day stock distribution, use this feature to move the stock required for each channel.
- When needed, transfer stock from a product's Undistributed Qty to a specific channel.
#### ✅ Feature Location
- Stock > Online Stock Setting tab > 'Stock Transfer' button
#### ✅ Available Search and Product Conditions
- Search condition: Only when the selected products belong to a single channel
- Product condition: **All selected products must have Channel Send Status set to 'ON'**
#### ✅ How to Use
1. Check the selected products' information, current Available Qty, and Undistributed Qty.
2. Enter the **additional stock quantity** to be transferred for each product in Transfer Stock.
    - Example of transferred stock value ⇒ `Available Stock: 1 / Transfer Stock: 4 → Transferred Stock: 5`
    - If the entered quantity exceeds the Undistributed Stock of any selected product, the transfer will fail.
    - **Negative stock input (stock deduction) is not allowed.**
3. When you click the 'save' button, the transfer is processed as follows:
    1. If unallocated stock exists, it is allocated first.
    2. Remaining stock is **immediately** sent to the channel.

<!-- <video controls width="100%">
  <source src="ADD_VIDEO_HERE" type="video/mp4" />
</video> -->


### Pre-order
#### ✅ Feature Definition
- Use this feature when you want to start selling a product before physical stock is on hand, when stock arrival is guaranteed.

#### ✅ Feature Location
- Stock > Online Stock Setting tab > 'Pre-order Setting' button
#### ✅ Available Search and Product Conditions
- Search condition: `{a single product selected}` or `{multiple products selected + a single channel selected}`
- Product condition: **The selected product's 'Channel Send Status' must be 'ON'**
#### ✅ How to Use
1. Settings are **immediately sent to the channel** when saved (on 'save').
2. Set the pre-order quantity and end date. The pre-order will be active and sent to the channel during this period.
    - The end time can be set to unlimited.
    - Only a 'date' can be selected for the end date. Pre-order stock no longer applies starting from the end-of-day stock received the day after the selected date.
3. The configured pre-order quantity is calculated by the formula below and **immediately sent to the channel**.
    - **`(Distributed Qty + pre-order Qty) - (Used Qty + Shipped Qty)`**
    - ex) Pre-order Expired At: 2025-10-01 / pre-order qty: 100
        - 10.01 end-of-day stock 1 unit → 101 units sent to the channel
        - 10.02 end-of-day stock 0 units → 0 units sent to the channel
4. The value is updated each time stock is sent to the channel (end-of-day distribution, Stock Transfer).
5. **Allocation of orders received during the pre-order period follows the end-of-day stock quantity.**
    - When end-of-day stock is 1 or more and an order is received → fulfilled by the available quantity
    - When end-of-day stock is 0 and an order is received → kept in 'Collected' status
6. The pre-order information on the overview is shown until the end (Pre-order Expired At).
7. How to edit
    - You can edit by clicking the Pre-order Expired At shown on the overview.
    - The pre-order quantity can be edited starting from 0. **When saved after editing, it is sent again using the same formula.**
        - **`(Distributed Qty + pre-order Qty) - (Used Qty + Shipped Qty)`**

:::note
For this Veggie Collection launch, this feature cannot be used because store pickup is included.
The reason is that pre-order is designed on the assumption that there is no outbound shipment before launch — only sold quantities are deducted in management.
However, store pickup requires moving stock to stores before launch, and this movement is treated the same as an outbound shipment, so the quantity disappears from the calculation when Shipped is reset the next day.
As a result, more pre-order stock appears to remain than actually exists, creating an overselling risk.

Therefore, in this launch we prioritize stable operations and continue with the existing approach. Applying the Pre-order feature will be reconsidered after the system is enhanced in the future.

[Example]
1. Pre-order quantity: 100 units
2. Pre-order sales: 80 units (20 via store pickup)
3. 20 units pre-moved to stores (treated as Shipped Qty)
4. The next day, when end-of-day stock is received, the 20 units reset to 0
5. Pre-order sales appear as if only 60 units were sold
    - **`(Distributed Qty + Pre-order Qty) - (Used Qty + Shipped Qty)`**
    - ( 0 + 100 ) - ( 60 + 0 )
:::

## 🛍️ Store pickup
> A feature where customers purchase products online and pick them up directly at a store.

:::warning
In this launch, store pickup can only be selected when ordering `pre-order` products.
:::

### Store Pickup Flow
![GM OMS Overview](/img/iic_oms_storepickup_flow.png)
#### Differences from Standard Shipping
1. Store Pickup information is created instead of Shipment.
2. Received Method is displayed as 'Store Pickup'.
![GM OMS Overview](/img/iic_oms_received.png)
3. The Order status changes from Pending → Complete.
4. Store pickup orders cannot be reshipped because there is no recipient address.
5. Delivery is not handled through Pantos (WMS). Instead, the customer visits the store directly to pick up the order.


### How to Search
- Order > Order List > Search filters > 'Order Attribute Filter' > check 'Store Pickup'
![GM OMS Overview](/img/iic_oms_store_filter.png)


### Cancellation and Return Policies
1. Cancellation
    - Orders can be canceled until the customer picks them up.
    ![GM OMS Overview](/img/iic_oms_cancel.png)
    - Cancellations can also be made through the brand site or stores in addition to OMS.
2. Return
    - Returns are available after pickup is completed.
    - Returns are registered in OMS via 'Register Claim'.
    - Returns can also be made through the brand site or stores in addition to OMS.
3. Exchange
    - Exchanges are available after pickup is completed.
    - Exchanges are registered in OMS via 'Register Claim'.
    - Exchanges are **not** available through the brand site or stores — only through OMS.
