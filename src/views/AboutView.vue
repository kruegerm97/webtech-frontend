<template>
  <Locator location="About"/>
  <h2 :style="{color: theme.global.current.value.colors.secondary}">Spotify-Playlist-Creator by Maurice and Janik</h2>
  <vContainer class="used">
    <vCard class="mx-auto pa-2" max-width="300">
      <vList>
        <vListSubheader>Frontend</vListSubheader>
        <vListItem v-for="(item, i) in items" :key="i" :value="item" color="primary" rounded="xl">
          <template v-slot:prepend>
            <vIcon :href=item.link :icon="item.icon"></vIcon> <!--TODO: href doesnt work-->
          </template>
          <vListItemTitle :href="item.link" v-text="item.title"></vListItemTitle> <!--TODO: href doesnt work-->
          <p style="font-size: 7pt;" v-if="devModeSwitch">{{item.link}}</p>
        </vListItem>
      </vList>
    </vCard>
    <vCard class="mx-auto pa-2" max-width="300">
      <vList>
        <vListSubheader>Backend</vListSubheader>
        <vListItem v-for="(item, i) in itemsTwo" :key="i" :value="item" color="primary" rounded="xl">
          <template v-slot:prepend>
            <vIcon :href="item.link" :icon="item.icon"></vIcon> <!--TODO: href doesnt work-->
          </template>
          <vListItemTitle :href="item.link" v-text="item.title"></vListItemTitle> <!--TODO: href doesnt work-->
          <p style="font-size: 7pt;" v-if="devModeSwitch">{{item.link}}</p>
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
      {title: 'Javascript', icon: 'mdi-language-javascript', link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=de'},
      {title: 'VueJs', icon: 'mdi-vuejs', link:'https://vuejs.org/'},
      {title: 'Vuetify', icon: 'mdi-vuetify', link:'https://vuetifyjs.com/en/'},
      {title: 'CSS', icon: 'mdi-language-css3', link:'https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=de'},
      {title: 'HTML', icon: 'mdi-language-html5', link:'https://developer.mozilla.org/en-US/docs/Glossary/HTML5?retiredLocale=de'},
    ],
    itemsTwo: [
      {title: 'Java', icon: 'mdi-language-java', link:'https://dev.java/'},
      {title: 'Spotify-Api', icon: 'mdi-spotify', link:'https://developer.spotify.com/documentation/web-api'},
    ],
  }),
}
</script>

<script setup>
import {useTheme} from "vuetify";
import {ref} from "vue";

const devModeSwitch = ref(localStorage.getItem("devModeSwitch") === "true");
const theme = useTheme()
</script>