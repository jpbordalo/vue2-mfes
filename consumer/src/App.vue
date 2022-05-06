<template>
  <div id="app">
    <SafeComponent>
      <FakeComponentA :classes="classes" :services="services" />
    </SafeComponent>
    <SafeComponent>
      <FakeComponentB />
    </SafeComponent>
    <SafeComponent>
      <FakeComponentC />
    </SafeComponent>
  </div>
</template>

<script>
import SafeComponent from "./components/SafeComponent.vue";
import AClass from "mfe3/AClass";

const classes = {
  AClass,
};

export default {
  name: "App",

  data() {
    return {
      classes,
    };
  },

  components: {
    FakeComponentA: () => import("mfe1/FakeComponentA"),
    FakeComponentB: () => import("mfe2/FakeComponentB"),
    FakeComponentC: () => import("mfe3/FakeComponentC"),
    SafeComponent,
  },

  errorCaptured() {
    console.log("errorCaptured SHELL App");
  },

  computed: {
    services() {
      return this.$store.state.serviceRegister.services;
    },
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
