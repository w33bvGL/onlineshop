<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="sort bg-gray-100 rounded-2xl pr-4 pl-4">
    </div>
    <div class="flex justify-between items-center">
      <h1 class="text-custom-green-1100 font-semibold opacity-85 text-3xl pr-10">Заказы</h1>
      <div
        class="input-width pt-3 border-2 border-gray-200 pb-3 rounded-2xl bg-gray-100 outline-none relative hidden md:block">
        <input type="text" required placeholder="Введите номер заказа"
          class="w-full bg-gray-100 outline-none text-center">
      </div>
      <span class="text-custom-green-1100 text-nowrap pl-10">52 заказа</span>
    </div>
    <div class="mt-4 w-full pt-3 border-2 border-gray-200 pb-3 rounded-2xl bg-gray-100 outline-none relative md:hidden">
      <input type="text" required placeholder="Введите номер заказа"
        class="w-full bg-gray-100 outline-none text-center">
    </div>
    <div class="sort mt-4">
      <div>
        <ul
          class="font-medium text-lg flex gap-4 flex-nowrap flex-row overflow-x-auto text-nowrap pb-2 pt-2 skip-scrollbar cursor-pointer">
          <li class="border-2 pr-3 pl-3 rounded-xl">Все</li>
          <li class="opacity-45">Электроника</li>
          <li class="opacity-45">Для детей</li>
          <li class="opacity-45">Книги</li>
          <li class="opacity-45">Творчество</li>
          <li class="opacity-45">Для дома</li>
          <li class="opacity-45">Спорт и Отдых</li>
        </ul>
      </div>
    </div>
    <div>
      <div v-for="n in 5" class="cursor-pointer">
        <div class="mt-5">
          <div class="flex items-center justify-between w-full">
            <div class="flex gap-3 items-center">
              <div class="cabinet-item-image-container bg-gray-100 rounded-3xl relative overflow-hidden">
                <img src="" alt="">
                <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white absolute right-0 top-0 md:hidden">ID: номер</span>
              </div>
              <div>
                <div class="flex gap-2 items-center">
                  <h5 class="font-semibold text-2xl">Имя Фамилия</h5>
                  <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg hidden md:block">ID: номер</span>
                </div>
                <div class="flex gap-3 mt-2 flex-col justify-start items-start md:flex-row">
                  <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Консультант</div>
                  <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Г. Москва</div>
                  <div class="border-2 rounded-lg pr-4 pl-4 text-gray-500 bg-gray-100">35 000 Рублей</div>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <button
                class="text-xl bg-custom-green-1000 pt-3 pb-3 pl-3 pr-3 rounded-xl text-black line-clamp-1 leading-none">
                <svg width="20" height="20" viewBox="0 0 25 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.92608 3.24634L20.1717 21.1166C20.795 21.8022 20.77 22.8565 20.1147 23.5117L3.92608 39.7004"
                    stroke="white" stroke-width="8.67954" />
                </svg>

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "deliveryContainer",

});
</script>
<style scoped>
.skip-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.cabinet-item-image-container {
  width: 105px;
  height: 105px;
  min-width: 105px;
}

.input-width {
  width: 800px;
}
</style>