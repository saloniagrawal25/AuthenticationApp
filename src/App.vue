<template>
  <main>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
