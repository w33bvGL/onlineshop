<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="sort bg-gray-100 rounded-2xl pr-4 pl-4">
    </div>
    <div class="flex justify-between items-center text-custom-green-1100">
      <h1 class="font-semibold opacity-85 text-3xl">Пользователи</h1>
      <span>{{ users.length }} пользователь{{ users.length > 1 ? 'я' : '' }}</span>
    </div>
    <div>
      <div v-for="user in users" :key="user.id" class="cursor-pointer">
        <div class="mt-5">
          <div class="flex items-center justify-between w-full">
            <div class="flex gap-3 items-center">
              <div class="cabinet-item-image-container bg-gray-100 rounded-3xl relative overflow-hidden">
                <img :src="user.image" alt="">
                <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white absolute right-0 top-0 md:hidden">{{ user.level }}</span>
              </div>
              <div>
                <div class="flex gap-2 items-center">
                  <h5 class="font-semibold text-2xl">{{ user.name }}</h5>
                  <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg hidden md:block">{{ user.level }}</span>
                </div>
                <div class="flex gap-3 mt-2 flex-col justify-start items-start md:flex-row">
                  <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">{{ user.role }}</div>
                  <div class="border-2 rounded-lg pr-4 pl-4 text-gray-500 bg-gray-100">{{ user.salary }}</div>
                </div>
              </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'UsersContainer',
  setup() {
    // Определяем переменную для пользователей
    const users = ref([
      { id: 1, name: 'Иван Иванов', image: '', level: '2 lvl', role: 'Партнёр', salary: '35 000 Рублей' },
      { id: 2, name: 'Петр Петров', image: '', level: '1 lvl', role: 'Лидер', salary: '40 000 Рублей' },
      { id: 3, name: 'Алексей Смирнов', image: '', level: '3 lvl', role: 'Лидер', salary: '45 000 Рублей' },
      { id: 4, name: 'Мария Кузнецова', image: '', level: '2 lvl', role: 'Партнёр', salary: '38 000 Рублей' },
      { id: 5, name: 'Ольга Васильева', image: '', level: '1 lvl', role: 'Партнёр', salary: '32 000 Рублей' },
      { id: 6, name: 'Дмитрий Егоров', image: '', level: '3 lvl', role: 'Топ Менеджер', salary: '50 000 Рублей' },
      { id: 7, name: 'Елена Морозова', image: '', level: '2 lvl', role: 'Лидер', salary: '36 000 Рублей' },
      { id: 8, name: 'Сергей Крылов', image: '', level: '1 lvl', role: 'Топ Менеджер', salary: '33 000 Рублей' },
      { id: 9, name: 'Наталья Иванова', image: '', level: '3 lvl', role: 'Партнёр', salary: '55 000 Рублей' },
      { id: 10, name: 'Андрей Гусев', image: '', level: '2 lvl', role: 'Партнёр', salary: '40 000 Рублей' }
    ]);

    return {
      users
    };
  }
});
</script>

<style scoped>
.cabinet-item-image-container {
  width: 105px;
  height: 105px;
  min-width: 105px;
}
</style>
