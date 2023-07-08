<template>
  <v-container>
    <v-btn color="primary-darken-1" v-if="theme.current.value.dark === false" append-icon="mdi-moon-waning-crescent" @click="toggleTheme">Dark</v-btn>
    <v-btn color="primary" v-if="theme.current.value.dark === true" append-icon="mdi-white-balance-sunny" @click="toggleTheme">Light</v-btn>
  </v-container>
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