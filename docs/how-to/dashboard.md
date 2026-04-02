---
sidebar_position: 7
---

# 대시보드 사용법

## 대시보드 개요

대시보드는 주문, 출고, 매장 픽업, 반품, 교환, 재출고의 **현재 상태 요약**을 한눈에 보여주는 화면입니다.

> **기본 조회 기간**: 최근 30일 기준으로 집계됩니다.

## 대시보드 구성

대시보드는 도메인별 카드 형태로 구성되며, 각 카드는 **대기 / 진행 중 / 최종 완료** 그룹으로 나뉩니다.

### 주문 (Orders)

| 그룹 | 포함 상태 |
|------|-----------|
| 대기 | `PENDING` |
| 진행 중 | `COLLECTED`, `PARTLY_CONFIRMED`, `PARTIAL_SHIPMENT_REQUESTED`, `SHIPMENT_REQUESTED` |
| 최종 완료 | `COMPLETED`, `CANCELED`, `DELETED` |

### 출고 (Shipments)

| 그룹 | 포함 상태 |
|------|-----------|
| 진행 중 | `PICKING_REQUESTED`, `PICKED`, `PACKED`, `SHIPPED` |
| 최종 완료 | `CANCELED`, `PICKING_REJECTED`, `DELIVERED`, `LOST` |

### 매장 픽업 (Store Pickups)

| 그룹 | 포함 상태 |
|------|-----------|
| 진행 중 | `PICKUP_REQUESTED`, `SHIPPED`, `PREPARED` |
| 최종 완료 | `COMPLETED`, `CANCELED` |

### 반품 (Returns)

| 그룹 | 포함 상태 |
|------|-----------|
| 대기 | `PENDING` |
| 진행 중 | `PICKUP_REQUESTED`, `PICKUP_ONGOING`, `RECEIVED` |
| 최종 완료 | `REFUNDED`, `CANCELED` |

### 교환 (Exchanges)

| 그룹 | 포함 상태 |
|------|-----------|
| 대기 | `PENDING` |
| 진행 중 | `PICKUP_REQUESTED`, `PICKUP_ONGOING`, `RECEIVED`, `INSPECTED`, `SHIPMENT_REQUESTED` |
| 최종 완료 | `EXCHANGED`, `CANCELED` |

### 재출고 (Reshipments)

| 그룹 | 포함 상태 |
|------|-----------|
| 진행 중 | `PICKING_REQUESTED`, `PICKED`, `PACKED`, `SHIPPED` |
| 최종 완료 | `DELIVERED`, `LOST`, `CANCELED` |

## 채널 필터

대시보드 상단에서 채널을 선택하면 해당 채널의 데이터만 집계됩니다.

> **중요**: 사용자는 자신에게 권한이 부여된 채널의 데이터만 볼 수 있습니다. 채널 권한이 없으면 대시보드에 해당 채널의 수치가 포함되지 않습니다.

## 카드 클릭 시 동작

각 상태 그룹의 숫자를 클릭하면 해당 상태로 필터링된 목록 화면으로 이동합니다.

- 주문 카드의 "진행 중" 클릭 → 주문 목록에서 진행 중 상태만 필터링
- 반품 카드의 "대기" 클릭 → 반품 목록에서 `PENDING` 상태만 필터링

> **주문 대시보드 확장 (OMS-1995)**: 매장 픽업 집계 정보가 대시보드에 추가되었습니다.
