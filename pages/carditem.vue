<template>
  <main-header :active="2" header-name="Название Товара" back-to="/" :mobile="1" />
  <main class="mt-4">
    <div class="container mx-auto max-w-7xl pr-2 pl-2 flex-col lg:flex-row">
      <navigator :navigate-to="navCard" />
      <card-item-title />
      <card-item-description />
      <card-item-goods />
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "cardItemView",
  data() {
    return {
      navCard: [
        { path: '/', name: 'Главная' },
        { path: '/carditem', name: 'Мегамаркет' },
        { path: '/carditem', name: 'Красота и уход' }
      ]
    }
  },
});
</script>