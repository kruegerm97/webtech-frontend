<template>
  <div class="home">
    <Locator location="Home"/>
    <!--<input v-model="inputText" type="input" placeholder="enter the Playlist-ID" class="w-full py-2 border border-indigo-500 rounded"/>-->
    <FancyCounter :number="playlist.length"/>
    <div class="playlistRender" v-for="song in playlist" :key="song.id">
      <SongPreview :linkId="song.value"/>
    </div>
  </div>
</template>

<script setup>
import Locator from '@/components/Locator.vue';
import SongPreview from "@/components/SongPreview.vue";
import FancyCounter from "@/components/FancyCounter.vue";
import { onBeforeMount } from 'vue';
import { ref } from 'vue';

const playlist = getSongs('4au6goX6kuGGbMGUqbbRO6');

function getSongs(playlistId){
      const baseUrl = 'http://localhost:8080'
      const endpoint = baseUrl + '/playlist/' + playlistId
      const requestOptions = {
        method: 'GET',
        mode: 'cors',
      }
      fetch(endpoint, requestOptions)
      .then(response => {return response.json();})
      .then(response => console.log('songs in playlist: ' + response.length))
      .catch(err => console.error(err))
}
</script>

<style>
.playlistRender {
  margin: 0 0 0;
}
</style>
