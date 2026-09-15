---
sidebar_position: 2
---

# 필드 정의 (Field Definitions)

화면에 자주 나오는 항목(필드)의 의미를 정리했습니다.

## 주문 필드

| 필드 | 의미 |
|------|------|
| **Order No** | OMS 주문번호 |
| **Purchase No** | 판매 채널 원주문번호 |
| **Receive Method** | 수령방법 — `DELIVERY`(배송) / `STORE_PICKUP`(매장픽업) |
| **Order Type** | 주문유형 — `GIFT` / `RX` / `LENS_ONLY` (일반 주문은 값 없음) |
| **Tags** | 주문 태그 — 예: `PRE-ORDER`(사전주문) |
| **Shipping Fee** | 주문 배송비. 주문 엑셀 추출 시 `Tax` 옆에 노출되며 전체 제품 row에 표시됩니다 |
| **Pickup** | (반품/교환) 회수 지시 여부 — `Requested` / `Not Requested` |
| **Return Method** | (반품) 회수 수단 — `PARCEL` / `IN STORE` / `FORCE REFUND` |
| **Orderer** | 주문자 정보 (이름/이메일/전화) |
| **Recipient** | 수령인 정보 (이름/전화/주소) |
| **Shipment No** | 출고번호 |
| **Tracking No** | 택배 송장번호 |

### 수령방식 · 주문유형 · 태그 조합

주문 정보에 따라 다음과 같이 값이 조합됩니다.

| 주문 정보 | Receive Method | Type | Tag |
|-----------|----------------|------|-----|
| Delivery | `DELIVERY` | — | — |
| Delivery + Gift | `DELIVERY` | `GIFT` | — |
| Pickup | `STORE_PICKUP` | — | — |
| Pre-order + Pickup | `STORE_PICKUP` | — | `PRE-ORDER` |
| RX | `DELIVERY` | `RX` | — |
| Pre-order | `DELIVERY` | — | `PRE-ORDER` |
| Lens Only | `DELIVERY` | `LENS_ONLY` | — |
| Pre-order + Pickup + Gift | `STORE_PICKUP` | `GIFT` | `PRE-ORDER` |

## 주문 상품 수량 필드

| 필드 | 의미 |
|------|------|
| **주문수량** | 고객이 주문한 수량 |
| **할당수량** | 재고가 배정된 수량 |
| **취소수량** | 취소된 수량 |
| **출고수량** | 출고된 수량 |
| **배송완료수량** | 배송 완료된 수량 |
| **반품수량 / 재출고수량** | 반품/재출고된 수량 |

## 재고 필드

| 필드 | 의미 |
|------|------|
| **ERP** | ERP 기준 재고 수량 |
| **ERP Update** | 일배치 이후 변동 반영분 |
| **Safety** | 안전재고 |
| **Undistributed** | 미분배 수량 |
| **Distribution Ratio** | 채널 분배 비율(%) |
| **Distributed** | 채널에 분배된 수량 |
| **Pre-order** | 사전주문 수량 |
| **Used** | 사용 중 수량 (Pending~Packed) |
| **Shipped** | 출고/배송 완료 수량 |
| **Available** | 판매 가능 수량 = (Distributed + Pre-order) − (Used + Shipped) |
| **Stock Status** | IN_STOCK / OUT_OF_STOCK / OVERSELLING |
| **Channel Send Status** | 채널 노출 ON / OFF |

## 상품 필드

| 필드 | 의미 |
|------|------|
| **SKU Code** | 최소 판매 단위 코드 |
| **SAP Code** | SAP(ERP) 상품 코드 |
| **Model Code** | 모델 코드 |
| **UPC Code** | 바코드 코드 |
| **Product Type** | Single(단품) / Bundle(번들) |
| **Product Info Status** | Complete(완료) / Incomplete(미완료) |
