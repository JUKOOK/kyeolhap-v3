<template>
  <div class="hap-table-area">
    <ul class="hap-table">
      <li
        class="hap"
        v-for="n in 14"
        :key="n"
        v-html="splitAnswer(habTables[n - 1])"
      ></li>
    </ul>
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
      else if (num === 0) return "<span>ㅡ</span>";
      else {
        let str = num.toString();
        return `<span>${str[0]}</span><span>${str[1]}</span><span>${str[2]}</span>`;
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
  height: 100%;
  margin-left: 7.6rem;
}

.hap-table-area .hap-table {
  margin-top: 2px;
  border: 3px solid #000;
  background-color: #fff;
  .hap {
    width: 100%;
    height: 5.9rem;
    list-style: none;
    border-bottom: 2px solid #000;
    text-align: center;
    &:last-child {
      border-bottom: 0;
    }
    &::v-deep span {
      height: 5.7rem;
      line-height: 5rem;
      display: inline-block;
      font-size: 5.2rem;
      font-weight: 600;
      margin-right: 4.8rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
