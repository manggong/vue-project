<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="video in videos" :key="video.id.videoId">
      <VideoItem :video="video" @imgClicked="imgClicked" />
    </li>
  </ul>
</template>

<script>
import VideoItem from "./VideoItem";
export default {
  name: "VideoList",
  components: {
    VideoItem
  },
  props: {
    videos: Array
  },
  methods: {
    imgClicked(video) {
      this.$emit("imgClicked", video);
    }
  }
};
</script>

<style>
</style>