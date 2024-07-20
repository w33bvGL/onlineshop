<template>
  <div class="container mx-auto max-w-7xl mt-3 pt-10 pl-14 pb-10 pr-14 bg-white rounded-xl hidden lg:block">
    <h2 class="font-semibold opacity-85 text-3xl">Название товара</h2>
    <h3 class="mt-4 font-medium opacity-65">Lorem Ipsum - это текст-"рыба", часто используемый в печати<br> и
      вэб-дизайне. Lorem Ipsum является стандартным видом.</h3>
  </div>
  <div class="bg-white w-full pt-2 pb-3 pr-4 pl-4 rounded-3xl mt-3 lg:hidden">
    <p class="text-3xl font-semibold opacity-85">Информация</p>
    <div class="font-medium text-lg opacity-65">
      <div class="flex items-center justify-between mt-3">
        <p>Cкидка:</p>
        <p>15%</p>
      </div>
      <div class="flex items-center justify-between mt-1">
        <p>Цена:</p>
        <p>2300 Р</p>
      </div>
      <div class="flex items-center justify-between mt-1">
        <p>Цена для партнера:</p>
        <p>2300 Р</p>
      </div>
    </div>
    <hr class="mt-3 mb-3">
    <div class="flex flex-row justify-between items-center">
      <p class="text-custom-green-1000 font-medium text-xl">Итого:</p>
      <div class="flex flex-row items-center gap-3">
        <p class="line-through text-sm text-custom-green-900">2 300 P</p>
        <p class="text-xl text-custom-green-1000">1 955 P</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "cardItemDescription",

});
</script>