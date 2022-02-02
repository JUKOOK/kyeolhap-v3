<template>
  <div class="question-area">
    <div
      class="cover-board"
      :class="{ 'end-game': currentRound === 15 }"
      v-if="currentMode === 'stop'"
    >
      <button type="button" class="btn-start-round" @click="startNextRound">
        <span class="btn-text"> {{ currentRound + 1 }} ROUND </span>
      </button>
    </div>
    <div class="tile-board">
      <img
        src="../assets/img/tutorial.png"
        width="840"
        height="840"
        v-if="currentRound === 0"
      />
      <img
        src="../assets/img/Q1.png"
        width="840"
        height="840"
        v-if="currentRound === 1"
      />
      <img
        src="../assets/img/Q2.png"
        width="840"
        height="840"
        v-if="currentRound === 2"
      />
      <img
        src="../assets/img/Q3.png"
        width="840"
        height="840"
        v-if="currentRound === 3"
      />
      <img
        src="../assets/img/Q4.png"
        width="840"
        height="840"
        v-if="currentRound === 4"
      />
      <img
        src="../assets/img/Q5.png"
        width="840"
        height="840"
        v-if="currentRound === 5"
      />
      <img
        src="../assets/img/Q6.png"
        width="840"
        height="840"
        v-if="currentRound === 6"
      />
      <img
        src="../assets/img/Q7.png"
        width="840"
        height="840"
        v-if="currentRound === 7"
      />
      <img
        src="../assets/img/Q8.png"
        width="840"
        height="840"
        v-if="currentRound === 8"
      />
      <img
        src="../assets/img/Q9.png"
        width="840"
        height="840"
        v-if="currentRound === 9"
      />
      <img
        src="../assets/img/Q10.png"
        width="840"
        height="840"
        v-if="currentRound === 10"
      />
      <img
        src="../assets/img/Q11.png"
        width="840"
        height="840"
        v-if="currentRound === 11"
      />
      <img
        src="../assets/img/Q12.png"
        width="840"
        height="840"
        v-if="currentRound === 12"
      />
      <img
        src="../assets/img/Q13.png"
        width="840"
        height="840"
        v-if="currentRound === 13"
      />
      <img
        src="../assets/img/Q14.png"
        width="840"
        height="840"
        v-if="currentRound === 14"
      />
      <img
        src="../assets/img/Q15.png"
        width="840"
        height="840"
        v-if="currentRound === 15"
      />
    </div>
    <div class="tile-border-wrap" ref="borderWrap" @click="stopRound">
      <div class="tile-border" ref="tile1"></div>
      <div class="tile-border" ref="tile2"></div>
      <div class="tile-border" ref="tile3"></div>
      <div class="tile-border" ref="tile4"></div>
      <div class="tile-border" ref="tile5"></div>
      <div class="tile-border" ref="tile6"></div>
      <div class="tile-border" ref="tile7"></div>
      <div class="tile-border" ref="tile8"></div>
      <div class="tile-border" ref="tile9"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentMode", "currentRound"]),
  },
  mounted() {
    this.$root.$on("highlightHapKyeol", (answer) => {
      this.drawBorderAnswer(answer);
    });
    this.$root.$on("occurError", () => {
      this.drawBorderError();
    });
  },
  beforeDestroy() {
    this.$root.$off("highlightHapKyeol");
    this.$root.$off("occurError");
  },
  methods: {
    ...mapMutations([
      "SET_CURRENT_ROUND",
      "SET_CURRENT_MODE",
      "TOGGLE_CURRENT_TURN",
    ]),
    stopRound() {
      this.SET_CURRENT_MODE("stop");
      this.$root.$emit("forceStopTimer");
    },
    startNextRound() {
      this.SET_CURRENT_ROUND(this.currentRound + 1);
      this.SET_CURRENT_MODE("play");
      this.TOGGLE_CURRENT_TURN();
    },
    drawBorderAnswer(answer) {
      if (answer === 0) {
        const elem = this.$refs.borderWrap;
        if (elem) this._toggleClass(elem, "draw-border", 800);
      } else {
        const digits = answer.toString().split("");
        const elem1 = this.$refs[`tile${digits[0]}`];
        const elem2 = this.$refs[`tile${digits[1]}`];
        const elem3 = this.$refs[`tile${digits[2]}`];
        if (elem1) this._toggleClass(elem1, "draw-border", 1000);
        if (elem2) this._toggleClass(elem2, "draw-border", 1000);
        if (elem3) this._toggleClass(elem3, "draw-border", 1000);
      }
    },
    drawBorderError() {
      const elem = this.$refs.borderWrap;
      if (elem) this._toggleClass(elem, "error-border", 600);
    },
    _toggleClass(elem, cls, timeout) {
      elem.classList.add(cls);
      setTimeout(() => {
        elem.classList.remove(cls);
      }, timeout);
    },
  },
};
</script>

<style lang="scss" scoped>
.question-area {
  width: 84rem;
  height: 84rem;
  position: relative;
  overflow: visible;
}

.question-area .cover-board {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(7, 0, 0, 0.75);
  z-index: 1;
  .btn-start-round {
    width: 29.6rem;
    height: 7.2rem;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      outline: -webkit-focus-ring-color auto 1px;
    }
    .btn-text {
      width: 18rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 1px;
      font-size: 3.2rem;
      text-align: center;
      font-weight: 800;
      letter-spacing: 1.6px;
    }
  }
  &.end-game {
    background-color: #070000;
    .btn-start-round {
      display: none;
    }
  }
}

.question-area .tile-board {
  width: 100%;
  height: 100%;
}

.question-area .tile-border-wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  .tile-border {
    width: 28rem;
    height: 28rem;
    background: none;
    border: 0;
    position: relative;
  }
}

.question-area .tile-border-wrap,
.question-area .tile-border-wrap .tile-border {
  &::before,
  &::after {
    content: "";
    width: 0;
    height: 0;
    border: 4px solid transparent;
    position: absolute;
    top: 0;
    left: 0;
  }
  &.draw-border {
    &::before,
    &::after {
      width: 100%;
      height: 100%;
    }
    &::before {
      border-top-color: aqua;
      border-right-color: aqua;
      transition: width 0.4s ease-out, height 0.4s ease-out 0.4s;
    }
    &::after {
      border-bottom-color: aqua;
      border-left-color: aqua;
      transition: height 0.4s ease-out, width 0.4s ease-out 0.4s;
    }
  }
}

.question-area .tile-border-wrap.draw-border {
  &::before {
    transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
  }
  &::after {
    transition: height 0.3s ease-out, width 0.3s ease-out 0.3s;
  }
}
.question-area .tile-border-wrap.error-border {
  &::before {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-color: rgb(243, 186, 62);
  }
}
</style>
