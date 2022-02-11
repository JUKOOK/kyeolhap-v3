<template>
  <div class="display-round">
    <div class="tutorial" v-if="currentRound === 0">
      <h1>T</h1>
      <h1>U</h1>
      <h1>T</h1>
      <h1>O</h1>
      <h1>R</h1>
      <h1>I</h1>
      <h1>A</h1>
      <h1>L</h1>
    </div>
    <div class="round" v-else>
      <h1>{{ currentRound }}</h1>
      <h1>R</h1>
      <h1>O</h1>
      <h1>U</h1>
      <h1>N</h1>
      <h1>D</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentRound: Number,
  },
};
</script>

<style lang="scss" scoped>
.display-round {
  width: 28rem;
  height: 100%;
  // margin-right: 3.6rem;
  .tutorial,
  .round {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 10.8rem;
    font-weight: 600;
    color: #f1f0f0;
  }
  .tutorial h1 {
    font-size: 8.4rem;
  }
}
</style>
