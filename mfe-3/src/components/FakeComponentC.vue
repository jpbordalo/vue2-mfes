<template>
  <div>
    <div class="fake-component-c">
      Fake Component C: {{ aclass ? aclass.name : "-" }}
    </div>
  </div>
</template>

<script>
import AClass from "../models/AClass";

export default {
  name: "FakeComponentC",

  data() {
    return {
      aclass: undefined,
    };
  },

  mounted() {
    const aclass = new AClass();
    aclass.setName("ee");
    this.aclass = aclass;
    console.log("mounted", aclass.name);
    // setTimeout(() => {
    // this.a = this.b.error;
    // }, 5000);
  },
};
</script>

<style scoped>
.fake-component-c {
  color: lawngreen;
}
</style>
