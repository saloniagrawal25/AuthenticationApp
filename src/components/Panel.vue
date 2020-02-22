<template>
  <v-app id="panel">
    <Navbar />
    <v-content>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "panel",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
