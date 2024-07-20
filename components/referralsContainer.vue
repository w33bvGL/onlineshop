<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-center text-custom-green-1100">
      <h1 class="font-semibold opacity-85 text-3xl">Мои рефералы</h1><span data-v-5bb0bdcf="">2 человека</span>
    </div>
    <div data-v-5bb0bdcf="" class="sort mt-4">
      <div data-v-5bb0bdcf="">
        <ul
          class="opacity-65 font-medium text-lg flex gap-4 flex-nowrap flex-row overflow-x-auto text-nowrap mt-2 skip-scrollbar cursor-pointer">
          <li data-v-5bb0bdcf="">1 уровень
            <div class="w-full h-1.5 mt-1 bg-custom-green-1200 active"></div>
          </li>
          <li data-v-5bb0bdcf="">2 уровень</li>
          <li data-v-5bb0bdcf="">3 уровень</li>
          <li data-v-5bb0bdcf="">4 уровень</li>
        </ul>
      </div>
    </div>
    <div>
      <div v-for="n in 2" class="cursor-pointer" @click="openModal()">
        <hr class="border-1">
        <div class="pt-4 pb-4">
          <div class="flex items-center justify-between w-full">
            <div class="flex gap-3 items-center">
              <div class="cabinet-item-image-container bg-gray-100 rounded-3xl relative overflow-hidden">
                <img src="" alt="">
                <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white absolute right-0 top-0 md:hidden">2
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
            <div class="flex gap-1 opacity-45 font-medium text-lg">
              <p class="hidden md:block">Заработано</p>
              <p>500р</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-start md:items-center flex-col md:flex-row">
      <h1 class="font-semibold opacity-85 text-3xl text-custom-green-1100 text-nowrap mb-5 md:mb-0">
        Мои рефералы</h1>
      <button
        class="flex justify-center gap-3 text-xl w-full md:w-auto bg-white pt-2.5 pb-2.5 pr-4 pl-4 rounded-3xl text-custom-green-1000 line-clamp-1 leading-none border-2 border-custom-green-1000">
        <p class="text">https://ref.dawd[paццвфвфцвфцв</p>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_517_7" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
            <rect width="18" height="18" fill="url(#pattern0_517_7)"></rect>
          </mask>
          <g mask="url(#mask0_517_7)">
            <rect x="-3" y="-7" width="40" height="35" fill="#A7D476"></rect>
          </g>
          <defs>
            <pattern id="pattern0_517_7" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_517_7" transform="scale(0.00195312)"></use>
            </pattern>
          </defs>
        </svg>
      </button>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="isModalOpen" class="fixed inset-0 flex items-top mt-20 justify-center bg-black bg-opacity-80 z-50">
    <div class="pr-2 pl-2 pt-10">
      <div class="bg-white rounded-lg pt-3 pr-6 pl-6 pb-3">
        <div class="flex justify-end items-center">
          <button @click="closeModal()" class="text-gray-600 hover:text-gray-900 text-3xl">&times;</button>
        </div>
        <div class="flex justify-between mt-3 gap-4 flex-col-reverse md:flex-row">
          <div class="w-full">
            <h2 class="text-2xl font-semibold opacity-85">Информация о пользователе</h2>
            <div class="flex flex-col gap-1 mt-7 font-medium text-lg">
              <div class="flex justify-between text-start ">
                <p class="opacity-65">ID:</p>
                <p class="opacity-85">2223423</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Текущий статус:</p>
                <p class="opacity-85">Консультант</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Карьерная лестница:</p>
                <p class="opacity-85">1231231231</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Циклы:</p>
                <p class="opacity-85">0</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Квалификация:</p>
                <p class="opacity-85">Нет</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Рефералов</p>
                <p class="opacity-85">9</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Дата регистрации:</p>
                <p class="opacity-85">10.07.2024</p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-72 flex flex-col items-center">
            <div class="bg-gray-100 profile-image mb-3 rounded-full">
              <img src="" alt="">
            </div>
            <div>
              <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Консультант</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'referralsContainer',
  setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
    };
  },
});
</script>

<style scoped>
.cabinet-item-image-container {
  min-width: 105px;
  height: 105px;
}

.skip-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.profile-image {
  width: 160px;
  height: 160px;
}
</style>