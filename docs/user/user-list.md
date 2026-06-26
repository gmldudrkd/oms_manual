---
sidebar_position: 1
---

# 사용자 목록 (User List)

좌측 메뉴 **User → User List**에서 사용자 계정과 권한 현황을 조회하고, 권한 요청을 승인·반려합니다.

---

## 사용자 검색

| 검색 항목 | 설명 |
|-----------|------|
| **Search By** | 검색 기준 — Email / Name / ID |
| 검색어 | 기준에 맞는 값 입력 (Email은 도메인 선택 + ID 입력) |
| **Approve Status Filter** | 승인 상태 — AWAITING(대기) / APPROVAL(승인) / REJECTED(반려) |

### 목록 컬럼

| 컬럼 | 설명 |
|------|------|
| ID | 사용자 ID |
| Requested Date | 가입 요청 일시 |
| **Email** | 클릭하면 사용자 상세로 이동 |
| **Approval Status** | 가입 승인 상태 (AWAITING=주황, APPROVAL=초록) |
| **Permissions** | 보유 권한 요약 (펼쳐서 상세 확인) |

---

## 권한 현황 보기

**Permissions** 칸에는 사용자가 가진 권한이 역할별 개수로 요약됩니다. 클릭하면 브랜드·법인별 역할이 칩으로 펼쳐집니다.

| 역할 칩 | 색상 | 의미 |
|---------|------|------|
| **Admin** | 파랑 | 관리 권한 |
| **Manager** | 초록 | 일반 운영 처리 |
| **Request** | 주황 | 승인 대기 중 |
| **None** | 회색 | 권한 없음 |

:::tip
"이 사람이 어떤 브랜드·법인을 다룰 수 있는지" 확인하려면 Permissions를 펼쳐 보세요. 브랜드별로 어떤 법인에 어떤 역할이 있는지 한눈에 표시됩니다.
:::

---

## 다음 단계

- 권한이 없어 데이터가 안 보인다면 → [권한 요청](./request-permission)
- 관리자로서 다른 사용자의 요청을 처리하려면 → [권한 승인·반려](./approve-permission)
