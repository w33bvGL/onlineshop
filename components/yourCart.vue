<template>
  <div class="bg-white w-full h-full p-6 rounded-2xl">
    <div class="flex justify-between items-center">
      <h1 class="font-semibold opacity-85 text-3xl">Ваша корзина</h1>
      <span>2 товара</span>
    </div>
    <div class="mt-3">
      <div class="warning flex flex-col gap-4">
        <div v-for="n in 2" class="flex justify-between">
          <div class="w-2 bg-custom-red min-h-full"></div>
          <div class="w-full flex flex-col items-start pl-5 pt-3 pb-3">
            <p class="opacity-65 font-medium text-lg line-clamp-1 leading-none text-custom-green-1100">Внимание!</p>
            <p class="opacity-65 font-medium text-lg">При заказе от 7.000₽ будет доступна бесплатная доставка</p>
          </div>
        </div>
      </div>
      <div>
        <div class="mt-5">
          <div v-for="n in 2" class="flex gap-4 items-center mb-4">
            <div class="flex items-end justify-between w-full flex-col lg:flex-row lg:items-start">
              <div class="flex gap-3 items-center">
                <div class="flex items-centerjustify-center">
                  <input type="checkbox" class="cursor-pointer w-4 h-4 text-custom-green-1100 bg-gray-100
                    border-gray-300 rounded focus:custom-green-1100 ">
                </div>
                <div class="cabinet-item-image-container bg-gray-100 rounded-3xl"><img src="https://afriqueclair.com/wp-content/uploads/2020/09/1200x1486-5.png">
                </div>
                <div>
                  <div class="flex gap-2 items-center">
                    <h5 class="font-semibold text-2xl">2 300 ₽</h5>
                    <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg">112 ₽</span>
                  </div>
                  <p class="font-medium text-sm opacity-85">Lorem Ipsum&nbsp;- это текст-"рыба", часто<br> используемый
                    в печати и вэб-дизайне.<br> Lorem Ipsum является стандартным видом.
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <button
                  class="text-xl bg-custom-red pt-3 pb-3 pl-3 pr-3 rounded-xl text-white line-clamp-1 leading-none"><svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0_548_100" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16"
                      height="16">
                      <rect width="16" height="16" fill="url(#pattern0_548_100)" />
                    </mask>
                    <g mask="url(#mask0_548_100)">
                      <rect x="-1" y="-11" width="22" height="36" fill="white" />
                    </g>
                    <defs>
                      <pattern id="pattern0_548_100" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_548_100" transform="scale(0.00195312)" />
                      </pattern>
                      <image id="image0_548_100" width="512" height="512"
                        xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
                </button>
                <div
                  class="flex border-custom-red border-2 flex-row items-center justify-between rounded-xl overflow-hidden w-32">
                  <button @click="decreaseCount"
                          class="w-36 text-xl items-center bg-custom-red text-white pt-2 pb-2 pr-3 pl-3 line-clamp-1 leading-none">-</button>
                  <span class=" pl-3.5 pr-3.5  text-xl">{{ itemCount }}</span>
                  <button @click="increaseCount"
                          class="w-36 text-xl bg-custom-red text-white pt-2 pb-2 pr-3 pl-3 line-clamp-1 leading-none">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Товары (2):</p>
          <p>2300 ₽</p>
        </div>
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Вознаграждение партнёра:</p>
          <p>224 ₽</p>
        </div>
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Скидка партнера:</p>
          <p>15 %</p>
        </div>
        <hr>
        <div class="flex flex-row justify-between items-center">
          <p class="text-custom-red text-xl">Цена:</p>
          <div class="flex flex-row items-center gap-3">
            <p class="line-through text-sm text-custom-green-900">2 300 ₽</p>
            <p class="text-xl text-custom-red">1 955 ₽</p>
          </div>
        </div>
        <button class="mt-3 text-xl bg-custom-red pt-4 pb-4 w-full rounded-xl text-white line-clamp-1 leading-none">Перейти к оформлению</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cabinet-item-image-container {
  width: 105px;
  height: 105px;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "yourCart",

  data() {
    return {
      itemCount: 1,
    }
  },

  methods: {
    increaseCount() {
      this.itemCount++;
    },

    decreaseCount() {
      if (this.itemCount > 1) {
        this.itemCount--;
      }
    },
  },
});
</script>
