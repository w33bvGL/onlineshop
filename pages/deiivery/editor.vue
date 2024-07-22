<template>
  <main-header :active="1" header-name="Номер заказа" back-to="/" :mobile="1" />
  <main class="mt-4">
    <div class="container mx-auto max-w-7xl pr-2 pl-2 flex flex-col gap-5">
      <div class="bg-white w-full pt-6 pb-6 pr-5 pl-5 lg:pl-20 lg:pr-20 rounded-2xl">
        <div class="text-3xl font-semibold gap-4 hidden md:flex mb-5">
          <h1 class="opacity-85">Номер заказа</h1>
          <p class="opacity-10">редактирование</p>
        </div>
        <div class="flex justify-between">
          <div class="flex gap-3 mt-0 md:mt-10 w-full">
            <div class="cabinet-item-image-container bg-gray-100 rounded-3xl relative overflow-hidden hidden md:block"
              style="min-width: 200px; min-height: 200px;">
              <img src="" alt="">
            </div>
            <div class="flex justify-between w-full">
              <div class="w-full">
                <h3 class="font-semibold text-2xl opacity-85">Заказ от 20.01.24</h3>
                <div class="mt-1">
                  <div class="opacity-45 font-medium text-lg flex justify-between">
                    <p>Номер:</p>
                    <p>N 2323131</p>
                  </div>
                  <div class="opacity-45 font-medium text-lg flex justify-between">
                    <p>Даставка:</p>
                    <p>Пункт выдачи</p>
                  </div>
                  <div class="opacity-45 font-medium text-lg flex justify-between">
                    <p>Дата доставки:</p>
                    <p>15.05.24</p>
                  </div>
                  <div class="opacity-45 font-medium text-lg flex justify-between">
                    <p>Количество баллов:</p>
                    <p>224 SB</p>
                  </div>
                </div>
                <hr class="mt-3 mb-3">
                <div class="flex flex-row justify-between items-center">
                  <p class="text-custom-green-1000 text-xl">
                    Итого:</p>
                  <div class="flex flex-row items-center gap-3">
                    <p class="line-through text-sm text-custom-green-900">2 300 P</p>
                    <p class="text-xl text-custom-green-1000">1 955 P</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-full pt-6 pb-6 pr-5 pl-5 lg:pl-20 lg:pr-20 rounded-2xl">
        <div class="sort bg-gray-100 rounded-2xl pr-4 pl-4">
        </div>
        <div class="flex justify-between items-center">
          <h1 class="font-semibold opacity-85 text-3xl">Участники</h1><span>3 yчастникa</span>
        </div>
        <div>
          <div v-for="n in 2" class="cursor-pointer">
            <div class="mt-5">
              <div class="flex items-center justify-between w-full">
                <div class="flex gap-3 items-center">
                  <div class="cabinet-item-image-container bg-gray-100 rounded-3xl relative overflow-hidden">
                    <img src="" alt="">
                    <span
                      class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white absolute right-0 top-0 md:hidden">2
                      lvl</span>
                  </div>
                  <div>
                    <div class="flex gap-2 items-center">
                      <h5 class="font-semibold text-2xl">Имя Фамилия</h5>
                      <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg hidden md:block">2
                        lvl</span>
                    </div>
                    <div class="flex gap-3 mt-2 flex-col justify-start items-start md:flex-row">
                      <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Консультант</div>
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
      <button
        class="text-xl bg-custom-green-1000 pt-4 pb-4 w-full pr-7 pl-7 rounded-2xl text-white line-clamp-1 leading-none">Сохранить</button>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "deliveryEditor",
});
</script>

<style scoped>
.cabinet-item-image-container {
  width: 105px;
  height: 105px;
  min-width: 105px;
}
</style>