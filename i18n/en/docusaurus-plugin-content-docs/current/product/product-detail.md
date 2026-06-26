---
sidebar_position: 2
---

# Product Detail

Clicking a **SKU Code** in the product list opens the Product Detail screen. Here you edit price, images, product information, and channel sales availability.

---

## Screen Layout

The detail screen is organized from top to bottom as follows.

| Section | Content | Editable |
|------|------|------|
| **Product Master** | SKU/SAP codes, product name, model code, and other basic info | View only |
| **Price Master** | Sales unit price by currency | ✅ (all prices required) |
| **Paid Packaging Options** | Price per paid packaging option | ✅ (all prices required) |
| **Images** | Upload product images and manage their order | ✅ (at least 1, meeting size standards) |
| **Product Information** | Product detail information form | ✅ (required items must be entered) |
| **Sales Availability by Channel** | Sales visibility ON/OFF per channel | ✅ |

---

## Editing and Saving

1. Enter or modify the values in each section.
2. Add **images** by selecting files or via drag and drop, and adjust their display order.
3. Save with the **"Save"** button.
4. On save, the following are automatically validated.
   - Whether all prices (Price / Packaging) are entered
   - Whether all required product info items are entered
   - At least 1 image and the size standard
5. When the save succeeds, a completion notification is displayed.

:::note Image reflection delay
When you upload a new image, it is first uploaded to storage and then applied to the product. The image may not appear immediately after saving; refresh after a moment to see it.
:::

:::tip Product info completion status
Once all required information is filled in, the **Product Info Status** in the [Product List](./product-list) changes to **Complete**. For Incomplete products, fill in the missing items on this screen.
:::
