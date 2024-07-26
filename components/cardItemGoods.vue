<template>
  <div class="bg-white rounded-lg md mt-3 container mx-auto max-w-7xl pt-10 pl-14 pb-10 pr-14 hidden lg:block">
    <h2 class="text-3xl font-semibold opacity-85 text-custom-green-1000">Товары</h2>
    <div class="grid grid-cols-4 gap-4 mt-4">
      <div class="flex flex-col justify-center items-center" v-for="n in 8" :key="n">
        <div class="w-full aspect-1/3 bg-gray-100 rounded-2xl">
          <img src="" alt="">
        </div>
        <div class="text-center flex flex-col items-center ">
          <div class="text-4xl font-semibold mt-4 opacity-85">2 300 ₽</div>
          <p class="text-center mt-1 font-medium opacity-65">Lorem Ipsum - это текст-"рыба", часто используемый в печати
            и вэб-дизайне.</p>
          <button
            class="mt-3 text-xl bg-custom-green-1000 pt-3 pb-3 pl-11 pr-11 rounded-xl text-white line-clamp-1 leading-none">Заказать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CardItemGoods'
});
</script>

<style scoped>

</style>
