<template>
  <ul class="p-10">
    <li class="mb-5 flex gap-4 text-2xl">
      <span>1)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/carditem')">Карточка Товара</div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>2)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/cabinet')">Личный Кабинет</div>
    </li>
  </ul>
</template>
<script lang="ts">
import {pushTo} from "assets/ts/pushTo";

export default defineComponent({
  name: 'indexView',

  data() {
    return {
      pushTo,
    }
  },
})
</script>