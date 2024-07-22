<template>
  <main-header :active="1" header-name="Заказы" back-to="/" :mobile="1" />
  <main class="mt-4">
    <div class="container mx-auto mb-16 max-w-7xl pr-2 pl-2 flex flex-col gap-2">
      <delivery-container/>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "deliveryView",
});
</script>