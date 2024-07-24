<template>
  <div class="cabinet-carousel hidden lg:block">
    <div class="bg-white rounded-2xl pt-6 pb-6">
      <h2 class="text-xl pl-3 font-semibold">Cтатусы</h2>
      <div v-for="(item, index) in items" :key="index" class="rounded-2xl pt-4 pb-4 pr-3 pl-3">
        <div :id="'accordion-open-' + index" data-accordion="open">
          <h2 :id="'accordion-open-heading-' + index">
            <button type="button" class="flex items-center justify-between w-full p-0 font-medium rounded-t-xl gap-3"
                    @click="toggleAccordion(index)" :aria-expanded="isAccordionOpen[index]"
                    :aria-controls="'accordion-open-body-' + index">
              <span>{{ item.title }}</span>
              <svg :class="{ 'rotate-180': isAccordionOpen[index], 'rotate-0': !isAccordionOpen[index] }"
                   class="w-3 h-3 transition-transform duration-200" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div :id="'accordion-open-body-' + index"
               :class="{ 'hidden': !isAccordionOpen[index], 'block': isAccordionOpen[index] }" class="pt-2"
               :aria-labelledby="'accordion-open-heading-' + index">
            <div>
              <p class="font-medium text-sm opacity-65" v-html="item.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-2xl pt-6 pb-6 mt-3">
      <h2 class="text-xl pl-3 font-semibold">Автопрограмма</h2>
      <div class="rounded-2xl pt-4 pb-4 pr-3 pl-3">
        <button class="mt-3 text-lg bg-custom-green-1000 pt-3 pb-3 w-full rounded-xl text-white line-clamp-1 leading-none">подробнее</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cabinet-carousel {
  min-width: 250px;
  max-width: 250px;
}
</style>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'CabinetItemCarousel',
  setup() {
    const items = ref([
      {
        "title": "Партнёр",
        "content": "Регистрация + л/о- 5000 рублей\n"
      },
      {
        "title": "Лидер",
        "content": "Групповой обьём За расчётный период- 100 000 рублей"
      },
      {
        "title": "Эксперт",
        "content": "Групповой обьём За расчётный период- 500 000 рублей"
      },
      {
        "title": "Топ Менеджер",
        "content": "Групповой обьём За расчётный период- 1 000 000 рублей"
      },
      {
        "title": "Амбасадор",
        "content": "Групповой обьём За расчётный период- 2 000 000 рублей"
      },
      {
        "title": "Директор",
        "content": "Групповой обьём За расчётный период - 3 000 000 рублей"
      },
    ]);

    const isAccordionOpen = ref<boolean[]>([true, ...Array(items.value.length - 1).fill(false)]);

    const toggleAccordion = (index: number) => {
      isAccordionOpen.value[index] = !isAccordionOpen.value[index];
    };

    return {
      items,
      isAccordionOpen,
      toggleAccordion
    };
  }
});
</script>
