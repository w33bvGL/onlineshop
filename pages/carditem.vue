<template>
  <main-header v-if="screen === 1" active="2"/>
  <mobile-header v-if="screen === 0" header-name="Название Товара" back-to="/"/>
  <main class="mt-6" v-if="screen === 1">
    <navigator :navigate-to="navCard"/>
    <card-item-title/>
    <card-item-description/>
    <card-item-goods/>
  </main>
  <main class="mt-6" v-if="screen === 0">
    <mobile-card-item-title/>
    <mobile-card-item-description/>
  </main>
  <main class="mt-6" v-else>

  </main>
</template>

<script>
import {isWideScreen} from '~/assets/ts/isWideScreen';

export default defineComponent({
  name: "cardItemView",
  data() {
    return {
      screen: 'none',
      navCard: [
        {path: '/', name: 'Главная'},
        {path: '/carditem', name: 'Мегамаркет'},
        {path: '/carditem', name: 'Красота и уход'}
      ]
    }
  },
  mounted() {
    this.screen = isWideScreen();
  },
});
</script>