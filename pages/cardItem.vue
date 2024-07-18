<template>
  <main-header/>
  <main class="mt-6" v-if="screen === 1">
    <navigator :navigate-to="navCard"/>
    <card-item-title/>
    <card-item-description/>
    <card-item-goods/>
  </main>
  <main v-if="screen === 0">
    <p>Для узких экранов</p>
  </main>
  <main v-else>

  </main>
</template>

<script>
import {defineComponent} from "vue";
import {isWideScreen} from '~/assets/ts/isWideScreen';

export default defineComponent({
  name: "navigator",
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
    console.log(`this -> ${this.screen}`)
  }
});
</script>