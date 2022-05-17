<template>
  <div>
    <slot v-if="!hasError" />
    <div v-else>Error occur SHELL!</div>
  </div>
</template>

<script>
export default {
  name: "SafeComponent",

  data() {
    return {
      hasError: false,
    };
  },

  errorCaptured(/* error */) {
    // console.error("errorCaptured", error);
    // console.log("errorCaptured", error);
    console.log("errorCaptured shell - returning false");
    this.hasError = true;
    return false;
  },
};
</script>
