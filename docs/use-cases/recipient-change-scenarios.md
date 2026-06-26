---
sidebar_position: 3
---

# 수령인/주소 변경 (Recipient Change)

> **상황**: 고객이 배송 주소나 수령인 정보를 바꿔달라고 요청했습니다.

## 변경 가능 여부는 단계에 따라 다릅니다

수령인/주소 변경은 **출고 전 단계에서만** 가능합니다.

| 대상 | 변경 가능한 상태 | 방법 |
|------|------------------|------|
| **주문(배송)** | Pending / Collected / Partly Confirmed / Shipment Awaiting | 주문 상세에서 수정 |
| **반품** | 회수 진행 전 | RETURN 탭 → **"Edit Recipient Info"** |
| **교환(새 상품)** | Pending / Pickup Requested / Pickup Ongoing | EXCHANGE 탭 → **"Edit Recipient Info"** |
| **재출고** | 출고 전 | RESHIPMENT 탭 → **"Edit Recipient Info"** |

## 이미 출고된 경우

출고(Shipped) 이후에는 OMS에서 주소를 바꿀 수 없습니다. 이때는 다음 중 하나로 대응합니다.

- 택배사를 통한 배송지 변경(가능한 경우) 안내
- 반송 후 재발송: [반품](../order/return) 처리 후 신규 주문/재출고

:::warning
주소 변경은 반드시 **출고 전**에 처리하세요. 출고 후에는 OMS에서 처리할 방법이 제한됩니다.
:::
