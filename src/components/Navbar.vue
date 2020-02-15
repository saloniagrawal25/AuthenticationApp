<template>
  <nav>
    <v-navigation-drawer v-model="drawer" dark app class="teal">
      <v-layout column align-center>
        <v-flex class="mt-8 mb-5">
          <v-avatar>
            <v-icon x-large>fab fa-pied-piper-alt</v-icon>
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          activeclass="border"
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-flex class="ma-2">
        <template>
          <v-carousel cycle dark height="230" height-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide,i) in slides" :key="i">
              <v-sheet color="white" height="80%" align="center" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="grey--text">
                    <h4>Suggested Ideas</h4>
                    <p class="ma-2">{{slide}}</p>
                    <v-btn outlined color="indigo">Read More</v-btn>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </template>
      </v-flex>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      {
        icon: "fas fa-home",
        text: "Home",
        route: "/"
      },
      {
        icon: "fas fa-tachometer-alt",
        text: "Energy",
        route: "/Energy"
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
        route: "/sign-out"
      },
      {
        icon: "fas fa-info-circle",
        text: "About",
        route: "/About"
      }
    ],
    slides: [
      "IOT is used for this Smart Switch",
      "IOT is used for this Smart Switch",
      "IOT is used for this Smart Switch",
      "IOT is used for this Smart Switch"
    ]
  })
};
</script>
<style scoped>
.border {
  border-left: 4px solid#2c3e50;
}
</style>