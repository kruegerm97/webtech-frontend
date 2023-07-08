<template>
  <v-container>
    <vRow>
      <v-spacer></v-spacer>
      <vTextField v-model="inputPlaylistId" label="enter the Playlist-ID" variant="outlined"></vTextField>
      <vBtn style="margin-left: 10px; margin-top: 0.75%" rounded="lg" append-icon="mdi-database-import-outline" variant="tonal">Import to Database</vBtn>
      <v-spacer></v-spacer>
    </vRow>
    <div v-if="!isFetching">
      <FancyCounter :number="playlistLength" />
      <div class="playlistRender" v-for="song in playlist" :key="song.id">
        <SongPreview :linkId="song.value"/>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import SongPreview from "@/components/SongPreview.vue";
import FancyCounter from "@/components/FancyCounter.vue";
import {ref, computed} from "vue";

const playlist = ref([]);
const isFetching = ref(true);

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
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #1fd660;
}
</style>