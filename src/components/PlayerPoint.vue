<template>
  <div class="player-point">
    <button class="btn-point-minus" @click="minus1">&minus;</button>
    <p class="point">
      {{ point }}
    </p>
    <button class="btn-point-plus" @click="plus1">&plus;</button>
    <span :class="getPointDiffClass()">{{ pointDiffText }}</span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["player", "point"],
  data() {
    return {
      pointDiff: null,
    };
  },
  computed: {
    pointDiffText() {
      if (!this.pointDiff) return "";
      else return this.pointDiff > 0 ? `+${this.pointDiff}` : this.pointDiff;
    },
  },
  watch: {
    point(to, from) {
      this.pointDiff = to - from;
      setTimeout(() => {
        this.pointDiff = null;
      }, 400);
    },
  },
  methods: {
    ...mapMutations(["UPDATE_P1_POINT", "UPDATE_P2_POINT"]),
    getPointDiffClass() {
      let cls = "point-diff";
      if (this.pointDiff) {
        cls += this.pointDiff > 0 ? " plus" : " minus";
      }
      return cls;
    },
    minus1() {
      this.player === 1 ? this.UPDATE_P1_POINT(-1) : this.UPDATE_P2_POINT(-1);
    },
    plus1() {
      this.player === 1 ? this.UPDATE_P1_POINT(1) : this.UPDATE_P2_POINT(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.player-point {
  width: 50%;
  height: 100%;
  padding: 1.2rem;
  position: relative;
  z-index: 1;
  .point {
    height: 8.4rem;
    font-size: 8.4rem;
    font-weight: 600;
    color: #272424;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.player-point {
  .btn-point-minus,
  .btn-point-plus {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    transform: translate(0, -50%);
    outline: 0;
    font-size: 2rem;
    font-weight: bold;
    display: none;
  }
  .btn-point-minus {
    top: 48%;
    left: 0.8rem;
  }
  .btn-point-plus {
    top: 52%;
    right: 0.8rem;
  }
  &:hover {
    .btn-point-minus,
    .btn-point-plus {
      display: block;
      cursor: pointer;
    }
  }
}

.player-point {
  .point-diff {
    height: 3.6rem;
    font-size: 3.4rem;
    font-weight: 400;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #272424;
  }
  .point-diff {
    transition: transform 0.4s ease;
    &.plus {
      top: 20%;
      transform: translate(-50%, -100%);
    }
    &.minus {
      top: 80%;
      transform: translate(-50%, 0);
    }
  }
}
</style>
