<template>
  <main-header :active="1" header-name="Товары" back-to="/" :mobile="1" />
  <main class="mt-4">
    <div class="container mx-auto pb-16 max-w-7xl pr-2 pl-2 flex flex-col gap-2">
      <products-container />
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "productsView",
});
</script>