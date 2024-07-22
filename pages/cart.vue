<template>
  <main-header :active="2" header-name="Корзина" back-to="/" :mobile="1" />
  <main class="mt-4">
    <div class="container mx-auto pb-16 max-w-7xl pr-2 pl-2 flex flex-col lg:flex-row gap-2">
      <your-cart/>
      <cart-recs/>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "cartView",
});
</script>