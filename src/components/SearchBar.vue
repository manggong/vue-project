<template>
  <div>
    <input v-model="inputData" @keypress.enter="textInputted" type="text" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    textInputted() {
      this.$emit("textInputtedInSearchBar", this.inputData);
    },
  },
};
</script>

<style></style>
