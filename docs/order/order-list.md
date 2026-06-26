---
sidebar_position: 2
---

# 주문 조회와 상세 (Order List)

좌측 메뉴 **Order → Order List**에서 주문을 검색하고, 개별 주문의 상세 내용을 확인합니다. 반품/교환/재출고 목록도 동일한 구조이므로, 이 화면 사용법을 익히면 나머지도 그대로 적용됩니다.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_orderlist.mov" />
  브라우저가 영상을 지원하지 않습니다.
</video>

---

## 주문 검색하기

상단 검색 폼에서 조건을 지정하고 **"Search"**를 누릅니다.

### 검색어로 찾기

검색어 입력칸 왼쪽 드롭다운에서 **검색 기준**을 고른 뒤 값을 입력합니다. 여러 건은 줄바꿈으로 한 번에 검색할 수 있습니다(보통 최대 100건).

| 검색 기준 | 설명 |
|-----------|------|
| **Order No** | OMS 주문번호 |
| **Purchase No** | 판매 채널의 원주문번호 |
| **Orderer Name / Email / Phone** | 주문자 이름·이메일·전화번호 (부분 검색) |
| **Shipment No** | 출고 번호 |
| **SKU Code** | 상품 코드 |

### 필터로 좁히기

| 필터 | 설명 |
|------|------|
| **Period(기간)** | 주문 접수일 기준 기간. `Today` `Week` `Month` `3 Month` 단축 버튼 제공 |
| **Order Status Filter** | 주문 상태 복수 선택 (Pending, Collected, Completed 등) |
| **Fulfillment Status Filter** | 출고 상태 복수 선택 (Picking Requested ~ Delivered) |
| **Channel Filter** | 판매 채널 (권한 범위 내) |
| **Receive Methods / Types / Tags** | 수령방법(배송/픽업), 주문유형(NORMAL/GIFT/RX), 태그(PREORDER 등) |

:::warning 완료·취소 건 조회 시 주의
Completed/Canceled/Deleted 등 종료된 주문을 조회할 때는 **기간(Period)을 반드시 지정**해야 합니다. 데이터가 많아 기간 없이 조회할 수 없습니다.
:::

---

## 목록 보기

검색 결과 표에는 다음 정보가 표시됩니다.

| 컬럼 | 설명 |
|------|------|
| Brand / Corp / Channel | 브랜드·법인·채널 |
| **Order No** | 클릭하면 상세 화면으로 이동 |
| Receive Method | 파란색=Delivery, 보라색=Store Pickup |
| Type / Tags | 주문유형, 태그 |
| **Status** | 주문 상태 칩 |
| **Shipment Status** | 출고 상태 칩 |
| Order Date | 주문일 |
| Recipient Name / Phone | 수령인 정보 |
| Shipment No / Tracking No | 출고번호·송장번호 |

- 우측 상단 **"Refresh"**로 목록을 갱신합니다.
- 행을 선택하면 **"Bulk Cancel"**(일괄 취소)을 사용할 수 있습니다. → [주문 취소](./order-cancel) 참고

---

## 주문 상세 화면

목록에서 **Order No**를 클릭하면 상세 화면이 열립니다. 상단 탭으로 이 주문과 연결된 모든 이력을 한곳에서 봅니다.

| 탭 | 내용 |
|----|------|
| **ORDER** | 주문 기본정보, 상품, 결제, 출고/배송 정보 + 작업 버튼 |
| **RETURN** | 이 주문에서 발생한 반품 건 |
| **EXCHANGE** | 교환 건 |
| **RESHIPMENT** | 재출고 건 |
| **LOG-HISTORY** | 전체 변경 이력(시간순) |

### ORDER 탭에서 볼 수 있는 정보

- **주문 헤더**: 채널, 주문일, 주문 상태, 수령방법, 주문유형, 태그
- **주문자 / 수령인**: 이름·연락처·주소 (개인정보 마스킹)
- **주문 상품**: SKU, 상품명, 단가, 수량별 상태(주문/할당/취소/출고/배송/반품 수량)
- **출고 정보**: 출고번호, 송장번호, 출고 상태
- **결제 정보**: 결제수단, 금액, 세금, 배송비, 통화
- **환불 이력**: 반품/교환으로 발생한 환불 내역

### 상태에 따라 나타나는 작업 버튼

ORDER 탭에는 **현재 주문 상태에서 할 수 있는 작업 버튼만** 표시됩니다.

| 버튼 | 표시 조건 | 동작 |
|------|-----------|------|
| **Cancel Order** | 취소 가능 상태(Pending 등) | 주문 취소 → [주문 취소](./order-cancel) |
| **Request Shipment** | Partly Confirmed / Partial Shipment Requested | 부분 출고 요청 → [주문 취소·부분출고](./order-cancel#부분-출고-요청) |
| **Register Claim** | Completed | 반품/교환 등 클레임 등록 |

### LOG-HISTORY 탭

주문 상태 변경, 출고 이벤트, 매장픽업, 반품·교환·재출고 이력이 **시간순**으로 기록됩니다. 각 항목을 클릭하면 상세 내용을 확인할 수 있어, "이 주문이 지금 왜 이 상태인지" 추적할 때 유용합니다.

:::tip
어떤 상태에서 어떤 작업(취소·수정·클레임)이 가능한지 전체 규칙은 [레퍼런스 — 상태 코드표](../reference/status-codes)에 정리되어 있습니다.
:::
