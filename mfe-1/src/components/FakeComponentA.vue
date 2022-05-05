<template>
  <div @click="increment">
    <div class="fake-component-a">Fake Component A: {{ counter }}</div>
  </div>
</template>

<script>
export default {
  name: "FakeComponentA",

  data() {
    return {
      a: "",
      b: undefined,
    };
  },

  mounted() {
    console.log("mounted");

    // setTimeout(() => {
    // this.a = this.b.error;
    // }, 5000);
  },

  errorCaptured() {
    console.log("errorCaptured mfe component");
  },

  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
  },

  computed: {
    counter() {
      return this.$store.state.counter.count || "?";
    },
  },
};
</script>

<style scoped>
.fake-component-a {
  color: red;
}
</style>
