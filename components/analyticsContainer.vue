<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-center text-custom-green-1100">
      <h1 class="font-semibold opacity-85 text-3xl">Аналитика</h1>
    </div>
    <div class="mt-1 md:mt-10">
      <form class="flex flex-col md:flex-row justify-between" action="#" method="POST">
        <div class="flex gap-1 md:gap-4 flex-col md:flex-row item-center">
          <div class="flex flex-col items-start">
            <label for="selector" class="opacity-45 font-semibold">Выберите тип графика</label>
            <select style="height: 40px;" name="selector" id="selector"
              class="pt-2 pb-1 w-full md:w-auto outline-none border-gray-300 border-b-2 font-semibold text-lg opacity-65 pr-0 md:pr-5 lg:pr-10">
              <option value="1">Мои заработки по дням</option>
              <option value="1">Мои заработки по часам</option>
              <option value="1">Мои заработки по месяцам</option>
              <option value="1">Мои заработки по векам</option>
            </select>
          </div>
          <div class="flex flex-col items-start">
            <label for="startdate" class="opacity-45 font-semibold">Начало периода</label>
            <input style="height: 40px;" type="date" id="startdate"
              class="pt-2 pb-1 w-full md:w-auto outline-none border-gray-300 border-b-2 font-semibold text-lg opacity-65">
          </div>
        </div>
        <div class="flex gap-1 md:gap-4 flex-col md:flex-row item-center mt-3 md:mt-0">
          <div class="flex flex-col items-start">
            <label for="enddate" class="opacity-45 font-semibold">Конец периода</label>
            <input style="height: 40px;" type="date" id="enddate"
              class="pt-2 pb-1 outline-none w-full md:w-auto border-gray-300 border-b-2 font-semibold text-lg opacity-65">
          </div>
          <button
            class="w-full md:w-auto mt-3 text-xl bg-custom-red pt-4 pb-4 pr-7 pl-7 rounded-2xl text-white line-clamp-1 leading-none">Показать</button>
        </div>
      </form>
    </div>
    <div class="w-full mt-5 mb-5 bg-white rounded-lg">
      <div class="flex flex-col">
        <div class="flex font-semibold text-black opacity-45 ">
          <div class="w-1/4">Дата:</div>
          <div class="w-1/4">Всего заработано:</div>
          <div class="w-1/4">
            <p class="md:block hidden">Сумма ко классике:</p>
            <p class="block md:hidden">Сумма:</p>
          </div>
          <div class="w-1/4">Примечание:</div>
        </div>
        <div v-for="(item, index) in orders" :key="item.date">
          <div class="flex bg-gray-100 pt-3 pb-3 pr-2 pl-2 rounded-2xl">
            <div class="w-1/4">{{ item.date }}</div>
            <div class="w-1/4">{{ item.totalEarned }}</div>
            <div class="w-1/4">{{ item.classicSum }}</div>
            <div class="w-1/4">{{ item.note }}</div>
          </div>
          <div class="p-1"></div>
        </div>
      </div>
      <div class="mt-4 text-start text-lg font-semibold flex gap-2">
        <p class="opacity-45">Всего заработано:</p> <span class="text-gray-500">{{ totalEarned }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: "analyticsContainer",
  setup() {
    const orders = ref([
      {
        date: "11 июль 24 год",
        totalEarned: "2 000₽",
        classicSum: "2 000₽",
        note: "Оплата за заказ №123"
      },
      {
        date: "12 июль 24 год",
        totalEarned: "2 500₽",
        classicSum: "2 500₽",
        note: "Оплата за заказ №124"
      },
      {
        date: "13 июль 24 год",
        totalEarned: "3 000₽",
        classicSum: "3 000₽",
        note: "Оплата за заказ №125"
      }
    ]);

    const totalEarned = computed(() => {
      return orders.value
        .reduce((sum, item) => sum + parseInt(item.totalEarned.replace(/\D/g, '')), 0)
        .toLocaleString() + ' ₽';
    });

    return {
      orders,
      totalEarned
    };
  }
});
</script>

<style scoped></style>
