<template>
  <div class="about">
    <Locator location="About"/>
    <h2>Spotify-Playlist-Creator by Maurice and Janik</h2>
  </div>
  <div class="used">
    <v-card class="mx-auto pa-2" max-width="300">
      <v-list>
        <v-list-subheader>Frontend</v-list-subheader>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" rounded="xl">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="mx-auto" max-width="300">
      <v-list>
        <v-list-subheader>Backend</v-list-subheader>
        <v-list-item v-for="(item, i) in itemsTwo" :key="i" :value="item" color="primary" rounded="xl">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import Locator from '@/components/Locator.vue'
export default {
  name: 'AboutView',
  components: {
    Locator
  },
  data: () => ({
    items: [
      {title: 'Javascript', icon: 'mdi-language-javascript'},
      {title: 'VueJs', icon: 'mdi-vuejs'},
      {title: 'Vuetify', icon: 'mdi-vuetify'},
      {title: 'CSS', icon: 'mdi-language-css3'},
      {title: 'HTML', icon: 'mdi-language-html5'},
    ],
    itemsTwo: [
      {title: 'Java', icon: 'mdi-language-java'},
    ],
  }),
}
</script>