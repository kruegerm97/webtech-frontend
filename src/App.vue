<template>
  <vApp theme="customLightTheme" style="font-family: LiveOverfont">
    <vContainer>
      <v-row>
        <VSpacer></VSpacer>
        <routerLink to="/">
          <VImg class="bigger" @click="homeView" role="link" alt="SPC logo" contain :src="require('./assets/logo_icon.png')" style="width: 150px; height: 150px"/>
        </routerLink>
        <VSpacer></VSpacer>
      </v-row>
      <vRow>
        <VSpacer></VSpacer>
        <themeChange/>
        <VSpacer></VSpacer>
      </vRow>
    </vContainer>
    <TestComponent v-if="false"/>
    <routerView/>
    <div style="height: 100px"/>
    <vContainer>
      <vBottomNavigation style="margin-bottom: 20px; border-color: #6300ef" border density="comfortable" rounded="lg" bg-color="background" color="primary">
        <vBtn to="/settings" value="settings">
          <vIcon icon="mdi-cog">mdi-cog</vIcon>
        </vBtn>
        <vBtn to="/" value="home">
          <vIcon icon="mdi-home">mdi-home</vIcon>
        </vBtn>
        <vBtn to="/about" value="about">
          <v-icon icon="mdi-help">mdi-help</v-icon>
        </vBtn>
      </vBottomNavigation>
    </vContainer>
  </vApp>
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
/* eslint-disable no-unused-vars */
import homeView from "@/views/HomeView.vue";
import ThemeChange from "@/components/themeChange.vue";
import { ref } from "vue";

const devModeSwitch = ref(localStorage.getItem("devModeSwitch") === "true");
</script>