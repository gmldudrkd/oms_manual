---
sidebar_position: 1
---

# 26.05.11 New Features

> Gentle Monster US,CA 법인을 IIC OMS 로 통합합니다.   
> 기존 시스템에서 사용하던 기능은 [26.05.07 Core Operations](/docs/migration/GM_CA.md) 문서를 참고하세요.   
> 이 문서는 **"추가된 신규기능을 사용하는 방법"** 에 대한 안내입니다.


## 📦 Stock
### 재고이동
#### ✅ 기능정의 
- 마감재고 분배 이후 각 채널에 필요한 재고 이동은 해당 기능을 이용해 처리한다.
- 필요 시 특정 채널로 원하는 제품의 Undistributed Qty 에 있는 재고를 특정 채널로 이동한다.
#### ✅ 기능위치
- Stock > Online Stock Setting 탭 내 'Stock Transfer' 버튼
#### ✅ 설정 가능한 검색 및 제품 조건
- 검색 조건 : 선택된 제품의 채널이 1개 일 경우
- 제품 조건 : 선택한 제품의 **Channel Send Status 가 모두 ‘ON’ 일 경우**
#### ✅ 사용방법
1. 선택된 제품의 정보와 현재 사용가능 재고 (Available Qty) 와 미분배 재고(Undisitributed Qty)를 확인한다.
2. Transfer Stock 에 각 제품에 전송할 **추가 재고 수량**을 입력한다.
    - 전송되는 재고 값 예시 ⇒ `Available Stock : 1 / Transfer Stock : 4 → 전송재고 : 5`
    - 입력한 수량이 선택된 제품의 Undisitributed Stock 보다 하나라도 클 경우 전송은 불가하다.
    - **음수 재고 입력(재고 차감) 은 불가능** 하다.
3. 이동 재고는 ‘save’ 버튼 클릭 시 아래와 같이 동작한다.
    1. 미할당 재고 존재 시 할당처리
    2. 남은 재고는 채널로 **즉시** 전송

<!-- <video controls width="100%">
  <source src="비디오추가!" type="video/mp4" />
</video> -->


### Pre-order
#### ✅ 기능정의  
- 재고 확보가 확실한 제품을 실물재고 없이 먼저 판매 진행할 경우 해당 기능을 사용한다.

#### ✅ 기능 위치
- Stock > Online Stock Setting 탭 내 'Pre-order Setting' 버튼
#### ✅ 설정 가능한 검색 및 제품 조건
- 검색 조건 : `{제품 1개 선택}` or `{제품 다수 선택 + 채널 단일 선택}`
- 제품 조건 : **선택한 제품의 ‘Channel Send Status’ 가 ‘ON’**
#### ✅ 사용방법
1. 설정 저장 시(‘save’ 시) **즉시 채널에 전송된다.**
2. pre-order 재고 및 종료일자를 정한다. 해당기간 동안 pre-order 가 설정되어 채널에 전송된다.
    - 종료 시간은 무한으로 설정할 수 있다.
    - 종료일자는 ‘날짜’만 선택가능하며 선택한 날짜 다음날 마감재고 수신 시 부터 Pre-order 재고는 적용되지 않는다.
3. 설정된 pre-order 수량은 아래의 수식에 의해 계산되어 **즉시 채널에 전송**된다.
    - **`(Distributed Qty + pre-order Qty) - (Used Qty + Shipped Qty)`**
    - ex ) Pre-order Expired At : 2025-10-01 / pre-order qty : 100
        - 10.01 마감재고 1개 → 101 개 채널로 전송
        - 10.02 마감재고 0개 → 0개 채널로 전송
4. 채널로 재고가 전송 (마감재고 분배, Stock Transfer) 될 때마다 반영된다.
5. pre-order 기간동안 접수된 **주문 건의 할당은 마감재고의 수량에 따른다.**
    - 마감재고가 1개 이상 일 때 주문이 접수될 경우 → 수량만큼 출고진행
    - 마감재고가 0개 일 때 주문이 접수 → ‘Collected’ 상태로 유지
