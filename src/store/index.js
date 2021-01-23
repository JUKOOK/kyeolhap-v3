import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentRound: 0, // 0 설명용 튜토리얼. 1~16
    currentMode: "play", // 현재 게임 상태 : play, stop(중간), stop(종료)
    currentTurn: 1, // 현재 턴 : 1플레이어 또는 2플레이어
    p1Point: 0, // 1플레이어 점수
    p2Point: 0, // 2플레이어 점수
    countDown: 0, // 타이머(초)
  },
  mutations: {
    SET_CURRENT_ROUND(state, round) {
      state.currentRound = round;
    },
    SET_CURRENT_MODE(state, mode) {
      state.currentMode = mode;
    },
    TOGGLE_CURRENT_TURN(state) {
      state.currentTurn = 3 - state.currentTurn;
    },
    CLEAR_P1_POINT(state) {
      state.p1Point = 0;
    },
    UPDATE_P1_POINT(state, diff) {
      state.p1Point += diff;
    },
    CLEAR_P2_POINT(state) {
      state.p2Point = 0;
    },
    UPDATE_P2_POINT(state, diff) {
      state.p2Point += diff;
    },
    SET_COUNT_DOWN(state, count) {
      state.countDown = count;
    },
  },
});

export default store;
