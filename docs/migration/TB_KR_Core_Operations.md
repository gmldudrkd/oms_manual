---
sidebar_position: 1
---

# TB KR Core Operations

> Tamburins KR 법인을 IIC OMS 로 통합합니다.  
> 기존 시스템에서 사용하시던 모든 기능은 신규 시스템에서도 동일하게 사용 가능합니다.      
> 이 문서는 **"기존에 여기서 하던 것, 이제 어디서 하면 되나요?"** 에 답하기 위한 안내입니다.  
> 오픈 시 사용법 마이그레이션을 위한 문서로 이후 변경되는 사항이 있을 수 있습니다.

## 🔒 Login & Account
 
| | 기존 시스템 | 신규 시스템 |
|--|------------|------------|
| **로그인 방식** | 브랜드·법인별로 **각각 별도 로그인** 필요 | **1회 로그인**으로 전체 접근 |
| **브랜드·법인 전환** | 다른 URL로 이동 후 재로그인 | 상단 **Brand & Corp** 드롭다운에서 즉시 전환 |
| **전환 시 페이지** | 처음부터 다시 시작 | 현재 보던 메뉴 그대로 유지, 데이터만 전환 |
 
**신규 시스템에서 브랜드·법인 전환하는 방법:**
 
1. 화면 상단 우측의 **Brand & Corp** 영역 클릭
2. 드롭다운에서 원하는 브랜드·법인 조합 선택
3. 페이지 새로고침 없이 해당 법인 데이터로 즉시 전환

#### 📹 <a href="https://drive.google.com/file/d/107bKYhSOBC6oniR9Y1PXStNxDkCFbFWH/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>


:::tip
Timezone 드롭다운도 함께 있어요. 해외 법인 담당 시 현지 시간 기준으로 데이터를 확인할 수 있어요.
:::
 
---

## 📎 Order

### Overview
 
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Order > Integrated Order list (상단 Summary) | **Order > Overview** |

#### ✅ 변경 내용
1. 대시보드가 Order / Claim 탭으로 구분. 
2. Order / Shipment / Claim 등 상세 영역으로 분리되어 현황 파악이 용이.

> 기존 시스템

![OMS Overview](/img/tb_overview.png)

> 신규 시스템
#### 📹 <a href="https://drive.google.com/file/d/1rfRH8UesjtUJUGShD1iRe8ajWfMCG6Uv/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>


### Order List

| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Order > Integrated Order list | **Order > Order List** |

#### ✅ 변경 내용
1. 상태 검색 필더 변경 - 기존에 status 검색으로 구분했지만 신규에서는 Order Status Filter + Fulfillment Status Filter 두 개의 별도 필터로 구분
2. 검색 조건 변경 - Issue, Manually Shipment, Recipient Phone 컬럼 제거

> 기존 시스템
![OMS Overview](/img/tb_orderlist.png)

> 신규 시스템

#### 📹 <a href="https://drive.google.com/file/d/1GHRh2cpE6IMLSUt7icIOG6G5GOe-Svww/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

### Order Detail Tab
#### ✅ 변경 내용
1. Order Detail 에서 통합으로 확인하던 주문 관련 정보를 탭으로 분리
2. Tab 으로 주문, 클레임, 로그 의 상세 조회 가능
> 기존 시스템
![GM OMS Overview](/img/gm_oms_order_detail.png)

> 신규 시스템
![GM OMS Overview](/img/iic_oms_order_detail.png)


### Return, Exchange, Reshipment List
| 기존 시스템 | 신규 시스템 | 
|------------|------------|
| (없음) | **Order > Return, Exchange, Reshipment List** | 

#### ✅ 변경 내용
1. General Orders에서 통합으로 확인 가능하던 반품,교환,재발송이 별도 목록으로 분리.

> 신규 시스템
![GM OMS Overview](/img/iic_oms_list.png)

###  Export
#### ✅ 변경 내용
1. General Orders 에서 처리하던 Export 기능을 별도 메뉴로 분리

> 기존 시스템
![GM OMS Overview](/img/gm_oms_export.png)

> 신규 시스템
![GM OMS Overview](/img/iic_oms_export.png)
 
--- 

## ⌛ Order Status

> 주문 상태 값 변경   
> Order, Shipment, Return, Exchange 구분해서 상태 관리
 
