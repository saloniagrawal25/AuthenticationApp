<template>
  <v-app id="home">
    <Register />
    <v-content>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Register from "@/components/Layouts/Register";

export default {
  name: "home",
  components: {
    Register
  },
  data: () => ({
    //
  })
};
</script>
