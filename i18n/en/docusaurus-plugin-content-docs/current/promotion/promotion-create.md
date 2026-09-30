---
sidebar_position: 2
---

# Create / Edit Promotion

Create a new promotion from the **Promotion List**, or open an existing one to edit, stop, or delete it. A promotion is made up of a **Target** (what the customer buys) and a **Reward** (what is given).

---

## Creating a Promotion

### Steps

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
Templates do not store the period, channels, or stock quantities, so after loading one, **enter the period, channels, and quantities** and save. (See [Promotion Template](./promotion-template) for managing templates)
:::

### Choosing a Promotion Type

| Type | Use | Channel Selection | Reward Quantity |
|------|------|-----------|-----------|
| **GWP** | Gives a gift when products are purchased | **Only 1** channel | Total / Alert quantities required |
| **Packaging Benefit** | Gives a package when products are purchased (e.g. heart package) | **Multiple** channels allowed | No quantity limit (no input needed) |

- For **Packaging Benefit**, only **package products** are searchable in Reward.
- **Packaging Benefit** gives rewards matched 1:1 with products, so only Target Type **Specific Product** and **All Product** can be used, and the reward is fixed to **Per product quantity**.
  - Target Type **Order Amount** only supports per-order rewards, so it cannot be used with **Packaging Benefit**.

### Target Settings

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

### Reward Settings

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

### Saving

| Button | Behavior |
|------|------|
| **Draft** | Saves as a draft without required-field checks. Not applied even when its period arrives (if End Date is empty, a popup asks whether to save it as Always-on) |
| **Save** | Checks required fields → scrolls to and highlights the **Summary** on the right → saves on the confirmation popup. Automatically set to **Scheduled** or **Active** based on the period |

- If any required field is missing, a list of the missing fields is shown and nothing is saved.
- After saving a new promotion, you are taken to its detail screen.

---

## Editing, Stopping, and Deleting a Promotion

### What You Can Do by Status

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

### Force Stopping a Running Promotion (Force Stop)

1. On the detail screen of an Active promotion, click **Change Status > Force Stop**
2. Click **Confirm** on the popup
3. It changes to **Ended** immediately, and orders paid afterward will not get the promotion. (Cannot be resumed)

### Deleting a Promotion (Delete)

You can delete only in **Draft / Scheduled** status.

1. On the detail screen, click **Change Status > Delete**
2. Type **`delete`** in the confirmation window and delete
3. The status changes to **Deleted**. The settings remain for reference but cannot be edited or restored.

---

## Good to Know: Stock Handling

- Reward stock is managed **separately from SAP stock**, using the quantities entered in the promotion.
- It is deducted as soon as an order is received, and added back if the order is **canceled**. (Not added back on **returns**)
- When reward stock runs out, the promotion automatically becomes **Ended**, and orders are still collected normally without the promotion.
