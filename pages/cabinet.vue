<template>
  <main-header v-if="screen === 1" active="2" />
  <mobile-header v-if="screen === 0" header-name="Личный Кабинет" back-to="/" />
  <main class="mt-6" v-if="screen === 1">
    <div class="container mx-auto max-w-7xl flex gap-2 pr-2 pl-2">
      <cabinet-item-profile />
      <cabinet-item-main />
      <cabinet-item-carousel/>
    </div>
  </main>
  <main class="mt-6" v-if="screen === 0">
    2
  </main>
  <main class="mt-6" v-if="screen === 3">
      www
  </main>
</template>

<script lang="ts">
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