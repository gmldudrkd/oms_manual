---
sidebar_position: 10
---

# Channel Management

## What Is a Channel?

A channel is a **sales route** where products are sold. Each channel belongs to a specific brand and corporation, and manages stock and orders independently.

## Searching Channel List

You can search all registered sales channels.

**Channel information:**

| Item | Description |
|------|-------------|
| Channel Name | Sales channel name |
| Channel Type Code | Unique channel code, such as E6001 or US1004 |
| SAP Code | Channel code in the ERP system |
| Brand | Associated brand (ATiissu, Nuflaat, GM) |
| Corporation | Associated corporation (KR, US, CA, etc.) |
| Category | Channel classification |
| Active Status | Active / inactive |

## Searching Active Channels

You can filter by brand and corporation to search only currently active channels.

## Registering a Channel

> **Permission**: ADMIN role or higher is required.

Procedure to register a new sales channel:

1. Go to the **Channel Management** menu.
2. Click **Register Channel**.
3. Enter channel information:
   - Channel name
   - Channel type code
   - Brand selection
   - Corporation selection
   - Category setting
4. Complete registration.

> **Caution**: If the same channel type code is already registered, the `ChannelType already registered` error occurs.

## Editing a Channel

You can edit information for an existing channel:

- Change channel name
- Change category
- Change active/inactive status

> **Caution**: If stock remains in a channel when deactivating it, the `Certain inventory remains on the channel` error occurs. Transfer stock to another channel before deactivating it.

## Currently Operating Channels

| Channel | Code | Brand | Corporation |
|---------|------|-------|-------------|
| ATiissu Official | E6001 | ATiissu | KR |
| Nuflaat Official | E4001 | Nuflaat | KR |
| GM Official US | US1004 | Gentle Monster | US |
| GM Official CA | US1005 | Gentle Monster | CA |
