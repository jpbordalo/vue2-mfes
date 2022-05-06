<template>
  <div>
    <slot />
    <div v-if="hasError">Error occur MFE!</div>
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
    console.log("errorCaptured mfe - returning false");
    this.hasError = true;
    return false;
  },
};
</script>
