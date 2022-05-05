<template>
  <div id="app">
    <SafeComponent>
      <FakeComponentA />
    </SafeComponent>
    <SafeComponent>
      <FakeComponentB />
    </SafeComponent>
  </div>
</template>

<script>
import SafeComponent from "./components/SafeComponent.vue";

export default {
  name: "App",
  components: {
    FakeComponentA: () => import("mfe1/FakeComponentA"),
    FakeComponentB: () => import("mfe2/FakeComponentB"),
    SafeComponent,
  },

  errorCaptured() {
    console.log("errorCaptured SHELL App");
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
