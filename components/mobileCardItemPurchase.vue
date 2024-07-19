<template>
  <div class="fixed bottom-0 w-full bg-white pt-2 pb-3 pr-4 pl-4 flex gap-3 items-center justify-between">
    <button class="text-xl bg-custom-green-1000 pt-3 pb-3 w-full rounded-xl text-white line-clamp-1 leading-none">
      {{ price }}
    </button>
    <div
      class="flex border-custom-green-1000 border-2 flex-row items-center justify-between rounded-xl overflow-hidden w-44">
      <button @click="increaseCount"
        class="w-36 text-xl bg-custom-green-1000 text-white pt-2 pb-2 pr-3 pl-3 line-clamp-1 leading-none">+</button>
      <span class=" pl-3.5 pr-3.5  text-xl">{{ itemCount }}</span>
      <button @click="decreaseCount"
        class="w-36 text-xl items-center bg-custom-green-1000 text-white pt-2 pb-2 pr-3 pl-3 line-clamp-1 leading-none">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "mobileCardItemPurchase",

  data() {
    return {
      itemCount: 1,
    };
  },

  props: {
    price: {
      type: Number,
      required: true,
    },
  },

  methods: {
    increaseCount() {
      this.itemCount++;
    },

    decreaseCount() {
      if (this.itemCount > 1) {
        this.itemCount--;
      }
    },
  },
});
</script>

<style scoped>
/* Добавь свои стили здесь */
</style>
