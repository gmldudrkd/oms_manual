---
sidebar_position: 1
---

# 상품 목록 (Product List)

좌측 메뉴 **Product → Product List**에서 상품 마스터를 조회하고, 번들 생성·일괄 업로드 등 상품 관리 작업을 수행합니다.

---

## 상품 검색

| 검색 항목 | 입력 방법 |
|-----------|-----------|
| **SKU Code / SAP Code / Model Code / UPC Code** | 줄바꿈으로 여러 건 입력 |
| **SAP Name** | 상품명(단일 입력) |
| **Product Info Status** | 상품정보 상태 — All / Complete(완료) / Incomplete(미완료) |
| **Product Type** | All / Single(단품) / Bundle(번들) |

**"Search"**로 검색, **"Reset"**으로 초기화합니다.

### 목록 컬럼

| 컬럼 | 설명 |
|------|------|
| Product Type | Single / Bundle 칩 |
| **SKU Code** | 클릭하면 [상품 상세](./product-detail)로 이동 |
| SAP Code / Quantity / Model Code / UPC Code / SAP Name | 상품 기본정보 |
| **Product Info Status** | 상품정보 입력 완료 여부 |
| Created At / Last Updated At | 생성·수정 일시 |

---

## 번들 생성 (Create Bundle)

여러 단품을 묶어 하나의 세트 상품(번들)으로 만듭니다.

1. 목록에서 묶을 **단품(Single)**들을 체크박스로 선택합니다.
   - 단품만 선택 가능하며, **최소 2개 이상**(또는 수량 2 이상인 1개), **최대 10개**까지 가능합니다.
2. **"Create Bundle"** 버튼을 클릭합니다.
3. **Create Bundle** 모달에서:
   - 상품을 추가로 검색해 담을 수 있습니다(Single 검색 또는 Bulk 일괄 입력).
   - 각 상품의 **수량(Quantity)**을 `+`/`−`로 조정합니다.
   - 잘못 담은 상품은 **"Delete"**로 제거합니다.
4. **"Create"** 버튼으로 번들을 생성합니다.

:::note
이미 담긴 상품이나 유효하지 않은 SAP 코드는 자동으로 제외됩니다.
:::

---

## 일괄 업로드

### 상품 정보 일괄 수정 (Product Info Bulk Update)

1. **"Product Info Bulk Update"** 메뉴에서 **"Download Template"**로 엑셀 양식을 내려받습니다.
2. 양식에 상품 정보를 입력합니다.
3. **"Upload Template"**로 작성한 파일(.xlsx/.xls)을 업로드합니다.

### 상품 이미지 일괄 등록 (Product Image Bulk Update)

1. **"Product Image Bulk Update"**로 이미지 파일(.jpeg/.jpg)을 선택해 업로드합니다.
2. 이미지는 브랜드별 권장 크기 기준을 충족해야 합니다(예: 브랜드에 따라 1920px / 3600px).

### 내보내기 (Export)

선택한 상품들을 **"Export"** 버튼으로 엑셀 다운로드할 수 있습니다.
