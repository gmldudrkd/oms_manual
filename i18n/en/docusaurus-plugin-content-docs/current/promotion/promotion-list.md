---
sidebar_position: 1
---

# Promotion List

From the left menu **Promotion → Promotion List**, you can view and search promotions, and create new ones, bulk-register them (Import), or export them (Export). A promotion **automatically adds free products (gifts or packages) to an order as 0-value items** when the order meets its conditions. Promotions are registered and managed in OMS, and promotions for the official store are sent from OMS to the official store.

---

## Promotion Status

| Status | Meaning |
|------|------|
| **Draft** | Saved as a draft. Not applied even when its period arrives (not sent to the official store either) |
| **Scheduled** | Saved and waiting for the start date |
| **Active** | Running (applied to orders) |
| **Ended** | Ended by one of: end date passed / reward stock used up / **Force Stop**. Cannot be resumed |
| **Deleted** | Deleted. View only; cannot be edited or restored |

---

## How to Search

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

---

## Information in the List

| Column | Description |
|------|------|
| **Target Type** | Specific Product / Order Amount / All Product |
| **Reward Product** | Reward products (`Product name · SKU`). For Order Amount, shows the one product with the lowest remaining stock per range |
| **Stock (Remaining / Total)** | Remaining / total reward quantity. **As of the search time** — click **Search** or **Refresh** to see the latest quantity |
| **Trigger Channels** | Applied channels (if more than 3, click `+n more` to expand) |
| **Updated By** | Last editor (`-` if never edited) |

---

## Switching Views (List View / Calendar View)

Use the toggle to the right of the result count (`N results`). Both views show the same search results.

- **List View** : The default list screen
- **Calendar View** : Shows promotion periods on a monthly calendar
    - Move between months with `‹` `›`, and jump to the current month with **Today**
    - Always-on promotions (no end date) are shown separately in the **Always-on** area above the calendar
    - Use the Always-on toggle to choose **Include Always-on / Exclude Always-on / Always-on Only**
    - Click a bar (or chip) to open a summary panel below, then click **Open Promotion** to go to the detail screen

---

## Export / Import

| Button | How to Use |
|------|-----------|
| **Export** | Downloads all current search results to Excel (`IIC_OMS_Promotion_List_{Brand}_{Corp}_YYYYMMDD_HHmm.xlsx`) |
| **Import > Download Template** | Downloads the Excel template for bulk registration |
| **Import > Upload Excel** | Upload the completed template → promotions are created in bulk as **Draft** (Created By = `import`) |

:::info
On Import, only rows with errors are skipped and the rest are registered normally. Skipped rows are listed in the top-right notification as `Row N: field`, so fix those rows and upload them again.  
Promotions created by Import are in Draft status, so you must **review them and click Save** for them to take effect.
:::

For how to create and edit promotions, see [Create / Edit Promotion](./promotion-create). For templates, see [Promotion Template](./promotion-template).
