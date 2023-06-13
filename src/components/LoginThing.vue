<script setup>
  import {ref} from 'vue'
  let ClientId = ref('ClientId')
  let ClientSecret = ref('ClientSecret')
</script>

<template>
  <div class="login">
    <input v-model="ClientId" type="input" placeholder="enter your Client-ID" class="w-full py-2 border border-indigo-500 rounded"/>
    <button @click="something">Save</button> <!--move buttons below input field-->
    <input v-model="ClientSecret" type="input" placeholder="enter your Client-Secret" class="w-full py-2 border border-indigo-500 rounded"/>
    <button @click="something">Save</button>
  </div>
</template>

<script>

</script>