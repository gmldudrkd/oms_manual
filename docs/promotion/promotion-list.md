---
sidebar_position: 1
---

# 프로모션 목록 (Promotion List)

좌측 메뉴 **Promotion → Promotion List**에서 프로모션을 조회·검색하고, 신규 등록·일괄 등록(Import)·내보내기(Export)를 합니다. 프로모션은 주문 조건에 맞으면 무상 제품(사은품·패키지)을 **0원 상품으로 주문에 자동 추가**하는 기능입니다. 프로모션은 OMS 에서 등록·관리하고, 공홈 적용 프로모션은 OMS 가 공홈으로 전송합니다.

---

## 프로모션 상태

| 상태 | 의미 |
|------|------|
| **Draft** | 임시 저장. 기간이 되어도 적용되지 않음 (공홈 전송도 안 함) |
| **Scheduled** | 저장 완료, 시작일 대기 중 |
| **Active** | 진행 중 (주문에 적용) |
| **Ended** | 종료. 종료일 경과 / 증정 재고 소진 / **Force Stop** 중 하나. 다시 재개할 수 없음 |
| **Deleted** | 삭제됨. 조회만 가능하고 수정·복구 불가 |

---

## 조회 방법

1. **Promotion > Promotion List** 진입
    - 진입 직후 기본 조건(**Status = Active**, **Promotion Period = 오늘 기준 ±3개월**)으로 조회된 목록이 보입니다.
2. 검색 조건 입력 후 **Search**
    - **Reset** 을 누르면 기본 조건으로 되돌아갑니다.
3. 목록에서 **Title** 을 클릭하면 상세(수정) 화면으로 이동합니다.

| 검색 항목 | 사용 방법 |
|-----------|-----------|
| **Search** | ID / Title / Created By / Updated By / Reward Product Name / Reward SAP Code / Target Product Name / Target SAP Code 중 선택 후 입력 |
| **Promotion Period** | 검색 기간과 프로모션 기간이 **하루라도 겹치면** 조회 |
| **Status** | Scheduled / Active / Ended / Draft / Deleted |
| **Channel** | 현재 Brand & Corp 의 채널 |

:::tip
- **Title** 은 한 줄에 키워드 1개만 입력할 수 있고, **2글자 이상** 입력해야 검색됩니다. (부분일치)
- Title 외 항목은 **줄바꿈으로 여러 키워드**를 한 번에 검색할 수 있습니다. SAP Code 목록을 붙여넣어 검색할 때 유용해요.
:::

---

## 목록에서 확인할 수 있는 정보

| 컬럼 | 설명 |
|------|------|
| **Target Type** | Specific Product / Order Amount / All Product |
| **Reward Product** | 증정 제품 (`제품명 · SKU`). Order Amount 는 구간별로 잔여 재고가 가장 적은 제품 1개 표시 |
| **Stock (Remaining / Total)** | 증정 잔여 / 전체 수량. **조회 시점 기준**이라 최신 수량은 **Search** 또는 **Refresh** 로 다시 확인 |
| **Trigger Channels** | 적용 채널 (3개 초과 시 `+n more` 클릭하여 펼치기) |
| **Updated By** | 마지막 수정자 (수정 이력이 없으면 `-`) |

---

## 보기 방식 전환 (List View / Calendar View)

결과 건수(`N results`) 오른쪽 토글로 전환합니다. 두 화면은 같은 검색 결과를 보여줍니다.

- **List View** : 기본 목록 화면
- **Calendar View** : 월 단위 캘린더에 프로모션 기간을 바로 표시
    - `‹` `›` 로 월 이동, **Today** 로 이번 달 이동
    - 종료일 없는 상시 프로모션은 캘린더 위 **Always-on** 영역에 따로 표시
    - Always-on 토글로 **Include Always-on / Exclude Always-on / Always-on Only** 선택
    - 바(또는 칩)를 클릭하면 하단에 요약 패널이 열리고, **Open Promotion** 으로 상세 화면 이동

---

## Export / Import

| 버튼 | 사용 방법 |
|------|-----------|
| **Export** | 현재 검색 결과 전체를 엑셀로 다운로드 (`IIC_OMS_Promotion_List_{Brand}_{Corp}_YYYYMMDD_HHmm.xlsx`) |
| **Import > Download Template** | 일괄 등록용 엑셀 템플릿 다운로드 |
| **Import > Upload Excel** | 작성한 템플릿 업로드 → 프로모션이 **Draft** 로 일괄 생성 (Created By = `import`) |

:::info
Import 시 오류가 있는 행만 건너뛰고 나머지는 정상 등록됩니다. 건너뛴 행은 우측 상단 알림에 `Row N: 오류 항목` 으로 안내되니, 해당 행을 수정해 다시 업로드하세요.  
Import 로 만든 프로모션은 Draft 상태이므로 **내용 확인 후 Save** 해야 적용됩니다.
:::

신규 등록·수정 방법은 [프로모션 등록·수정](./promotion-create), 템플릿 관리는 [프로모션 템플릿](./promotion-template)에서 다룹니다.
