<template>
  <main-header :active="1" header-name="Аналитика" back-to="/" :mobile="1" />
  <main class="mt-4">
    <div class="container mx-auto mb-16 max-w-5xl pr-2 pl-2 flex flex-col gap-2">
      <analytics-container />
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "analyticsView",
});
</script>