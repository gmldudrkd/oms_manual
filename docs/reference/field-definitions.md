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
| **Receive Method** | 수령방법 — Delivery(배송) / Store Pickup(매장픽업) |
| **Order Type** | 주문유형 — NORMAL / GIFT / RX |
| **Tags** | 주문 태그 — 예: PREORDER(사전주문) |
| **Orderer** | 주문자 정보 (이름/이메일/전화) |
| **Recipient** | 수령인 정보 (이름/전화/주소) |
| **Shipment No** | 출고번호 |
| **Tracking No** | 택배 송장번호 |

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
