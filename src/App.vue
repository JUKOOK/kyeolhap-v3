<template>
  <div id="app" class="kyeol-hap">
    <section class="play-section">
      <RoundHeading />
      <TileBoard />
      <HapTable />
    </section>
    <PlayerTimer />
    <EnterInput class="input-section" />
  </div>
</template>

<script>
import RoundHeading from "./components/RoundHeading.vue";
import HapTable from "./components/HapTable.vue";
import TileBoard from "./components/TileBoard.vue";
import EnterInput from "./components/EnterInput.vue";
import PlayerTimer from "./components/PlayerTimer.vue";

export default {
  name: "App",
  components: {
    RoundHeading,
    HapTable,
    TileBoard,
    EnterInput,
    PlayerTimer,
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #7e3341;
  position: relative;
}

.kyeol-hap .play-section {
  width: 100%;
  height: 91.2rem;
  padding: 3.6rem;
  display: flex;
}

.kyeol-hap .input-section {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
