<template>
  <div class="container mx-auto max-w-7xl bg-white rounded-lg relative">
    <div class="flex">
      <div class="flex-col">
        <div class="item-title pt-7 pl-8">
          <h1 class="text-4xl font-semibold opacity-85">Название товара</h1>
        </div>
        <div class="flex flex-row mt-7 ml-8 mb-7">
          <div class="flex flex-col gap-4">
            <div class="card-item-images-blocks bg-gray-100 rounded-3xl"></div>
            <div class="card-item-images-blocks bg-gray-100 rounded-3xl"></div>
            <div class="card-item-images-blocks bg-gray-100 rounded-3xl"></div>
            <div class="card-item-images-blocks bg-gray-100 rounded-3xl"></div>
          </div>
          <div class="card-item-images-main-image h-full bg-gray-100 ml-4"><img src="" alt=""></div>
          <div class="ml-4">
            <ul class="opacity-65 font-medium text-lg">
              <li>Тип:</li>
              <li>Тип:</li>
              <li>Тип:</li>
              <li>Тип:</li>
              <li>Тип:</li>
              <li>Тип:</li>
            </ul>
            <hr class="mt-3 pb-3 opacity-65">
            <p class="opacity-65 font-medium text-lg">
              <strong>Состав:</strong><br>
              Lorem ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
              стандартным видом.
            </p>
          </div>
        </div>
      </div>
      <div class="card-item-info bg-white pt-11 pr-10 pl-10 pb-11 rounded-lg text-center flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between">
            <div class="font-bold text-4xl tracking-tight text-custom-green-800">1 955 Р</div>
            <div class="line-through text-xl tracking-tight text-custom-green-900">2 300 Р</div>
          </div>
          <div class="flex items-center justify-between mt-3">
            <p>Cкидка:</p>
            <p>15%</p>
          </div>
          <div class="flex items-center justify-between mt-1">
            <p>Цена:</p>
            <p>2300 Р</p>
          </div>
          <div class="flex items-center justify-between mt-1">
            <p>Цена для партнера:</p>
            <p></p>
          </div>
          <div
            class="mt-3 text-xl bg-custom-green-1000 pt-3 pb-3 w-full rounded-3xl text-white line-clamp-1 leading-none">
            1995 Р
          </div>
          <div
            class="mt-3 text-xl bg-white pt-2.5 pb-2.5 w-full rounded-3xl text-custom-green-1000 line-clamp-1 leading-none border-2 border-custom-green-1000">
            Доставка 2 дня
          </div>
        </div>
        <button
          class="mt-3 text-xl bg-custom-green-1000 pt-3 pb-3 w-full rounded-xl text-white line-clamp-1 leading-none">
          Купить
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-item-images-blocks {
  width: 87px;
  height: 87px;
}

.card-item-images-main-image {
  min-width: 399px;
  min-height: 399px;
  border-radius: 44px;
}

.card-item-info {
  min-width: 317px;
  -webkit-box-shadow: -20px 0 61px -4px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: -20px 0 61px -4px rgba(0, 0, 0, 0.05);
  box-shadow: -20px 0 61px -4px rgba(0, 0, 0, 0.05);
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "cardItemTitle",
});
</script>