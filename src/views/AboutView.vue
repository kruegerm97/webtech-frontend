<template>
  <div class="about">
    <Locator msg="You are at: About"/>
    <h1>Spotify-Playlist-Creator by Maurice and Janik</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Locator from '@/components/Locator.vue'
export default {
  name: 'HomeView',
  components: {
    Locator
  }
}
</script>