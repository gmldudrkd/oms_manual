---
sidebar_position: 1
---

# TB KR Core Operations

> The Tamburins KR entity is being integrated into IIC OMS.  
> All features used in the existing system can still be used in the new system.  
> This document answers the question: **"Where do I perform the tasks I used to do in the existing system?"**  
> This document is for migrating how you work at launch, and some details may change later.

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
| Order > Integrated Order list (top Summary) | **Order > Overview** |

#### ✅ Changes
1. The dashboard is divided into Order and Claim tabs.
2. Details are separated into Order, Shipment, Claim, and other sections, making it easier to understand the current status.

> Existing System

![OMS Overview](/img/tb_overview.png)

> New System

#### 📹 <a href="https://drive.google.com/file/d/1rfRH8UesjtUJUGShD1iRe8ajWfMCG6Uv/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Order List

| Existing System | New System |
|------------|------------|
| Order > Integrated Order list | **Order > Order List** |

#### ✅ Changes
1. Status search filter changed - the existing system used a single status search, but the new system uses two separate filters: Order Status Filter + Fulfillment Status Filter.
2. Search conditions changed - the Issue, Manually Shipment, and Recipient Phone columns have been removed.

> Existing System

![OMS Overview](/img/tb_orderlist.png)

> New System

#### 📹 <a href="https://drive.google.com/file/d/1GHRh2cpE6IMLSUt7icIOG6G5GOe-Svww/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

### Order Detail Tab
#### ✅ Changes
1. Order-related information that was viewed together in Order Detail is now separated into tabs.
2. You can view order, claim, and log details in separate tabs.

> Existing System

![GM OMS Overview](/img/gm_oms_order_detail.png)

> New System

![GM OMS Overview](/img/iic_oms_order_detail.png)


### Return, Exchange, Reshipment List
| Existing System | New System |
|------------|------------|
| (None) | **Order > Return, Exchange, Reshipment List** |

#### ✅ Changes
1. Returns, exchanges, and reshipments that were viewed together in General Orders are now separated into their own lists.

> New System

![GM OMS Overview](/img/iic_oms_list.png)

### Export
#### ✅ Changes
1. The Export function previously handled in General Orders is now a separate menu.

> Existing System

![GM OMS Overview](/img/gm_oms_export.png)

> New System

![GM OMS Overview](/img/iic_oms_export.png)

---

## ⌛ Order Status

> Order status values have changed.  
> Statuses are managed separately for Order, Shipment, Return, and Exchange.

### Order Status Comparison (Legacy vs New)

> In the new system, order status is managed in two separate areas: **Order** and **Shipment**.

| Legacy | New · Order | New · Shipment | Description |
|--------|------------|---------------|------|
| Pre/Back | **Pending** | | Gift order paid (before the shipping address is entered) |
| After | **Pending** | | Customer payment completed |
| Release | **Collected** | | Order stock allocated (1 hour after payment) or allocation failed |
| Confirmed | **Partly Confirmed** | | Partial stock allocation succeeded |
| Confirmed | **Partial Shipment Requested** | | Partial WMS shipment instruction sent |
| Req-Shipping | | | Waiting before shipment instruction |
| Req-Allocation | **Shipment Requested** | **Picking Requested** | Full WMS shipment instruction sent |
| Allocation | | **Picked** | WMS picking completed |
| Packed | | **Packed** | WMS packing completed |
| Shipping | | **Shipped** | Shipped from the warehouse |
| Delivered | **Completed** | **Delivered** (`final shipping status`) | All shipments of the order are finished |
| Before-Cancel | **Deleted** | | Canceled before shipment request |
| Cancel/Req-Cancel | **Canceled** | **Canceled** (`final shipping status`) | Canceled after shipment request |

### Key Changes

**1. Separated status areas**
- Legacy managed the entire flow with Order status, but the new system separates it into **Order** (order collection and confirmation) and **Shipment** (shipping and delivery).
- The single Legacy status Req-Allocation is now shown as two statuses: `Shipment Requested` (Order area) + `Picking Requested` (Shipment area).

**2. Confirmed → split into 2**
- Legacy `Confirmed` is split into two statuses in the new system depending on the situation:
  - When partial stock allocation succeeds → `Partly Confirmed`
  - When a partial WMS shipment instruction is sent → `Partial Shipment Requested`

> Handling partial allocation (Partly Confirmed)

:::note
In `[Partly Confirmed]` status, the operator must choose to ship or cancel.
:::

