<template>
  <router-link to="/">
      <img class="bigger" @click="homeView" role="link" alt="SPC logo" contain src="./assets/logo_new.png" style="width: 100px; height: 100px">
  </router-link>
  <nav>
    <router-link to="/settings">Settings</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
 margin: 15px 0 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

//TODO: transform over time, transition;

.bigger {
  transform: scale(1); //https://stackoverflow.com/questions/71530954/how-to-add-a-hover-effect-to-increase-size-of-text-within-a-vue-tag;
}

.bigger:hover {
  transform: scale(1.3);
}

</style>

<script setup>
import homeView from "@/views/HomeView.vue";
</script>

<script>

</script>