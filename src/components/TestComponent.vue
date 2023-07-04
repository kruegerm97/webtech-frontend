<template>
  <h2>{{theme.global.name}}</h2>
  <h2>{{theme.current.value.colors}}</h2>
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