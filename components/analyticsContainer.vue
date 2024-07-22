<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-center text-custom-green-1100">
      <h1 class="font-semibold opacity-85 text-3xl">Аналитика</h1>
    </div>
    <div class="mt-1 md:mt-10">
      <form class="flex flex-col md:flex-row justify-between" action="#" method="POST">
        <div class="flex gap-1 md:gap-4 item-center">
          <div class="flex flex-col items-start">
            <label for="selector" class="opacity-45 font-semibold">Выберите тип графика</label>
            <select style="height: 40px;" name="selector" id="selector"
              class="pt-2 pb-1 outline-none border-gray-300 border-b-2 font-semibold text-lg opacity-65 pr-0 md:pr-5 lg:pr-10">
              <option value="1">Мои заработки по дням</option>
              <option value="1">Мои заработки по часам</option>
              <option value="1">Мои заработки по месяцам</option>
              <option value="1">Мои заработки по векам</option>
            </select>
          </div>
          <div class="flex flex-col items-start">
            <label for="startdate" class="opacity-45 font-semibold">Начало периода</label>
            <input style="height: 40px;" type="date" id="startdate"
              class="pt-2 pb-1 outline-none border-gray-300 border-b-2 font-semibold text-lg opacity-65">
          </div>
        </div>
        <div class="flex gap-1 md:gap-4 item-center mt-3 md:mt-0">
          <div class="flex flex-col items-start">
            <label for="startdate" class="opacity-45 font-semibold">Конец периода</label>
            <input style="height: 40px;" type="date" id="startdate"
              class="pt-2 pb-1 outline-none border-gray-300 border-b-2 font-semibold text-lg opacity-65">
          </div>
          <button
            class="w-full md:w-auto mt-3 text-xl bg-custom-green-1000 pt-4 pb-4 pr-7 pl-7 rounded-2xl text-white line-clamp-1 leading-none">Показать</button>
        </div>
      </form>
    </div>
    <div class="w-full mt-5 mb-5 bg-white rounded-lg">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="bg-transparent tet-black opacity-45 font-normal">
            <th class="p-2">Дата:</th>
            <th class="p-2">Всего заработано:</th>
            <th class="p-2">
              <p class="md:block hidden">Сумма ко классике:</p>
              <p class="block md:hidden">Сумма:</p>
            </th>
          </tr>
        </thead>
        <tbody class="text-black opacity-85 font-semibold">
          <tr class="bg-gray-100">
            <td class="p-4 rounded-l-3xl">11 июль 24 год</td>
            <td class="p-4">2 000р</td>
            <td class="p-4 rounded-r-3xl">2 000р</td>
          </tr>
          <tr>
            <td class="p-1"></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="p-4 rounded-l-3xl">11 июль 24 год</td>
            <td class="p-4">2 000р</td>
            <td class="p-4 rounded-r-3xl">2 000р</td>
          </tr>
          <tr>
            <td class="p-1"></td>
          </tr>
          <tr class="bg-gray-100">
            <td class="p-4 rounded-l-3xl">11 июль 24 год</td>
            <td class="p-4">2 000р</td>
            <td class="p-4 rounded-r-3xl">2 000р</td>
          </tr>
        </tbody>
      </table>
      <div class="mt-4 text-start text-lg font-semibold flex gap-2">
        <p class="opacity-45">Всего заработано:</p> <span class="text-gray-500">15 000р</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "analyticsContainer",
});
</script>