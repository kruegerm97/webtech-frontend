<template>
  <Locator location="Home"/>
  <v-container>
    <vRow>
      <v-spacer></v-spacer>
      <v-text-field v-model="inputPlaylistId" label="enter the Playlist-ID" variant="outlined"></v-text-field>
      <v-btn @click="getSongs(inputPlaylistId), getDb()" style="margin-left: 10px; margin-top: 13px" rounded="lg" append-icon="mdi-database-import-outline" variant="tonal">Import to Database</v-btn>
      <v-spacer></v-spacer>
    </vRow>
      <v-row style="margin-bottom: 15px;">
        <v-spacer></v-spacer>
        <p style="margin-right: 4px;" v-if="!isFetching"><FancyCounter v-if="!isFetching" :number="playlistLength" />Songs in this Playlist</p>
        <p v-if="!isFetchingTwo && !isFetching" style="width: 20px; font-size: 40px;">|</p>
        <p style="margin-left: 4px;" v-if="!isFetchingTwo"><FancyCounter v-if="!isFetchingTwo" :number="dbEntriesLength" />Songs in Database</p>
        <v-spacer></v-spacer>
      </v-row>
      <div class="playlistRender" v-for="song in playlist" :key="song.id">
        <SongPreview :linkId="song.value"/>
      </div>
  </v-container>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import SongPreview from "@/components/SongPreview.vue";
import FancyCounter from "@/components/FancyCounter.vue";
import {ref, computed} from "vue";
import Locator from "@/components/Locator.vue";
import { onMounted } from "vue";
import { watch } from "vue";

const playlist = ref([]);
const isFetching = ref(true);
const dbEntries = ref([]);
const isFetchingTwo = ref(true);
const inputPlaylistId = ref('4au6goX6kuGGbMGUqbbRO6');

async function getSongs(playlistId) {
  console.log('getSongs ' + playlistId)
  isFetching.value = true;
  const baseUrl = 'http://localhost:8080';
  const endpoint = baseUrl + '/playlist/' + playlistId;
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
  };

  const response = await fetch(endpoint, requestOptions);
  const data = await response.json();
  playlist.value = data;
  isFetching.value = false;
}

const playlistLength = computed(() => {
  console.log('playlistLength ' + playlist.value.length)
  return playlist.value.length;
});

async function getDb() {
  console.log('getDb')
  isFetchingTwo.value = true;
  const baseUrl = 'http://localhost:8080';
  const endpoint = baseUrl + '/entries';
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
  };

  const response = await fetch(endpoint, requestOptions);
  const data = await response.json();
  dbEntries.value = data;
  isFetchingTwo.value = false;
}

const dbEntriesLength = computed(() => {
  console.log('dbEntriesLength ' + dbEntries.value.length)
  return dbEntries.value.length;
});

watch(isFetchingTwo, () => {
  console.log('isFetchingTwo changed')
});

watch(isFetching, () => {
  console.log('isFetching changed')
});

</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #1fd660;
}
</style>