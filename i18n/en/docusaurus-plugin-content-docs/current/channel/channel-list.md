---
sidebar_position: 1
---

# Channel List

From the left menu **Channel → Channel List**, you can review sales channels, register new channels, and change existing channel settings.

---

## Channel List

| Column | Description |
|------|------|
| No | Channel ID |
| Brand / Corp | Brand / corporation |
| **Name** | Channel name |
| Type | Channel type |
| SAP Code / SAP Name | SAP integration code / name |
| **Active** | Whether active (Y/N) |
| Created At / Updated At | Creation and modification date/time |

- Click a row to go to the **Channel Detail** screen.
- Use the **"Add New Channel"** button in the top right to register a new channel.

---

## Registering a New Channel

1. Click the **"Add New Channel"** button.
2. Enter the information in the form.

   | Item | Description | Required |
   |------|------|:----:|
   | **SAP Channel Code** | Select the SAP channel code (code + name) | ✅ |
   | **Channel Type** | Own / External | ✅ |
   | **SAP Channel Name** | Auto-filled when the SAP code is selected (read-only) | ✅ |
   | **Channel Name** | Auto-generated (read-only) | — |
   | **Active** | Activation toggle | ✅ |

3. Save with **"Save"**.

:::warning Watch for duplicate codes
If you select a SAP channel code that is already registered, the message *"SAP Channel Code (the code) is already registered in OMS."* is displayed. Use a different code.
:::

---

## Changing Channel Settings

On the Channel Detail screen, modify **Channel Type**, **Active**, and other fields, then save with **"Save"**.

:::note If you leave without saving
If you try to leave the screen after making changes without saving, a *"You have unsaved changes..."* confirmation window appears. Choose **"Stay on this page"** or **"Leave without saving"**.
:::
