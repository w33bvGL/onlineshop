<template>
  <main-header :active="1" header-name="Ползователи" back-to="/" :mobile="1" />
  <main class="mt-4">
    <div class="container mx-auto max-w-7xl pr-2 pl-2 flex flex-col gap-2">
      <users-container/>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "usersView",
});
</script>