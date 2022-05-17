<template>
  <div>
    <h1>Home</h1>
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
import AClass from "mfe3/AClass";
import SafeComponent from "./SafeComponent.vue";

const classes = {
  AClass,
};

export default {
  name: "MyHome",

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

<style scope>
.fake-component-a {
  color: black !important;
  background: goldenrod;
}
</style>
