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
#app {
  font-family: Tahoma;
  font-size: 1rem;
  color: #222;
  background-color: #092525;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/Connected-Homes-Main-Image-2.jpg");
  background-size: cover;
}
body {
  margin: 0;
  padding: 0;
}
</style>
