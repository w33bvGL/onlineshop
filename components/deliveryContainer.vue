<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-custom-green-1100 font-semibold opacity-85 text-3xl pr-10">Заказы</h1>
      <div
          class="input-width pt-3 border-2 border-gray-200 pb-3 rounded-2xl bg-gray-100 outline-none relative hidden lg:block">
        <input
            v-model="searchQuery"
            type="text"
            required
            placeholder="Введите номер заказа, имя или ID"
            class="w-full bg-gray-100 outline-none text-center"
        />
      </div>
      <span class="text-custom-green-1100 text-nowrap pl-10">{{ filtered.length }} заказа</span>
    </div>
    <div
        class="input-width pt-3 border-2 border-gray-200 pb-3 rounded-2xl bg-gray-100 outline-none relative block lg:hidden">
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
        <ul class="font-medium text-lg flex gap-4 flex-nowrap flex-row overflow-x-auto text-nowrap pb-2 pt-2 skip-scrollbar cursor-pointer">
          <li class="border-2 pr-2 pl-2 rounded-xl"
              :class="{ 'border-gray-300': selectedFilter === 'all', 'opacity-45': selectedFilter !== 'all' }"
              @click="applyFilter('all')">Все
          </li>
          <li class="border-2 pr-2 pl-2 rounded-xl"
              :class="{ 'border-gray-300': selectedFilter === 'city', 'opacity-45': selectedFilter !== 'city' }"
              @click="applyFilter('city')">город
          </li>
          <li class="border-2 pr-2 pl-2 rounded-xl"
              :class="{ 'border-gray-300': selectedFilter === 'status', 'opacity-45': selectedFilter !== 'status' }"
              @click="applyFilter('status')">статус заказа
          </li>
          <li class="border-2 pr-2 pl-2 rounded-xl"
              :class="{ 'border-gray-300': selectedFilter === 'partnerStatus', 'opacity-45': selectedFilter !== 'partnerStatus' }"
              @click="applyFilter('partnerStatus')">Статус партнеров
          </li>
        </ul>
      </div>
    </div>

    <div>
      <div v-for="order in filtered" :key="order.id" class="cursor-pointer">
        <div class="mt-3">
          <div class="flex items-center justify-between w-full">
            <div class="flex gap-3 items-center">
              <div class="cabinet-item-image-container bg-gray-100 rounded-3xl relative overflow-hidden">
                <img :src="order.image" :alt="order.name">
                <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white absolute right-0 top-0 md:hidden">ID: {{
                    order.id
                  }}</span>
              </div>
              <div>
                <div class="flex gap-2 items-center">
                  <h5 class="font-semibold text-2xl">{{ order.name }}</h5>
                  <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg hidden md:block">ID: {{
                      order.id
                    }}</span>
                </div>
                <div class="flex gap-3 mt-2 flex-col justify-start items-start md:flex-row">
                  <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">{{ order.role }}</div>
                  <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">{{ order.city }}</div>
                  <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">{{ order.status }}</div>
                  <div class="border-2 rounded-lg pr-4 pl-4 text-gray-500 bg-gray-100">{{ order.salary }} Рублей</div>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <button class="text-xl bg-custom-red pt-3 pb-3 pl-3 pr-3 rounded-xl text-black line-clamp-1 leading-none">
                <svg width="20" height="20" viewBox="0 0 25 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M3.92608 3.24634L20.1717 21.1166C20.795 21.8022 20.77 22.8565 20.1147 23.5117L3.92608 39.7004"
                      stroke="white" stroke-width="8.67954"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {computed, defineComponent, ref, onMounted} from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'UsersContainer',
  setup() {
    const searchQuery = ref('');
    const selectedFilter = ref('all');
    const users = ref([]);

    const fetchUsers = async () => {
      try {
        const response = await axios.get('data.json');
        users.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchUsers();
    });

    const applyFilter = (filter: string) => {
      selectedFilter.value = filter;
    };

    const filtered = computed(() => {
      let filtered = users.value;

      if (selectedFilter.value === 'city') {
        // Apply city filter logic if needed
      } else if (selectedFilter.value === 'status') {
        // Apply status filter logic if needed
      } else if (selectedFilter.value === 'partnerStatus') {
        // Apply partnerStatus filter logic if needed
      }

      if (!searchQuery.value) return filtered;
      const query = searchQuery.value.toLowerCase();
      return filtered.filter(user =>
          user.name.toLowerCase().includes(query) ||
          user.id.toString().includes(query)
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

.cabinet-item-image-container {
  width: 105px;
  height: 105px;
  min-width: 105px;
}

.input-width {
  width: 800px;
}
</style>
