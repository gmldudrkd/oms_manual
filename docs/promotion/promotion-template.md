---
sidebar_position: 3
---

# 프로모션 템플릿 (Promotion Template)

좌측 메뉴 **Promotion → Template**에서 반복해서 쓰는 **Basic Info · Target · Reward** 설정을 템플릿으로 저장해 두고, 여러 채널에 프로모션을 **한 번에 등록(Multi Register)** 할 수 있습니다.

---

## 템플릿 조회

- **Promotion Type**(All / GWP · Free Gift / Packaging Benefit) 과 **Search**(Title / Reward Product Name / Reward SAP Code / Target Product Name / Target SAP Code) 로 검색합니다.
- 템플릿은 카드 형태로 보이며, 카드에서 **Promotion Type · Target Type · Reward 제품**을 확인할 수 있습니다. (최근 생성 순)

---

## 템플릿 만들기

1. **+ New Template** 클릭 (상단 버튼 또는 점선 카드)
2. 팝업에서 3개 영역 입력
    - **Basic Info** : Template Name, Promotion Type, Promotion Goal
    - **Target** : Specific Product / Order Amount / All Products 와 대상 제품·조건
    - **Reward · Benefit** : Reward Type, 증정 제품
3. **Save**
    - 필수값(Template Name, 대상 제품 또는 최소 금액, Reward 제품)이 비어 있으면 Save 가 비활성화됩니다.

:::info
템플릿에는 **기간 · 채널 · 상태 · 증정 수량**이 저장되지 않습니다. 기간과 채널은 멀티 등록 시, 증정 수량은 생성된 각 프로모션에서 입력합니다.  
프로모션 등록 화면에서 **Save as Template** 으로 현재 입력값을 템플릿으로 저장할 수도 있습니다.
:::

---

## 여러 채널에 한 번에 등록 (Multi Register)

1. 템플릿 카드에서 **Multi Register** 클릭
2. 등록할 **채널 체크** → 채널마다 행이 1개씩 추가됩니다. (채널 1개 = 프로모션 1건)
    - Option Select 템플릿은 자사몰(Official) 채널만 선택할 수 있습니다.
3. 행마다 **Promotion Name**(기본값 `템플릿 이름 · 채널명`), **Start / End** 입력
    - 종료일 없이 운영하려면 **Always on** 체크
    - 같은 채널에 기간을 나눠 여러 번 진행하려면 **+ Period** 로 행 추가 (이름 뒤에 `· 2차`, `· 3차` 자동 부여)
4. 등록하면 행마다 프로모션이 **Draft** 로 생성되어 Promotion List 에 추가됩니다.
    - 1건이면 해당 프로모션 상세 화면으로, 2건 이상이면 Promotion List 로 이동합니다.
5. 생성된 각 프로모션에서 **증정 수량(Total / Alert)** 을 입력하고 **Save** 해야 적용됩니다.

:::tip
End 를 비워둔 행이 있으면 등록 전에 Always-on 으로 저장할지 확인 팝업이 뜹니다. **Confirm** 하면 해당 행은 Always on 으로 생성되고, **Cancel** 하면 입력값을 유지한 채 등록이 취소됩니다.
:::

---

## 템플릿 수정·삭제

- **수정** : 카드의 **Edit** 클릭 → 팝업에서 수정 후 **Save**
- **삭제** : 카드의 휴지통 아이콘 또는 편집 팝업의 **Delete** → 확인 창에서 **Delete**
- 템플릿을 수정·삭제해도 **이미 생성된 프로모션에는 영향이 없습니다.**
