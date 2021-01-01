<template>
  <input
    type="number"
    class="input-answer"
    v-model="userInput"
    @keypress.enter="keyEnter"
  />
</template>

<script>
import { mapMutations, mapState } from "vuex";

import questionConst from "../core/question-contants.js";

export default {
  data() {
    return {
      userInput: "",
      currentHaps: [],
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
        this.currentHaps = [];
        this.remainHapCount = this.question.hapCount;
        console.clear();
        console.log(
          `Q-${this.currentRound}번\n합 목록 : ${this.question.haps}\n합 개수 : ${this.question.hapCount}`
        );
      },
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
      console.log(
        "----------------------------------------------------------------------------------"
      );
      if (this.userInput === "0") {
        console.log(`${this.currentTurn}플레이어 답안 : 결`);
        setTimeout(() => {
          this.checkKyeol();
          this.userInput = "";
        }, 1500);
      } else if (this.userInput.length !== 3) {
        console.log("잘못된 입력입니다. 다시 입력해주세요");
        this.userInput = "";
      } else {
        console.log(`${this.currentTurn}플레이어 답안 : 합 ${this.userInput}`);
        setTimeout(() => {
          this.checkHap();
          this.userInput = "";
        }, 500);
      }
    },
    checkKyeol() {
      if (this.remainHapCount === 0) {
        console.log("=> 정답 : 결입니다. +3점");
        this.$root.$emit("highlightHapKyeol", 0);
        this.$root.$emit("updateHapKyeol", 0);
        this.updatePlayerPoint(3);
        setTimeout(() => {
          this.SET_CURRENT_MODE("end");
        }, 1000);
      } else {
        console.log(
          `=> 오답 : 결이 아닙니다. -1점\n남은 합 개수 : ${this.remainHapCount}`
        );
        this.$root.$emit("occurError");
        this.updatePlayerPoint(-1);
      }
    },
    checkHap() {
      const answer = this._sort(this.userInput);
      if (this.question.haps.includes(answer)) {
        if (this.currentHaps.includes(answer)) {
          console.log(
            `=> 오답 : 이미 나온 합입니다. -1점\n남은 합 개수 : ${this.remainHapCount}`
          );
          this.$root.$emit("occurError");
          this.updatePlayerPoint(-1);
        } else {
          console.log(
            `=> 정답 : 합입니다. +1점\n남은 합 개수 : ${this.remainHapCount -
              1}`
          );
          this.$root.$emit("highlightHapKyeol", answer);
          this.$root.$emit("updateHapKyeol", answer);
          this.updatePlayerPoint(1);
          this.currentHaps.push(answer);
          this.remainHapCount -= 1;
        }
      } else {
        console.log(
          `=> 오답 : 합이 아닙니다. -1점\n남은 합 개수 : ${this.remainHapCount}`
        );
        this.$root.$emit("occurError");
        this.updatePlayerPoint(-1);
      }
    },
    updatePlayerPoint(point) {
      if (this.currentTurn === 1) {
        this.UPDATE_P1_POINT(point);
      } else if (this.currentTurn === 2) {
        this.UPDATE_P2_POINT(point);
      }
      console.log(`P1 : P2 === ${this.p1Point} : ${this.p2Point}`);
      this.TOGGLE_CURRENT_TURN();
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
