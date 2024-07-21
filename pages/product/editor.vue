<template>
  <main-header :active="1" header-name="Название товара" back-to="/" :mobile="1" />
  <main class="mt-4">
    <form class="container mx-auto max-w-7xl pr-2 pl-2 flex flex-col gap-2">
      <div class="bg-white w-full pt-6 pb-6 pr-5 pl-5 lg:pl-20 lg:pr-20 rounded-2xl">
        <div class="text-3xl font-semibold gap-4 hidden md:flex mb-5">
          <h1 class="opacity-85">Название товара</h1>
          <p class="opacity-10">редактирование</p>
        </div>
        <div class="grid grid-cols-3 gap-2 md:gap-5 mt-4 lg:grid-cols-4">
          <div v-for="n in 4" class=" last:hidden lg:last:block">
            <div class="bg-gray-100 w-full aspect-square rounded-3xl">
              <input type="file" requrired class="hidden">
              <img src="" alt="">
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <button
            class="mt-3 text-xl bg-custom-green-1000 pt-4 pb-4 pr-7 pl-7 rounded-2xl text-white line-clamp-1 leading-none">Загрузить
            изображение</button>
        </div>
      </div>
      <div class="bg-white w-full pt-6 pb-5 pr-5 pl-5 lg:pl-20 lg:pr-20 rounded-2xl">
        <div class="text-3xl font-semibold gap-4 mb-5">
          <h1 class="opacity-85">Информация о товаре</h1>
        </div>
        <div>
          <div class="w-full pt-5 pb-5 rounded-2xl bg-gray-100 outline-none relative">
            <input type="text" required placeholder="Название товара"
              class="w-full bg-gray-100 outline-none text-center">
            <div class="opacity-65 absolute bottom-1 right-10 font-semibold">15/30</div>
          </div>
          <div class="w-full pt-5 pb-5 rounded-2xl bg-gray-100 outline-none relative  mt-3">
            <input type="text" required placeholder="Введите описание.."
              class="w-full bg-gray-100 outline-none text-center h-40">
            <div class="opacity-65 absolute bottom-1 right-10 font-semibold">0/300</div>
          </div>
          <div class="flex gap-4 flex-row mt-4">
            <div class="w-full pt-5 pb-5 rounded-2xl bg-gray-100 outline-none relative">
              <input type="text" required placeholder="Цена без скидки"
                class="w-full bg-gray-100 outline-none text-center">
            </div>
            <div class="w-full pt-5 pb-5 rounded-2xl bg-gray-100 outline-none relative">
              <input type="text" required placeholder="Цена со скидкой"
                class="w-full bg-gray-100 outline-none text-center">
            </div>
          </div>
          <div>
          <button
            class="mt-3 text-xl bg-custom-green-1000 pt-4 pb-4 w-full pr-7 pl-7 rounded-2xl text-white line-clamp-1 leading-none">ЗагрСохранить изменения</button>
        </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "productEditorView",
});
</script>