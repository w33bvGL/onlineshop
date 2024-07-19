<template>
  <div class="cabinet-carousel">
    <div class="bg-white rounded-2xl pt-6 pb-6">
      <div v-for="(item, index) in items" :key="index" class="rounded-2xl pt-4 pb-4 pr-3 pl-3">
        <div :id="'accordion-open-' + index" data-accordion="open">
          <h2 :id="'accordion-open-heading-' + index">
            <button type="button" class="flex items-center justify-between w-full p-0 font-medium rounded-t-xl gap-3"
              @click="toggleAccordion(index)" :aria-expanded="isAccordionOpen[index]"
              :aria-controls="'accordion-open-body-' + index">
              <span>{{ item.title }}</span>
              <svg :class="{ 'rotate-180': isAccordionOpen[index], 'rotate-0': !isAccordionOpen[index] }"
                class="w-3 h-3 transition-transform duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div :id="'accordion-open-body-' + index"
            :class="{ 'hidden': !isAccordionOpen[index], 'block': isAccordionOpen[index] }" class="pt-2"
            :aria-labelledby="'accordion-open-heading-' + index">
            <div>
              <p class="font-medium opacity-65" v-html="item.content"></p>
            </div>
          </div>
        </div>
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CabinetItemCarousel',
  setup() {
    const items = ref([
      {
        "title": "Консультант",
        "content": "Человек подписавший контракт и выкупивший Набор Дистрибютора, консультан получает скидку на всю продукцию в прайсе 15% (постоянная скидка)"
      },
      {
        "title": "Консультант PLUS",
        "content": ""
      },
      {
        "title": "Партнер",
        "content": ""
      },
      {
        "title": "Лидер",
        "content": ""
      },
      {
        "title": "Лидер PLUS",
        "content": ""
      },
      {
        "title": "Директор",
        "content": ""
      },
      {
        "title": "Директор PLUS",
        "content": ""
      },
      {
        "title": "Эксперт",
        "content": ""
      },
      {
        "title": "Эксперт PLUS",
        "content": ""
      },
      {
        "title": "Топ менеджер",
        "content": ""
      },
      {
        "title": "Топ менеджер PLUS",
        "content": ""
      },
      {
        "title": "Амбасадор",
        "content": ""
      },
      {
        "title": "Амбасадор PLUS",
        "content": ""
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
