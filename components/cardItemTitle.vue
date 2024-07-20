<template>
  <div v-show="!isMenuOpen" class="container mx-auto max-w-7xl bg-white rounded-lg relative">
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
  <div v-show="isMenuOpen" class="bg-white rounded-3xl">
    <carousel :items-to-show="1" class="w-full" wrapAround>
      <slide v-for="(slide, index) in slides" :key="index">
        <img class="w-full aspect-video" :src="slide.image" :alt="slide.title" />
      </slide>
      <template #addons>
        <Pagination />
      </template>
    </carousel>
    <div class="pt-2 pb-3 pr-4 pl-4">
      <h1 class="text-3xl font-semibold opacity-85">Название Товара</h1>
      <h3 class="text-base font-medium opacity-65">Lorem Ipsum - это текст-"рыба", часто<br> используемый в печати и
        вэб-дизайне. Lorem<br> Ipsum является
        стандартной
        "рыбой" для<br> текстов на латинице с начала XVI века.</h3>
    </div>
  </div>
  <div v-show="isMenuOpen" class="fixed w-full left-0 bottom-0 bg-white pt-2 pb-3 pr-4 pl-4 flex gap-3 items-center justify-between">
    <button class="text-xl bg-custom-green-1000 pt-3 pb-3 w-full rounded-xl text-white line-clamp-1 leading-none">
      {{ price }} P
    </button>
    <div
      class="flex border-custom-green-1000 border-2 flex-row items-center justify-between rounded-xl overflow-hidden w-44">
      <button @click="increaseCount"
        class="w-36 text-xl bg-custom-green-1000 text-white pt-2 pb-2 pr-3 pl-3 line-clamp-1 leading-none">+</button>
      <span class=" pl-3.5 pr-3.5  text-xl">{{ itemCount }}</span>
      <button @click="decreaseCount"
        class="w-36 text-xl items-center bg-custom-green-1000 text-white pt-2 pb-2 pr-3 pl-3 line-clamp-1 leading-none">-</button>
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

  data() {
    return {
      isMenuOpen: false,
      price: 1990,
      itemCount: 1,
      slides: [
        { image: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp', title: 'Slide 1' },
        { image: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', title: 'Slide 2' },
        { image: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp', title: 'Slide 3' },
      ]
    }
  },

  mounted() {
    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth);
  },

  methods: {
    checkScreenWidth() {
      if (window.innerWidth >= 1024) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = true;
      }

      console.log(this.isMenuOpen)
    },

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