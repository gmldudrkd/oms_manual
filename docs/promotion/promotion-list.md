---
sidebar_position: 1
---

# 프로모션 목록 (Promotion List)

좌측 메뉴 **Promotion → Promotion List**에서 프로모션을 조회·검색하고, 신규 등록·복사·내보내기를 합니다. 프로모션은 **GWP(사은품)**나 **패키징 혜택** 등 주문 조건에 따라 제공되는 판촉을 의미합니다.

---

## 프로모션 검색

| 검색 항목 | 설명 |
|-----------|------|
| **Date Type** | 기간 기준 — Start Date / End Date |
| **Period** | 기간 (`Today` `Week` `Month` `3 Month` 단축 제공) |
| **Status** | Upcoming(예정) / Active(진행중) / Expired(종료) / Draft(작성중) |
| **Channel** | 적용 채널 |
| 검색어 | ID / Title / Created By / GWP Name / GWP SAP Code / 대상 상품명·코드 |

### 목록 컬럼

| 컬럼 | 설명 |
|------|------|
| ID | 프로모션 번호 |
| Brand / Corp | 브랜드·법인 |
| **Title** | 클릭하면 상세로 이동 |
| **Status** | 상태 배지 (Active=초록, Upcoming=주황, Expired=회색, Draft=파랑) |
| Trigger Type | 발동 조건 유형 |
| Trigger Channels | 적용 채널 |
| Start / End Date | 시작·종료 일시 |
| Created By / Created At | 생성자·생성일 |
| **Actions** | 복사 아이콘(*Copy Promotion*) |

---

## 상태(Status)의 의미

| 상태 | 의미 |
|------|------|
| **Draft** | 작성 중(아직 적용 안 됨) |
| **Upcoming** | 승인됨, 시작일 대기 |
| **Active** | 현재 진행 중 |
| **Expired** | 종료됨 |

---

## 기타 작업

| 버튼 | 위치 | 기능 |
|------|------|------|
| **Refresh** | 우측 상단 | 목록 갱신 |
| **Export** | 우측 상단 | 프로모션 목록을 엑셀로 다운로드 (`IIC_OMS_Promotion_List_YYYYMMDD_HHmm.xlsx`) |
| **Copy(아이콘)** | 행 우측 | 기존 프로모션을 복사해 새 프로모션 작성 |

신규 등록·수정 방법은 [프로모션 등록·수정](./promotion-create)에서 다룹니다.
