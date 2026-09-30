---
sidebar_position: 2
---

# 프로모션 등록·수정

**Promotion List** 에서 신규 프로모션을 등록하거나, 기존 프로모션을 열어 수정·종료·삭제합니다. 프로모션은 **Target**(무엇을 사면)과 **Reward**(무엇을 증정할지)를 설정하는 구조입니다.

---

## 프로모션 등록

### 등록 순서

**Promotion List** 우측 상단 **+ Add Promotion** 클릭 후 아래 순서로 입력합니다.

1. **Basic Info** : Promotion Name(최대 50자), Promotion Type, Promotion Goal, Start / End DateTime 입력
    - 종료일 없이 계속 운영하려면 **Always On** 을 켭니다.
    - 하단 기간 요약 박스에서 예상 상태·D-day·총 기간을 바로 확인할 수 있습니다.
2. **Sales Channel** : 적용할 채널 선택
3. **Target** : "무엇을 사면 증정할지" 설정
4. **Reward** : "무엇을 증정할지" 제품과 수량 설정
5. **Apply Simulation** (선택) : 테스트 채널·장바구니를 구성해 프로모션이 제대로 걸리는지 미리 확인
6. **Change Status** 에서 **Draft**(임시저장) 또는 **Save**(저장)

:::tip
자주 쓰는 설정은 **Save as Template** 으로 저장해 두고, 다음 등록 때 **Load Template** 으로 불러오세요.  
템플릿에는 기간·채널·재고 수량이 저장되지 않으니, 불러온 뒤 **기간과 채널, 수량을 입력**하고 저장하면 됩니다. (템플릿 관리는 [프로모션 템플릿](./promotion-template) 참고)
:::

### Promotion Type 선택

| 타입 | 용도 | 채널 선택 | 증정 수량 |
|------|------|-----------|-----------|
| **GWP** | 제품 구매 시 사은품 증정 | **1개만** 선택 | Total / Alert 수량 입력 필요 |
| **Packaging Benefit** | 제품 구매 시 패키지 증정 (예: 하트 패키지) | **여러 개** 선택 가능 | 수량 제한 없음 (입력 불필요) |

- **Packaging Benefit** 은 Reward 에서 **패키지 제품만** 검색됩니다.
- **Packaging Benefit** 은 제품과 1:1 매칭 증정으로 Target Type **Specific Product**, **All Product** 만 사용가능하며 구매 수량만큼 증정(**Per product quantity**)으로 고정됩니다.
  - Target Type **Order Amount** 는 주문 당 증정만 가능하기에 **Packaging Benefit** 에선 사용불가합니다.

### Target 설정

| Target Type | 이럴 때 사용 | 설정 방법 |
|-------------|-------------|-----------|
| **Specific Product** | 특정 제품을 사면 증정 | Target Product 검색·추가 → **Target Purchase Basis** 선택 (**Any** : 하나만 사도 증정 / **All** : 모두 사야 증정) → **Purchase Quantity**(최소 구매 수량, 1~99) → **Reward Basis** 선택 |
| **Order Amount** | 주문 금액 구간별로 증정 (GWP 전용) | **+ Add Range** 로 금액 구간 추가(최대 5개) → 필요 시 **Excluded Product**(금액에서 뺄 제품, 예: 쇼핑백) 설정 |
| **All Product** | 어떤 제품이든 사면 증정 | 필요 시 **Excluded Product** 설정 → **Reward Basis** 선택 |

- **Reward Basis** : **Per order**(주문당 1세트 증정) / **Per product quantity**(구매 수량만큼 증정)
- **Order Amount** 구간은 `하한 이상 ~ 상한 미만` 으로 판정하며, 앞 구간의 상한이 다음 구간의 하한으로 자동 연결됩니다. 상한 없음(**No maximum limit**)은 마지막 구간에만 설정할 수 있어요.

:::tip 제품 검색 방법
Product name / SAP Code / ModelPack2 중 선택 후 키워드를 입력하면 검색됩니다. (키워드 입력 전에는 목록이 보이지 않아요)
- 키워드 **1개** → 포함된 제품 모두 조회 (부분일치)
- 키워드 **2개 이상**(줄바꿈) → 입력값과 **정확히 같은** 제품만 조회
:::

### Reward 설정

