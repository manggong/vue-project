<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="video in videos"
      :key="video.id.videoId"
      @click="onClick(video)"
    >
      <VideoItem :video="video" />
    </li>
  </ul>
</template>

<script>
import VideoItem from "./VideoItem";
import { mapGetters } from "vuex";

export default {
  name: "VideoList",
  computed: {
    ...mapGetters(["videos"]),
  },
  components: {
    VideoItem,
  },
  methods: {
    onClick(video) {
      this.$store.commit("setVideo", video);
    },
  },
};
</script>

<style></style>
