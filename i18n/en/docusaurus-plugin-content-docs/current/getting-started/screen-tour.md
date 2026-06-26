---
sidebar_position: 3
---

# Screen Tour

The OMS screen is made up of three areas: a **top header + left menu + main content**. Every screen follows the same pattern, so once you learn it, you can use any menu the same way.

---

## Top Header

The brown bar at the very top of the screen gathers the global settings operators use most often.

| Item | Location | Function |
|------|------|------|
| **Brand & Corp** | Center | Selects the **brand × corporation** to work on. Only the data for the selected combination is displayed |
| **Timezone** | Next to Brand & Corp | Selects the time zone for displaying dates and times (e.g. Asia/Seoul) |
| **Account menu** | Far right | Shows your ID, **"Log out"** |

### Switching Brand & Corp

This is the most frequently used function. Clicking the **Brand & Corp** area in the header displays the list of brands and corporations you have permission for. Selecting a combination instantly refreshes the order, stock, and product screens to that scope.

- On screens such as the order list and channel list, you can **select multiple combinations at once (multi-select)**. When all are selected, it is shown as **"ALL"**.
- Some detail screens allow single selection only.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/change_account.mov" />
  Your browser does not support video playback.
</video>

:::tip
If the data you want isn't showing, the first thing to check is the **Brand & Corp selection in the header**. Often the screen looks empty simply because you are viewing a different corporation.
:::

### Timezone

All dates and times shown on screen are displayed based on the time zone selected here. When handling orders for overseas corporations, change the time zone to view them in local time. Your selection is saved in the browser and persists on your next visit.

---

## Left Menu

The left menu is grouped by business area.

| Menu group | Sub-menus | Manual |
|-----------|-----------|--------|
| **Order** | Overview, Order List, Return List, Exchange List, Reshipment List, Export | [Order](../order/dashboard) |
| **Stock** | Overview, Distribution Setting, History | [Stock](../stock/overview) |
| **Product** | Product List, Channel Product List | [Product](../product/product-list) |
| **Channel** | Channel List | [Channel](../channel/channel-list) |
| **Promotion** | Promotion List | [Promotion](../promotion/promotion-list) |
| **User** | User List | [User](../user/user-list) |

Clicking a group title collapses or expands its sub-menus.

---

## Common UI Patterns

Every list screen uses the same building blocks. Once you learn the patterns below, you're set.

### Search Form

This is the search area at the top of the screen.

- **Period**: Select a date range from the calendar. Shortcut buttons such as `Today`, `Week`, `Month`, `3 Month`, and `Reset` are provided
- **Status filters**: Select multiple statuses at once using checkboxes
- **Search keyword**: Choose a search criterion (order number, name, email, etc.) from the dropdown, then enter a keyword. You can search multiple entries at once by separating them with line breaks (usually up to 100)
- **"Search"**: Runs the search / **"Reset"**: Clears the conditions

### Data Grid (list table)

Search results appear in a table.

- Use the **checkbox** on the left of each row to select multiple entries and perform a **Bulk action**
- Click a blue **link (order number, etc.)** to go to the detail screen
- Statuses are distinguished by **colored chips**
- Use the **"Refresh"** button in the top right to refresh to the latest data

### Modals (popups) — Processing actions

Important actions such as cancellation, refund, and editing are handled in **modal popups**. The common flow is as follows.

> **Select a row → click the action button → enter the reason, quantity, etc. in the modal → click the confirm button**

When you click confirm in the modal, the result is shown in a **notification (snackbar)** at the bottom of the screen, and the list refreshes automatically.

:::warning
For actions that are hard to undo, such as cancellation, refund, and deletion, always double-check the **selected items and the reason** before clicking the confirm button.
:::
