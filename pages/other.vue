<template>
  <main class="mt-6" v-if="screen === 1">

  </main>
  <main class="mt-6" v-if="screen === 0">

  </main>
  <main class="mt-6" v-else>

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