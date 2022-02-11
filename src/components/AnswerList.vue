<template>
  <div class="answer-list">
    <div class="answer" v-for="n in 12" :key="n" v-html="renderAnswer(n - 1)" />
  </div>
</template>

<script>
export default {
  props: {
    board: Object,
  },
  methods: {
    renderAnswer(n) {
      const answer = this.board.currentAnswers[n];
      if (!answer) return;

      if (answer === "결")
        return `<div class="wrap"><span class="text">결</span></div>`;
      else {
        const [first, second, third] = answer.split("");
        return `<div class="wrap"><span class="text">${first}</span><span class="text">${second}</span><span class="text">${third}</span></div>`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.answer-list {
  width: 24rem;
  margin-left: 7.6rem;
}

.answer-list .answer {
  width: 100%;
  height: 4.8rem;
  background-color: #f1f0f0;
  border: 2px solid #000;
  &::v-deep .wrap {
    width: 100%;
    height: 100%;
    padding: 0 2.8rem;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    .text {
      font-size: 3.2rem;
      font-weight: 800;
    }
  }
}
</style>
