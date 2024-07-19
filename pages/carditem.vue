<template>
  <main-header v-if="screen === 1" active="2" />
  <mobile-header v-if="screen === 0" header-name="Название Товара" back-to="/" />
  <main class="mt-6" v-if="screen === 1">
    <navigator :navigate-to="navCard" />
    <card-item-title />
    <card-item-description />
    <card-item-goods />
  </main>
  <main v-if="screen === 0">
    <mobile-card-item-title />
    <mobile-card-item-description />
    <mobile-card-item-purchase price="1995" />
  </main>
  <main class="mt-6" v-if="screen === 3">

  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { isWideScreen } from '~/assets/ts/isWideScreen';

export default defineComponent({
  name: "cardItemView",
  data() {
    return {
      screen: 3,
      navCard: [
        { path: '/', name: 'Главная' },
        { path: '/carditem', name: 'Мегамаркет' },
        { path: '/carditem', name: 'Красота и уход' }
      ]
    }
  },
  mounted() {
    this.screen = isWideScreen();
  },
});
</script>