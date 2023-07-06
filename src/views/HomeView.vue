<template>
  <div class="home">
    <Locator location="Home"/>
    <input>
    <FancyCounter :number="playlist.length"/>
    <div class="playlistRender" v-for="song in playlist" :key="song.id">
      <SongPreview :linkId="song.track_id"/>
    </div>
  </div>
</template>

<script setup>
import Locator from '@/components/Locator.vue'
import SongPreview from "@/components/SongPreview.vue";
import FancyCounter from "@/components/FancyCounter.vue";
import {ref} from "vue";

const playlist = ref([
  {track_id: '6pDFS313jjuoDKq4DeUvOH'}, //TODO: obv dont hardcode tracks lol
  {track_id: '3IVrlcM5gDoj3lghHY9m7I'}
])
</script>

<style>
.playlistRender {
  margin: 0 0 0;
}
</style>
