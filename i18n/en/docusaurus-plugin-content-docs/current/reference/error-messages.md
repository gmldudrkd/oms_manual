---
sidebar_position: 3
---

# Common Notices and Error Messages

These are the on-screen notices and confirmation messages you'll frequently encounter during operations, along with how to respond.

## Permissions / Data Display

| Message/Symptom | Meaning | Response |
|-------------|------|------|
| The list is empty | You don't have permission for that Brand & Corp, or you are viewing a different corporation | Check the Brand & Corp in the header, and [request permission](../user/request-permission) if needed |
| Access denied (403) | You are trying to access data outside your permissions | Check your assigned scope and request permission |

## Orders / Claims

| Situation | Response |
|------|------|
| The cancel button isn't visible | Cancellation isn't possible in the current status — check the [Status Guide](./status-codes) |
| "Bulk Cancel" is disabled | A row that isn't in a cancelable status is selected |
| Cannot proceed with the Refund | Some inspection grades are missing — assign a grade to every quantity |

## Channel Registration

| Message | Meaning | Response |
|--------|------|------|
| *"SAP Channel Code (the code) is already registered in OMS."* | The SAP channel code is already registered | Choose a different code |
| *"You have unsaved changes..."* | There are unsaved changes | Save or discard the changes before navigating away |

## Export / Download

| Situation | Response |
|------|------|
| "Export Data" is disabled | The Period is invalid — check the start/end dates |
| "Excel download" is disabled | The password (4–10 characters) or the Purpose is not entered |
| The Excel file won't open | You need to enter the password set during download |

## Promotion

| Situation | Response |
|------|------|
| An item can't be edited | In the Active/Upcoming/Expired statuses, only some items can be edited |
| "Delete" is disabled | You must type `delete` exactly in the confirmation field to enable it |

:::tip
For problems where the response is hard to find (integration delays, stock mismatches, etc.), first check the [Common Scenarios](../use-cases/inventory-mismatch-sync-delay) chapter, and if that doesn't resolve it, contact your system administrator.
:::
