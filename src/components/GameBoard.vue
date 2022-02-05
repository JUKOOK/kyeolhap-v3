<template>
  <div class="game-board">
    <Tile
      v-for="(tile, idx) in board.tiles"
      :key="idx"
      :tile="tile"
      :number="idx + 1"
    />
  </div>
</template>

<script>
import Tile from "./Tile.vue";

export default {
  components: { Tile },
  props: {
    board: Object,
  },
};
</script>

<style lang="scss" scoped>
.game-board {
  // height: 60rem;
  background-color: rgba(7, 0, 0, 0.75);

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1px;
  column-gap: 1px;
}

// .game-board .tile {
//   border: 1px solid #745e57;
// }
</style>
