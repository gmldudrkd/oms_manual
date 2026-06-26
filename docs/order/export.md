---
sidebar_position: 9
---

# 주문 다운로드 (Export)

좌측 메뉴 **Order → Export**에서 주문 관련 데이터를 **암호화된 엑셀 파일**로 내려받습니다. 개인정보 보호를 위해 비밀번호 설정과 사용 목적 입력이 필수입니다.

<video controls width="100%" style={{maxWidth: '900px', borderRadius: '8px'}}>
  <source src="/oms_manual/video/iic_oms_export.mov" />
  브라우저가 영상을 지원하지 않습니다.
</video>

---

## 다운로드 유형 (Type)

| 유형 | 내용 |
|------|------|
| **ALL** | 전체 주문 데이터 |
| **ORDER** | 주문 정보 |
| **SHIPMENT** | 출고 정보 |
| **STORE_PICKUP** | 매장픽업 정보 |
| **ORDER_CANCEL** | 취소된 주문 |
| **RETURN** | 반품 데이터 |
| **EXCHANGE** | 교환 데이터 |
| **RESHIPMENT** | 재출고 데이터 |

---

## 다운로드 절차

1. **Type** 드롭다운에서 다운로드할 데이터 유형을 선택합니다.
2. **기간(Period)**을 지정합니다. *(필수 — 유효한 시작일·종료일)*
3. **"Export Data"** 버튼을 클릭하면 **"Export Encryption"** 암호화 설정 창이 열립니다.
4. 암호화 정보를 입력합니다.
   - **Set Password**: 파일 비밀번호 (4~10자)
   - **Purpose of Export**: 다운로드 사용 목적 (최대 50자)
5. **"Excel download"** 버튼을 누르면 파일이 다운로드됩니다.
   - 파일명 예: `IIC_OMS_Order List_YYYYMMDD.xlsx`
6. 다운로드한 엑셀 파일을 열 때 설정한 **비밀번호**를 입력해야 합니다.

조건을 다시 설정하려면 **"Reset"** 버튼으로 초기화합니다.

---

## 개인정보 보호 안내

:::warning 다운로드 기록이 남습니다
- 엑셀 파일은 **암호화**되어 다운로드되며, 설정한 비밀번호 없이는 열 수 없습니다.
- 다운로드 시 **누가·언제·어떤 목적으로** 개인정보를 조회했는지 로그가 자동 기록됩니다.
- 사용 목적(Purpose)은 정확하게 입력하고, 다운로드한 파일은 안전하게 관리·폐기하세요.
:::
