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
      <PlayerPoint :player="1" :point="p1Point" />
    </div>
    <PlayerCount />
    <div class="player-2" :class="{ active: currentTurn === 2 }">
      <PlayerPoint :player="2" :point="p2Point" />
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

import PlayerPoint from "./PlayerPoint.vue";
import PlayerCount from "./PlayerCount.vue";

export default {
  components: { PlayerPoint, PlayerCount },
  computed: {
    ...mapState(["currentRound", "currentTurn", "p1Point", "p2Point"]),
  },
  watch: {
    currentRound: {
      immediate: true,
      handler() {
        if (this.currentRound === 1) {
          this.SET_P1_POINT(0);
          this.SET_P2_POINT(0);
        }
      },
    },
  },
  methods: {
    ...mapMutations(["SET_P1_POINT", "SET_P2_POINT"]),
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
</style>
