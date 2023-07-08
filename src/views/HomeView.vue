<template>
  <div style="font-family: Arial, Helvetica, sans-serif; font-size: 9pt;" v-if="devModeSwitch">
    <p>devModeSwitch: {{ devModeSwitch }}</p>
    <p>iFrameSwitch: {{ iFrameSwitch }}</p>
    <p>isFetching: {{ isFetching }}</p>
    <p>isFetchingTwo: {{ isFetchingTwo }}</p>
    <p>playlistLength: {{ playlistLength }}</p>
  </div>
  <Locator location="Home"/>
  <v-container>
    <vRow>
      <v-spacer></v-spacer>
      <v-text-field v-model="inputPlaylistId" label="enter the Playlist-ID" variant="outlined" color="secondary"></v-text-field>
      <v-btn @click="getSongs(inputPlaylistId), getDb()" style="margin-left: 10px; margin-top: 13px" rounded="lg" append-icon="mdi-database-import-outline" variant="tonal" color="primary">Import to Database</v-btn>
      <v-spacer></v-spacer>
    </vRow>
      <v-row style="margin-bottom: 15px;">
        <v-spacer></v-spacer>
        <p style="margin-right: 4px;" v-if="!isFetching"><FancyCounter v-if="!isFetching" :number="playlistLength" />Songs in this Playlist</p>
        <p v-if="!isFetchingTwo && !isFetching" style="width: 20px; font-size: 40px;">|</p>
        <p style="margin-left: 4px;" v-if="!isFetchingTwo"><FancyCounter v-if="!isFetchingTwo" :number="dbEntriesLength" />Songs in Database</p>
        <v-spacer></v-spacer>
      </v-row>
    <v-row v-if="iFrameSwitch">
      <div class="playlistRender" v-for="song in songs" :key="song.id">
        <v-spacer></v-spacer>
        <SongPreview v-if="!isFetching" :linkId="song"/>
        <v-spacer></v-spacer>
      </div>
    </v-row>
    <v-row v-if="!iFrameSwitch">
      <BetterCard/>
    </v-row>
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
import Card from "@/components/CardOkCool.vue";
import CardOkCool from "@/components/CardOkCool.vue";
import BetterCard from "@/components/BetterCard.vue";

const devModeSwitch = ref(localStorage.getItem("devModeSwitch") === "true");
const iFrameSwitch = ref(localStorage.getItem("iFrameSwitch") === "true");
const playlist = ref([]);
const isFetching = ref(true);
const dbEntries = ref([]);
const isFetchingTwo = ref(true);
const inputPlaylistId = ref('');

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

const playlistLength = computed(() => {
  console.log('playlistLength ' + playlist.value.length)
  return playlist.value.length;
});

const songs = computed(() => {
  console.log('songs ' + playlist.value)
  return playlist.value;
});

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

watch(songs, () => {
  console.log('songs changed')
});

</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #1fd660;
}
</style>