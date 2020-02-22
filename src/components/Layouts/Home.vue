<template>
  <v-app id="home">
    <Login />
    <v-content>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Login from "@/components/Layouts/Login";

export default {
  name: "home",
  components: {
    Login
  },
  data: () => ({
    //
  })
};
</script>
