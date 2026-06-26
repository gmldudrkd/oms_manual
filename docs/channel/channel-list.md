---
sidebar_position: 1
---

# 채널 관리 (Channel List)

좌측 메뉴 **Channel → Channel List**에서 판매 채널을 조회하고, 신규 채널을 등록하거나 기존 채널 설정을 변경합니다.

---

## 채널 목록

| 컬럼 | 설명 |
|------|------|
| No | 채널 ID |
| Brand / Corp | 브랜드·법인 |
| **Name** | 채널명 |
| Type | 채널 유형 |
| SAP Code / SAP Name | SAP 연동 코드·이름 |
| **Active** | 활성화 여부(Y/N) |
| Created At / Updated At | 생성·수정 일시 |

- 행을 클릭하면 **채널 상세** 화면으로 이동합니다.
- 우측 상단 **"Add New Channel"** 버튼으로 신규 채널을 등록합니다.

---

## 신규 채널 등록

1. **"Add New Channel"** 버튼을 클릭합니다.
2. 폼에 정보를 입력합니다.

   | 항목 | 설명 | 필수 |
   |------|------|:----:|
   | **SAP Channel Code** | SAP 채널 코드 선택(코드 + 이름) | ✅ |
   | **Channel Type** | Own(자사) / External(외부) | ✅ |
   | **SAP Channel Name** | SAP 코드 선택 시 자동 입력(읽기 전용) | ✅ |
   | **Channel Name** | 자동 생성(읽기 전용) | — |
   | **Active** | 활성화 토글 | ✅ |

3. **"Save"**로 저장합니다.

:::warning 중복 코드 주의
이미 등록된 SAP 채널 코드를 선택하면 *"SAP Channel Code (해당 코드) is already registered in OMS."* 안내가 표시됩니다. 다른 코드를 사용하세요.
:::

---

## 채널 설정 변경

채널 상세 화면에서 **Channel Type**, **Active** 등을 수정한 뒤 **"Save"**로 저장합니다.

:::note 저장하지 않고 나가면
변경 후 저장하지 않고 화면을 벗어나려 하면 *"You have unsaved changes..."* 확인 창이 뜹니다. **"Stay on this page"**(머무르기) 또는 **"Leave without saving"**(저장 없이 나가기)을 선택하세요.
:::
