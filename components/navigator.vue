<template>
  <div class="container mx-auto max-w-7xl items-center mb-3 hidden lg:flex">
    <div class="mr-2 text-2xl opacity-30 font-medium" v-for="(item, index) in navigateTo" :key="index">
      {{ item.name }}
      <span v-if="index < navigateTo.length - 1"> - </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "navigator",

  props: {
    navigateTo: {
      type: Array,
      required: true,
    },
  },
});
</script>