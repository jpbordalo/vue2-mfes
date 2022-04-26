<template>
  <div>
    <div class="fake-component-b">Fake Component B</div>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
// import { VForm, VContainer, VRow, VCol, VTextField } from "vuetify/lib";

export default {
  name: "FakeComponentB",

  /* components: {
    VForm,
    VContainer,
    VRow,
    VCol,
    VTextField,
  }, */
};
</script>

<style scoped>
.fake-component-b {
  color: red;
}
</style>
