<template>
  <v-container>
    <vRow>
      <v-spacer></v-spacer>
      <vTextField v-model="inputPlaylistId" label="enter the Playlist-ID" variant="outlined"></vTextField>
      <vBtn @click="getSongs(inputPlaylistId)" style="margin-left: 10px; margin-top: 13px" rounded="lg" append-icon="mdi-database-import-outline" variant="tonal">Import to Database</vBtn>
      <v-spacer></v-spacer>
    </vRow>
    <div v-if="!isFetching && !isFetchingTwo">
      <v-row>
        <v-spacer></v-spacer>
        <p><FancyCounter :number="playlistLength" />Songs in this Playlist</p>
        <p><FancyCounter :number="dbEntriesLength" />Songs in Database</p>
        <v-spacer></v-spacer>
      </v-row>
      <!-- <div class="playlistRender" v-for="song in playlist" :key="song.id">
        <SongPreview :linkId="song.value"/>
      </div> -->
    </div>
  </v-container>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import SongPreview from "@/components/SongPreview.vue";
import FancyCounter from "@/components/FancyCounter.vue";
import {ref, computed} from "vue";

const playlist = ref([]);
const isFetching = ref(true);
const dbEntries = ref([]);
const isFetchingTwo = ref(true);

getDb().then((data) => {
  if (data) {
    dbEntries.value = data;
  }
  isFetchingTwo.value = false;
});

getSongs('4au6goX6kuGGbMGUqbbRO6').then((data) => {
  if (data) {
    playlist.value = data;
  }
  isFetching.value = false;
});

async function getSongs(playlistId) {
  const baseUrl = 'http://localhost:8080';
  const endpoint = baseUrl + '/playlist/' + playlistId;
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
  };

  const response = await fetch(endpoint, requestOptions);
  const data = await response.json();
  return data;
}

const playlistLength = computed(() => {
  return playlist.value.length;
});

async function getDb() {
  const baseUrl = 'http://localhost:8080';
  const endpoint = baseUrl + '/entries';
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
  };

  const response = await fetch(endpoint, requestOptions);
  const data = await response.json();
  return data;
}

const dbEntriesLength = computed(() => {
  return dbEntries.value.length;
});

</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #1fd660;
}
</style>