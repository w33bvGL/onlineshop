<template>
  <main-header v-if="screen === 1" active="2" />
  <mobile-header v-if="screen === 0" header-name="Личный Кабинет" back-to="/" />
  <main class="mt-6" v-if="screen === 1">
    <div class="container mx-auto max-w-7xl mt-3">wd
      <cabinet-item-profile />
    </div>
  </main>
  <main class="mt-6" v-if="screen === 0">
    2
  </main>
  <main class="mt-6" v-if="screen === 3">
      www
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import { isWideScreen } from '~/assets/ts/isWideScreen';

export default defineComponent({
  name: "cabinetView",
  data() {
    return {
      screen: 3,
    }
  },
  mounted() {
    this.screen = isWideScreen();
  },
});
</script>