<template>
  <v-app>
    <router-link to="/">
        <img class="bigger" @click="homeView" role="link" alt="SPC logo" contain src="./assets/logo_new.png" style="width: 100px; height: 100px; margin: 10px 0 0">
    </router-link>
    <router-view/>
    <v-bottom-navigation v-model="value" :bg-color="color" mode="shift" :elevation="20">
      <v-btn to="/settings" value="settings">
        <v-icon icon="mdi-cog">mdi-cog</v-icon>
      </v-btn>
      <v-btn to="/" value="home">
        <v-icon icon="mdi-home">mdi-home</v-icon>
      </v-btn>
      <v-btn to="/about" value="about">
        <v-icon icon="mdi-help">mdi-help</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

//TODO: transform over time, transition;

.bigger {
  transform: scale(1); //https://stackoverflow.com/questions/71530954/how-to-add-a-hover-effect-to-increase-size-of-text-within-a-vue-tag;
}

.bigger:hover {
  transform: scale(1.2);
}

</style>

<script setup>
import homeView from "@/views/HomeView.vue";
</script>

<script>
export default {
  data: () => ({ value: 0 }),
}
</script>