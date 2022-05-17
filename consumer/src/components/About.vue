<template>
  <div>
    <h1>About</h1>
    <router-link to="/about/sub-route">Go to sub route</router-link>
    <RouteComponent />
  </div>
</template>

<script>
export default {
  name: "MyAbout",

  components: {
    RouteComponent: () => import("mfe3/RouteComponent"),
  },
};
</script>

<style scoped></style>
