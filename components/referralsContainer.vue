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
              <p>{{ refferal.salary }}</p>
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
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0_517_7" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
            <rect width="18" height="18" fill="url(#pattern0_517_7)"></rect>
          </mask>
          <g mask="url(#mask0_517_7)">
            <rect x="-3" y="-7" width="40" height="35" fill="#A7D476"></rect>
          </g>
          <defs>
            <pattern id="pattern0_517_7" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_517_7" transform="scale(0.00195312)"></use>
            </pattern>
            <image id="image0_517_7" width="512" height="512"
                   xlink:href="data:image/png;base64,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De+trhm8gSPayqH5jaMHAJyg0de866v3Dd7AEW0lAL5p9ACAEzQ6AEoArN4WAuC86gGjRwCcoAdV5wze8OeDfz5HtIUAuKiVvxAD4JBOqy4cvEEArNxWAgBgNqOvfR8a/PM5IgEAsE6jr30fHfzzOSIBALBOo699Vwz++RzRFgLg3qMHAAxwn8E/XwCs3BYCYPQrYQFGOHvwz//U4J/PEW0hAM4aPQBggNEBcN3gn88RbSEARv9HADDC6GvftYN/Pke0hQBwBwCYkQDgSLbwATo3jh4AMMjoa/js19/R//yPZAt3AACAQxIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAADAhAQAAExIAAHB4144ecFQCAAAO76rRA45KAADA4QkAAJiQAACACX1i9ICjEgAAcHgfGD3gqAQAABzepaMHHJUAAIDDe8/oAUclAADg8FYfAKeNHrADN44eADDI6Gv4rNff66uzq2tGDzkKdwAA4HD+Tys//EsAAMBh/d7oAbsgAADgcC4ZPWAXRj9/tAuzPgcFMPoaPuP195rq/OrTo4cclTsAAHDqLmkDh38JAAA4jBeMHrAro28f7cKMt6AAavw1fLbr71XVvaqrRw/ZBXcAAODUvLSNHP4lAADgVD1/9IBdGn37aBdmuwUF8Dmjr+EzXX/fUj1i9IhdcgcAAG7bj44esGuj63EXZipQgJsafQ2f5fr79uohbezX6w4AANy6H21jh3+Nr8dd2NxvCsApGn0Nn+H6+/rqUW3w1zr6X55d2NxvCsApGn0N3/r19/rqq6t3jh5yHDwFAAC37Kfa6OFf4+txF7ZeoABfyOhr+Javv5dXD6g+OXrIcXEHAAD+uhuq723Dh38JAAC4uX/T8q1/mzb69tEubPkWFMCtGX0N3+L195LqW1ruAmza6H95dmGL/wICnIrR1/CtXX/fVz2s+sjgHSfCUwAAUFdU394kh38JAAC4unpC9Z7RQ06SAABgZp+pnlS9efSQkyYAAJjVp6qLq98ZPWSEO44eAAADfKx6fPWm0UNGEQAAzOZ91bdVlw7eMZSnAACYySXVI5r88C8BAMAcbqh+pHps9aHBW/aCpwAA2LrLq6dUrx89ZJ+4AwDAVl1fPbd6YA7/z+MOAABb9Lrq2dUfjR6yr9wBAGBL3tbywT6PzuF/q9wBAGAL/rD699Wvtb0vKToWAgCAtfp4y4H/y9Ubxk5ZHwEAwJpc0/Je/hdUv1l9euyc9RIAAOyzG6q3V68+eLyhJQI4IgEAwCjXVp+orqquPPj7D1bvbvmkvkuryw7+f+yYAADg9jpt9ABuP28DBIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJCQAAmJAAAIAJbSEArhs9AGCAa0cPYN22EACfHD0AYIBPjB7Aum0hAPxHAMzItY8j2UIAuAMAzEgAcCRbCICrRg8AGMAffjiSLQTA/x09AGCAy0cPYN22EACXjh4AMIBrH0eyhQC4bPQAgAFc+ziSLQSACgZm5NrHkZw2esAOnFv9Vdv4tQCcihur8/IiaI5gC3cAPl798egRACfonTn8OaItBEDVa0YPADhBl4wewPoJAID1cc3jyLbyvPl51RXV6aOHAByzG6p7VFeOHsK6beUOwJXV/x49AuAEvDmHPzuwlQCoetHoAQAn4IWjB7ANW3kKoOr86i+qO40eAnBMrqvuXX109BDWb0t3AD5W/fboEQDH6OU5/NmRLQVA1a+MHgBwjF4wegDbsaWnAGp5F8CfVBeOHgKwY39a3a/lXQBwZFu7A3BD9R9HjwA4Bj+Ww58d2todgKozqvdWf3v0EIAdubz6spYXAcJObO0OQNVnqp8cPQJgh34ihz87tsU7AFVnVu9oeb4MYM0uqx5UXTt6CNuyxTsAtZTyc0aPANiB78/hzzHYagBUvbr61dEjAI7gxfnmP47JVp8C+Jx7V++uzhk9BOCQrmp5GvMvRw9hm7Z8B6CWjwb+h6NHANwOz87hzzGa4etz/7j64uoho4cAnKLnVT8+egTbtvWnAD7nzi1foflVo4cA3IY/qh5eXT16CNs2SwDU8lzaW6pzRw8B+AKurL6munT0ELZv668BuKn3VE+orhk9BOAWXFNdnMOfEzJTAFS9rvp71fWjhwDcxA3VU1uuUXAiZngR4M1dWv2/6vGjhwAc+Mf5OnNO2IwBUPXW6v3VdzbfXRBgf9zQ8na/nxs9hPnM9CLAW3Jx9ZLqLqOHANO5tnpa9bLRQ5jT7AFQ9ajqN/PuAODkXNnyBxDP+TOM29/1+9UjqneNHgJM4Z0tb/Vz+DPUrK8BuLkrql9q+c6Ahw/eAmzXC6onVh8aPQQ8BfD5ntLyghxfIATsysdbvtb3JaOHwOe4A/D53tXydpy/UT0okQQczctb3nH0xtFD4KYcbrfu0dXPVg8YvANYn/dWP1C9avQQuCVeBHjrXls9uHpO9YGxU4CVeH/Le/sfmMOfPeYOwKk7o/ru6odavlgI4Kb+rHpu9fMt7/GHvSYADu/0lo8Rfkb1HdWZY+cAA11bvaJ6fvVbLZ/sB6sgAI7m/JYvF3pKy/t6vagStu+G6s3Vi6qXVh8bOwduHwGwO2e1RMBjDh4PzmssYCv+rHr1TR5/NXYOHJ0AOD7nVBdWF7W8ZuDC6j4toXBWdd7BXz2FAONcV32y5aN5P3nw+GB1WfXug79eVl01aiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfn/wNTTt/G4uEXNAAAAABJRU5ErkJggg=="
                   data-v-inspector="components/cabinetItemProfile.vue:44:13" data-v-f992db80=""></image>
          </defs>
        </svg>
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