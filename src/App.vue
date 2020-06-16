<template>
  <div id="app">
    <h1>YouTube Searcher</h1>
    <SearchBar @textInputtedInSearchBar="input" />
    <div id="mydiv">
      <VideoPlayer :results="results" />
      <VideoList :results="results" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
  data() {
    return {
      results: [],
    };
  },
  methods: {
    input(inputData) {
      const baseURL = "https://www.googleapis.com/youtube/v3/search";
      const APIKey = process.env.VUE_APP_YOUTUBE_API_KEY;
      axios
        .get(baseURL, {
          params: {
            key: APIKey,
            part: "snippet",
            type: "video",
            q: inputData,
            maxResults: 10,
          },
        })
        .then((response) => {
          console.log(response.data.items);
          this.results = response.data.items;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#mydiv {
  display: flex;
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
