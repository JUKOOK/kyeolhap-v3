// For Timer
import { mapMutations } from "vuex";
const Timer = require("tiny-timer/dist/tiny-timer");

export const timerMixin = {
  data() {
    return {
      timer: null,
    };
  },
  created() {
    this.buildCountDown();
  },
  mounted() {
    this.$root.$on("forceStopTimer", () => {
      this.stopTimer();
    });
    this.$root.$on("forcePasueTimer", () => {
      if (this.timer.status === "running") this.pauseTimer();
      else if (this.timer.status === "paused") this.resumeTimer();
    });
  },
  watch: {
    currentTurn() {
      this.startCountDown(10);
    },
  },
  methods: {
    ...mapMutations(["TOGGLE_CURRENT_TURN", "SET_COUNT_DOWN"]),
    buildCountDown() {
      this.timer = new Timer({ interval: 1000, stopwatch: false });

      this.timer.on("tick", (tick) => this.emitCount(tick));
      this.timer.on("done", () => this.emitCountOver());
      this.startCountDown(10);
    },
    startCountDown(second = 10) {
      this.timer.start(second * 1000);
    },
    stopTimer() {
      this.timer.stop();
    },
    pauseTimer() {
      this.timer.pause();
    },
    resumeTimer() {
      this.timer.resume();
    },
    emitCount(ms) {
      this.SET_COUNT_DOWN(Math.ceil(ms / 1000));
    },
    emitCountOver() {
      this.TOGGLE_CURRENT_TURN();
    },
  },
};

export default timerMixin;
