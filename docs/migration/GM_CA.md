---
sidebar_position: 1
---

# 26.05.07 Core Operations

> Gentle Monster US,CA 법인을 IIC OMS 로 통합합니다.  
> 기존 시스템에서 사용하시던 모든 기능은 신규 시스템에서도 동일하게 사용 가능합니다.      
> 이 문서는 **"기존에 여기서 하던 것, 이제 어디서 하면 되나요?"** 에 답하기 위한 안내입니다.  

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
| Order > General Orders (상단 Summary) | **Order > Overview** |

#### ✅ 변경 내용
1. 대시보드가 Order / Claim 탭으로 구분. 
2. Order / Shipment / Store Pickup / Claim 등 상세 영역으로 분리되어 현황 파악이 용이.

> 기존 시스템

![GM OMS Overview](/img/gm_oms_overview.png)

> 신규 시스템
#### 📹 <a href="https://drive.google.com/file/d/1rfRH8UesjtUJUGShD1iRe8ajWfMCG6Uv/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>


### Order List

| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Order > General Orders & Prescription Orders | **Order > Order List** |

#### ✅ 변경 내용
1. ⚠️ Prescription 메뉴 통합 - Order List에서 `Order Attribute > Type = Rx` 로 필터링해서 확인
2. 필터 구조 변경 - 기존에 status 검색으로 구분했지만 신규에서는 Order Status Filter + Fulfillment Status Filter 두 개의 별도 필터로 구분. 
3. Brand / Corp / Channel 컬럼 추가.

> 기존 시스템
#### 📹 <a href="https://drive.google.com/file/d/1R5d1fs1HeKcRPkMownLz3AZRsPGiF_ns/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

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
| After | **Pending** | | 고객 결제완료 |
| Release | **Collected** | | 주문 재고 할당 (결제 완료 후 1시간) 혹은 할당 실패 |
| Confirmed | **Partly Confirmed** | | 주문 부분 재고 할당 성공 |
| Confirmed | **Partial Shipment Requested** | | 주문 부분 WMS 출고 지시 |
| Req-Allocation | **Shipment Requested** | **Picking Requested** | 주문 전체 WMS 출고 지시 |
| Allocation | | **Picked** | WMS 피킹 완료 |
| Packed | | **Packed** | WMS 패킹 완료 |
| Shipping | | **Shipped** | 창고에서 출고 완료 |
| Lost | | **Lost**(`배송 종결값`) | 출고 중 분실 |
|  |  | **Delivered**(`배송 종결값`) | 주문의 배송 전체 종결 |
| Delivered | **Completed** | **Delivered**(`배송 종결값`) | 주문의 배송 전체 종결 |
| Cancel | **Canceled** | **Canceled** (`배송 종결값`)| 주문 수집 후 취소 |
 

 
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
| ReqPickup | **Pickup Requested** | 반품 접수 진행 중 |
| Pickup | **Pickup Ongoing** | 픽업 진행 중 |
| Receive | **Received** | 입고 확정 대기 |
| Refund | **Refund** | 입고완료, 고객환불 |

> 교환  
> New 에선 Inspected 이후 자동 재출고 진행

| Legacy | New | 설명 |
|--------|------------|-----|
| Req-Exchange | **Pending** | 반품신청완료 |
| Exch-ReqPickup | **Pickup Requested** | 반품 접수 진행 중 |
| Exch-Pickup | **Pickup Ongoing** | 픽업 진행 중 |
| Exch-Return | **Received** | 입고 확정 대기 |
| Exchange | **Inspected** | 입고완료, 재출고 전|


👉 주문 상태 코드에 대한 자세한 내용은 [Status Codes](/docs/reference/status-codes) 문서를 참고하세요.

### RX 상태
#### ✅ 변경 내용
- RX 의 Confirm/Reject 을 BO 로 부터 수신
- 작업 완료 후 고객 배송 시 송장번호를 트레킹하여 Delivered 상태 업데이트

![GM OMS Overview](/img/iic_oms_rx.png)

--- 

## 📢 Claim Handling
### Cancel

#### ✅ 변경 내용
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Req-Allocation 상태에서 주문 취소 가능 - 'Cancel Order' 버튼 사용 (부분 or 전체 취소) | Pending 부터 Shipment 상태가 Picking Requested 상태까지 전까지 'Cancel Order' 가능 (부분 or 전체 취소)|
|  | Shipment 상태가 Picking Requested 상태에서 'Cancel Shipment' 가능 (출고 전체 취소)|

:::note
👉 더 자세한 사용법은 [cancel-shipment-partial-shipment](/docs/how-to/cancel-shipment-partial-shipment) 문서를 참고하세요.  
:::

> 기존 시스템

![GM OMS Overview](/img/gm_oms_cancel.png)

> 신규 시스템

#### 📹 <a href="https://drive.google.com/file/d/1hAjB7lYmQ-IZqXa2CeKfZURHoKq0S3Lj/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>



### Return / Exchange / Reshipment
 
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

:::note
👉 더 자세한 사용법은 [register-claim](/docs/how-to/register-claim) 문서를 참고하세요.  
:::


> 기존 시스템

#### 📹 <a href="https://drive.google.com/file/d/19q2fHNf729mxFJfJ6XEf9ix3jOc3NTnI/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

> 신규 시스템

#### 📹 <a href="https://drive.google.com/file/d/1-SNRGJRRoQXKi9KyRQUmrs8FKWLVU_sI/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>



### Lost

