<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <Locator msg="You are at: Home"/>
    <!--<DynamicPlaylist/>-->
  </div>
</template>

<script>
import Locator from '@/components/Locator.vue'
//import DynamicPlaylist from '@/components/DynamicPlaylist.vue'
export default {
  name: 'HomeView',
  components: {
    Locator,
    //DynamicPlaylist
  }
}
</script>
