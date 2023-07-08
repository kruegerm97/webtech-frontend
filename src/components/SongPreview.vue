<template>
  <iframe style="border-radius:12px; margin-left:5px" width="300" height="100%" :src="'https://open.spotify.com/embed/track/' + linkId + '?utm_source=generator&theme=0'" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <!-- <VContainer>
    <v-card style="border-radius:12px;margin: 3px" :src="embedUrl" width="300px" height="500px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
      <v-card-title>
        <v-icon>mdi-spotify</v-icon>
        <v-spacer></v-spacer>
        <v-icon>mdi-play</v-icon>
      </v-card-title>
    </v-card>
  </VContainer> -->
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  linkId: {
    type: String,
    required: true,
  },
});

//const embedUrl = computed(() => `https://open.spotify.com/embed/track/${props.linkId}?utm_source=generator`);
</script>