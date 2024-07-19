<template>
  <div class="w-full">
    <div class="bg-white rounded-2xl w-full p-6">
      <div class=" flex justify-between items-center">
        <h1 class="font-semibold opacity-85 text-3xl">Заказ</h1>
        <span>История</span>
      </div>
      <div class="mt-3">
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Номер:</p>
          <p>N 2323131</p>
        </div>
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Статус:</p>
          <p class="opacity-1 pt-0.5 pb-0.5 pl-2 pr-2 text-black bg-custom-green-1000 rounded-xl">В пути</p>
        </div>
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Дата доставки:</p>
          <p>15.05.24</p>
        </div>
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Скидка:</p>
          <p>15%</p>
        </div>
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Количество баллов:</p>
          <p>224 SB</p>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-2xl w-full p-6 mt-3">
      www
    </div>
  </div>
</template>
<style></style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "cabinetItemMain"

});
</script>