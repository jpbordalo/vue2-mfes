<template>
  <div @click="increment">
    <div class="fake-component-a">
      Fake Component A: {{ counter }} | {{ classes.AClass.METADATA.type }} |
      {{ aclass.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FakeComponentA",

  props: {
    classes: {
      type: Object,
      default: () => {},
    },

    services: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      aclass: undefined,
    };
  },

  mounted() {
    console.log("mounted FCA - classes", this.classes);
    this.aclass = new this.classes.AClass();
    this.aclass.setName("I can use classes from other modules");

    console.log("Service Register - mounted FCA", this.services);
    this.services.WORKFLOW.actions[0][0].callback();
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
