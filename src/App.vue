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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/Background.jpg");
  background-size: cover;
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
}
</style>
