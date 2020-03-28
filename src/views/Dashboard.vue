<template>
  <div class="dashboard">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg4 v-for="room in dashboard" :key="room.name">
          <v-card flat class="text-xs-center ma-3" centered outlined shaped>
            <v-card-title class="justify-center">
              <v-icon large left>{{room.icon}}</v-icon>
              <span class="title font-weight-light">{{ room.name }}</span>
            </v-card-title>
            <!-- <v-card-text>
              <div class="headline black--text text-center">{{ room.name }}</div>
            </v-card-text>-->
            <v-layout justify-center>
              <v-card-actions>
                <v-row align="center">
                  <v-col class="text-center" cols="12" sm="4">
                    <div class="rooms text-center my-2" v-for="button in rooms" :key="button.id">
                      <v-btn text color="pink" dark>{{button.name}}</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dashboard: [
        { name: "Bed Room", icon: "fas fa-bed" },
        { name: "Living Room", icon: "fas fa-couch" },
        { name: "Kitchen", icon: "mdi-food" }
      ],
      rooms: [
        {
          id: 1,
          favorited: false,
          name: "Fish Light"
        },
        {
          id: 2,
          favorited: false,
          name: "Speaker"
        },
        {
          id: 3,
          favorited: false,
          name: "Room Light"
        },
        {
          id: 4,
          favorited: false,
          name: "Good Night"
        }
      ]
    };
  },
  methods: {
    toggle: function() {
      this.favorited = !this.favorited;
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