1. 증정할 제품 검색·추가
    - Target Type 이 **Order Amount** 이면 금액 구간 카드별로 제품을 추가합니다.
    - Promotion Type 이 **Packaging Benefit** 일 경우 카테고리가 Package 인 제품만 검색 가능합니다.
2. **Reward Type** 선택 (Specific Product / Order Amount 일 때)
    - **Default Gift** : 등록한 제품을 모두 증정
    - **Option Select** : 등록한 제품(최대 10개) 중 고객이 **1개를 골라** 받음 — **공홈(Official) 채널에서만** 사용 가능
    - All Product 는 항상 Default Gift 로 동작합니다.
3. (GWP) 제품별 **Total**(총 증정 수량)과 **Alert**(알림 기준 수량) 입력
    - **Sold / Remaining** 은 자동 계산됩니다.
    - **Order Amount** 는 구간 카드 아래 **Shared SKU Inventory** 표에서 SKU 별로 한 번만 입력합니다. 같은 제품을 여러 구간에 넣어도 재고는 하나로 공유돼요.

### 저장

| 버튼 | 동작 |
|------|------|
| **Draft** | 필수값 없이 임시 저장. 기간이 되어도 적용되지 않음 (End Date 가 비어 있으면 Always-on 으로 저장할지 확인 팝업 노출) |
| **Save** | 필수값 확인 → 우측 **Summary** 로 이동해 설정 내용 강조 → 확인 팝업에서 저장. 기간에 따라 **Scheduled** 또는 **Active** 로 자동 설정 |

- 누락된 필수값이 있으면 항목 목록이 안내되고 저장되지 않습니다.
- 신규 등록 후 저장하면 생성된 프로모션의 상세 화면으로 이동합니다.

---

## 프로모션 수정·종료·삭제

### 상태별 가능한 작업

목록에서 프로모션을 클릭해 상세 화면에서 수정합니다. 상태에 따라 수정할 수 있는 범위가 다릅니다.

| 상태 | 수정 가능 범위 | Draft | Save | Force Stop | Delete | 템플릿 |
|------|---------------|:-----:|:----:|:----------:|:------:|--------|
| **Draft** | 전체 | ✅ | ✅ | - | ✅ | Load / Save |
| **Scheduled** | 전체 | - | ✅ | - | ✅ | Save 만 |
| **Active** | 종료일, 증정 수량(Total / Alert), Target Product **추가** | - | ✅ | ✅ | - | Save 만 |
| **Ended** | 조회만 가능 | - | - | - | - | - |
| **Deleted** | 조회만 가능 | - | - | - | - | - |

:::warning 진행 중(Active) 프로모션 수정 시 유의사항
- 종료일은 **현재 시각 이후**로만 바꿀 수 있습니다. 앞당기면 변경된 종료일 이후 결제된 주문에는 적용되지 않아요. (Always On 인 경우 종료일 수정 불가)
- Target Product 는 **추가만** 가능하고, 이미 등록된 제품은 삭제할 수 없습니다.
- 증정 제품(Reward Product)이나 제외 제품(Excluded Product)을 바꿔야 한다면 **Force Stop 후 새 프로모션으로 등록**하세요.
:::

### 진행 중인 프로모션 강제 종료 (Force Stop)

1. Active 상태 프로모션 상세에서 **Change Status > Force Stop** 클릭
2. 확인 팝업에서 **Confirm**
3. 즉시 **Ended** 로 변경되며, 이후 결제된 주문에는 적용되지 않습니다. (재개 불가)

### 프로모션 삭제 (Delete)

**Draft / Scheduled** 상태에서만 삭제할 수 있습니다.

1. 상세에서 **Change Status > Delete** 클릭
2. 확인 창에 **`delete`** 를 입력 후 삭제
3. 상태가 **Deleted** 로 변경됩니다. 설정 내용은 조회용으로 남지만 수정·복구할 수 없습니다.

---

## 알아두면 좋은 재고 처리

- 증정 재고는 **SAP 재고와 별개**로, 프로모션에 입력한 수량으로 관리됩니다.
- 주문이 접수되면 즉시 차감되고, 주문이 **취소**되면 다시 늘어납니다. (**반품** 시에는 늘어나지 않음)
- 증정 재고가 모두 소진되면 프로모션은 자동으로 **Ended** 가 되고, 주문은 프로모션 없이 정상 수집됩니다.
