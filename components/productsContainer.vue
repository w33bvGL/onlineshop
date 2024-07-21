<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="sort bg-gray-100 rounded-2xl pr-4 pl-4">
      <div>
        <ul
          class="font-medium text-lg flex gap-4 flex-nowrap flex-row overflow-x-auto text-nowrap pb-2 pt-2 skip-scrollbar cursor-pointer">
          <li class="opacity-45">Электроника</li>
          <li class="opacity-85">Для детей</li>
          <li class="opacity-45">Книги</li>
          <li class="opacity-45">Творчество</li>
          <li class="opacity-45">Для дома</li>
          <li class="opacity-45">Спорт и Отдых</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between items-center text-custom-green-1100 mt-4">
      <h1 class="font-semibold opacity-85 text-3xl">Товары</h1><span>56 Товаров</span>
    </div>
    <div>
      <div class="flex gap-3 mt-5" v-for="n in 3">
        <div class="cabinet-item-image-container bg-gray-100 rounded-3xl">
          <img src="" alt="">
        </div>
        <div class="flex justify-between w-full">
          <div>
            <div class="flex gap-2 items-center">
              <h5 class="font-semibold text-2xl">2 300 Р</h5>
              <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg">112 SB</span>
            </div>
            <p class="font-medium text-sm opacity-85">Lorem Ipsum - это текст-"рыба", часто<br> используемый в печати и
              вэб-дизайне.<br> Lorem Ipsum является стандартным видом.</p>
          </div>
          <div class="flex items-center">
            <button
              class="text-xl bg-custom-green-1000 pt-3 pb-3 pl-3 pr-3 rounded-xl text-black line-clamp-1 leading-none">
              <svg width="20" height="20" viewBox="0 0 25 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.92608 3.24634L20.1717 21.1166C20.795 21.8022 20.77 22.8565 20.1147 23.5117L3.92608 39.7004"
                  stroke="white" stroke-width="8.67954" />
              </svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "productContainer",

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
</style>