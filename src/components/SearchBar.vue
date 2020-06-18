<template>
  <div>
    <input
      class="form-control"
      v-model="userInput"
      @keypress.enter="getVideos"
      type="text"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    ...mapActions(["getVideos"]),
    onInput() {
      this.$store.commit("setUserInput", this.userInput);
    },
  },
};
</script>

<style></style>
