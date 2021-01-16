<template>
  <div id="app" class="kyeol-hap">
    <section class="question-section">
      <RoundHeading />
      <TileBoard />
      <HapTable />
    </section>
    <section class="input-point-section">
      <EnterInput />
      <playerPoint />
    </section>
  </div>
</template>

<script>
import RoundHeading from "./components/RoundHeading.vue";
import HapTable from "./components/HapTable.vue";
import TileBoard from "./components/TileBoard.vue";
import EnterInput from "./components/EnterInput.vue";
import PlayerPoint from "./components/PlayerPoint.vue";

export default {
  name: "App",
  components: {
    RoundHeading,
    HapTable,
    TileBoard,
    EnterInput,
    PlayerPoint,
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

.kyeol-hap .question-section {
  width: 100%;
  height: 91.2rem;
  padding: 3.6rem;
  display: flex;
}

.kyeol-hap .input-point-section {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}
</style>
