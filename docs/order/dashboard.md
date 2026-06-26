---
sidebar_position: 1
---

# 대시보드 (Overview)

좌측 메뉴 **Order → Overview**는 로그인 후 가장 먼저 보게 되는 화면으로, 현재 처리해야 할 주문·출고·클레임 건수를 **상태별로 한눈에** 보여줍니다.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_overview.mov" />
  브라우저가 영상을 지원하지 않습니다.
</video>

---

## 화면 구성

대시보드는 두 개의 탭으로 나뉩니다.

| 탭 | 보여주는 내용 |
|----|---------------|
| **ORDER** | 주문(Order) · 출고(Shipment) · 매장픽업(Store Pickup) 현황 |
| **CLAIM** | 반품(Return) · 교환(Exchange) · 재출고(Reshipment) 현황 |

각 영역의 카드는 진행 단계별로 묶여 있습니다.

- **Awaiting**: 대기 중(예: Pending)
- **In Progress**: 처리 중
- **Finalized**: 완료/취소 등 종료된 건 (최근 30일 기준)

예를 들어 ORDER 탭의 Order 카드에서 `Awaiting > Pending: 3`은 "확정 대기 중인 주문이 3건"이라는 뜻입니다.

---

## 사용 방법

1. 상단에서 **ORDER** 또는 **CLAIM** 탭을 선택합니다.
2. 보고 싶은 상태 카드(예: `Awaiting`, `In Progress`)를 클릭합니다.
3. 화면 아래에 해당 상태로 **필터링된 주문 목록**이 바로 나타납니다. 클릭 한 번으로 "지금 처리할 건"만 모아 볼 수 있습니다.

### 그 외 버튼

| 버튼 | 위치 | 기능 |
|------|------|------|
| **Refresh** | 우측 상단 | 최신 집계로 갱신 (`Updated at` 시각도 함께 표시) |
| **Show more / Show less** | 하단 가운데 | 세부 상태 항목을 펼치거나 접기 |

:::tip 하루 업무의 시작점
매일 아침 대시보드의 **Awaiting / In Progress** 건수를 확인하면 그날 처리할 작업량을 빠르게 파악할 수 있습니다. 숫자를 클릭해 바로 목록으로 들어가세요.
:::

:::note 표시 범위
대시보드 숫자는 헤더에서 선택한 **Brand & Corp** 범위의 데이터만 집계합니다. 숫자가 예상과 다르면 헤더 선택을 먼저 확인하세요.
:::
