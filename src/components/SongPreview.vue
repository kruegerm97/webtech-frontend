<template>
  <iframe style="border-radius:12px" :src="'https://open.spotify.com/embed/track/' + linkId + '?utm_source=generator&theme=0'" width="80%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</template>

<script>
export default {
  props:['linkId'] //https://open.spotify.com/embed/track/6pDFS313jjuoDKq4DeUvOH?utm_source=generator
}
</script>