<template>
  <div>
    <img
      class="myimg"
      v-for="result in results"
      :key="result.id.videoId"
      :src="result.snippet.thumbnails.default.url"
    />
  </div>
</template>

<script>
export default {
  name: "VidoeItem",
  props: {
    results: Array,
  },
};
</script>

<style>
.myimg {
  display: block;
}
</style>
