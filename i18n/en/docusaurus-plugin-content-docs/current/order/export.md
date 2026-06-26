---
sidebar_position: 9
---

# Order Download (Export)

Use the **Order → Export** menu on the left to download order-related data as an **encrypted Excel file**. To protect personal data, setting a password and entering a purpose of use are required.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_export.mov" />
  Your browser does not support the video tag.
</video>

---

## Download Type (Type)

| Type | Content |
|------|------|
| **ALL** | All order data |
| **ORDER** | Order information |
| **SHIPMENT** | Shipment information |
| **STORE_PICKUP** | Store pickup information |
| **ORDER_CANCEL** | Canceled orders |
| **RETURN** | Return data |
| **EXCHANGE** | Exchange data |
| **RESHIPMENT** | Reshipment data |

---

## Download Steps

1. Select the data type to download from the **Type** dropdown.
2. Specify a **Period**. *(Required — valid start and end dates)*
3. Click the **"Export Data"** button to open the **"Export Encryption"** settings window.
4. Enter the encryption details.
   - **Set Password**: File password (4–10 characters)
   - **Purpose of Export**: Purpose of the download (up to 50 characters)
5. Click the **"Excel download"** button to download the file.
   - Example file name: `IIC_OMS_Order List_YYYYMMDD.xlsx`
6. You must enter the **password** you set when opening the downloaded Excel file.

To set the conditions again, reset them with the **"Reset"** button.

---

## Personal Data Protection Notice

:::warning Downloads are logged
- The Excel file is downloaded **encrypted** and cannot be opened without the password you set.
- When you download, a log automatically records **who** accessed the personal data, **when**, and **for what purpose**.
- Enter the Purpose accurately, and store and dispose of the downloaded file securely.
:::
