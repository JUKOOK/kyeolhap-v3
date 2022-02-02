# kyeolhap-v3

## 결합 게임 (2인용)

### 게임 설명

- [결합게임 룰(문서)](https://m.blog.naver.com/PostView.nhn?blogId=incpa&logNo=220089856861&proxyReferer=https:%2F%2Fwww.google.com%2F)

- [결합게임 룰(영상)](https://www.youtube.com/watch?v=ExiILzxGDBY)

- 프로그램 내 기본 설정값
  - 플레이어 1 이름: A
  - 플레이어 2 이름: B
  - 총 라운드: 10
  - 합 정답 획득 포인트: +1점
  - 결 정답 획득 포인트: +3점
  - 오답 차감 포인트: -1점
  - 플레이어 합 제한 시간: 10초
  - 합 정답 이후 결 제한 시간: 5초

## Vue 2 버전

- [결합게임(구, Vue 2)](https://github.com/JUKOOK/kyeolhap)

## Vue 3 마이그레이션 과정

- [Vue.js 3 시작하기](https://v3.ko.vuejs.org/guide/migration/introduction.html)

  ```
  yarn global add @vue/cli
  vue create kyeolhap-v3 # select vue 3 preset
  (새 프로젝트를 만들지 않고, 자체 업그레이드를 원할 경우, vue upgrade next)
  yarn upgrade vue@next # 생성된 Vue 3 프로젝트는 기본적으로 3.0.0 버전이므로 최신 버전으로 올려준다.
  ```

- 추가된 `kyeolhap-v3/` 디렉토리와 내부 프로젝트 파일들 확인(`src/`, `public/`, `node_modules/`, `.gitignore`, `babel.config.js`, `package.json`, `yarn.lock`)

- `kyeolhap-v2/` 디렉토리 생성 후에 기존 프로젝트 파일들을 옮겨 넣기.

- `kyeolhap-v3/` 내부의 모든 프로젝트 파일들을 바깥으로 빼기

- `kyeolhap-v3/` 디렉토리 삭제

- `yarn serve` 테스트

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
