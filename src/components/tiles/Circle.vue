<template>
  <div class="circle-tile">
    <svg
      viewBox="0 0 300 300"
      style="display: block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="300" height="300" :fill="bgColor" />
      <circle cx="150" cy="150" r="80" :fill="figureColor" />
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
