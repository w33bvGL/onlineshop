<template>
  <main-header :active="1" header-name="Имя пользователя" back-to="/" :mobile="1" />
  <main class="mt-4">
    <div class="container mx-auto max-w-7xl pr-2 pl-2 flex flex-col gap-2">
      <div class="bg-white w-full pt-6 pb-6 pr-5 pl-5 lg:pl-20 lg:pr-20 rounded-2xl">
        <div class="text-3xl font-semibold gap-4 hidden md:flex mb-5">
          <h1 class="opacity-85">Имя пользователя</h1>
          <p class="opacity-10">редактирование</p>
        </div>
        <div class="flex justify-between">
          <div class="flex gap-3 mt-10">
            <div class="cabinet-item-image-container bg-gray-100 rounded-3xl relative overflow-hidden"
              ><img src="" alt=""
                ><span
                class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white absolute right-0 top-0 md:hidden"
                >2 lvl</span></div>
            <div class="flex justify-between w-full">
              <div class="flex items-start flex-col">
                <div class="flex gap-2 items-center">
                  <h5 class="font-semibold text-2xl">Имя Фамилия</h5>
                  <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg hidden md:block">2 lvl</span>
                </div>
                <div class="border-2 mt-2 mb-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Консультант</div>
                <p class="font-medium text-sm opacity-85">Lorem Ipsum - это текст-"рыба", часто<br> используемый в
                  печати
                  и
                  вэб-дизайне.</p>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="w-full p-4 rounded-3xl bg-gray-100" style="width: 300px;">
              <p class="text-center opacity-45 font-semibold">ИНН</p>
            </div>
            <div class="mt-2 w-full p-4 rounded-3xl bg-gray-100" style="width: 300px;">
              <p class="text-center opacity-45 font-semibold">Скидка</p>
            </div>
            <div class="mt-2 w-full p-4 rounded-3xl bg-gray-100" style="width: 300px;">
              <p class="text-center opacity-45 font-semibold">Баллы</p>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <button
            class="text-xl bg-custom-green-1000 pt-4 pb-4 pr-8 pl-8 rounded-3xl text-white line-clamp-1 leading-none w-full md:w-auto">Загрузить
            изображение</button>
        </div>
      </div>
      <div class="bg-white w-full pt-6 pb-6 pr-5 pl-5 lg:pl-20 lg:pr-20 lg:pt-0 lg:pb-0 lg:bg-transparent rounded-2xl flex gap-2 md:gap-5 flex-col md:flex-row">
        <div class="flex flex-col justify-center items-center mb-2 md:hidden">
            <div class="w-full p-4 rounded-3xl bg-gray-100" style="width: 300px;">
              <p class="text-center opacity-45 font-semibold">ИНН</p>
            </div>
            <div class="mt-2 w-full p-4 rounded-3xl bg-gray-100" style="width: 300px;">
              <p class="text-center opacity-45 font-semibold">Скидка</p>
            </div>
            <div class="mt-2 w-full p-4 rounded-3xl bg-gray-100" style="width: 300px;">
              <p class="text-center opacity-45 font-semibold">Баллы</p>
            </div>
          </div>
        <button class="text-xl bg-red-500 pt-4 pb-4 w-full rounded-xl text-white line-clamp-1 leading-none">Заблокировать</button>
        <button class="text-xl bg-custom-green-1000 pt-4 pb-4 w-full rounded-xl text-white line-clamp-1 leading-none">Сохранить</button>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "deliveryView",
});
</script>

<style scoped>
.cabinet-item-image-container {
  min-width: 150px;
  height: 150px;
}
</style>