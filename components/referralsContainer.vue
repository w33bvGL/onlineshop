<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-center text-custom-green-1100">
      <h1 class="font-semibold opacity-85 text-3xl">Мои рефералы</h1><span data-v-5bb0bdcf="">2 человека</span>
    </div>
    <div class="sort mt-4">
      <div>
        <ul
            class="opacity-65 font-medium text-lg flex gap-4 flex-nowrap flex-row overflow-x-auto text-nowrap mt-2 skip-scrollbar cursor-pointer">
          <li @click="setActiveLevel(1)">
            1 уровень
            <div class="w-full h-1.5 mt-1" :class="{ 'bg-custom-green-1200': activeLevel === 1 }"></div>
          </li>
          <li @click="setActiveLevel(2)">
            2 уровень
            <div class="w-full h-1.5 mt-1" :class="{ 'bg-custom-green-1200': activeLevel === 2 }"></div>
          </li>
          <li @click="setActiveLevel(3)">
            3 уровень
            <div class="w-full h-1.5 mt-1" :class="{ 'bg-custom-green-1200': activeLevel === 3 }"></div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div v-for="refferal in refferals" :key="refferal.id" class="cursor-pointer" @click="openModal()">
        <hr class="border-1">
        <div class="pt-4 pb-4">
          <div class="flex items-center justify-between w-full">
            <div class="flex gap-3 items-center">
              <div class="cabinet-item-image-container bg-gray-100 rounded-3xl relative overflow-hidden">
                <img :src="refferal.image" alt="">
                <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white absolute right-0 top-0 md:hidden">
            {{ refferal.level }}
          </span>
              </div>
              <div>
                <div class="flex gap-2 items-center">
                  <h5 class="font-semibold text-2xl">{{ refferal.name }}</h5>
                  <span class="text-sm bg-red-500 pr-2 pt-0.5 pb-0.5 pl-2 text-white rounded-lg hidden md:block">
              {{ refferal.level }}
            </span>
                </div>
                <div class="flex gap-3 mt-2 flex-col justify-start items-start md:flex-row">
                  <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">{{ refferal.role }}</div>
                  <div class="border-2 rounded-lg pr-4 pl-4 text-gray-500 bg-gray-100">{{ refferal.salary }}</div>
                </div>
              </div>
            </div>
            <div class="flex gap-1 opacity-45 font-medium text-lg">
              <p class="hidden md:block">Заработано</p>
              <p>{{ refferal.earnings }}р</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-start md:items-center flex-col md:flex-row">
      <h1 class="font-semibold opacity-85 text-3xl text-custom-green-1100 text-nowrap mb-5 md:mb-0">
        Реферальная ссылка</h1>
      <button
          class="flex justify-center gap-3 text-xl w-full md:w-auto bg-white pt-2.5 pb-2.5 pr-4 pl-4 rounded-3xl text-custom-red line-clamp-1 leading-none border-2 border-custom-red">
        <p class="text">https://ref.dawd[paццвфвфцвфцв</p>
      </button>
    </div>
  </div>
  <div class="block lg:hidden">
    <button @click="copyReferralLink"
            class="text-xl bg-white pt-3 pb-3 pl-3 pr-3 rounded-xl text-black line-clamp-1 leading-none">
    </button>
  </div>

  <!-- Modal -->
  <div v-if="isModalOpen" class="fixed inset-0 flex items-top  justify-center bg-black bg-opacity-80 z-50">
    <div class="pr-2 pl-2 pt-20">
      <div class="bg-white rounded-lg pt-3 pr-6 pl-6 pb-3">
        <div class="flex justify-between md:justify-end items-center gap-9 md:gap-0">
          <h2 class="text-2xl font-semibold opacity-85 block md:hidden">Информация о пользователе</h2>
          <button @click="closeModal()" class="text-gray-600 hover:text-gray-900 text-3xl">&times;</button>
        </div>
        <div class="flex justify-between mt-3 gap-0 flex-col-reverse md:flex-row md:gap-4">
          <div class="w-full">
            <h2 class="text-2xl font-semibold opacity-85 hidden md:block">Информация о пользователе</h2>
            <div class="flex flex-col gap-1 mt-7 font-medium text-lg">
              <div class="flex justify-between text-start ">
                <p class="opacity-65">ID:</p>
                <p class="opacity-85">2223423</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Текущий статус:</p>
                <p class="opacity-85">Консультант</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Карьерная лестница:</p>
                <p class="opacity-85">1231231231</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Циклы:</p>
                <p class="opacity-85">0</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Квалификация:</p>
                <p class="opacity-85">Нет</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Рефералов</p>
                <p class="opacity-85">9</p>
              </div>
              <div class="flex justify-between">
                <p class="opacity-65">Дата регистрации:</p>
                <p class="opacity-85">10.07.2024</p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-72 flex flex-row items-center md:flex-col">
            <div class="bg-gray-100 profile-image mb-3 rounded-full">
              <img src="" alt="">
            </div>
            <div class="pl-4 md:pl-0 flex gap-1 flex-col items-start">
              <h3 class="text-2xl font-semibold opacity-85 block md:hidden">Имя Фамилия</h3>
              <div class="border-2 rounded-xl pr-4 pl-4 text-red-500 border-red-500">Консультант</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue';

export default defineComponent({
  name: 'referralsContainer',
  data() {
    return {
      activeLevel: 1,
    };
  },
  setup() {
    const isModalOpen = ref(false);
    const refferals = ref([
      {
        id: 1,
        name: 'Иван Иванов',
        image: '',
        level: '2 lvl',
        role: 'Консультант',
        salary: '35 000 Рублей'
      },
      {
        id: 2,
        name: 'Петр Петров',
        image: '',
        level: '3 lvl',
        role: 'Менеджер',
        salary: '40 000 Рублей'
      }
    ]);
    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      isModalOpen,
      refferals,
      openModal,
      closeModal,
    };
  },

  methods: {
    copyReferralLink() {
      const link = 'https://ref.dawd[paццвфвфцвфцв';
      navigator.clipboard.writeText(link).then(() => {
        alert('Реферальная ссылка скопирована в буфер обмена!');
      }).catch(err => {
        console.error('Ошибка при копировании ссылки: ', err);
      });
    },

    setActiveLevel(level: Number) {
      this.activeLevel = level;
    },
  }
});
</script>

<style scoped>
.cabinet-item-image-container {
  min-width: 105px;
  height: 105px;
}

.skip-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.profile-image {
  width: 130px;
  height: 130px;
}
</style>