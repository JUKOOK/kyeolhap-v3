<template>
  <div class="kyeol-hap">
    <DisplayRound :current-round="currentRound" />
    <GameBoard :board="board" />
    <AnswerList :board="board" />
  </div>
</template>

<script>
import BoardManager from "../stuff/board-manager.js";
import Player from "../stuff/player.js";
import Const from "../stuff/constants.js";

import DisplayRound from "../components/DisplayRound.vue";
import GameBoard from "../components/GameBoard.vue";
import AnswerList from "../components/AnswerList.vue";

export default {
  components: { DisplayRound, GameBoard, AnswerList },
  data() {
    return {
      board: new BoardManager(true),
      player1: new Player(Const.DEFAULT_PLAYER1_NAME),
      player2: new Player(Const.DEFAULT_PLAYER2_NAME),
      totalRound: Const.DEFAULT_TOTAL_ROUND,
      currentRound: 0,

      hapCorrectPoint: Const.HAP_CORRENT_POINT,
      kyeolCorrectPoint: Const.KYEOL_CORRENT_POINT,
      wrongPoint: Const.WRONG_ANSWER_POINT,
    };
  },
};
</script>

<style lang="scss" scoped>
.kyeol-hap {
  display: flex;
}
</style>
