<template>
  <div class="bg-white rounded-3xl">
    <carousel :items-to-show="1" class="w-full" wrapAround>
      <slide v-for="(slide, index) in slides" :key="index">
        <img class="w-full aspect-video" :src="slide.image" :alt="slide.title"/>
      </slide>
      <template #addons>
        <Pagination/>
      </template>
    </carousel>
    <div class="pt-2 pb-3 pr-4 pl-4">
      <h1 class="text-2xl font-semibold opacity-85">Название Товара</h1>
      <h3 class="text-base font-medium opacity-65">Lorem Ipsum - это текст-"рыба", часто<br> используемый в печати и вэб-дизайне. Lorem<br> Ipsum является
        стандартной
        "рыбой" для<br> текстов на латинице с начала XVI века.</h3>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      slides: [
        {image: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp', title: 'Slide 1'},
        {image: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp', title: 'Slide 2'},
        {image: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp', title: 'Slide 3'},
        // Добавьте больше слайдов по необходимости
      ]
    }
  }
}
</script>