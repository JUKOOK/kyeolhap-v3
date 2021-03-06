# kyeolhap-v3

## 결합 게임

### 튜토리얼 (Tutorial)

- path: '/', '/tutorial'
- 1인용의 튜토리얼 화면입니다. 기본적인 룰 학습을 위한 1라운드짜리 연습용 게임입니다.
- 시간제한이 없고, 결까지 정답을 맞추면 1인용과 2인용을 선택하여 넘어갈 수 있습니다.

### 1인용 게임 (SoloGame)

- path: '/solo'
- 1인용 게임 화면입니다. 총 10라운드입니다.
- 시간제한은 10초씩만 반복하여 제공됩니다.
- 합을 맞추면 1점, 결을 맞추면 3점이며, 오답은 -1점 됩니다.
- 10라운드의 결까지 정답을 맞추면 시간과 총 점수를 확인할 수 있습니다.

### 2인용 게임 (BattleGame)

- path: '/1v1'
- 2인용 게임 화면입니다. 총 10라운드입니다.
- 두 플레이어가 번갈아가며 턴을 가져갑니다. 시간제한은 합 10초, 결 5초로 제공됩니다.
- 합을 맞추면 1점, 결을 맞추면 3점이며, 오답은 -1점 됩니다.
- 10라운드의 결까지 정답을 맞추면 게임이 종료되며, 승패가 결정됩니다.

### 게임 설명

- [결합게임 룰(문서)](https://m.blog.naver.com/PostView.nhn?blogId=incpa&logNo=220089856861&proxyReferer=https:%2F%2Fwww.google.com%2F)

- [결합게임 룰(영상)](https://www.youtube.com/watch?v=ExiILzxGDBY)

- 프로그램 내 기본 설정값
  - 플레이어 1 이름: **A**
  - 플레이어 2 이름: **B**
  - 총 라운드: **10**
  - 합 정답 획득 포인트: **+1점**
  - 결 정답 획득 포인트: **+3점**
  - 오답 차감 포인트: **-1점**
  - 플레이어 합 제한 시간: **10초**
  - 합 정답 이후 결 제한 시간: **5초**
  - 라운드별 합 시간초과 최대 턴(양 플레이어가 합을 제시하지 않고 일정 횟수 이상 시간초과한 경우, 라운드 종료): **6**

## Vue 2 버전

- [결합게임(구, Vue 2)](https://github.com/JUKOOK/kyeolhap)

## Vue 3 업그레이드 과정

### 시작하기

- [Vue.js 3 시작하기](https://v3.ko.vuejs.org/guide/migration/introduction.html)

  ```console
  $ yarn global add @vue/cli
  $ vue create kyeolhap-v3 # select vue 3 preset
  (새 프로젝트를 만들지 않고, 자체 업그레이드를 원할 경우, vue upgrade next)
  $ yarn upgrade vue@next # 생성된 Vue 3 프로젝트는 기본적으로 3.0.0 버전이므로 최신 버전으로 올려준다.
  ```

- 추가된 `kyeolhap-v3/` 디렉토리와 내부 프로젝트 파일들 확인(`src/`, `public/`, `node_modules/`, `.gitignore`, `babel.config.js`, `package.json`, `yarn.lock`)

- `kyeolhap-v2/` 디렉토리 생성 후에 기존 프로젝트 파일들을 옮겨 넣기.

- `kyeolhap-v3/` 내부의 모든 프로젝트 파일들을 바깥으로 빼기

- `kyeolhap-v3/` 디렉토리 삭제

- `yarn serve` 테스트

### Vue-router 추가하기

- [Vue Router](https://router.vuejs.org/kr/)

- [Vue3에 vue-router 추가하기](https://velog.io/@cindy-choi/Vue3-%EC%97%90-vue-route-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)

- [vue3, vue-router로 라우팅하기](https://velog.io/@mahns/vue-router-vue3)

  ```console
  $ yarn add vue-router@next # Vue.js 3을 위한 vue-router
  ```

### Option API에서 Composition API 마이그레이션

- [Composition API: setup()](https://vuejs.org/api/composition-api-setup.html#setup-context)

- [stackoverflow](https://stackoverflow.com/questions/67097067/how-to-convert-options-api-to-composition-api-in-vue-js)

- [블로그 참고](https://dev.to/mikhailkaran/vue-3-options-to-composition-api-migration-3567)

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
