<template>
  <v-app style="{background:$vuetify.theme.themes.light.background}">
    <v-container>
      <v-layout row class="ma-4">
        <v-app
          style="background-color: grey lighten-1;"
          class="rounded"
        ></v-app>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  name: "dashboard",
  components: {},
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>

<style scoped>
.rounded {
  border-radius: 30px;
}
.light {
  border-right: solid 1px #95a5a6;
}
</style>
