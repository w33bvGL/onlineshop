<template>
  <div class="bg-white w-full pt-2 pb-3 pr-4 pl-4 rounded-3xl mt-3">
    <p class="text-2xl font-semibold opacity-85">Информация</p>
    <div class="text-base font-medium opacity-65">
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
    <hr class="mt-3 mb-1">
    <div class="flex flex-row justify-between items-center">
      <p class="text-custom-green-1000 font-medium">Итого:</p>
      <div class="flex flex-row items-center gap-3">
        <p class="line-through text-sm text-custom-green-900">2 300 P</p>
        <p class="text-xl text-custom-green-1000">1 955 P</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "mobileCardItemDescription",
});
</script>