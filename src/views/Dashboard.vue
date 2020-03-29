<template>
  <div class="dashboard">
    <v-container class="my-5">
      <v-layout row wrap class="justify-center">
        <v-flex xs12 sm6 md4 lg4 v-for="room in dashboard" :key="room.name">
          <v-hover v-slot:default="{ hover }" close-delay="200">
            <v-card
              :elevation="hover ? 16 : 2"
              flat
              class="text-xs-center ma-4 rounded-corner"
              shaped
            >
              <v-card-title class="justify-center">
                <v-icon large left class="blue--text" dense>{{ room.icon }}</v-icon>
              </v-card-title>
              <v-card-text>
                <div
                  class="title black--text text-center blue--text font-weight-bold"
                >{{ room.name }}</div>
              </v-card-text>
              <v-layout justify-center>
                <v-card-actions>
                  <v-row>
                    <v-col>
                      <div class="rooms my-2" v-for="button in rooms" :key="button.id">
                        <v-switch
                          inset
                          dense
                          :color="button.color"
                          :label="button.name"
                          :prepend-icon="button.design"
                          v-model="button.value"
                        ></v-switch>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-layout>
            </v-card>
          </v-hover>
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
          value: false,
          name: "Fish Light",
          design: "mdi-fish",
          color: "blue"
        },
        {
          id: 2,
          value: false,
          name: "Speaker",
          design: "mdi-speaker",
          color: "purple"
        },
        {
          id: 3,
          value: false,
          name: "Room Light",
          design: "mdi-lightbulb",
          color: "orange"
        },
        {
          id: 4,
          value: false,
          name: "Good Night",
          design: "mdi-weather-night",
          color: "black"
        }
      ]
    };
  },
  methods: {
    toggle: function() {
      this.value = !this.value;
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  background-color: #41b883;
}
.blue {
  background-color: #35495e;
}
.rounded-corner {
  border-radius: 20px;
}
</style>
