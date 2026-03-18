---
sidebar_position: 3
---

# 오류 메시지 가이드

## 주문 관련

| 오류 메시지 | 원인 | 해결 방법 |
|------------|------|----------|
| Already exist order | 동일한 원주문번호의 주문이 이미 존재 | 기존 주문 확인 |
| Not found order | 주문을 찾을 수 없음 | 주문번호 확인 |
| Invalid order request in current status | 현재 상태에서 허용되지 않는 작업 | 상태 확인 후 적절한 작업 수행 |
| Cancel quantity exceeded | 취소 요청 수량이 가능 수량 초과 | 취소 가능 수량 확인 |
| Requested shipment quantity exceeds available | 출고 요청 수량이 할당 수량 초과 | 할당 수량 확인 |
| Order has no cancelable items | 취소 가능한 상품이 없음 | 주문 상태 및 상품 상태 확인 |
| Invalid brand for order creation | 주문 생성 불가능한 브랜드 | 브랜드 설정 확인 |

## 반품/교환 관련

| 오류 메시지 | 원인 | 해결 방법 |
|------------|------|----------|
| Invalid return request in current status | 현재 상태에서 반품 처리 불가 | 반품 상태 확인 |
| Corporation uses WMS and cannot approve inspection manually | WMS 사용 법인은 수동 검수 불가 | WMS를 통해 검수 진행 |
| Products not found in return items | 요청 상품이 반품 목록에 없음 | 상품코드 확인 |
| Inspection result quantity exceeded | 검수 수량이 반품 수량 초과 | 수량 재확인 |
| All items must be inspected | 일부 상품이 검수되지 않음 | 모든 상품 검수 입력 |
| Invalid inspection grade | 유효하지 않은 검수 등급 | A, B, C 등급만 사용 |
| Active exchange shipment already exists | 이미 진행 중인 교환 출고 존재 | 기존 출고 건 확인 |
| Insufficient stock for exchange shipment | 교환 출고 재고 부족 | 채널 재고 확인 |

## 재고 관련

| 오류 메시지 | 원인 | 해결 방법 |
|------------|------|----------|
| All channels must have the same brand and corporation | 다른 브랜드/법인의 채널 간 이전 시도 | 동일 브랜드/법인 채널 선택 |
| Distribution rates cannot exceed 100 | 분배율 합계가 100% 초과 | 분배율 조정 |
| Priority must be set sequentially | 우선순위 순서 오류 | 1부터 순차적으로 설정 |
| Insufficient stock quantity | 재고가 부족 | 재고 입고 대기 또는 선주문 설정 |
| OnlineStock Not Found | 해당 SKU의 온라인 재고가 없음 | SKU 확인 또는 재고 동기화 대기 |

## 채널 관련

| 오류 메시지 | 원인 | 해결 방법 |
|------------|------|----------|
| Channels not confirmed for use | 미승인 채널 등록 시도 | 채널 승인 후 등록 |
| ChannelType already registered | 중복 채널 등록 | 기존 채널 확인 |
| Certain inventory remains on the channel | 채널 내 재고 존재 시 비활성화 | 재고 이전 후 비활성화 |
