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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h6 {
  margin: 5px 0 15px;
}
</style>
