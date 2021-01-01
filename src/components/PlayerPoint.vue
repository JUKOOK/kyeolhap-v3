<template>
  <div class="player-panners">
    <div class="player-panner player-1">
      <p>1팀: {{ p1Point }}점</p>
    </div>
    <div class="player-panner player-2">
      <p>2팀: {{ p2Point }}점</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentRound", "p1Point", "p2Point"]),
  },
  watch: {
    currentRound: {
      immediate: true,
      handler() {
        if (this.currentRound === 1) {
          this.CLEAR_P1_POINT();
          this.CLEAR_P2_POINT();
        }
      },
    },
  },
  methods: {
    ...mapMutations(["CLEAR_P1_POINT", "CLEAR_P2_POINT"]),
  },
};
</script>

<style lang="scss" scoped></style>
