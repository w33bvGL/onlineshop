<template>
  <main-header active="2" header-name="Личный Кабинет" back-to="/" mobile="1" />
  <main class="mt-4">
    <div class="container mx-auto max-w-7xl flex gap-2 pr-2 pl-2 flex-col lg:flex-row">
      <cabinet-item-profile />
      <cabinet-item-main />
      <cabinet-item-carousel />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "cabinetView",

});
</script>