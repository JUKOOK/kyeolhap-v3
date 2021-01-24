<template>
  <div class="player-count" @click="pauseTimer">
    <div class="count-clock">
      <h2 class="count">{{ countDown }}</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["countDown"]),
  },
  methods: {
    pauseTimer() {
      this.$root.$emit("forcePauseTimer");
    },
  },
};
</script>

<style lang="scss" scoped>
.player-count {
  width: 12.8rem;
  height: 100%;
  border-radius: 0.8rem;
  background-color: #f5f5f5;
  position: relative;
  z-index: 1;
}

.player-count .count-clock {
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("../assets/img/clock.png") center center no-repeat;
  background-size: contain;
  cursor: pointer;
  .count {
    height: 6.4rem;
    font-size: 6.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
