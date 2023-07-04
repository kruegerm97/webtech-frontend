<template>
  <v-btn v-if="theme.current.value.dark === false" icon="mdi-moon-waning-crescent" @click="toggleTheme"></v-btn>
  <v-btn v-if="theme.current.value.dark === true" icon="mdi-white-balance-sunny" @click="toggleTheme"></v-btn>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
}
</script>

<style>
.smallRight{
  margin: 0 0 0;
  align-self: flex-end;
}
</style>