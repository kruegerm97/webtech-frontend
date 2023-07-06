<template>
  <Locator location="Home"/>
  <v-container>
    <vRow>
      <v-spacer></v-spacer>
      <vTextField v-model="inputPlaylistId" label="enter the Playlist-ID" variant="outlined"></vTextField>
      <vBtn style="margin: 10px" rounded="lg" append-icon="mdi-database-import-outline" variant="tonal">Import to Database</vBtn>
      <v-spacer></v-spacer>
    </vRow>
<!--    <FancyCounter :number="playlist.length"/>
    <div class="playlistRender" v-for="song in playlist" :key="song.id">
      <SongPreview :linkId="song.value"/>
    </div>-->
  </v-container>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import Locator from '@/components/Locator.vue';
import SongPreview from "@/components/SongPreview.vue";
import FancyCounter from "@/components/FancyCounter.vue";
import {ref} from "vue";

const playlist = getSongs('4au6goX6kuGGbMGUqbbRO6');
const inputPlaylistId = ref()

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

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #1fd660;
}
</style>