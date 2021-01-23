<template>
  <div class="point-panel">
    <div class="player-1" :class="{ active: currentTurn === 1 }">
      <div class="player-avatar">
        <div class="avatar-image">
          <img
            class="wait"
            width="160"
            height="96"
            src="../assets/img/avatar.png"
            alt="아바타-대기"
          />
          <img
            class="active"
            width="160"
            height="96"
            src="../assets/img/avatar-active.png"
            alt="아바타-진행중"
          />
        </div>
        <p class="team-name">TEAM 1</p>
      </div>
      <div class="player-point">
        <p class="point">{{ p1Point }}</p>
      </div>
    </div>
    <div class="timer" @click="pauseTimer">
      <h2 class="count">{{ countDown }}</h2>
    </div>
    <div class="player-2" :class="{ active: currentTurn === 2 }">
      <div class="player-point">
        <p class="point">{{ p2Point }}</p>
      </div>
      <div class="player-avatar">
        <div class="avatar-image">
          <img
            class="wait"
            width="160"
            height="96"
            src="../assets/img/avatar.png"
            alt="아바타-대기"
          />
          <img
            class="active"
            width="160"
            height="96"
            src="../assets/img/avatar-active.png"
            alt="아바타-진행중"
          />
        </div>
        <p class="team-name">TEAM 2</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState([
      "currentRound",
      "currentTurn",
      "p1Point",
      "p2Point",
      "countDown",
    ]),
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
    pauseTimer() {
      this.$root.$emit("forcePasueTimer");
    },
  },
};
</script>

<style lang="scss" scoped>
.point-panel {
  width: 84rem;
  height: 12rem;
  margin-left: 39.2rem;
  display: flex;
  justify-content: space-between;
}

.point-panel .player-1,
.point-panel .player-2 {
  width: 32rem;
  height: 100%;
  border-radius: 0.8rem;
  background-color: #f1f0f0;
  display: flex;
  justify-content: space-between;
  .player-avatar {
    width: 50%;
    height: 100%;
    position: relative;
    .avatar-image {
      height: 9.6rem;
      img {
        object-fit: contain;
      }
      img.wait {
        display: block;
      }
      img.active {
        display: none;
      }
    }
    .team-name {
      height: 2.4rem;
      line-height: 2.4rem;
      font-size: 2rem;
      font-weight: 600;
      color: #272424;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      bottom: 6px;
    }
  }
  .player-point {
    width: 50%;
    height: 100%;
    padding: 1.2rem;
    .point {
      line-height: 8.4rem;
      text-align: center;
      font-size: 8.4rem;
      color: #272424;
    }
  }
}

.point-panel .player-1.active,
.point-panel .player-2.active {
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border: 4px solid #1c6d31;
    border-radius: 0.8rem;
    position: absolute;
  }
  .avatar-image img.wait {
    display: none;
  }
  .avatar-image img.active {
    display: block;
  }
  .player-avatar .team-name {
    color: #1c6d31;
  }
}

.point-panel .timer {
  width: 10rem;
  height: 10rem;
  margin-top: 1rem;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  background: url("../assets/img/clock.png") center center no-repeat;
  background-size: contain;
  cursor: pointer;
  .count {
    width: 9.7rem;
    line-height: 9.5rem;
    text-align: center;
    font-size: 6.4rem;
  }
}
</style>
