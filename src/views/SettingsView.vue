<template>
  <Locator location="Settings"/>
  <v-row style="max-height: 30px;">
    <v-spacer></v-spacer>
      <v-switch v-model="iFrameSwitch" density="compact" label="iFrames" color="#6300ef" style="max-width: 110px; max-height: 5px;"></v-switch>
    <v-spacer></v-spacer>
  </v-row>
  <v-row style="max-height: 30px;">
    <v-spacer></v-spacer>
      <v-switch v-model="devModeSwitch" density="compact" label="devMode" color="#6300ef" style="max-width: 110px;"></v-switch>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
import Locator from "@/components/Locator.vue";

export default {
  name: "SettingsView",
  components: {
    Locator
  },
  data() {
    return {
      iFrameSwitch: localStorage.getItem("iFrameSwitch") === "true",
      devModeSwitch: localStorage.getItem("devModeSwitch") === "true",
    }
  },
  watch: {
    iFrameSwitch(newValue) {
      localStorage.setItem("iFrameSwitch", newValue);
    },
    devModeSwitch(newValue) {
      localStorage.setItem("devModeSwitch", newValue);
    },
    
  }
}
</script>