---
sidebar_position: 2
---

# 채널 분배 설정 (Distribution Setting)

좌측 메뉴 **Stock → Distribution Setting**에서 온라인 재고를 채널별로 **어떤 비율로 나눌지**를 설정합니다. 분배 비율은 매일 배치로 채널 재고에 반영됩니다.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_distribution.mov" />
  브라우저가 영상을 지원하지 않습니다.
</video>

화면은 두 개의 탭으로 나뉩니다.

| 탭 | 용도 |
|----|------|
| **Channel Default Rate** | 채널별 **기본 분배 비율** 설정 (모든 상품에 공통 적용) |
| **Product Rate** | 특정 상품(SKU)에만 적용하는 **개별 분배 비율** 설정 |

:::tip 우선순위
특정 상품에 **Product Rate**가 지정되어 있으면 그 비율이 우선 적용되고, 없으면 **Channel Default Rate**가 적용됩니다.
:::

---

## 채널 기본 비율 (Channel Default Rate)

모든 상품에 공통으로 적용되는 채널별 분배 비율입니다.

| 컬럼 | 설명 |
|------|------|
| **Channel Name** | 채널명 |
| **Distribution Rate** | 분배 비율(%) |
| **Priority** | 분배 우선순위 |

### 비율 변경 방법

1. **"Edit"** 버튼을 클릭해 편집 모드로 전환합니다.
2. 각 채널의 **Distribution Rate** 값을 수정합니다.
3. **"Save"**로 저장합니다. (취소하려면 **"Cancel"**)

:::warning
저장하면 기존 분배 설정을 **덮어씁니다**(*"Saving will overwrite the existing information."*). 변경 전 현재 값을 확인하세요.
:::

---

## 상품별 비율 (Product Rate)

특정 상품에만 다른 분배 비율을 적용할 때 사용합니다.

### 상품 검색

| 검색 기준 | 입력 방법 |
|-----------|-----------|
| **SKU Code** | 줄바꿈으로 구분, 최대 100건 |
| **SAP Code** | 줄바꿈으로 구분, 최대 100건 |
| **SAP Name** | 최소 2자 이상 |

### 비율 설정 방법

1. 비율을 적용할 상품을 선택하고 **"Edit"** 버튼을 클릭합니다.
2. **Edit Product Ratio** 모달에서 **Rate Type**을 선택합니다.
   - **Channel Default Rate**: 기본 비율을 따름
   - **Product Rate**: 이 상품 전용 비율을 직접 입력
3. **Product Rate**를 선택한 경우, 채널별 비율(%)을 입력합니다.
4. **"Save"**로 저장합니다.

:::note
분배 비율 변경은 다음 배치 때 채널 재고에 반영됩니다. 변경 직후 채널 재고가 바뀌지 않는 것은 정상입니다.
:::
