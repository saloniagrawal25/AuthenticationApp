<template>
  <v-app id="home">
    <Signup />
    <v-content>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Signup from "@/components/Layouts/Signup";

export default {
  name: "home",
  components: {
    Signup
  },
  data: () => ({
    //
  })
};
</script>
