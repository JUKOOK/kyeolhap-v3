<template>
  <div class="answer-pad">
    <div class="display-input">
      <p class="answer-character" v-for="(char, i) in answerChars" :key="i">
        {{ char }}
      </p>
    </div>
    <div class="btn-controller">
      <div class="number-row">
        <div class="btn feature" @click="$emit('press', '합')">
          <span>합</span>
        </div>
        <div class="btn" @click="$emit('press', 'back')">
          <span>&#x2190;</span>
        </div>
        <div class="btn feature" @click="$emit('press', '결')">
          <span>결</span>
        </div>
      </div>
      <div class="number-row">
        <div class="btn" @click="$emit('press', '1')">
          <span>1</span>
        </div>
        <div class="btn" @click="$emit('press', '2')">
          <span>2</span>
        </div>
        <div class="btn" @click="$emit('press', '3')">
          <span>3</span>
        </div>
      </div>
      <div class="number-row">
        <div class="btn" @click="$emit('press', '4')">
          <span>4</span>
        </div>
        <div class="btn" @click="$emit('press', '5')">
          <span>5</span>
        </div>
        <div class="btn" @click="$emit('press', '6')">
          <span>6</span>
        </div>
      </div>
      <div class="number-row">
        <div class="btn" @click="$emit('press', '7')">
          <span>7</span>
        </div>
        <div class="btn" @click="$emit('press', '8')">
          <span>8</span>
        </div>
        <div class="btn" @click="$emit('press', '9')">
          <span>9</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputAnswer: {
      type: String,
      default: "",
    },
  },
  computed: {
    answerChars() {
      return this.inputAnswer.split("");
    },
  },
};
</script>

<style lang="scss" scoped>
.answer-pad {
  border-radius: 0.8rem;
  background-color: #111;
}

.answer-pad .display-input {
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #5a5a5a;
  .answer-character {
    color: #fff;
    font-size: 2.4rem;
    margin: -2px 0.8rem 0 0.8rem;
  }
}

.answer-pad .btn-controller {
  .number-row {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .btn {
      width: 4.8rem;
      height: 4.8rem;
      margin: 0.8rem;
      border: 1px solid #5a5a5a;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      span {
        color: #fff;
        font-size: 2.4rem;
        margin-top: -4px;
      }
    }
    .feature span {
      font-size: 2rem;
    }
  }
}
</style>
