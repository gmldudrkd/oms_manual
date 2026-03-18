---
sidebar_position: 5
---

# 반품 승인 / 거절 + 회수완료 후 환불

## 반품 전체 절차

```
1. 클레임 접수 → 반품 생성(PENDING)
2. 수거 요청(PICKUP_REQUESTED)
3. 수거 진행(PICKUP_ONGOING) → 수거 완료
4. 수령 완료(RECEIVED)
5. 검수 완료 → 환불(REFUNDED)
```

## 검수 완료 (Inspection Complete)

**검수 입력 항목:**

| 항목 | 설명 | 필수 |
|------|------|------|
| 상품코드(productCode) | 반품 상품의 코드 | 필수 |
| 수량(quantity) | 검수 수량 | 필수 |
| 등급(grade) | A / B / C | 필수 |

**검수 규칙:**
1. 모든 반품 상품에 대해 등급을 입력해야 함 (누락 불가)
2. 검수 수량이 반품 수량과 정확히 일치해야 함
3. A, B, C 등급만 유효 (NONE, CANCEL 등급은 입력 불가)

**검수 가능 상태:** PICKUP_REQUESTED, PICKUP_ONGOING, RECEIVED

## 강제 완료

검수 없이 바로 완료 처리가 필요한 경우:
- `수령 완료(RECEIVED)` 상태에서만 가능
- 미검수 상품은 자동으로 `CANCEL` 등급으로 처리
- 환불은 정상 진행

## 반품 취소

반품 취소는 다음 상태에서 가능합니다:
- PENDING, PICKUP_REQUESTED, PICKUP_ONGOING, RECEIVED

## 수령인 정보 변경

반품 상품의 수거 주소를 변경합니다:
- `대기(PENDING)` 상태에서만 변경 가능

## 환불예상금액 조회

반품 진행 시 환불 금액을 미리 확인할 수 있습니다:
- 원 결제 금액 기준으로 환불 예상 금액 산출
- 세금, 관세, 배송비 포함

> **브랜드별 차이**: ATiissu는 OMS 내부에서 환불예상금액을 계산하고, Nuflaat은 외부 API를 통해 계산합니다.
