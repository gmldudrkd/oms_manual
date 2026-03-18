---
sidebar_position: 6
---

# 교환 승인 / 거절 + 교환출고

## 교환 전체 절차

```
1. 클레임 접수 → 교환 생성(PENDING)
2. 반품 수거 (반품과 동일)
3. 수령 완료(RECEIVED)
4. 검수 완료(INSPECTED)
5. 교환 출고 요청(SHIPMENT_REQUESTED)
6. 배송 완료 → 교환 완료(EXCHANGED)
```

## 교환 출고 관리

교환은 별도의 **교환 출고(ExchangeShipment)** 건으로 관리됩니다.

**교환 출고 상태:**

| 상태 | 의미 |
|------|------|
| 피킹 요청(PICKING_REQUESTED) | WMS에 피킹 요청 |
| 피킹 완료(PICKED) | 상품 꺼내기 완료 |
| 포장 완료(PACKED) | 포장 완료 |
| 배송 중(SHIPPED) | 배송사에 인도 |
| 배송 완료(DELIVERED) | 고객에게 전달 |
| 피킹 거절(PICKING_REJECTED) | 재고 부족 등으로 거절 |
| 취소(CANCELED) | 출고 취소 |
| 분실(LOST) | 배송 중 분실 |

**교환 출고에서 할 수 있는 작업:**

| 작업 | 조건 | 설명 |
|------|------|------|
| 배송 수령인 변경 | PENDING ~ PICKUP_ONGOING | 교환 상품 배송 주소 변경 |
| 출고 취소 요청 | 피킹 거절 상태 | 교환 출고 취소 |
| 분실 처리 | 배송 중(SHIPPED) | 배송 분실 기록 |
| 재출고 요청 | 피킹 거절 상태 | 새로운 출고 건 생성 |

## 교환 취소

교환 전체를 취소하려면:
- PENDING, PICKUP_REQUESTED, PICKUP_ONGOING, RECEIVED 상태에서만 가능
- 취소 시 반품 수거 및 교환 출고 모두 중단
