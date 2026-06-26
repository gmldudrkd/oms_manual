---
sidebar_position: 2
---

# Create / Edit Promotion

You can register a new promotion from the promotion list, or open an existing promotion to edit it. A promotion is structured by configuring a **Trigger** and a **Reward**.

---

## New Registration

When you start a new draft from the top of the list, you can choose **New** or **Copy** (copy an existing one). If you choose Copy, you search for an existing promotion and bring over its settings as-is.

### 1. General

| Item | Description | Required |
|------|------|:----:|
| **Title** | Promotion title (up to 50 characters) | ✅ |
| **Promotion Type** | GWP / Packaging Benefit | ✅ |
| **Brand / Corp** | Applied brand / corporation | ✅ |
| **Start / End Date** | Start and end date/time | ✅ |
| **Reason** | Reason for registration (up to 50 characters) | ✅ |

### 2. Trigger Detail

Defines under which conditions the reward is granted.

| Item | Description |
|------|------|
| **Trigger Type** | Purchase above a certain amount / Purchase of a specific product or label / A specific product above a certain amount / Purchase of all products |
| **Amount / Currency** | The threshold amount and currency, when there is an amount condition |
| **Trigger Channel** | The channels to apply the promotion to (multiple selection) |
| **Trigger Product** | Specify the target products for a specific-product condition (configure OR/AND conditions in the modal) |
| **Exception Product** | Products to exclude for an amount or all-products condition |

### 3. Reward Detail

| Item | Description |
|------|------|
| **Reward Type** | Order Level / Product Level |
| **Reward Product** | Set the free gift/benefit product and quantity, and the stock usage quantity (Dedicated/Remained/Alert) |

---

## Saving and Review

| Button | Action |
|------|------|
| **Save Draft** | Temporarily save in Draft status |
| **Submit Review** | After entering all required items, submit for review (confirmation step) |
| **Cancel** | Cancel the draft (a confirmation window appears if there are changes) |

When you click **Submit Review**, a review window summarizing your input appears. Make a final check of the title, period, trigger conditions, and reward products, then confirm with **"Confirm"**.

---

## Constraints When Editing

For a promotion that is already active or scheduled, only some items can be edited.

- **Draft** status: Most items can be edited
- **Active / Upcoming / Expired** status: Only limited items can be edited, such as the **End Date** and **reward quantity**

---

## Deleting a Promotion

A promotion can only be deleted from the detail screen when it is in **Draft or Upcoming** status.

1. Click the **"Delete"** button on the detail screen.
2. You must type **`delete`** in the confirmation window for the delete button to become active.

:::warning
Deletion is **permanent** and cannot be undone. All related settings and data are removed.
:::
