<template>
  <Locator location="Settings"/>
  <SettingsThing/>
</template>

<style scoped>

</style>

<script>
import SettingsThing from '@/components/SettingsThing.vue'
import Locator from "@/components/Locator.vue";

export default {
  name: 'SettingsView',
  components: {
    Locator,
    SettingsThing
  }
}
</script>