### 주문 상태 비교표 (Legacy vs New)
 
> 신규 시스템에서 주문 상태는 **Order**와 **Shipment** 두 영역으로 분리되어 관리   
 
 
| Legacy | New · Order | New · Shipment | 설명 |
|--------|------------|---------------|------|
| Pre/Back | **Pending** | | 선물하기 주문 결제완료 (배송지 입력 전) |
| After | **Pending** | | 고객 결제완료 |
| Release | **Collected** | | 주문 재고 할당 (결제 완료 후 1시간) 혹은 할당 실패 |
| Confirmed | **Partly Confirmed** | | 주문 부분 재고 할당 성공 |
| Confirmed | **Partial Shipment Requested** | | 주문 부분 WMS 출고 지시 |
| Req-Shipping | | | 출고 지시 전 대기 상태 |
| Req-Allocation | **Shipment Requested** | **Picking Requested** | 주문 전체 WMS 출고 지시 |
| Allocation | | **Picked** | WMS 피킹 완료 |
| Packed | | **Packed** | WMS 패킹 완료 |
| Shipping | | **Shipped** | 창고에서 출고 완료 |
| Delivered | **Completed** | **Delivered**(`배송 종결값`) | 주문의 배송 전체 종결 |
| Before-Cancel | **Deleted** | | 출고 요청 전 취소 |
| Cancel/Req-Cancel | **Canceled** | **Canceled** (`배송 종결값`)| 출고 요청 후 취소 |
 

 
### 주요 변경 포인트
 
**1. 상태 영역 분리**
- Legacy는 Order 상태로 전체 흐름을 관리했지만, 신규에서는 **Order**(주문 수집·확정)와 **Shipment**(출고·배송)로 분리
- Req-Allocation 하나였던 상태가 신규에서는 `Shipment Requested`(Order 영역) + `Picking Requested`(Shipment 영역) 두 개로 표현
 
**2. Confirmed → 2개로 세분화**
- Legacy의 `Confirmed`는 신규에서 상황에 따라 두 가지로 분리
  - 부분 재고 할당 성공 시 → `Partly Confirmed`
  - 부분 WMS 출고 지시 시 → `Partial Shipment Requested`

> 부분할당 (Partly Confirmed) 시 처리
:::note
`[Partly Confirmed]` 상태에서는 운영자가 출고 혹은 취소를 선택해서 관리해야합니다.
:::
#### 📹 <a href="https://drive.google.com/file/d/1ueoyuWwkNyafqdEpyF1TFzgd0n6ENuw-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>


### 클레임 상태 비교표 (Legacy vs New)
> 반품  

| Legacy | New | 설명 |
|--------|------------|-----|
| ReqReturn | **Pending** | 반품신청완료 |
| Returning | | 반품 접수 대기 중 |
| ReqPickup | **Pickup Requested** | 반품 접수 완료 |
|  | **Pickup Ongoing** | 픽업 진행 중 |
| Return | **Received** | 입고 확정 대기 |
| Refund | **Refund** | 입고완료, 고객환불 |

> 교환  
> New 에선 Inspected 이후 자동 재출고 진행

| Legacy | New | 설명 |
|--------|------------|-----|
| Req-Exchange | **Pending** | 교환신청완료 |
| Exch-Returning | | 교환 접수 대기 중 |
| Exch-ReqPickup | **Pickup Requested** | 교환 접수 완료 |
| | **Pickup Ongoing** | 픽업 진행 중 |
| Exch-Return | **Received** | 입고 확정 대기 |
| Exchange | **Inspected** | 입고완료, 재출고 전|


👉 주문 상태 코드에 대한 자세한 내용은 [Status Codes](/docs/reference/status-codes) 문서를 참고하세요.

--- 

## 📢 Claim Handling
### Cancel

#### ✅ 변경 내용
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Req-Allocation 상태에서 주문 취소 가능 - 'Cancel Order' 버튼 사용 (부분 or 전체 취소) | Pending 부터 Shipment 상태가 Picking Requested 상태까지 전까지 'Cancel Order' 가능 (부분 or 전체 취소)|
|  | Shipment 상태가 Picking Requested 상태에서 'Cancel Shipment' 가능 (출고 전체 취소)|

