---
sidebar_position: 3
---

# 주문 취소와 부분 출고

주문을 취소하거나, 일부 상품만 먼저 출고하는 방법을 설명합니다. **무엇을 할 수 있는지는 주문 상태에 따라 달라집니다.**

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_cancel.mov" />
  브라우저가 영상을 지원하지 않습니다.
</video>

---

## 어떤 상태에서 취소할 수 있나

| 주문 상태 | 전체 취소 | 개별 상품/수량 취소 | 비고 |
|-----------|:---------:|:------------------:|------|
| Pending | ✅ | ✅ | 재고 미할당 |
| Collected | ✅ | ✅ | 재고 미할당 |
| Partly Confirmed | ✅ | ✅ | 일부 할당 |
| Partial Shipment Requested | ❌ | ✅ | **미출고분만** 취소 가능 |
| Shipment Requested | ❌ | ❌ | 출고됨 → 반품/교환으로 처리 |
| Completed | ❌ | ❌ | 반품/교환으로 처리 |

:::warning
이미 출고(Shipment Requested)된 주문은 취소할 수 없습니다. 이 경우 [반품](./return) 또는 [교환](./exchange)으로 처리하세요. 출고가 분실된 경우는 [재출고](./reshipment)를 참고하세요.
:::

---

## 방법 1 — 목록에서 여러 건 일괄 취소 (Bulk Cancel)

같은 사유로 여러 주문을 한 번에 취소할 때 사용합니다.

1. **Order List**에서 취소할 주문들의 체크박스를 선택합니다.
   - 취소 가능 상태(Pending / Collected / Partly Confirmed)인 건만 선택됩니다.
2. 상단 **"Bulk Cancel"** 버튼을 클릭합니다.
3. **"Order Cancelation"** 모달이 열리며 선택한 주문 목록이 표시됩니다.
4. **취소 사유(Cancelation reason)**를 드롭다운에서 선택합니다. *(필수)*
5. **"Cancel and Refund"** 버튼을 눌러 확정합니다.
6. 처리 결과가 알림으로 표시되고 목록·대시보드가 갱신됩니다.

:::note 자동 환불
취소가 완료되면 결제 건은 **자동 환불(Auto Refund)** 처리되고, 할당됐던 재고는 다시 가용 재고로 돌아갑니다.
:::

---

## 방법 2 — 상세 화면에서 부분 취소 (개별 상품·수량)

한 주문 안에서 특정 상품이나 일부 수량만 취소할 때 사용합니다.

1. **Order List**에서 주문번호를 클릭해 상세 화면을 엽니다.
2. ORDER 탭에서 **"Cancel Order"** 버튼을 클릭합니다.
3. **"Cancel Order"** 모달에서:
   - **취소 사유(Select a reason)**를 선택합니다.
   - 상품 목록에서 **취소할 수량**을 항목별로 입력합니다. (이미 출고된 수량은 취소 불가)
   - 하단 **Summary**에서 취소 내역을 확인합니다.
4. **"Cancel Order"** 버튼으로 확정합니다.

:::tip 취소 사유와 귀책
취소 사유에 따라 귀책(Fault)이 **고객 귀책(CUSTOMER)** 또는 **운영 귀책(OPERATION)**으로 자동 분류되어 환불·정산에 반영됩니다. 사유를 정확히 선택하세요.
:::

---

## 부분 출고 요청

재고가 일부만 확보되어 주문이 **Partly Confirmed** 상태일 때, 확보된 상품만 먼저 출고할 수 있습니다.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_partly.mov" />
  브라우저가 영상을 지원하지 않습니다.
</video>

1. 주문 상세 ORDER 탭에서 **"Request Shipment"** 버튼을 클릭합니다.
   - 이 버튼은 상태가 **Partly Confirmed** 또는 **Partial Shipment Requested**일 때만 나타납니다.
2. 먼저 출고할 상품·수량을 확인하고 출고를 요청합니다.
3. 출고 요청 후 주문은 **Partial Shipment Requested**가 되며, 남은 상품은 재고가 확보되는 대로 추가 출고합니다.
4. 모든 상품이 출고되면 주문이 **Shipment Requested**로 바뀝니다.

:::note
관련 운영 시나리오는 [자주 겪는 상황 — 부분 출고/분할 배송](../use-cases/partial-shipment-split-delivery)에서 자세히 다룹니다.
:::