#### 📹 <a href="https://drive.google.com/file/d/1ueoyuWwkNyafqdEpyF1TFzgd0n6ENuw-/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Claim Status Comparison (Legacy vs New)
> Return

| Legacy | New | Description |
|--------|------------|-----|
| ReqReturn | **Pending** | Return request completed |
| Returning | | Waiting for return registration |
| ReqPickup | **Pickup Requested** | Return registered |
|  | **Pickup Ongoing** | Pickup in progress |
| Return | **Received** | Waiting for receipt confirmation |
| Refund | **Refund** | Received, customer refunded |

> Exchange  
> In the new system, reshipment proceeds automatically after Inspected.

| Legacy | New | Description |
|--------|------------|-----|
| Req-Exchange | **Pending** | Exchange request completed |
| Exch-Returning | | Waiting for exchange registration |
| Exch-ReqPickup | **Pickup Requested** | Exchange registered |
| | **Pickup Ongoing** | Pickup in progress |
| Exch-Return | **Received** | Waiting for receipt confirmation |
| Exchange | **Inspected** | Received, before reshipment |


👉 For more details about order status codes, refer to the [Status Codes](/docs/reference/status-codes) document.

---

## 📢 Claim Handling
### Cancel

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Orders can be canceled in Req-Allocation status using the 'Cancel Order' button (partial or full cancellation) | 'Cancel Order' is available from Pending until the Shipment status reaches Picking Requested (partial or full cancellation) |
|  | 'Cancel Shipment' is available when the Shipment status is Picking Requested (cancels the entire shipment) |

> Existing System

![GM OMS Overview](/img/gm_oms_cancel.png)

> New System

#### 📹 <a href="https://drive.google.com/file/d/1hAjB7lYmQ-IZqXa2CeKfZURHoKq0S3Lj/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>



### Return / Exchange / Reshipment

#### ✅ Changes

1. The Change Status button has been changed to Register Claim.
2. Register Claim supports all claims, including Return, Exchange, Reshipment, and Force Refund.
3. Pickup Option and Force Refund have been added.
    - [Pickup Option > Do Not Request Pickup] : When the return has already been received, or the quantity or product differs
    - [Force Refund] : Refund without receiving the item, due to a strong customer complaint or a defect

> Registration method

| Existing System | New System |
|------------|------------|
| Order > Change Status | **Order > Register Claim** |
| Order > Manually-Shipment | **Order > Register Claim > Reshipment** |


> Existing System

#### 📹 <a href="https://drive.google.com/file/d/19q2fHNf729mxFJfJ6XEf9ix3jOc3NTnI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

> New System

#### 📹 <a href="https://drive.google.com/file/d/1-SNRGJRRoQXKi9KyRQUmrs8FKWLVU_sI/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Manual Confirmation on Exchange Receipt
- Use this when automatic confirmation is not possible and confirmation stops, so you need to confirm manually.
  - Case : When the return shipping fee is paid by "bank transfer"

#### Exchange Receipt Grading
  - When the exchanged product is received and in [Inspect] status, the 'Exchange' button is enabled.
  - Clicking Inspect opens a modal where you can grade each product.
  - When you Confirm after grading all products:
    - If there is no exchange shipment in progress, the exchange shipment proceeds automatically.

#### 📹 <a href="https://drive.google.com/file/d/1eUtG6Sc7NMs_AkCibPJa01_MFK_JkFRv/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

---

## 📦 Stock

### Stock Process
#### ✅ Basic Information
| / | New System |
|-----|------------|
| ERP stock receipt | Distributed once a day |
| Automatic channel stock distribution | Distributed once a day |
| Manual channel stock transfer | Always available when stock needs to be moved to a channel |
| ERP updated stock receipt | When stock is moved to the online warehouse |

### Stock Search
#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Status/Distribution | **Stock > Overview** |

- Divided into Online Stock Setting / Channel Stock Setting tabs
   - [Online Stock Setting] : Handles total stock
   - [Channel Stock Setting] : Handles stock distributed to channels

### Channel Stock Distribution Rate Setting

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Channel Distribution Rate + Product Distribution Rate | **Stock > Distribution Setting** |

- Channel and product distribution rate settings are combined into one menu, 'Distribution Setting', and divided into tabs
    - [Channel Default Rate] tab : Default distribution rate per channel
    - [Product Rate] tab : Rate per product

> New System

#### 📹 <a href="https://drive.google.com/file/d/10s4eoyF5_4bFRcXDRsc842Vl-enuyOiQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>


