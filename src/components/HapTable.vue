<template>
  <div class="hap-table-area">
    <div
      class="hap"
      v-for="n in 14"
      :key="n"
      v-html="splitAnswer(habTables[n - 1])"
    ></div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      habTables: [],
    };
  },
  computed: {
    ...mapState(["currentRound"]),
  },
  watch: {
    currentRound: {
      immediate: true,
      handler() {
        this.habTables = new Array(14).fill(null);
      },
    },
  },
  mounted() {
    this.$root.$on("updateHapKyeol", (answer) => {
      this.updateHapTable(answer);
    });
  },
  beforeDestroy() {
    this.$root.$off("updateHapKyeol");
  },
  methods: {
    splitAnswer(num) {
      if (num === null) return "<span></span>";
      else if (num === 0) return `<div class="wrap"><span>&#8213;</span></div>`;
      else {
        let str = num.toString();
        return `<div class="wrap"><span>${str[0]}</span><span>${str[1]}</span><span>${str[2]}</span></div>`;
      }
    },

    updateHapTable(answer) {
      const nullIdx = this.habTables.findIndex((item) => {
        return item === null;
      });
      Vue.set(this.habTables, nullIdx, answer);
    },
  },
};
</script>

<style lang="scss" scoped>
.hap-table-area {
  width: 36rem;
  height: 84rem;
  margin-left: 7.6rem;
  display: flex;
  flex-direction: column;
}

.hap-table-area .hap {
  width: 100%;
  flex: 1;
  background-color: #fff;
  position: relative;
  border: 3px solid #000;
  &:not(:first-child) {
    border-top: 0;
  }
  &::v-deep .wrap {
    width: 100%;
    height: 100%;
    padding: 0 3.2rem;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    span {
      font-size: 4.4rem;
      font-weight: 800;
    }
  }
}
</style>
