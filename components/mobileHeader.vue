<template>
  <header class="bg-gradient-to-r from-custom-green via-custom-green-600 to-custom-green-700  text-white p-4">
    <div class="container mx-auto max-w-7xl flex justify-start items-center">
      <div @click="pushTo(backTo)" class="text-2xl font-bold pr-4 pl-4">
        <svg width="10" height="50" viewBox="0 0 37 69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.1667 64.15L7.61323 37.1412C5.59048 34.9162 5.6719 31.4947 7.7982 29.3684L32.1667 4.99998"
                stroke="white" stroke-width="12"/>
        </svg>
      </div>
      <div class="ml-6">
        <p class="font-semibold text-2xl leading-none">{{ headerName }}</p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {pushTo} from "~/assets/ts/pushTo";

export default defineComponent({
  name: "mobileHeader.vue",

  data() {
    return {
      pushTo,
    }
  },

  props: {
    headerName: {
      type: String,
      required: true,
    },
    backTo: {
      type: String,
      required: false,
    },
  },
});
</script>
<style scoped>

</style>