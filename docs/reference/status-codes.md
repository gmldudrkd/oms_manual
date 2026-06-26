---
sidebar_position: 1
---

# 상태 코드표 (Status Guide)

OMS의 모든 작업은 **현재 상태에서 무엇이 가능한지**에 따라 결정됩니다. 이 표는 주문·출고·매장픽업·반품·교환·재출고 각 상태의 의미와 가능한 작업을 정리한 것으로, 화면의 **Status Guide**와 동일한 기준입니다.

---

## 주문 (Order)

| 상태 | 의미 | 수령인 수정 | 전체 취소 | 부분 취소 | 가능한 클레임 |
|------|------|:----------:|:--------:|:--------:|---------------|
| **Pending** | 재고 미할당, 확정 대기 | ✅ | ✅ | ✅ | Order Cancel |
| **Collected** | 주문 확정, 재고 미할당 | ✅ | ✅ | ✅ | Order Cancel |
| **Partly Confirmed** | 일부 재고 할당 (부분출고 가능) | ✅ | ✅ | ✅ | Order Cancel |
| **Partial Shipment Requested** | 일부 출고 요청됨 | ❌ | ❌ | ✅ (미출고분) | Order Cancel (미출고분) |
| **Shipment Requested** | 전체 출고 요청 완료 | ❌ | ❌ | ❌ | Return, Exchange (출고분) |
| **Completed** | 모든 출고 배송 완료 | ❌ | ❌ | ❌ | Return, Exchange |
| **Canceled** | 주문 취소됨 (자동 환불) | ❌ | ❌ | ❌ | — |

---

## 출고 (Shipment)

| 상태 | 의미 | 출고 취소 | 가능한 클레임 |
|------|------|:--------:|---------------|
| **Picking Requested** | WMS에 피킹 지시 전달 | ✅ (WMS 확인 필요) | Shipment Cancel |
| **Picking Rejected** | 재고 부족 등 피킹 실패 (재출고/취소 가능) | ✅ | Shipment Cancel |
| **Picked** | 피킹 완료 | ❌ | — |
| **Packed** | 포장 완료 | ❌ | — |
| **Shipped** | 배송 시작 | ❌ | Return, Exchange |
| **Lost** | 배송 중 분실 | ❌ | Force Refund, Reshipment |
| **Delivered** | 배송 완료 | ❌ | Return, Exchange |
| **Canceled** | 출고 취소됨 | ❌ | — |

---

## 매장픽업 (Store Pickup)

| 상태 | 의미 | 취소 | 가능한 클레임 |
|------|------|:----:|---------------|
| **Pickup Requested** | 매장으로 출고 준비 | ✅ | Order Cancel |
| **Shipped** | 창고 → 매장 이동 완료 | ✅ | Order Cancel |
| **Prepared** | 매장 입고, 수령 대기 | ✅ | Order Cancel |
| **Completed** | 고객 수령 완료 | ❌ | — |
| **Canceled** | 픽업 취소됨 | ❌ | — |

---

## 반품 (Return)

| 상태 | 의미 | 반품 취소 | 환불 |
|------|------|:--------:|------|
| **Pending** | 회수 대기 (회수 요청 가능) | ✅ | — |
| **Pickup Requested** | 회수 지시 전달 | ✅ | — |
| **Pickup Ongoing** | 회수 진행 중 | ✅ | — |
| **Received** | 입고·검수 완료 | ✅ | 검수 등급 기준 환불 |
| **Refunded** | 환불 완료 | ❌ | 환불 완료됨 |
| **Canceled** | 반품 취소됨 | ❌ | — |

---

## 교환 (Exchange)

| 상태 | 의미 | 교환 취소 |
|------|------|:--------:|
| **Pending** | 회수 대기 | ✅ |
| **Pickup Requested** | 회수 지시 전달 | ✅ |
| **Pickup Ongoing** | 회수 진행 중 | ✅ |
| **Received** | 기존 상품 입고 | ✅ |
| **Inspected** | 검수 완료 | ❌ |
| **Shipment Requested** | 새 상품 출고 요청 | ❌ |
| **Exchanged** | 새 상품 발송 완료 | ❌ |
| **Canceled** | 교환 취소됨 | ❌ |

---

## 재출고 (Reshipment)

재출고는 출고(Shipment)와 동일한 상태 흐름을 따릅니다.

| 상태 | 의미 | 취소 |
|------|------|:----:|
| **Picking Requested** | 피킹 지시 전달 | ✅ (WMS 확인 필요) |
| **Picking Rejected** | 피킹 실패 (재출고/취소 가능) | ✅ |
| **Picked / Packed** | 피킹·포장 완료 | ❌ |
| **Shipped** | 배송 시작 | ❌ |
| **Delivered** | 배송 완료 | ❌ |
| **Canceled** | 취소됨 | ❌ |

---

## 클레임 유형 (Claim Type)

| 유형 | 의미 | 회수 필요 |
|------|------|:--------:|
| **CANCEL** | 주문 취소 | ❌ |
| **RETURN** | 반품 + 환불 | ✅ |
| **RETURN_FORCE_REFUND** | 검수 없이 즉시 환불 | ✅ |
| **EXCHANGE** | 회수 + 새 상품 발송 | ✅ |
| **RESHIPMENT** | 출고 실패/분실 재발송 | ❌ |

**귀책(Fault)**: `CUSTOMER`(고객 귀책) / `OPERATION`(운영 귀책) — 환불·정산에 반영됩니다.
