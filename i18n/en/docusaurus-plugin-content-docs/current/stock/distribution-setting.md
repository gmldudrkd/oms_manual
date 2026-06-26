---
sidebar_position: 2
---

# Distribution Setting

From the left menu **Stock → Distribution Setting**, you configure **how online stock is split** across channels. Distribution ratios are reflected in channel stock through a daily batch.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_distribution.mov" />
  Your browser does not support the video tag.
</video>

The screen is divided into two tabs.

| Tab | Purpose |
|----|------|
| **Channel Default Rate** | Set the **default distribution ratio** per channel (applied commonly to all products) |
| **Product Rate** | Set an **individual distribution ratio** that applies only to a specific product (SKU) |

:::tip Priority
If a **Product Rate** is specified for a product, that ratio takes priority; otherwise, the **Channel Default Rate** applies.
:::

---

## Channel Default Rate

The per-channel distribution ratio applied commonly to all products.

| Column | Description |
|------|------|
| **Channel Name** | Channel name |
| **Distribution Rate** | Distribution ratio (%) |
| **Priority** | Distribution priority |

### How to Change the Ratio

1. Click the **"Edit"** button to switch to edit mode.
2. Modify the **Distribution Rate** value for each channel.
3. Save with **"Save"**. (To cancel, use **"Cancel"**.)

:::warning
Saving **overwrites** the existing distribution settings (*"Saving will overwrite the existing information."*). Check the current values before making changes.
:::

---

## Product Rate

Use this when you want to apply a different distribution ratio to a specific product only.

### Searching for Products

| Search Criterion | Input Method |
|-----------|-----------|
| **SKU Code** | Separated by line breaks, up to 100 entries |
| **SAP Code** | Separated by line breaks, up to 100 entries |
| **SAP Name** | At least 2 characters |

### How to Set the Ratio

1. Select the product to apply the ratio to and click the **"Edit"** button.
2. In the **Edit Product Ratio** modal, select the **Rate Type**.
   - **Channel Default Rate**: Follows the default ratio
   - **Product Rate**: Enter a ratio dedicated to this product directly
3. If you select **Product Rate**, enter the ratio (%) for each channel.
4. Save with **"Save"**.

:::note
Distribution ratio changes are reflected in channel stock at the next batch. It is normal for channel stock not to change immediately after the change.
:::
