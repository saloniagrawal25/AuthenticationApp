<template>
  <nav>
    <v-app-bar app clipped-left light>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" app class="blue--text"></v-app-bar-nav-icon>
      <v-avatar>
        <v-icon x-large class="blue--text">fab fa-pied-piper-alt</v-icon>
      </v-avatar>
      <span class="title ml-3 mr-5 blue--text text--lighten" light>Smart Switch</span>

      <v-spacer></v-spacer>
      <v-btn icon class="red--text">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon class="blue--text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" class="blue--text">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped light app fixed mini-variant expand-on-hover>
      <v-layout column align-center>
        <v-flex class="mt-2 mb-2"></v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          activeclass="border"
          class="blue--text"
        >
          <v-list-item-action>
            <v-icon small dense>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-bottom-navigation
      scroll-target="#scroll-area-2"
      hide-on-scroll
      scroll-threshold="500"
      absolute
      color="white"
      horizontal
    >
      <v-btn class="pink--text" dark>
        <span>Add</span>
        <v-icon fab>mdi-plus</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      {
        icon: "fas fa-th-large",
        text: "Dashboard",
        route: "/dashboard"
      },
      {
        icon: "fas fa-tachometer-alt",
        text: "Statistics",
        route: "/statistics"
      },
      {
        icon: "fas fa-user",
        text: "Personal Information",
        route: "/user"
      },
      {
        icon: "fas fa-cog",
        text: "Settings",
        route: "/settings"
      },
      {
        icon: "fas fa-sign-out-alt",
        text: "Log Out",
        route: "/signout"
      },
      {
        icon: "fas fa-info-circle",
        text: "About",
        route: "/about"
      }
    ]
  })
};
</script>

<style scoped>
.border {
  border-left: 4px solid#2c3e50;
}
#keep .v-navigation-drawer__border {
  display: none;
}
.gradient {
  /* background-image: linear-gradient(to right, #09a59b); */
}
.gradientlight {
  background-image: linear-gradient(to bottom, white);
}
</style>
