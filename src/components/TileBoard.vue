<template>
  <div class="question-area">
    <div
      class="cover-board"
      :class="{ 'end-game': currentRound === 4 }"
      v-if="currentMode === 'end'"
    >
      <button type="button" class="btn-start-round" @click="startNextRound">
        {{ currentRound + 1 }} ROUND 시작
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
    </div>
    <div class="tile-border-wrap" ref="borderWrap">
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
    ...mapMutations(["SET_CURRENT_TURN", "SET_CURRENT_MODE"]),
    startNextRound() {
      this.SET_CURRENT_TURN(this.currentRound + 1);
      this.SET_CURRENT_MODE("play");
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
}

.question-area .cover-board {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(7, 0, 0, 0.66);
  z-index: 1;
  .btn-start-round {
    width: 21.2rem;
    height: 4.8rem;
    line-height: 4rem;
    border-radius: 4px;
    padding: 4px 0;
    font-size: 2.2rem;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      outline: -webkit-focus-ring-color auto 1px;
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
      border-top-color: rgb(16, 5, 167);
      border-right-color: rgb(16, 5, 167);
      transition: width 0.4s ease-out, height 0.4s ease-out 0.4s;
    }
    &::after {
      border-bottom-color: rgb(16, 5, 167);
      border-left-color: rgb(16, 5, 167);
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
