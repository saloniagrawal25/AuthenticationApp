import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md" || "fa"
  },
  theme: {
    themes: {
      light: {
        background: colors.teal.accent2,
        primary: "#FFA726",
        secondary: "#29B6F6",
        anyColor: "#0000"
      },
      dark: {
        background: colors.teal,
        primary: "#FFA726",
        secondary: "#29B6F6",
        anyColor: "#0000"
      }
    }
  }
});
