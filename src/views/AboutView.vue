<template>
  <Locator location="About"/>
  <h2 :style="{color: theme.global.current.value.colors.secondary}">Spotify-Playlist-Creator by Maurice and Janik</h2>
  <vContainer class="used">
    <vCard class="mx-auto pa-2" max-width="300">
      <vList>
        <vListSubheader>Frontend</vListSubheader>
        <vListItem v-for="(item, i) in items" :key="i" :value="item" color="primary" rounded="xl">
          <template v-slot:prepend>
            <vIcon :icon="item.icon"></vIcon>
          </template>
          <vListItemTitle v-text="item.title"></vListItemTitle>
        </vListItem>
      </vList>
    </vCard>
    <vCard class="mx-auto pa-2" max-width="300">
      <vList>
        <vListSubheader>Backend</vListSubheader>
        <vListItem v-for="(item, i) in itemsTwo" :key="i" :value="item" color="primary" rounded="xl">
          <template v-slot:prepend>
            <vIcon :icon="item.icon"></vIcon>
          </template>
          <vListItemTitle v-text="item.title"></vListItemTitle>
        </vListItem>
      </vList>
    </vCard>
  </vContainer>
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
      {title: 'Spotify-Api', icon: 'mdi-spotify'},
    ],
  }),
}
</script>

<script setup>
import {useTheme} from "vuetify";

const theme = useTheme()
</script>