| 상황 | 기존 시스템 | 신규 시스템 |
|------|------------|------------|
| 출고분실 | shipping 상태에서 Lost 클릭 -> Cancel 처리 | Shipping 상태에서 Lost 클릭 -> Force Refund 혹은 Reshipment 처리 선택 |
| 입고분실 | pickup 상태에서 Lost 클릭 -> Refund 처리 | 분실 건 Cancel Return 처리 -> Register Claim 통해서 Force Refund 혹은 Reshipment 처리 선택  |

#### 주의점
- LOST 버튼 선택 이후 Confirm 시 상태는 Lost 로 즉시 변경됩니다.
- 다음 화면에서 Force Refund 혹은 Reshipment 를 처리하지 못했으면 사유를 Lost 로 선택하여 'Register Claim' 을 통해 처리되어야 합니다.

#### 📹 <a href="https://drive.google.com/file/d/11ThdwHfmMm2cLGewoud1nspeVuF64vDg/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

---

## 📦 Stock

### 메뉴명 변경
  - Inventory -> Stock

### 재고 프로세스 변경
#### ✅ 변경 내용
| / | 기존 시스템 | 신규 시스템 |
|-----|------------|------------|
| ERP 재고 수신 | 매시 수신 | 하루 1번 분배 |
| 채널재고 자동 분배 | 매 시 분배 | 하루 1번 분배 |
| 채널재고 수동 이동 | X | 채널에 재고이동 필요 시 항상 가능 (**증가만 가능**)  |
| ERP 변동재고 수신 | X | 온라인 창고로 재고가 이동 시 |

### 재고 조회

#### ✅ 변경 내용
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Inventory > Status/Distribution | **Stock > Overview**|

1. Online Stock Setting / Channel Stock Setting 탭으로 구분
   - [Online Stock Setting] : 전체 재고에 대한 처리
   - [Channel Stock Setting] : 채널에 분배된 재고에 대한 처리 
2. 더 상세한 필드 정보는 [register-claim](/docs/how-to/register-claim) 문서 참고

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
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Inventory > Placeholder | **Stock > Channel Stock Setting 탭 내 'ERP Update'**|

1. Placeholder 기능 정의
    - 기실 재고가 ERP 상에는 있으나 OMS 에 없는 경우 ERP 로 이동한 변동재고를 수신받지 못해 미리 판매를 위해 사용한 기능
2. ERP Update 필드 정의
    ERP 내 온라인 창고로 이동한 재고를 즉시 수신하여 ERP Update 항목에 표현

:::note
따라서, **ERP 내 이동한 재고를 즉시 받을 수 있으므로 Placeholder 기능은 필요하지 않아 제외되고 ERP Update 항목으로 확인 가능**
:::

> 기존 시스템

![GM OMS Overview](/img/gm_oms_placeholder.png)

> 신규 시스템

![GM OMS Overview](/img/iic_oms_erpupdate.png)


### 재고 채널 전송 여부 설정

#### ✅ 변경 내용
| 기존 시스템 | 신규 시스템 |
|------------|------------|
| Inventory > Unlink | **Stock > Channel Stock Setting 탭 내 'Change Channel Send Status'**|

- 기능정의 : 마감재고 수신 후 채널분배 시 채널에 재고의 전송여부를 설정

> 기존 시스템
이미지 넣기

> 신규 시스템

#### 📹 <a href="https://drive.google.com/file/d/1WNKHbfG5H3xsoIh-0b5uxPVFX7Ows-rs/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

--- 

## 📄 SCM Handling 

:::note
👉 로컬물류를 사용하는 CA SCM 에서 확인할 내용입니다.
:::

### 반품/교환 입고 시 Grading 처리
#### 1. 반품 입고 Grading 
  - 반품이 입고되고 [received] 상태일 때 'Refund' 버튼 활성화
  - Refund 클릭 시 제품 별로 Grading 처리할 수 있는 모달 노출
  - 전체 Grading 이후 Confirm 시 자동 환불처리

#### 📹 <a href="https://drive.google.com/file/d/1SYM_vIcti5_JyXQuBpq7m-Ram_aUudCu/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

#### 1. 교환 입고 Grading 
  - 교환 제품이 입고되고 [received] 상태일 때 'Inspect' 버튼 활성화
  - Inspect 클릭 시 제품 별로 Grading 처리할 수 있는 모달 노출
  - 전체 Grading 이후 Confirm 시
    - 진행 중인 교환 출고가 없다면 교환출고 자동 진행

#### 📹 <a href="https://drive.google.com/file/d/1eUtG6Sc7NMs_AkCibPJa01_MFK_JkFRv/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>

### Crcode 출력
#### ✅ 기능정의
> 출고 진행 시 제품과 함께 패킹되는 시리얼카드를 출력하는 기능입니다. 
> OMS 에서 지원하는 기능은 아닌 외부 시스템입니다.

#### ✅ 사용방법
1. [Crcode 사이트](https://crcode.gentlemonster.com/index.php) 접속
2. 시리얼 생성 메뉴 -> 하단에 Online US 리뉴얼 버튼 클릭
3. 타이틀은 자유입력
4. 출고일자 선택
5. 캐나다 체크 후 출력하고자 하는 제품 및 수량 담기 -> 등록버튼 클릭
6. 생성된 메뉴에서 2020년도 시리얼 버튼 클릭 후 출력

#### 📹 <a href="https://drive.google.com/file/d/1pukbBNIv0POu3wB7oITO6-Kw9W_6RgVa/view?usp=sharing" target="_blank" rel="noopener noreferrer">Guide 영상 보기</a>
