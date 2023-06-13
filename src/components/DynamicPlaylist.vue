<script setup>
  import { ref, computed } from 'vue'
  let inputText = ref('4au6goX6kuGGbMGUqbbRO6')
  const inputUrl = computed(() => {
    return `https://open.spotify.com/embed/playlist/${inputText.value}?utm_source=generator`;
  })
</script>

<template>
  <div class="DynPlaylist">
    <input v-model="inputText" type="input" placeholder="enter the Playlist-ID" class="w-full py-2 border border-indigo-500 rounded"/>
    <button @click="something">Hey</button>
    <iframe style="border-radius:12px" :src="inputUrl" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <div>{{inputText}}</div>
    <div>{{inputUrl}}</div>
  </div>
</template>

<script>

</script>