### Safety Stock Setting
- What is safety stock? :: Online stock that is not distributed to channels
  - Channel distribution formula with safety stock :: (online stock - safety stock) * distribution rate per channel

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
| New System |
|------------|
| **Stock > Channel Stock Setting tab > 'ERP Update'** |

1. Feature definition
    - When available stock exists in ERP but not in OMS, the moved stock is received immediately and can be used.
2. ERP Update field definition
    - Stock moved to the online warehouse in ERP is received immediately and shown in the ERP Update field.

> New System

![GM OMS Overview](/img/iic_oms_erpupdate.png)


### Channel Stock Send Status Setting

#### ✅ Changes
| Existing System | New System |
|------------|------------|
| Inventory > Unlink | **Stock > Channel Stock Setting tab > 'Change Channel Send Status'** |

- Feature definition : Sets whether stock is sent to each channel when channel distribution runs after closing stock is received

> New System

#### 📹 <a href="https://drive.google.com/file/d/1WNKHbfG5H3xsoIh-0b5uxPVFX7Ows-rs/view?usp=sharing" target="_blank" rel="noopener noreferrer">View guide video</a>

---
## 📄 Promotion

> Menu location : **Promotion > Promotion List**  
> This feature **automatically adds free products (gifts or packages) to an order as 0-value items** when the order meets its conditions. Promotions are registered and managed in OMS, and promotions for the official store are sent from OMS to the official store.

### Promotion Status

| Status | Meaning |
|------|------|
| **Draft** | Saved as a draft. Not applied even when its period arrives (not sent to the official store either) |
| **Scheduled** | Saved and waiting for the start date |
| **Active** | Running (applied to orders) |
| **Ended** | Ended by one of: end date passed / reward stock used up / **Force Stop**. Cannot be resumed |
| **Deleted** | Deleted. View only; cannot be edited or restored |

---

### Creating a Promotion

#### ✅ Steps

Click **+ Add Promotion** at the top right of the **Promotion List**, then fill in the following in order.

1. **Basic Info** : Enter Promotion Name (up to 50 characters), Promotion Type, Promotion Goal, and Start / End DateTime
    - To run it with no end date, turn on **Always On**.
    - The period summary box below shows the expected status, D-day, and total duration right away.
2. **Sales Channel** : Select the channels to apply
3. **Target** : Set "what the customer must buy to get the reward"
4. **Reward** : Set "what to give" — products and quantities
5. **Apply Simulation** (optional) : Set up a test channel and cart to check that the promotion triggers correctly
6. Under **Change Status**, click **Draft** (save as draft) or **Save**