> 기존 시스템

![GM OMS Overview](/img/gm_oms_cancel.png)

> 신규 시스템

#### 📹 <a href="https://drive.google.com/file/d/1hAjB7lYmQ-IZqXa2CeKfZURHoKq0S3Lj/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>



### Claim 처리 (Return / Exchange / Reshipment)
 
#### ✅ 변경 내용

1. Change Status 버튼은 Register Claim 으로 변경 
2. Register Claim 내 Return, Exchange, Reshipment, Force Refund 등 모든 Claim 지원
3. Pickup Option 및 Force Refund 기능 추가
    - [Pickup Option > Do Not Request Pickup] : 이미 입고된 반품 수량 혹은 제품이 다를 경우  
    - [Force Refund] : 고객 강성 혹은 불량으로 인해 입고 없이 환불처리

> 접수방식  

| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Order > Change Status | **Order > Register Claim**|
| Order > Manually-Shipemnt | **Order > Register Claim > Reshipment**|

> 신규 시스템

#### 📹 <a href="https://drive.google.com/file/d/1-SNRGJRRoQXKi9KyRQUmrs8FKWLVU_sI/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

---

#### Pickup Option 선택

주문 상세에서 **Register Claim → Claim Type을 Return, Exchange**로 선택하면 **Pickup Option**이 함께 나타납니다. 이 옵션으로 OMS가 회수(픽업) 지시를 보낼지 여부를 결정합니다.

| Pickup Option | 동작 | 사용 시점 |
|---------------|------|-----------|
| **Request Pickup** | 회수(픽업) 지시를 진행합니다. | 일반적인 반품 — 회수가 필요한 경우 |
| **Do Not Request Pickup** | 픽업 없이 반품을 생성합니다. | 이미 수거가 완료됐거나 WMS로부터 수거 상태를 수신할 수 있는 경우 |

**Do Not Request Pickup**을 선택하면 이미 수거된 **Tracking Information(반송장 정보 — Carrier·송장번호)**을 입력합니다. 주로 다음과 같은 경우에 사용합니다.

- 이미 수기로 WMS에 제품이 입고·처리 완료되어, 시스템상으로만 환불하면 되는 경우
- 고객이 직접 반송을 진행한 경우
- 입고된 제품이 신청한 제품과 다를 때, 기존 반품을 취소하고 입고된 제품을 재선택해 반품을 신청하는 경우

:::tip Do Not Request Pickup vs. Force Refund
둘 다 **픽업 요청 없이 반품을 생성**한다는 점은 같지만, **WMS에서 반품 처리 상태를 수신할 수 있는지**가 다릅니다.

- **수신 가능** → **Do Not Request Pickup** + Tracking Information 입력 (입고·검수 후 환불)
- **수신 불가** → **Force Refund**(강제 환불, WMS 상태 수신 없이 즉시 환불)
:::

---

#### 반품 상세의 접수 방식 확인 (Pickup / Return Method)

반품은 접수 경로에 따라 회수 방식이 다릅니다. 반품 상세 화면의 **Pickup** 필드와 **Return Method**로 어떤 방식으로 접수된 건인지 구분할 수 있습니다.

| 접수 케이스 | Pickup | Return Method |
|-------------|--------|---------------|
| **강제환불(Force Refund)** | `Not Requested` | `FORCE REFUND` |
| **Return + 픽업 미요청** | `Not Requested` | `PARCEL` |
| **Return + 픽업 요청** | `Requested` | `PARCEL` |

- **Pickup**: 회수(픽업) 지시를 보낸 건인지 여부 — `Requested` / `Not Requested`
- **Return Method**: 회수 수단 — `PARCEL`(택배 회수) / `FORCE REFUND`(회수 없는 강제환불)
- 강제환불 건은 반품 상세 상단에 **`FORCE REFUND`** 가 함께 표시되며, **엑셀 Export 시에도 강제환불 여부를 확인할 수 있습니다.**

![pickup Info](/img/pickup_info.png)


---

#### 반품 취소
- 회수가 완료되기 전이라면 반품을 취소할 수 있습니다.
- 반품 취소 확정 시점에 각 연관 시스템으로 취소정보가 전송됩니다.
- 취소 방법
  - RETURN 탭에서 "Cancel Return" 버튼을 클릭하고 확인 시 반품이 취소됩니다.
