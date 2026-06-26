---
sidebar_position: 1
---

# Product List

From the left menu **Product → Product List**, you can review the product master and perform product management tasks such as creating bundles and bulk uploads.

---

## Searching for Products

| Search Item | Input Method |
|-----------|-----------|
| **SKU Code / SAP Code / Model Code / UPC Code** | Enter multiple entries separated by line breaks |
| **SAP Name** | Product name (single input) |
| **Product Info Status** | Product info status — All / Complete / Incomplete |
| **Product Type** | All / Single / Bundle |

Search with **"Search"** and reset with **"Reset"**.

### List Columns

| Column | Description |
|------|------|
| Product Type | Single / Bundle chip |
| **SKU Code** | Click to go to the [Product Detail](./product-detail) page |
| SAP Code / Quantity / Model Code / UPC Code / SAP Name | Basic product information |
| **Product Info Status** | Whether product info entry is complete |
| Created At / Last Updated At | Creation and modification date/time |

---

## Create Bundle

Group several single products into one set product (bundle).

1. In the list, select the **Single** products to group using the checkboxes.
   - Only single products can be selected. You need **at least 2** (or 1 with a quantity of 2 or more), and **up to 10**.
2. Click the **"Create Bundle"** button.
3. In the **Create Bundle** modal:
   - You can search for and add more products (Single search or Bulk input).
   - Adjust each product's **Quantity** using `+` / `−`.
   - Remove products added by mistake with **"Delete"**.
4. Create the bundle with the **"Create"** button.

:::note
Products already added or invalid SAP codes are automatically excluded.
:::

---

## Bulk Upload

### Product Info Bulk Update

1. From the **"Product Info Bulk Update"** menu, download the Excel template with **"Download Template"**.
2. Enter product information into the template.
3. Upload the completed file (.xlsx/.xls) with **"Upload Template"**.

### Product Image Bulk Update

1. With **"Product Image Bulk Update"**, select and upload image files (.jpeg/.jpg).
2. Images must meet the recommended size standard for each brand (e.g., 1920px / 3600px depending on the brand).

### Export

You can download selected products to Excel with the **"Export"** button.
