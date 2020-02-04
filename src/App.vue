<template>
  <div id="app">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue";

export default {
  name: "app",
  components: {
    LoginPage
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #222;
  background-color: #004593;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/Background.jpg");
  background-size: cover;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
body {
  margin: 0;
  padding: 0;
}
</style>
