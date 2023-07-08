<template>
  <h3 :style="{color: theme.global.current.value.colors.secondary}">{{ location }}</h3>
</template>

<script>
export default {
  name: 'LocatorItem',
  props: {
    location: String
  }
}
</script>

<script setup>
import {useTheme} from "vuetify";

const theme = useTheme()
</script>