- 취소가능 시점
  - PARCEL: Pending / Pickup Requested / Pickup Ongoing / Received 단계에서 취소 가능

#### 교환 취소
- 검수가 시작되기 전까지는 교환을 취소할 수 있습니다.
- 취소 방법
  - EXCHANGE 탭에서 "Cancel Exchange" 버튼을 클릭합니다.
- 취소가능 시점
  - 취소 가능 상태: Pending / Pickup Requested / Pickup Ongoing / Received
  - Inspected 이후(검수 완료·새 상품 출고 진행)에는 취소할 수 없습니다.

:::tip 취소 처리 사용시점
WMS - OMS 간 데이터 싱크를 위해 WMS 에 전송한 데이터를 변경해야하는 경우 (오입고, 미처리, 교환-반품 전환 등...) 기존 반품,교환 정보를 취소하고 진행해야합니다.
:::

---

#### 교환 입고 수기 Grading 
  - 교환 제품이 입고되고 [Received] 상태일 때 'Inspect' 버튼 활성화
  - Inspect 클릭 시 제품 별로 Grading 처리할 수 있는 모달 노출
  - 전체 Grading 이후 Confirm 시
    - 진행 중인 교환 출고가 없다면 교환출고 자동 진행

#### 📹 <a href="https://drive.google.com/file/d/1eUtG6Sc7NMs_AkCibPJa01_MFK_JkFRv/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

---

## 📦 Stock

### 재고 프로세스
#### ✅ 기본정보
| / | 신규 시스템 |
|-----|------------|
| ERP 재고 수신 | 하루 1번 분배 |
| 채널재고 자동 분배 |  하루 1번 분배 |
| 채널재고 수동 이동 |  채널에 재고이동 필요 시 항상 가능 |
| ERP 변동재고 수신 |  온라인 창고로 재고 이동 시 |

### 재고 조회
#### ✅ 변경 내용
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Inventory > Status/Distribution | **Stock > Overview**|

- Online Stock Setting / Channel Stock Setting 탭으로 구분
   - [Online Stock Setting] : 전체 재고에 대한 처리
   - [Channel Stock Setting] : 채널에 분배된 재고에 대한 처리 

### 채널 재고 분배 비율설정

#### ✅ 변경 내용
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Inventory > Channel Distribution Rate + Product Distribution Rate| **Stock > Distribution Setting**|

- 채널별, 제품별 분배 비율설정이 'Distribution Setting' 하나의 메뉴로 통합하고 탭으로 구분
    - [Channel Default Rate] 탭 : 채널 별 기본 분배 비율설정
    - [Product Rate] 탭 : 제품 별 비율 설정

> 신규 시스템

#### 📹 <a href="https://drive.google.com/file/d/10s4eoyF5_4bFRcXDRsc842Vl-enuyOiQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>


### 안전재고 설정
- 안전재고? ::  온라인 재고 중 채널에 분배하지 않을 재고 
  - 안전재고 설정 시 채널 분배 수식 :: (온라인 재고 - 안전재고) * 채널 별 분배비율

#### ✅ 변경 내용
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Inventory > Safety Stock | **Stock > Online Stock Setting 탭 내 'Change Safety Stock'**|

> 기존 시스템
#### 📹 <a href="https://drive.google.com/file/d/1Aq7yHJAv0hzb7f3Q2-cqCezxJD9ZFsgg/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>>

> 신규 시스템
#### 📹 <a href="https://drive.google.com/file/d/1kh7fjXzkOBICnNUd5sx6xVxUft7sRq2J/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

### 변동재고 설정

#### ✅ 변경 내용
| 신규 시스템 |
|------------|
| **Stock > Channel Stock Setting 탭 내 'ERP Update'**|

1. 기능 정의
    - 가용 재고가 ERP 상에는 있으나 OMS 에 없는 경우 이동한 변동재고를 즉시 수신받아 사용
2. ERP Update 필드 정의
    ERP 내 온라인 창고로 이동한 재고를 즉시 수신하여 ERP Update 항목에 표현

> 신규 시스템

![GM OMS Overview](/img/iic_oms_erpupdate.png)


### 재고 채널 전송 여부 설정

