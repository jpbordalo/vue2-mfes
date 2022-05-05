<template>
  <div id="app">
    <SafeComponent>
      <FakeComponentA />
    </SafeComponent>
  </div>
</template>

<script>
import FakeComponentA from "./components/FakeComponentA.vue";
import SafeComponent from "./components/SafeComponent.vue";

export default {
  name: "App",
  components: {
    FakeComponentA,
    SafeComponent,
  },

  errorCaptured() {
    console.log("errorCaptured mfe app");
    return false;
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
