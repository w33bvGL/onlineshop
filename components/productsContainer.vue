<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="sort bg-gray-100 rounded-2xl pr-4 pl-4">
      <div>
        <ul
          class="font-medium text-lg flex gap-4 flex-nowrap flex-row overflow-x-auto text-nowrap pb-2 pt-2 skip-scrollbar cursor-pointer">
          <li
            :class="{ 'opacity-85': selectedCategory === 'electronics', 'opacity-45': selectedCategory !== 'electronics' }"
            @click="applyCategoryFilter('electronics')">Электроника</li>
          <li :class="{ 'opacity-85': selectedCategory === 'children', 'opacity-45': selectedCategory !== 'children' }"
            @click="applyCategoryFilter('children')">Для детей</li>
          <li :class="{ 'opacity-85': selectedCategory === 'books', 'opacity-45': selectedCategory !== 'books' }"
            @click="applyCategoryFilter('books')">Книги</li>
          <li
            :class="{ 'opacity-85': selectedCategory === 'creativity', 'opacity-45': selectedCategory !== 'creativity' }"
            @click="applyCategoryFilter('creativity')">Творчество</li>
          <li :class="{ 'opacity-85': selectedCategory === 'home', 'opacity-45': selectedCategory !== 'home' }"
            @click="applyCategoryFilter('home')">Для дома</li>
          <li :class="{ 'opacity-85': selectedCategory === 'sports', 'opacity-45': selectedCategory !== 'sports' }"
            @click="applyCategoryFilter('sports')">Спорт и Отдых</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between items-center text-custom-green-1100 mt-4">
      <h1 class="font-semibold opacity-85 text-3xl">Товары</h1><span>{{ filteredProducts.length }} Товара</span>
    </div>
    <div>
      <div class="flex gap-3 mt-5" v-for="product in filteredProducts" :key="product.id"
        @click="navigateToProductEditor(product)">
        <div class="cabinet-item-image-container bg-gray-100 rounded-3xl">
          <img :src="product.image" alt="">
        </div>
        <div class="flex justify-between w-full">
          <div>
            <div class="flex gap-2 items-center">
              <h5 class="font-semibold text-2xl">{{ product.name }} {{ product.price }} ₽</h5>
              <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg">{{ product.points }}
                ₽</span>
            </div>
            <p class="font-medium text-sm opacity-85">{{ product.description }}</p>
          </div>
          <div class="flex items-center">
            <button class="text-xl bg-custom-red pt-3 pb-3 pl-3 pr-3 rounded-xl text-black line-clamp-1 leading-none">
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
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "ProductContainer",
  setup() {
    const router = useRouter();
    const selectedCategory = ref<string | null>(null);

    const products = ref([
      { id: 1, name: 'Товар1', category: 'electronics', price: '2 300', discountedPrice: '2 300', points: '112', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.', image: '' },
      { id: 2, name: 'Товар2', category: 'children', price: '1 500', discountedPrice: '2 300', points: '80', description: 'Lorem Ipsum является стандартным видом текста.', image: '' },
      { id: 3, name: 'Товар3', category: 'books', price: '500', discountedPrice: '2 300', points: '20', description: 'Lorem Ipsum является стандартным видом текста.', image: '' },
      { id: 4, name: 'Товар4', category: 'creativity', price: '700', discountedPrice: '2 300', points: '30', description: 'Lorem Ipsum является стандартным видом текста.', image: '' },
      { id: 5, name: 'Товар5', category: 'home', price: '2 000', discountedPrice: '2 300', points: '100', description: 'Lorem Ipsum является стандартным видом текста.', image: '' },
      { id: 6, name: 'Товар6', category: 'sports', price: '1 800', discountedPrice: '2 300', points: '90', description: 'Lorem Ipsum является стандартным видом текста.', image: '' },
    ]);

    const applyCategoryFilter = (category: string | null) => {
      selectedCategory.value = category;
    };

    const filteredProducts = computed(() => {
      if (!selectedCategory.value || selectedCategory.value === 'all') {
        return products.value;
      }
      return products.value.filter(product => product.category === selectedCategory.value);
    });

    const navigateToProductEditor = (product: any) => {
      router.push({
        path: '/product/editor',
        query: {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          discountedPrice: product.discountedPrice,
          points: product.points,
          description: product.description,
        }
      });
    };

    return {
      selectedCategory,
      filteredProducts,
      applyCategoryFilter,
      navigateToProductEditor
    };
  }
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

.input-width {
  width: 800px;
}
</style>
