<template>
  <div class="route-component">
    <h1>SubRouteComponent</h1>
  </div>
</template>

<script>
export default {
  name: "SubRouteComponent",

  data() {
    return {};
  },

  mounted() {
    console.log("SubRouteComponent mounted");
  },
};
</script>

<style scoped>
.route-component {
  /* color: lawngreen; */
}
</style>
