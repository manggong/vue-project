<template>
  <div>
    <img :src="video.snippet.thumbnails.default.url" @click="imgClicked" />
    <h5>{{ video.snippet.title }}</h5>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    video: Object
  },
  methods: {
    imgClicked() {
      this.$emit("imgClicked", this.video);
    }
  }
};
</script>

<style>
</style>