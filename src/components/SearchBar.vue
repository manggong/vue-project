<template>
  <div>
    <input class="form-control" v-model="userInput" @keypress.enter="onInput" type="text" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      userInput: ""
    };
  },
  methods: {
    onInput() {
      this.$emit("onInput", this.userInput);
    }
  }
};
</script>

<style>
</style>