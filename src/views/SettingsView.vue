<template>
  <Locator location="Settings"/>
  <v-row style="max-height: 28px;">
    <v-spacer></v-spacer>
      <v-switch v-model="iFrameSwitch" density="compact" label="iFrames" color="primary" style="max-width: 110px; max-height: 5px;"></v-switch>
    <v-spacer></v-spacer>
  </v-row>
  <v-row style="max-height: 28px; margin-bottom: 7px;">
    <v-spacer></v-spacer>
      <v-switch v-model="devModeSwitch" density="compact" label="devMode" color="primary" style="max-width: 110px;"></v-switch>
    <v-spacer></v-spacer>
  </v-row>
  <div style="font-family: Arial, Helvetica, sans-serif; font-size: 9pt;" v-if="devModeSwitch">
    <p>Theme name: {{theme.global.name}}</p>
    <p>Theme colors: {{theme.global.current.value.colors}}</p>
  </div>
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

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>