#### ✅ 변경 내용
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Inventory > Unlink | **Stock > Channel Stock Setting 탭 내 'Change Channel Send Status'**|

- 기능정의 : 마감재고 수신 후 채널분배 시 채널에 재고의 전송여부를 설정

> 신규 시스템

#### 📹 <a href="https://drive.google.com/file/d/1WNKHbfG5H3xsoIh-0b5uxPVFX7Ows-rs/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

--- 
## 📄 Promotion 

> 메뉴 위치 : **Promotion > Promotion List**  
> 주문 조건에 맞으면 무상 제품(사은품·패키지)을 **0원 상품으로 주문에 자동 추가**하는 기능입니다. 프로모션은 OMS 에서 등록·관리하고, 공홈 적용 프로모션은 OMS 가 공홈으로 전송합니다.

### 프로모션 상태

| 상태 | 의미 |
|------|------|
| **Draft** | 임시 저장. 기간이 되어도 적용되지 않음 (공홈 전송도 안 함) |
| **Scheduled** | 저장 완료, 시작일 대기 중 |
| **Active** | 진행 중 (주문에 적용) |
| **Ended** | 종료. 종료일 경과 / 증정 재고 소진 / **Force Stop** 중 하나. 다시 재개할 수 없음 |
| **Deleted** | 삭제됨. 조회만 가능하고 수정·복구 불가 |

---

### 프로모션 등록

