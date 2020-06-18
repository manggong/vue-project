<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center">Youtube Search</h1>
      <div class="row">
        <SearchBar class="col-12" @onInput="getVideos" />
        <div class="col-8">
          <VideoPlayer :video="selectedVideo" />
        </div>
        <div class="col-4">
          <VideoList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import VideoList from "./components/VideoList.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoPlayer,
    VideoList,
  },
  methods: {},
};
</script>

<style></style>
