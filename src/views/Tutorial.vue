<template>
  <div class="kyeol-hap">
    <DisplayRound :current-round="currentRound" />
    <div class="board-panel">
      <GameBoard :board="board" />
    </div>
    <div class="answer-area">
      <AnswerList :board="board" />
      <AnswerPad :input-answer="inputAnswer" @press="updateInputAnswer" />
    </div>
  </div>
</template>

<script>
import BoardManager from "../stuff/board-manager.js";
// import Player from "../stuff/player.js";
// import Const from "../stuff/constants.js";

import DisplayRound from "../components/DisplayRound.vue";
import GameBoard from "../components/GameBoard.vue";
import AnswerList from "../components/AnswerList.vue";
import AnswerPad from "../components/AnswerPad.vue";

export default {
  components: { DisplayRound, GameBoard, AnswerList, AnswerPad },
  data() {
    return {
      board: new BoardManager(true),
      // player1: new Player(Const.DEFAULT_PLAYER1_NAME),
      // player2: new Player(Const.DEFAULT_PLAYER2_NAME),
      // totalRound: Const.DEFAULT_TOTAL_ROUND,
      currentRound: 0,
      inputAnswer: "",

      // hapCorrectPoint: Const.HAP_CORRENT_POINT,
      // kyeolCorrectPoint: Const.KYEOL_CORRENT_POINT,
      // wrongPoint: Const.WRONG_ANSWER_POINT,
    };
  },
  methods: {
    updateInputAnswer(v) {
      if (v === "결") return;
      if (this.inputAnswer.length >= 4 && v !== "back") return;
      switch (v) {
        case "합":
          if (!this.inputAnswer.includes("합")) this.inputAnswer += "합";
          break;
        case "back":
          this.inputAnswer = this.inputAnswer.slice(0, -1);
          break;
        default:
          this.inputAnswer += v;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.kyeol-hap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}

.kyeol-hap .board-panel {
  width: 72rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.kyeol-hap .answer-area {
  width: 22.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