#### ✅ 등록 순서

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
템플릿에는 기간·채널·재고 수량이 저장되지 않으니, 불러온 뒤 **기간과 채널, 수량을 입력**하고 저장하면 됩니다. (템플릿 관리는 아래 [프로모션 템플릿](#프로모션-템플릿-promotion-template) 참고)
:::

#### ✅ Promotion Type 선택

| 타입 | 용도 | 채널 선택 | 증정 수량 |
|------|------|-----------|-----------|
| **GWP** | 제품 구매 시 사은품 증정 | **1개만** 선택 | Total / Alert 수량 입력 필요 |
| **Packaging Benefit** | 제품 구매 시 패키지 증정 (예: 하트 패키지) | **여러 개** 선택 가능 | 수량 제한 없음 (입력 불필요) |

- **Packaging Benefit** 은 Reward 에서 **패키지 제품만** 검색됩니다.
- **Packaging Benefit** 은 제품과 1:1 매칭 증정으로 Target Type **Specific Product**, **All Product** 만 사용가능하며 구매 수량만큼 증정(**Per product quantity**)으로 고정됩니다.
  - Target Type **Order Amount** 는 주문 당 증정만 가능하기에 **Packaging Benefit** 에선 사용불가합니다.

#### ✅ Target 설정

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

#### ✅ Reward 설정

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

#### ✅ 저장

| 버튼 | 동작 |
|------|------|
| **Draft** | 필수값 없이 임시 저장. 기간이 되어도 적용되지 않음 (End Date 가 비어 있으면 Always-on 으로 저장할지 확인 팝업 노출) |
| **Save** | 필수값 확인 → 우측 **Summary** 로 이동해 설정 내용 강조 → 확인 팝업에서 저장. 기간에 따라 **Scheduled** 또는 **Active** 로 자동 설정 |

- 누락된 필수값이 있으면 항목 목록이 안내되고 저장되지 않습니다.
- 신규 등록 후 저장하면 생성된 프로모션의 상세 화면으로 이동합니다.

---

### 프로모션 수정·종료·삭제

#### ✅ 상태별 가능한 작업

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

#### ✅ 진행 중인 프로모션 강제 종료 (Force Stop)

1. Active 상태 프로모션 상세에서 **Change Status > Force Stop** 클릭
2. 확인 팝업에서 **Confirm**
3. 즉시 **Ended** 로 변경되며, 이후 결제된 주문에는 적용되지 않습니다. (재개 불가)

#### ✅ 프로모션 삭제 (Delete)

**Draft / Scheduled** 상태에서만 삭제할 수 있습니다.

1. 상세에서 **Change Status > Delete** 클릭
2. 확인 창에 **`delete`** 를 입력 후 삭제
3. 상태가 **Deleted** 로 변경됩니다. 설정 내용은 조회용으로 남지만 수정·복구할 수 없습니다.

---

### 알아두면 좋은 재고 처리

- 증정 재고는 **SAP 재고와 별개**로, 프로모션에 입력한 수량으로 관리됩니다.
- 주문이 접수되면 즉시 차감되고, 주문이 **취소**되면 다시 늘어납니다. (**반품** 시에는 늘어나지 않음)
- 증정 재고가 모두 소진되면 프로모션은 자동으로 **Ended** 가 되고, 주문은 프로모션 없이 정상 수집됩니다.

---

### 프로모션 목록 조회

#### ✅ 조회 방법

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

#### ✅ 목록에서 확인할 수 있는 정보

| 컬럼 | 설명 |
|------|------|
| **Target Type** | Specific Product / Order Amount / All Product |
| **Reward Product** | 증정 제품 (`제품명 · SKU`). Order Amount 는 구간별로 잔여 재고가 가장 적은 제품 1개 표시 |
| **Stock (Remaining / Total)** | 증정 잔여 / 전체 수량. **조회 시점 기준**이라 최신 수량은 **Search** 또는 **Refresh** 로 다시 확인 |
| **Trigger Channels** | 적용 채널 (3개 초과 시 `+n more` 클릭하여 펼치기) |
| **Updated By** | 마지막 수정자 (수정 이력이 없으면 `-`) |

#### ✅ 보기 방식 전환 (List View / Calendar View)

결과 건수(`N results`) 오른쪽 토글로 전환합니다. 두 화면은 같은 검색 결과를 보여줍니다.

- **List View** : 기본 목록 화면
- **Calendar View** : 월 단위 캘린더에 프로모션 기간을 바로 표시
    - `‹` `›` 로 월 이동, **Today** 로 이번 달 이동
    - 종료일 없는 상시 프로모션은 캘린더 위 **Always-on** 영역에 따로 표시
    - Always-on 토글로 **Include Always-on / Exclude Always-on / Always-on Only** 선택
    - 바(또는 칩)를 클릭하면 하단에 요약 패널이 열리고, **Open Promotion** 으로 상세 화면 이동

#### ✅ Export / Import

| 버튼 | 사용 방법 |
|------|-----------|
| **Export** | 현재 검색 결과 전체를 엑셀로 다운로드 (`IIC_OMS_Promotion_List_{Brand}_{Corp}_YYYYMMDD_HHmm.xlsx`) |
| **Import > Download Template** | 일괄 등록용 엑셀 템플릿 다운로드 |
| **Import > Upload Excel** | 작성한 템플릿 업로드 → 프로모션이 **Draft** 로 일괄 생성 (Created By = `import`) |

:::info
Import 시 오류가 있는 행만 건너뛰고 나머지는 정상 등록됩니다. 건너뛴 행은 우측 상단 알림에 `Row N: 오류 항목` 으로 안내되니, 해당 행을 수정해 다시 업로드하세요.  
Import 로 만든 프로모션은 Draft 상태이므로 **내용 확인 후 Save** 해야 적용됩니다.
:::

---

### 프로모션 템플릿 (Promotion Template)

> 메뉴 위치 : **Promotion > Template**  
> 반복해서 쓰는 **Basic Info · Target · Reward** 설정을 템플릿으로 저장해 두고, 여러 채널에 프로모션을 **한 번에 등록(Multi Register)** 할 수 있습니다.

#### ✅ 템플릿 조회

- **Promotion Type**(All / GWP · Free Gift / Packaging Benefit) 과 **Search**(Title / Reward Product Name / Reward SAP Code / Target Product Name / Target SAP Code) 로 검색합니다.
- 템플릿은 카드 형태로 보이며, 카드에서 **Promotion Type · Target Type · Reward 제품**을 확인할 수 있습니다. (최근 생성 순)

#### ✅ 템플릿 만들기

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

#### ✅ 여러 채널에 한 번에 등록 (Multi Register)

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

#### ✅ 템플릿 수정·삭제

- **수정** : 카드의 **Edit** 클릭 → 팝업에서 수정 후 **Save**
- **삭제** : 카드의 휴지통 아이콘 또는 편집 팝업의 **Delete** → 확인 창에서 **Delete**
- 템플릿을 수정·삭제해도 **이미 생성된 프로모션에는 영향이 없습니다.**
