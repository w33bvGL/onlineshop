<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-custom-green-1100 font-semibold opacity-85 text-3xl pr-10">Товары</h1>
      <div
          class="input-width pt-3 w-full border-2 border-gray-200 pb-3 rounded-2xl bg-gray-100 outline-none relative hidden lg:block">
        <input
            v-model="searchQuery"
            type="text"
            required
            placeholder="Введите номер заказа, имя или ID"
            class="w-full bg-gray-100 outline-none text-center"
        />
      </div>
      <span class="text-custom-green-1100 text-nowrap pl-10">{{ filtered.length }} товара</span>
    </div>
    <div
        class="input-width pt-3 w-full border-2 border-gray-200 pb-3 rounded-2xl bg-gray-100 outline-none relative block lg:hidden">
      <input
          v-model="searchQuery"
          type="text"
          required
          placeholder="Введите номер заказа, имя или ID"
          class="w-full bg-gray-100 outline-none text-center"
      />
    </div>
    <div class="sort mt-4">
      <div>
        <ul
            class="opacity-65 font-medium text-lg flex gap-4 flex-nowrap flex-row overflow-x-auto text-nowrap pb-2 pt-2 skip-scrollbar cursor-pointer">
          <li @click="applyFilter('Все товары')">Все товары</li>
          <li @click="applyFilter('Черный мёд')">Черный мёд</li>
          <li @click="applyFilter('Косметика')">Косметика</li>
          <li @click="applyFilter('Капли')">Капли</li>
          <li @click="applyFilter('Свечи')">Свечи</li>
        </ul>
      </div>
      <hr class="opacity-85 mt-1 mb-4">
    </div>
    <div class="grid grid-cols-2 gap-3 mt-4 md:grid-cols-3 lg:grid-cols-4">
      <div class="flex flex-col justify-center items-center" v-for="product in filtered" :key="product.id">
        <div class="w-full aspect-1/3 bg-gray-100 rounded-2xl">
          <img :src="product.image" alt="" class="w-full h-full object-cover rounded-2xl">
        </div>
        <div class="text-center flex flex-col items-center ">
          <div class="text-4xl font-semibold mt-4 opacity-85">{{ product.price }} ₽</div>
          <p class="text-center mt-1 font-medium opacity-65 line-clamp-1">{{ product.description }}</p>
          <button
              class="mt-3 text-xl bg-custom-green-1000 pt-3 pb-3 pl-11 pr-11 rounded-xl text-white line-clamp-1 leading-none">Заказать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: 'UsersContainer',
  setup() {
    const searchQuery = ref('');
    const selectedFilter = ref('Все товары');
    const products = ref([]);

    const fetchProducts = async () => {
      try {
        const response = await axios.get('products.json'); // здесь укажи правильный путь к твоим данным
        products.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    const applyFilter = (filter: string) => {
      selectedFilter.value = filter;
    };

    const filtered = computed(() => {
      let filteredProducts = products.value;

      if (selectedFilter.value !== 'Все товары') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedFilter.value);
      }

      if (!searchQuery.value) return filteredProducts;

      const query = searchQuery.value.toLowerCase();
      return filteredProducts.filter(product =>
          product.name.toLowerCase().includes(query) ||
          product.id.toString().includes(query)
      );
    });

    return {
      searchQuery,
      selectedFilter,
      applyFilter,
      filtered
    };
  }
});
</script>

<style scoped>
.skip-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
