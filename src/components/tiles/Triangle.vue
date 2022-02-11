<template>
  <div class="triangle-tile">
    <svg
      viewBox="0 0 300 300"
      style="display: block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="300" height="300" :fill="bgColor" />
      <path d="M151 70L242.799 229H59.2013L151 70Z" :fill="figureColor" />
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
