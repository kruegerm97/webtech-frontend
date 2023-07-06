<template>
  <p>{{ tweened.number.toFixed(0) }}</p>
</template>

<script setup>
import { reactive} from 'vue'
import gsap from 'gsap'

// eslint-disable-next-line no-undef
const props = defineProps({number:Number})
const tweened = reactive({
  number : 0
})
gsap.to(tweened, { duration: props.number/200, number: Number(props.number) || 0 })
</script>