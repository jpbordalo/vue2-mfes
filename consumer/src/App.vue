<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <FakeComponentA />
    <FakeComponentB />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import FakeComponentA from "mfe1/FakeComponentA";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // FakeComponentA,
    FakeComponentA: () => import("mfe1/FakeComponentA"),
    FakeComponentB: () => import("mfe2/FakeComponentB"),
  },

  errorCaptured() {
    console.log("errorCaptured ");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.fake-component-a {
  color: yellow;
  background: green;
}
</style>
