<template>
  <h3>You are at: {{ location }}</h3>
</template>

<script>
export default {
  name: 'LocatorItem',
  props: {
    location: String
  }
}
</script>