<template>
  <v-app style="font-family: LiveOverfont">
    <router-link to="/">
        <img class="bigger" @click="homeView" role="link" alt="SPC logo" contain src="./assets/logo_icon.png" style="width: 150px; height: 150px; margin: 10px 0 0">
    </router-link>
    <theme-change/>
    <TestComponent v-if="false"/>
    <router-view/>
    <div style="height: 100px"/>
    <v-bottom-navigation style="margin-bottom: 20px; border-color: #1fd660" border density="comfortable" rounded="xl" bg-color="background" color="primary">
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
@font-face {
  font-family: "LiveOverfont";
  src: local("LiveOverfont"), url("@/assets/fonts/LiveOverfont.woff") format("woff");
}
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

.rightSide{
  align-self: flex-end;
  margin: 0 0 0;
}

</style>

<script setup>
import homeView from "@/views/HomeView.vue";
import ThemeChange from "@/components/themeChange.vue";
import TestComponent from "@/components/TestComponent.vue";
</script>

<script>

</script>