6. overview 의 pre-order 정보는 종료 시점(Pre-order Expired At)까지 노출된다.
7. 수정방법
    - overview 에 표시된 pre-order Expired At 을 클릭하여 수정이 가능하다.
    - pre-order 수량은 0개 부터 수정이 가능하다. **수정 후 저장 시 동일한 수식으로 다시 전송**한다.
        - **`(Distributed Qty + pre-order Qty) - (Used Qty + Shipped Qty)`** 

:::note
이번 베지 컬렉션 오픈에서는 매장픽업이 포함되어 있어 해당 기능을 사용할 수 없습니다.
이유는, pre-order는 런칭 전 출고가 없다는 전제로 설계되어, 판매된 수량만 차감해 관리합니다.
하지만 매장픽업은 런칭 전에 재고를 매장으로 먼저 이동해야 하고, 이 이동은 출고와 동일하게 취급되어 수량이 다음날
Shipped 초기화로 계산에서 사라집니다.
그 결과 실제보다 더 많은 프리오더 재고가 남아 있는 것처럼 보여 오버셀링 위험이 발생합니다.

따라서 이번 오픈에서는 안정적인 운영을 우선해 기존 방식대로 운영하고, 향후 시스템 보완 이후 Pre-order 기능 적용을 다시 검토할 예정입니다.

[예시]
1. Pre-order 수량: 100개
2. 프리오더 판매: 80개 (매장픽업 20개)
3. 20개 매장 선이동 (Shipped Qty 처리)
4. 다음날 마감재고 수신 시 20개는 0개로 초기화
5. 프리오더 판매가 60개 만 판매된 것처럼 보여짐
    - **`(Distributed Qty + Pre-order Qty) - (Used Qty + Shipped Qty)`** 
    - ( 0 + 100 ) - ( 60 + 0 )
:::

## 🛍️ Store pickup
> 온라인에서 제품을 구매 후 고객이 매장에서 직접 픽업하는 기능입니다.  

:::warning
이번 런칭에서는 `프리오더`제품을 주문하는 경우에만 매장픽업 선택이 가능합니다.
:::

### 매장픽업 flow
![GM OMS Overview](/img/iic_oms_storepickup_flow.png)
#### 일반배송과 차이점
1. Shipment 가 아닌 Store Pickup 정보가 생성됩니다.
2. Received Method 가 'Store Pickup' 으로 표시됩니다.
![GM OMS Overview](/img/iic_oms_received.png)
3. Order 의 상태가 Pending -> Complete 가 됩니다.
4. 매장픽업은 수취인 주소가 없어서 재출고 처리가 불가합니다.
5. Pantos (wms) 를 통한 배송이 아닌 고객이 직접 매장에 방문하여 픽업합니다.


### 조회방법
- Order > Order List > 검색 필터 중 'Order Attribute Filter' > 'Store Pickup' 체크
![GM OMS Overview](/img/iic_oms_store_filter.png)


### 취소, 반품 방식
1. 취소
    - 고객이 주문을 픽업하기 전까지 취소가 가능합니다.
    ![GM OMS Overview](/img/iic_oms_cancel.png)
    - OMS 이외 자사몰, 스토어에서도 취소가 가능합니다.
2. 반품
    - 픽업이 완료된 이후 반품이 가능합니다.
    - OMS 에서 'Register Claim' 을 통해 반품을 등록합니다.
    - OMS 이외 자사몰, 스토어에서도 반품이 가능합니다.
3. 교환
    - 픽업이 완료된 이후 교환이 가능합니다.
    - OMS 에서 'Register Claim' 을 통해 교환을 등록합니다.
    - OMS 이외 자사몰, 스토어에서는 교환이 **불가능** 합니다.
