<template>
  <v-card variant="outlined" color="secondary" class="mx-auto" max-width="344">
    <v-img cover height="200px" :src="imgUrl"></v-img>
    <v-card-title color="primary">
      {{trackName}}
    </v-card-title>
    <v-card-subtitle>
      {{ trackArtist }}
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
          sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you
          add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue'

const imgUrl = ref('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg')
const trackName = ref('Track Name')
const trackArtist = ref('Track Artist')
const show = ref(false)


</script>