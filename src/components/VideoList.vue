<template>
  <div>
    <VidoeItem :results="results" />
  </div>
</template>

<script>
import VidoeItem from "./VideoItem.vue";
export default {
  name: "VideoList",
  props: {
    results: Array,
  },
  components: {
    VidoeItem,
  },
};
</script>

<style></style>
