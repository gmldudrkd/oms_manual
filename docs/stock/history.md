---
sidebar_position: 3
---

# 재고 변동 이력 (History)

좌측 메뉴 **Stock → History**에서 특정 SKU의 재고가 시간에 따라 어떻게 변했는지 **그래프와 표**로 확인합니다. 재고 불일치나 갑작스러운 변동의 원인을 추적할 때 사용합니다.

---

## 조회 방법

상단 검색 폼의 항목을 모두 입력하고 조회합니다.

| 항목 | 설명 |
|------|------|
| **Start Date / End Date** | 조회 기간 (시작일 ≤ 종료일) |
| **Time Unit** | 집계 단위 — `Daily`(일별) / `Hourly`(시간별) |
| **검색어** | `SAP Code` 또는 `SKU Code` 선택 후 입력 (상품명 검색은 2자 이상) |

---

## 결과 보기

### 그래프

선택한 SKU의 재고 추이가 **꺾은선 그래프**로 표시되어, 증가·감소 흐름을 한눈에 파악할 수 있습니다.

### 스냅샷 표

각 시점의 재고를 표로 보여줍니다.

| 항목 | 설명 |
|------|------|
| **DateTime** | 스냅샷 시각 (클릭하면 상세 내역 확인) |
| Online Qty | ERP / ERP Update / Safety / Undistributed |
| Channel Qty | Channel / Distributed / Pre-order / Used / Shipped / Available |

- **DateTime 링크**를 클릭하면 해당 시점의 상세 변동 내역 창이 열립니다.
- 오늘 날짜가 조회 기간에 포함되면 **"[시각] ~ Now"** 형태의 실시간 로그 항목도 표시됩니다.

:::tip 재고가 안 맞을 때
"채널에는 재고가 있는데 OMS는 0" 같은 불일치가 보이면, History에서 변동 시점을 찾아 원인(분배 배치, 대량 주문, 취소 등)을 확인하세요. 대응 방법은 [자주 겪는 상황 — 재고 불일치/동기화 지연](../use-cases/inventory-mismatch-sync-delay)을 참고하세요.
:::
