<template>
  <main-header v-if="screen === 1" active="2"/>
  <mobile-header v-if="screen === 0" header-name="Личный Кабинет" back-to="/"/>
  <main class="mt-6" v-if="screen === 1">
    1
  </main>
  <main class="mt-6" v-if="screen === 0">
    2
  </main>
  <main class="mt-6" v-else>
    3
  </main>
</template>

<script>
import {isWideScreen} from '~/assets/ts/isWideScreen';

export default defineComponent({
  name: "cabinetView",
  data() {
    return {
      screen: 'none',
    }
  },
  mounted() {
    this.screen = isWideScreen();
  },
});
</script>