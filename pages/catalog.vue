<template>
  <main-header :active="1" back-to="/" :mobile="0" />
  <main class="mt-4">
    <div class="container mx-auto pb-16 max-w-7xl pr-2 pl-2 flex flex-col lg:flex-row gap-2">
      <catalog-container/>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "catalogView",
});
</script>