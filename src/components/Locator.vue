<template>
  <div class="hello">
    <h6>You are at: {{ location }}</h6>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    location: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h6 {
  margin: 5px 0 50px;
}
</style>
