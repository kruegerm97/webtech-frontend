<template>
  <div class="card">
    <div class="card-inner">
      <img src="https://i.scdn.co/image/ab67616d0000b27336eaa88d33968ee025d0b3d1" class="card-image" width="198" height="198" alt="image artwork"/>
      <span class="card-title">Ascend</span>
      <span>by Dezko</span>
      <div class="card-pill-container">
        <div class="card-pill card-pill-positive">
          <v-btn append-icon="mdi-heart-box" class="card-pill-icon" />
          <span class="card-pill-text">2</span>
        </div>
        <div class="card-pill card-pill-negative">
          <v-btn append-icon="mdi-trash-can" class="card-pill-icon" />
          <span class="card-pill-text">0</span>
        </div>
      </div>

      <span class="card-added-info">
        added at 21/07/2023 by Timon
      </span>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { HeartIcon, TrashIcon } from "@heroicons/vue/outline";

export default {
  name: "CardOkCool",
};
</script>

<style scoped>
.card {
  position: fixed;
  top: 15rem;
  left: 20.6rem;
  height: 25rem;
  width: 15rem;
  border-radius: 0.6rem;
  box-shadow: 0px 3px 23px -2px rgba(0, 0, 0, 0.75);

  background-image: linear-gradient(
      45deg,
      hsl(203deg 30% 26%) 0%,
      hsl(201deg 34% 26%) 11%,
      hsl(199deg 38% 26%) 22%,
      hsl(197deg 43% 26%) 32%,
      hsl(195deg 48% 25%) 42%,
      hsl(193deg 55% 24%) 51%,
      hsl(191deg 62% 24%) 59%,
      hsl(189deg 71% 22%) 67%,
      hsl(187deg 84% 21%) 76%,
      hsl(186deg 100% 19%) 100%
  );
}

.card-inner {
  margin: 0.3rem;
  height: calc(100% - 0.6rem);
  border-radius: 0.4rem;
  padding: 1rem 1rem .3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-image {
  border-radius: 100%;
  box-shadow: 0px 3px 19px -3px rgba(0, 0, 0, 0.75);
  margin-bottom: 2rem;
}

.cardTitle {
  font-size: 2rem;
}

.card-pill-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
}

.card-pill {
  width: 4rem;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 6px;
  padding: 5px;
}

.card-pill-positive {
  background-color: rgba(22, 109, 59, 0.7);
}

.card-pill-pegative {
  background-color: rgba(170, 54, 52, 0.7);
}

.card-pill-icon {
  width: 16px;
  stroke-width: 3px;
}

.card-added-info {
  font-size: 12px;
  display: block;
  text-align: center;
  opacity: .6;
}

</style>