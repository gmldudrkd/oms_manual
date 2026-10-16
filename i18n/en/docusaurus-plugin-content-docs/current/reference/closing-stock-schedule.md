---
sidebar_position: 5
---

# Closing Stock Schedule

A table of the times when closing stock is received in OMS from each entity's ERP.

:::note
Closing stock is received **once a day** per entity. On receipt, stock is sent to each channel according to the allocation ratio set in OMS.
If a channel needs more stock after closing stock is received, you can move it manually with Stock Transfer.
:::

| Entity | Brand | Source System | Receipt Time (Local) | Receipt Time (KST) | Frequency |
| --- | --- | --- | --- | --- | --- |
| KR | GM, ATS, NUF | SAP | Around 2:00 AM | Around 2:00 AM | Daily |
| JP | GM | IPOS | 02:00 (JST) | 02:00 | Daily |
| AU | GM | IIC BO | 01:00 (AEDT) | 23:00 (previous day) | Daily |
| US | GM | IIC BO | 01:00 (PT) | 17:00 (DST) / 18:00 | Daily |
| CA | GM | IIC BO | 01:00 (local) | Based on local time | Daily |

:::info
- AU received closing stock from the legacy IPOS at 01:00 (KST) until 2026.10.23, and has received it from IIC BO since 2026.10.24.
- For US and CA, the KST receipt time shifts by one hour depending on daylight saving time.
:::
