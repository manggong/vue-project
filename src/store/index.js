import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInput: "",
    videos: [],
    selectedVideo: null,
  },
  getters: {
    videos(state) {
      return state.videos;
    },
    selectedVideo(state) {
      return state.selectedVideo;
    },
  },
  mutations: {
    setUserInput(state, data) {
      state.userInput = data;
    },
    setVideos(state, data) {
      state.videos = data;
    },
    setVideo(state, data) {
      state.selectedVideo = data;
    },
  },
  actions: {
    getVideos(context, event) {
      context.commit("setUserInput", event.target.value);

      // 1. 입력된 검색어를 가지고,
      const baseURL = "https://www.googleapis.com/youtube/v3/search";
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

      // 2. Youtube API에 요청을 보내어
      axios
        .get(baseURL, {
          params: {
            // key, part, q
            key: API_KEY,
            part: "snippet",
            type: "video",
            q: context.state.userInput,
            maxResults: 10,
          },
        })
        .then((response) => {
          // console.log(response.data.items);
          context.commit("setVideos", response.data.items);
        });
      // 3. 검색어로 검색한 결과를 가져옴
      console.log("검색어 입력 되었음");
    },
  },
  modules: {},
});
