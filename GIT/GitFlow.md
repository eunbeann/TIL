## Git flow

- GitFlow는 feature 브랜치와 여러 기본 (primary) 브랜치를 사용하는 대안적인 git 브랜치 모델
- 개발자는 feature 브랜치를 만들고 기능이 완료될 때까지 이를 기본 트렁크 분기에 병합(merge)하는 것을 연기함.

### Git flow 장점

1. 병렬 개발
   1. 완료된 작업에서 새 개발을 분리해 병렬 개발을 쉽게 만듦
   2. 새 개발은 feature 브랩치에서 수행되며 코드가 릴리즈 가능 상태일 때 코드 본문에 병합된다.
2. 협업
   1. feature 브랜치를 쓰면 둘 이상의 개발자가 같은 기능에 대해 공동 작업을 할 수 있다.
   2. 각 feature 브랜치는 새 기능을 작동시키는 데 필요한 변경사항만 변경되는 샌드박스
   3. 각 공동 작업자가 수행하는 작업을 쉽게 보고 따라할 수 있음
3. 릴리즈 스테이징 영역
   1. 새 개발이 끝나면 아직 출시되지 않은 기능을 위한 준비 영역인 develop 브랜치로 재 병합됨. 다음 릴리즈가 develop에서 분기되면 완료된 모든 새 항목이 자동 포함
4. 긴급 수정 지원
   1. hotfix 브랜치 (태그가 지정된 릴리스에서 만든 브랜치)를 지원 함.
   2. 긴급 수정 사항만 포함 돼 있으므로 이를 사용해 긴급 변경 수행 가능.
   3. 동시에 새 개발에 실수로 병합할 위험이 없음

### Git-flow의 전략

GitFlow에 존재하는 5가지 종류의 브랜치

- 항상 유지되는 메인 브랜치들 (master, develop)
- 일정 기간 동안만 유지되는 보조 브랜치들
  (feature, release, hotfix)

1. master(main) : 제품으로 출시될 수 있는 브랜치
2. develop : 다음 출시 버전을 개발하는 브랜치
3. feature : 기능을 개발하는 브랜치
4. release : 이번 출시 버전을 준비하는 브랜치
5. hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d8361d5d-b0b5-4f06-997d-cc15eb0c7d2e/Untitled.png)

### git-flow 진행 방식 [우아한 블로그]

- Repositories
  - upstream (Upstream Repository)
  - origin (Origin Repository)
- Branches
  - feature-user (사용자 관련 기능을 구현하는 feature user)
  - bfm-100_login_layout (사용자 관련 기능 중 레이아웃 작업 branch)

1. 티켓 처리하기
   - 기능 구현에 앞서 여러 개의 티켓으로 작업 나누기
   - 나눠어진 작업 티켓 중 하나를 맡아 진행 (ex. 로그인 레이아웃 생성)
     1. upstream/feature-user 브랜치에서 작업 브랜치(brf-100_login_layout) 생성
     ```powershell
     (feature-user)$ git fetch upstream
     (feature-user)]$ git checkout -b bfm-100_login_layout –track upstream/feature-user
     ```
     1. 작업 브랜치에서 소스코드 수정
     2. 작업 브랜치에서 변경사항 커밋
     ```powershell
     (bfm-100_login_layout)]$ git commit -m "BFM-100 로그인 화면 레이아웃 생성"
     ```
     1. 불필요하게 커밋이 여러 개로 나뉘어져 있다면 squash 진행
     ```powershell
     (bfm-100_login_layout)]$ git rebase -i HEAD~2
     ```
     1. 작업 브랜치를 upstream/feature-user에 rebase 하기
     ```powershell
     (bfm-100_login_layout)]$ git pull –rebase upstream feature-user
     ```
     1. 작업 브랜치를 origin에 push 하기
     ```powershell
     (bfm-100_login_layout)]$ git push origin bfm-100_login_layout
     ```
     1. Github에서 bfm-100_login_layout 브랜치를 feature-user에 merge하는 Pull Request를 생성합니다.
     2. 같은 feature를 개발하는 동료에게 리뷰 승인을 받은 후 Pull Request merge
2. develop 변경사항을 feature로 가져오기 (Optinal)
3. 완료된 기능 이번 출시 버전에 포함
4. QA 시작하기
5. QA 중 버그 수정
