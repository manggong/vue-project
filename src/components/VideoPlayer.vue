<template>
  <div id="playerDiv" v-if="results.length > 0">
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${results[0].id.videoId}`"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    results: Array,
  },
};
</script>

<style>
#playerDiv {
  margin-left: 100px;
}
</style>
