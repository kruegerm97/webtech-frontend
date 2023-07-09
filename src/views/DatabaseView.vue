<template>
  <v-container>
<!--    <v-btn @click="getDb()" style="margin-left: 10px; margin-top: 13px" rounded="lg" append-icon="mdi-database-import-outline" variant="tonal" color="primary">Show Database</v-btn>-->
    <v-spacer></v-spacer>
    <v-row align-content="center">
      <div class="playlistRenderCard" v-for="song in songs" :key="song.id">
        <v-spacer></v-spacer>
        <h2 v-if="devModeSwitch">{{song.track_id}}</h2>
        <h2 v-if="devModeSwitch">{{song.name}}</h2>
        <BetterCard v-if="!isFetching" dense :currentSongId="song.track_id" :currentSongArtist="song.artists" :currentSongName="song.name" :currentSongPicture="song.image_href" :currentSongDownVotes="song.dislikes" :currentSongUpVotes="song.likes"/>
        <v-spacer></v-spacer>
      </div>
    </v-row>
  </v-container>
</template>

<script setup>
import BetterCard from "@/components/BetterCard.vue";
import {computed, ref} from "vue";

const devModeSwitch = ref(localStorage.getItem("devModeSwitch") === "true");
const playlist = ref([]);
const dbEntries = ref([]);
const isFetchingTwo = ref(true);

getDb()

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

const songs = computed(() => {
  console.log('songs in Data' + playlist.value)
  return dbEntries.value;
});
</script>