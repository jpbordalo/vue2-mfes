<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: lightblue;
}

.body {
  background: lightseagreen;
}
</style>
