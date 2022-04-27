<template>
  <div @click="increment">
    <div class="fake-component-a">
      Fake Component A: {{ $store.state.counter.count }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FakeComponentA",

  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
  },
};
</script>

<style scoped>
.fake-component-a {
  color: red;
}
</style>
