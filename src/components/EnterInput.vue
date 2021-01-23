<template>
  <input type="text" class="input-answer" v-model="answerInput" />
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { timerMixin } from "../mixins/timer";
import questionConst from "../core/question-contants.js";

export default {
  mixins: [timerMixin],
  data() {
    return {
      answerInput: "",
      answerState: "",

      currentHaps: [],
      currentHapCount: 0,
      remainHaps: [],
      remainHapCount: -1,
    };
  },
  computed: {
    ...mapState(["currentRound", "currentTurn", "p1Point", "p2Point"]),
    question() {
      return questionConst.QUESTIONS[this.currentRound];
    },
  },
  watch: {
    currentRound: {
      immediate: true,
      handler() {
        this.answerInput = "";
        this.answerState = "";
        this.currentHaps = [];
        this.currentHapCount = 0;
        this.remainHaps = [...this.question.haps];
        this.remainHapCount = this.question.hapCount;
        console.clear();
        console.log(
          `Q-${this.currentRound}번\n합 목록 : ${this.question.haps}\n합 개수 : ${this.question.hapCount}`
        );
      },
    },
    currentTurn() {
      this.answerState = `현재 ${this.currentTurn}팀의 턴입니다.`;
    },
    answerInput() {
      this.keyEnter();
    },
  },
  methods: {
    ...mapMutations([
      "SET_CURRENT_MODE",
      "UPDATE_P1_POINT",
      "UPDATE_P2_POINT",
      "TOGGLE_CURRENT_TURN",
    ]),
    keyEnter() {
      if (this.answerInput === "") return;
      const inputStr = this.answerInput.toString();
      console.log(
        "----------------------------------------------------------------------------------"
      );
      if (inputStr === "0") {
        this.answerState = `${this.currentTurn}팀 답안 : 결`;
        console.log(this.answerState);
        this.stopTimer();
        setTimeout(() => {
          this.checkKyeol();
          this.answerInput = "";
        }, 1500);
      } else if (inputStr.length !== 3) {
        this.answerState = "잘못된 입력입니다. 다시 입력해주세요";
        console.log(this.answerState);
        this.answerInput = "";
      } else {
        this.answerState = `${this.currentTurn}팀 답안 : 합 ${this.answerInput}`;
        console.log(this.answerState);
        this.stopTimer();
        setTimeout(() => {
          this.checkHap(inputStr);
          this.answerInput = "";
        }, 750);
      }
    },
    checkKyeol() {
      if (this.remainHapCount === 0) {
        this.answerState = "=> 정답 : 결입니다. +3점";
        console.log(this.answerState);
        this.$root.$emit("highlightHapKyeol", 0);
        this.$root.$emit("updateHapKyeol", 0);
        this.updatePlayerPoint(3);
        this.postProcessCheck(3);
      } else {
        this.answerState = `=> 오답 : 결이 아닙니다. -1점\n남은 합 개수 : ${this.remainHapCount}`;
        console.log(this.answerState);
        this.$root.$emit("occurError");
        this.updatePlayerPoint(-1);
        this.postProcessCheck(-1);
      }
    },
    checkHap(inputStr) {
      const answer = this._sort(inputStr);
      if (this.question.haps.includes(answer)) {
        if (this.currentHaps.includes(answer)) {
          this.answerState = `=> 오답 : 이미 나온 합입니다. -1점\n남은 합 개수 : ${this.remainHapCount}`;
          console.log(this.answerState);
          this.$root.$emit("occurError");
          this.updatePlayerPoint(-1);
          this.postProcessCheck(-1);
        } else {
          this.answerState = `=> 정답 : 합입니다. +1점\n남은 합 개수 : ${this
            .remainHapCount - 1}`;
          console.log(this.answerState);
          this.$root.$emit("highlightHapKyeol", answer);
          this.$root.$emit("updateHapKyeol", answer);
          this.updatePlayerPoint(1);
          this.postProcessCheck(1);
          this.currentHaps.push(answer);
          this.currentHapCount += 1;
          this.remainHapCount -= 1;
        }
      } else {
        this.answerState = `=> 오답 : 합이 아닙니다. -1점\n남은 합 개수 : ${this.remainHapCount}`;
        console.log(this.answerState);
        this.$root.$emit("occurError");
        this.updatePlayerPoint(-1);
        this.postProcessCheck(-1);
      }
    },
    updatePlayerPoint(point) {
      if (this.currentTurn === 1) {
        this.UPDATE_P1_POINT(point);
      } else if (this.currentTurn === 2) {
        this.UPDATE_P2_POINT(point);
      }
      console.log(`P1 : P2 === ${this.p1Point} : ${this.p2Point}`);
    },
    postProcessCheck(point) {
      if (point === 1) {
        this.startCountDown(5); // 합 정답 : 결 시간제한 5초
        this.answerState = `${this.currentTurn}팀 결 기회입니다.`;
      } else if (point === 3) {
        setTimeout(() => {
          this.SET_CURRENT_MODE("stop"); // 결 정답 : 일시정지, 다음 라운드
        }, 1000);
      } else {
        setTimeout(() => {
          this.TOGGLE_CURRENT_TURN(); // 오답 : 턴 넘기기
        }, 1500);
      }
    },

    _sort(numStr) {
      let digits = numStr.split("");
      digits.sort((a, b) => {
        return a - b;
      });
      return parseInt(digits.join(""));
    },
  },
};
</script>

<style lang="scss" scoped>
.input-answer {
  font-size: 1rem;
  border: 0;
  outline: 0;
  background-color: inherit;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
