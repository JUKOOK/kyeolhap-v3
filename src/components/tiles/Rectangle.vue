<template>
  <div class="rectangle-tile">
    <svg
      viewBox="0 0 300 300"
      style="display: block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="300" height="300" :fill="bgColor" />
      <path d="M76 76H224V224H76V76Z" :fill="figureColor" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    figureColor: String,
    bgColor: String,
  },
};
</script>
