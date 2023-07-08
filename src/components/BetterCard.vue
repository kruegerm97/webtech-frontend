<template>
  <v-card style="margin: 2px" variant="outlined" color="secondary" class="mx-auto" max-width="344">
    <v-img cover height="200px" :src="currentSongPicture"></v-img>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn @click="!hasVoted ? upVote(currentSongId) : console.log('you have voted')" color="success" append-icon="mdi-heart-outline">{{currentSongUpVotes}}</v-btn>
      <v-card-title color="primary">
        {{currentSongName}}
      </v-card-title>
      <v-btn @click="!hasVoted ? downVote(currentSongId) : console.log('you have voted')" color="error" prepend-icon="mdi-heart-broken-outline">{{currentSongDownVotes}}</v-btn>
      <v-spacer></v-spacer>
    </v-row>
    <v-card-subtitle>
      {{ currentSongArtist }}
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          PLACEHODLER
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue'
import { defineProps } from 'vue'

const currentSongPicture = ref(require('@/assets/defaultCover.png'))
const currentSongName = ref('Track Name')
const currentSongArtist = ref('Track Artist')
const currentSongDownVotes = ref(0)
const currentSongUpVotes = ref(0)
const show = ref(false)
const hasVoted = ref(false)

const props = defineProps({
  currentSongId: {
    type: String,
    required: true,
  },
  currentSongPicture: {
    type: String,
    required: false,
  },
  currentSongDownVotes: {
    type: Number,
    required: true,
  },
  currentSongUpVotes: {
    type: Number,
    required: true,
  },
  currentSongArtist: {
    type: String,
    required: true,
  },
  currentSongName: {
    type: String,
    required: true,
  },
});

async function upVote(songId) {
  console.log('upVote')
  const baseUrl = 'http://localhost:8080';
  const endpoint = baseUrl + '/entries/' + songId + "/1";
  const requestOptions = {
    method: 'PUT',
    mode: 'cors',
  };
  hasVoted.value = true
  const response = await fetch(endpoint, requestOptions);
  const data = await response.json();
}

async function downVote(songId) {
  console.log('downVote')
  const baseUrl = 'http://localhost:8080';
  const endpoint = baseUrl + '/entries/' + songId + "/2";
  const requestOptions = {
    method: 'PUT',
    mode: 'cors',
  };
  hasVoted.value = true
  const response = await fetch(endpoint, requestOptions);
  const data = await response.json();
}

</script>