:::tip
Save frequently used settings with **Save as Template**, and bring them back next time with **Load Template**.  
Templates do not store the period, channels, or stock quantities, so after loading one, **enter the period, channels, and quantities** and save. (See [Promotion Template](#promotion-template) below for managing templates)
:::

#### ✅ Choosing a Promotion Type

| Type | Use | Channel Selection | Reward Quantity |
|------|------|-----------|-----------|
| **GWP** | Gives a gift when products are purchased | **Only 1** channel | Total / Alert quantities required |
| **Packaging Benefit** | Gives a package when products are purchased (e.g. heart package) | **Multiple** channels allowed | No quantity limit (no input needed) |

- For **Packaging Benefit**, only **package products** are searchable in Reward.
- **Packaging Benefit** gives rewards matched 1:1 with products, so only Target Type **Specific Product** and **All Product** can be used, and the reward is fixed to **Per product quantity**.
  - Target Type **Order Amount** only supports per-order rewards, so it cannot be used with **Packaging Benefit**.

#### ✅ Target Settings

| Target Type | When to Use | How to Set Up |
|-------------|-------------|-----------|
| **Specific Product** | Reward when specific products are bought | Search and add Target Products → choose **Target Purchase Basis** (**Any** : buying any one qualifies / **All** : all must be bought) → **Purchase Quantity** (minimum quantity, 1–99) → choose **Reward Basis** |
| **Order Amount** | Reward by order amount range (GWP only) | Add amount ranges with **+ Add Range** (up to 5) → set **Excluded Product** if needed (products not counted toward the amount, e.g. shopping bags) |
| **All Product** | Reward when any product is bought | Set **Excluded Product** if needed → choose **Reward Basis** |

- **Reward Basis** : **Per order** (1 set per order) / **Per product quantity** (as many as the purchased quantity)
- **Order Amount** ranges are evaluated as `lower bound or more ~ less than upper bound`, and each range's upper bound automatically becomes the next range's lower bound. No upper limit (**No maximum limit**) can be set only on the last range.

:::tip How to Search Products
Choose Product name / SAP Code / ModelPack2 and enter keywords to search. (No list is shown before you enter a keyword)
- **1** keyword → all products containing it (partial match)
- **2 or more** keywords (line breaks) → only products that **exactly match** one of them
:::

#### ✅ Reward Settings

1. Search and add the products to give
    - If Target Type is **Order Amount**, add products to each amount range card.
    - If Promotion Type is **Packaging Benefit**, only products in the Package category are searchable.
2. Choose **Reward Type** (for Specific Product / Order Amount)
    - **Default Gift** : Gives all registered products
    - **Option Select** : The customer **picks 1** of the registered products (up to 10) — available **only on official store (Official) channels**
    - All Product always works as Default Gift.
3. (GWP) Enter **Total** (total reward quantity) and **Alert** (alert threshold) for each product
    - **Sold / Remaining** are calculated automatically.
    - For **Order Amount**, enter these once per SKU in the **Shared SKU Inventory** table below the range cards. Even if the same product is in several ranges, they share one stock.

#### ✅ Saving

| Button | Behavior |
|------|------|
| **Draft** | Saves as a draft without required-field checks. Not applied even when its period arrives (if End Date is empty, a popup asks whether to save it as Always-on) |
| **Save** | Checks required fields → scrolls to and highlights the **Summary** on the right → saves on the confirmation popup. Automatically set to **Scheduled** or **Active** based on the period |

- If any required field is missing, a list of the missing fields is shown and nothing is saved.
- After saving a new promotion, you are taken to its detail screen.

---

### Editing, Stopping, and Deleting a Promotion

#### ✅ What You Can Do by Status

Click a promotion in the list to edit it on the detail screen. What you can edit depends on its status.

| Status | Editable | Draft | Save | Force Stop | Delete | Template |
|------|---------------|:-----:|:----:|:----------:|:------:|--------|
| **Draft** | Everything | ✅ | ✅ | - | ✅ | Load / Save |
| **Scheduled** | Everything | - | ✅ | - | ✅ | Save only |
| **Active** | End date, reward quantities (Total / Alert), **adding** Target Products | - | ✅ | ✅ | - | Save only |
| **Ended** | View only | - | - | - | - | - |
| **Deleted** | View only | - | - | - | - | - |

:::warning Editing an Active promotion
- The end date can only be changed to **a time after now**. If you move it earlier, orders paid after the new end date will not get the promotion. (Cannot be changed when Always On is on)
- Target Products can only be **added**; already registered products cannot be removed.
- If you need to change the Reward Products or Excluded Products, **Force Stop the promotion and register a new one**.
:::

#### ✅ Force Stopping a Running Promotion (Force Stop)

1. On the detail screen of an Active promotion, click **Change Status > Force Stop**
2. Click **Confirm** on the popup
3. It changes to **Ended** immediately, and orders paid afterward will not get the promotion. (Cannot be resumed)

#### ✅ Deleting a Promotion (Delete)

You can delete only in **Draft / Scheduled** status.

1. On the detail screen, click **Change Status > Delete**
2. Type **`delete`** in the confirmation window and delete
3. The status changes to **Deleted**. The settings remain for reference but cannot be edited or restored.

---

### Good to Know: Stock Handling

- Reward stock is managed **separately from SAP stock**, using the quantities entered in the promotion.
- It is deducted as soon as an order is received, and added back if the order is **canceled**. (Not added back on **returns**)
- When reward stock runs out, the promotion automatically becomes **Ended**, and orders are still collected normally without the promotion.

---

### Promotion List

#### ✅ How to Search

1. Go to **Promotion > Promotion List**
    - Right after entering, the list is shown with the default conditions (**Status = Active**, **Promotion Period = ±3 months from today**).
2. Enter search conditions and click **Search**
    - Click **Reset** to go back to the default conditions.
3. Click a **Title** in the list to open the detail (edit) screen.

| Search Field | How to Use |
|-----------|-----------|
| **Search** | Choose ID / Title / Created By / Updated By / Reward Product Name / Reward SAP Code / Target Product Name / Target SAP Code, then enter keywords |
| **Promotion Period** | Returns promotions whose period **overlaps the search period by at least one day** |
| **Status** | Scheduled / Active / Ended / Draft / Deleted |
| **Channel** | Channels of the current Brand & Corp |

:::tip
- **Title** accepts only one keyword on a single line, and you must enter **at least 2 characters**. (partial match)
- Other fields accept **multiple keywords separated by line breaks**. This is handy when pasting a list of SAP Codes.
:::

#### ✅ Information in the List

| Column | Description |
|------|------|
| **Target Type** | Specific Product / Order Amount / All Product |
| **Reward Product** | Reward products (`Product name · SKU`). For Order Amount, shows the one product with the lowest remaining stock per range |
| **Stock (Remaining / Total)** | Remaining / total reward quantity. **As of the search time** — click **Search** or **Refresh** to see the latest quantity |
| **Trigger Channels** | Applied channels (if more than 3, click `+n more` to expand) |
| **Updated By** | Last editor (`-` if never edited) |

#### ✅ Switching Views (List View / Calendar View)

Use the toggle to the right of the result count (`N results`). Both views show the same search results.

- **List View** : The default list screen
- **Calendar View** : Shows promotion periods on a monthly calendar
    - Move between months with `‹` `›`, and jump to the current month with **Today**
    - Always-on promotions (no end date) are shown separately in the **Always-on** area above the calendar
    - Use the Always-on toggle to choose **Include Always-on / Exclude Always-on / Always-on Only**
    - Click a bar (or chip) to open a summary panel below, then click **Open Promotion** to go to the detail screen

#### ✅ Export / Import

| Button | How to Use |
|------|-----------|
| **Export** | Downloads all current search results to Excel (`IIC_OMS_Promotion_List_{Brand}_{Corp}_YYYYMMDD_HHmm.xlsx`) |
| **Import > Download Template** | Downloads the Excel template for bulk registration |
| **Import > Upload Excel** | Upload the completed template → promotions are created in bulk as **Draft** (Created By = `import`) |

:::info
On Import, only rows with errors are skipped and the rest are registered normally. Skipped rows are listed in the top-right notification as `Row N: field`, so fix those rows and upload them again.  
Promotions created by Import are in Draft status, so you must **review them and click Save** for them to take effect.
:::

---

### Promotion Template

> Menu location : **Promotion > Template**  
> Save frequently used **Basic Info · Target · Reward** settings as templates, and register promotions for multiple channels **at once (Multi Register)**.

#### ✅ Viewing Templates

- Search by **Promotion Type** (All / GWP · Free Gift / Packaging Benefit) and **Search** (Title / Reward Product Name / Reward SAP Code / Target Product Name / Target SAP Code).
- Templates are shown as cards, where you can see the **Promotion Type · Target Type · Reward products**. (Newest first)

#### ✅ Creating a Template

1. Click **+ New Template** (the top button or the dashed card)
2. Fill in the 3 sections in the popup
    - **Basic Info** : Template Name, Promotion Type, Promotion Goal
    - **Target** : Specific Product / Order Amount / All Products, plus target products and conditions
    - **Reward · Benefit** : Reward Type, reward products
3. Click **Save**
    - **Save** stays disabled while any required field (Template Name, target products or minimum amount, Reward products) is empty.

:::info
Templates do not store the **period · channels · status · reward quantities**. The period and channels are entered during Multi Register, and reward quantities in each created promotion.  
You can also save the current inputs as a template with **Save as Template** on the promotion create screen.
:::

#### ✅ Registering for Multiple Channels at Once (Multi Register)

1. Click **Multi Register** on a template card
2. **Check the channels** to register → one row is added per channel (1 channel = 1 promotion)
    - Option Select templates can only use official store (Official) channels.
3. For each row, enter **Promotion Name** (default `Template name · Channel name`) and **Start / End**
    - To run with no end date, check **Always on**
    - To run the same channel in several periods, add rows with **+ Period** (`· 2차`, `· 3차` are appended to the name automatically)
4. On registering, each row is created as a **Draft** promotion and added to the Promotion List.
    - If 1 promotion is created, you go to its detail screen; if 2 or more, you go to the Promotion List.
5. In each created promotion, enter the **reward quantities (Total / Alert)** and click **Save** for it to take effect.

:::tip
If any row has an empty End, a popup asks whether to save it as Always-on before registering. **Confirm** creates those rows as Always on; **Cancel** stops registration and keeps your inputs.
:::

#### ✅ Editing and Deleting Templates

- **Edit** : Click **Edit** on the card → edit in the popup and click **Save**
- **Delete** : Click the trash icon on the card or **Delete** in the edit popup → click **Delete** in the confirmation window
- Editing or deleting a template **does not affect promotions already created** from it.
