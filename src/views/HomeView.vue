<script setup>
import { ref } from 'vue'
let inputText = ref('4au6goX6kuGGbMGUqbbRO6')
let inputUrl = ref("https://open.spotify.com/embed/playlist/" + inputText.value + "?utm_source=generator")
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input v-model="inputText" type="input" placeholder="enter the Playlist-ID" class="w-full py-2 border border-indigo-500 rounded"/>
    <button @click="something">Hey</button> <!--no fuckign idea how to update the iframe and therefore inputUrl-->
    <iframe style="border-radius:12px" :src="inputUrl" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <div>{{inputUrl}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
