<template>
  <div class="w-full">
    <div class="bg-white rounded-2xl w-full p-6">
      <div class=" flex justify-between items-center">
        <h1 class="font-semibold opacity-85 text-3xl">Мои средства</h1>
      </div>
      <div class="mt-3">
        <h3 class="font-semibold text-lg">Баланс:</h3>
        <div class="flex gap-2 items-center">
          <p class="opacity-45 font-medium text-lg flex justify-between">кэшбэка с личных закупок:</p>
          <span class="font-medium text-lg">300 ₽</span>
        </div>
        <div class="flex gap-2 items-center mt-1">
          <p class="opacity-45 font-medium text-lg flex justify-between">реферальных бонусов:</p>
          <span class="font-medium text-lg">300 ₽</span>
        </div>
        <button class="mt-3 text-lg bg-custom-green-1000 pt-3 pb-3 w-full rounded-xl text-white line-clamp-1 leading-none"
                data-v-inspector="pages/user/editor.vue:62:9" data-v-742da728="">Вывести средства
        </button>
      </div>
    </div>
    <div class="bg-white rounded-2xl w-full p-6 mt-3">
      <div class=" flex justify-between items-center">
        <h1 class="font-semibold opacity-85 text-3xl">Заказ</h1>
        <span>История</span>
      </div>
      <div class="mt-3">
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Номер:</p>
          <p>N 2323131</p>
        </div>
        <div class=" font-medium text-lg flex justify-between">
          <p class="opacity-45">Статус:</p>
          <p class="opacity-85 pt-0.5 pb-0.5 pl-2 pr-2 text-black bg-custom-red rounded-xl">В пути</p>
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
      <hr class="mt-3 mb-3">
      <div class="flex flex-row justify-between items-center">
        <p class="text-custom-red text-xl">
          Итого:</p>
        <div class="flex flex-row items-center gap-3">
          <p class="line-through text-sm text-custom-green-900">2 300 P</p>
          <p class="text-xl text-custom-red">1 955 P</p>
        </div>

      </div>
      <div class="mt-4">
        <h1 class="font-semibold opacity-85 text-3xl">Товары</h1>
        <div class="flex flex-col gap-4 w-full mt-5">
          <div class="flex gap-3" v-for="n in 3">
            <div class="cabinet-item-image-container bg-gray-100 rounded-3xl">
              <img src="" alt="">
            </div>
            <div>
              <div class="flex gap-2 items-center">
                <h5 class="font-semibold text-2xl">2 300 Р</h5>
                <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg">112 SB</span>
              </div>
              <p class="font-medium text-sm opacity-85">Lorem Ipsum - это текст-"рыба", часто<br> используемый в печати
                и вэб-дизайне.<br> Lorem Ipsum является стандартным видом.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-2xl w-full p-6 mt-3">
      <div>
        <h1 class="font-semibold opacity-85 text-3xl">Заказ от 20.01.24</h1>
      </div>
      <div class="mt-3">
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Номер:</p>
          <p>N 2323131</p>
        </div>
        <div class="opacity-45 font-medium text-lg flex justify-between">
          <p>Доставка:</p>
          <p>Пункт выдачи</p>
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
      <hr class="mt-3 mb-3">
      <div class="flex flex-row justify-between items-center"
           data-v-inspector="components/mobileCardItemDescription.vue:19:5">
        <p class="text-custom-green-1000 text-xl">
          Итого:</p>
        <div class="flex flex-row items-center gap-3">
          <p class="line-through text-sm text-custom-green-900">2 300 P</p>
          <p class="text-xl text-custom-green-1000">1 955 P</p>
        </div>
      </div>
      <div class="mt-4">
        <h1 class="font-semibold opacity-85 text-3xl">Товары</h1>
        <div class="flex flex-col gap-4 w-full mt-5">
          <div class="flex gap-3" v-for="n in 2">
            <div class="cabinet-item-image-container bg-gray-100 rounded-3xl">
              <img src="" alt="">
            </div>
            <div>
              <div class="flex gap-2 items-center">
                <h5 class="font-semibold text-2xl">2 300 Р</h5>
                <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg">112 SB</span>
              </div>
              <p class="font-medium text-sm opacity-85">Lorem Ipsum - это текст-"рыба", часто<br> используемый в печати
                и вэб-дизайне.<br> Lorem Ipsum является стандартным видом.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.cabinet-item-image-container {
  width: 105px;
  height: 105px;
}
</style>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "cabinetItemMain"

});
</script>