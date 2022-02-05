<template>
  <div class="tile">
    <div class="tile-number">
      <span class="number" :style="{ color: numberColor }">
        {{ number }}
      </span>
    </div>
    <Circle
      v-if="tile.shape === 1"
      :figure-color="figureColor"
      :bg-color="bgColor"
    />
    <Rectangle
      v-else-if="tile.shape === 2"
      :figure-color="figureColor"
      :bg-color="bgColor"
    />
    <Triangle
      v-else-if="tile.shape === 3"
      :figure-color="figureColor"
      :bg-color="bgColor"
    />
  </div>
</template>

<script>
import Circle from "./tiles/Circle.vue";
import Rectangle from "./tiles/Rectangle.vue";
import Triangle from "./tiles/Triangle.vue";

export default {
  components: { Circle, Rectangle, Triangle },
  props: {
    tile: Object,
    number: Number,
  },
  computed: {
    figureColor() {
      switch (this.tile.figureColor) {
        case 1:
          return "#07a73e";
        case 2:
          return "#3c0b5d";
        case 3:
          return "#fe4c0a";
        default:
          return null;
      }
    },
    bgColor() {
      switch (this.tile.bgColor) {
        case 1:
          return "#EAFBFB";
        case 2:
          return "#99A3A3";
        case 3:
          return "#010101";
        default:
          return null;
      }
    },
    numberColor() {
      switch (this.tile.bgColor) {
        case 1:
        case 2:
          return "#272424";
        case 3:
          return "#FFF";
        default:
          return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  width: 20rem;
  height: 20rem;
  position: relative;
  border: 1px solid #745e57;
  .tile-number {
    width: 3.2rem;
    height: 3.2rem;
    position: absolute;
    top: 0;
    left: 0;
    border-right: 1px solid #745e57;
    border-bottom: 1px solid #745e57;
    display: flex;
    align-items: center;
    .number {
      width: 100%;
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>
