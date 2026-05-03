---
sidebar_position: 3
---

# Error Message Guide

## Order

| Error Message | Cause | Resolution |
|---------------|-------|------------|
| Already exist order | An order with the same origin order number already exists | Check the existing order |
| Not found order | The order cannot be found | Check the order number |
| Invalid order request in current status | The action is not allowed in the current status | Check the status and perform the appropriate action |
| Cancel quantity exceeded | The requested cancellation quantity exceeds the available quantity | Check the cancellable quantity |
| Requested shipment quantity exceeds available | Requested shipment quantity exceeds allocated quantity | Check the allocated quantity |
| Order has no cancelable items | There are no items that can be canceled | Check the order status and item status |
| Invalid brand for order creation | Order creation is not allowed for the brand | Check brand settings |

## Return / Exchange

| Error Message | Cause | Resolution |
|---------------|-------|------------|
| Invalid return request in current status | Return processing is not allowed in the current status | Check the return status |
| Corporation uses WMS and cannot approve inspection manually | Corporations using WMS cannot process inspection manually | Process inspection through WMS |
| Products not found in return items | The requested product is not in the return item list | Check the product code |
| Inspection result quantity exceeded | Inspection quantity exceeds return quantity | Recheck the quantity |
| All items must be inspected | Some products have not been inspected | Enter inspection results for all products |
| Invalid inspection grade | Invalid inspection grade | Use only A, B, or C grades |
| Active exchange shipment already exists | An exchange shipment is already in progress | Check the existing shipment |
| Insufficient stock for exchange shipment | Not enough stock for exchange shipment | Check channel stock |

## Stock

| Error Message | Cause | Resolution |
|---------------|-------|------------|
| All channels must have the same brand and corporation | Attempted transfer between channels of different brands/entities | Select channels under the same brand/entity |
| Distribution rates cannot exceed 100 | Total distribution rate exceeds 100% | Adjust distribution rates |
| Priority must be set sequentially | Priority order is invalid | Set priorities sequentially from 1 |
| Insufficient stock quantity | Stock is insufficient | Wait for stock receipt or configure pre-order |
| OnlineStock Not Found | No online stock exists for the SKU | Check the SKU or wait for stock synchronization |

## Channel

| Error Message | Cause | Resolution |
|---------------|-------|------------|
| Channels not confirmed for use | Attempted to register an unapproved channel | Register after channel approval |
| ChannelType already registered | Duplicate channel registration | Check the existing channel |
| Certain inventory remains on the channel | Attempted to deactivate a channel with remaining stock | Transfer stock before deactivation |
