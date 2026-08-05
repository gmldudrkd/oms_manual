---
sidebar_position: 2
---

# 로그인과 권한

## 로그인

1. OMS 웹 주소로 접속하면 로그인(Sign In) 화면이 나타납니다.
2. **회사 이메일**과 비밀번호를 입력하고 로그인합니다.
3. 로그인에 성공하면 [주문 대시보드](../order/dashboard) 화면으로 이동합니다.

:::note 계정이 없다면
처음 사용하는 경우 **회원가입(Sign Up)**으로 계정을 먼저 생성해야 합니다. 가입 후에는 관리자의 **승인(Approval)**과 **권한 부여**가 있어야 데이터를 볼 수 있습니다.
:::

---

## 로그인 방법

### User Account Request

1. 로그인 화면 오른쪽 하단 **'Request Account'** 클릭
2. **'Request Account'** 에서 사용할 계정과 권한을 부여받을 Brand & Corporation 선택 후 전송
    - Admin 권한의 사용자에 의해 승인될 경우 로그인 가능합니다.

<!-- 이미지 추가 예정: Request Account 화면 -->

### Admin Account Approval

1. 사용자 계정요청 시 슬랙으로 알림발생
    - 슬랙 채널은 Admin 권한의 사용자만 볼 수 있습니다. (필요 시 IT 팀으로 초대 요청 바랍니다.)
2. **'View in OMS'** 클릭
    - Admin 권한의 사용자가 OMS 에 로그인 한 후 클릭 할 경우 승인처리 할 수 있는 화면이 노출됩니다. (하단 이미지 참고)
    - 권한이 없는 사용자가 접속할 경우 **'No data'** 로 보여집니다.
3. 사용자 및 요청한 Brand & Corporation 정보 확인 후 승인 (Approve) 혹은 거절 (Reject) 처리
    - 계정이 승인되면 사용자에게 메일 발송

<!-- 이미지 추가 예정: 슬랙 알림 예시 (Slack Notification Example) / 'View in OMS' 클릭 시 노출되는 화면 -->

### 2-Factor Authentication Registration

1. 관리자가 계정을 승인 후 **최초** 로그인 시 2차인증 번호를 발급받을 수 있는 QR 코드 노출
    - **PC** : 크롬 브라우저 내 구글 인증도구 설치 후 등록
        - 🌐 <a href="https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai" target="_blank" rel="noopener noreferrer">인증 도구 - Chrome 웹 스토어</a>
    - **Mobile** : 'Microsoft Authenticator' APP 다운로드 후 등록
2. QR 등록 후 나오는 6자리 인증번호 입력
3. 최초 등록 이후에는 인증 APP 에 노출되는 6자리 코드를 입력해서 접속

<!-- 이미지 추가 예정: 최초 로그인 시 화면 (First Login Screen) / 최초 등록 이후 로그인 시 화면 (Login Screen After Initial Registration) -->

### Change Password

1. 로그인 화면 왼쪽 하단 **'Forgot Password?'** 클릭
2. Email 입력 후 전송 시 입력한 Email 로 비밀번호를 변경할 수 있는 링크 발송
3. 링크 접속 후 변경할 Password 입력

<!-- 이미지 추가 예정: 1. 'Forgot Password?' 진입 후 첫 화면 / 2. 비밀번호 변경 링크 발송 예시 / 3. 비밀번호 변경 링크 접속 화면 -->

---

## 권한이 없으면 데이터가 비어 있습니다

로그인은 됐는데 주문 목록이 비어 있다면, 대부분 **접근 권한이 아직 없는 것**입니다. OMS는 사용자에게 부여된 **브랜드 × 법인** 범위의 데이터만 보여줍니다.

권한을 받으려면 **권한 요청(Request Permission)**을 제출하고 관리자의 승인을 기다려야 합니다. (요청 화면과 절차는 [사용자 — 권한 요청](../user/request-permission)에서 자세히 설명합니다.)


:::tip
내 권한 현황은 화면 오른쪽 상단의 계정 메뉴(사람 아이콘 + 내 ID)를 클릭한 뒤 "My Info" 열어 확인할 수 있습니다. 브랜드별·법인별로 어떤 역할을 가지고 있는지 한눈에 표시됩니다.
:::

---

## 로그아웃

화면 오른쪽 상단의 계정 메뉴(사람 아이콘 + 내 ID)를 클릭한 뒤 "Log out"을 선택하면 로그아웃됩니다.
