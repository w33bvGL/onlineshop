<template>
  <div class="bg-white w-full rounded-2xl p-6">
    <div class="flex justify-between items-center text-custom-green-1100">
      <h1 class="font-semibold opacity-85 text-3xl">Товары</h1><span>56 Товаров</span>
    </div>
    <div class="sort mt-4">
      <div>
        <ul
          class="opacity-65 font-medium text-lg flex gap-4 flex-nowrap flex-row overflow-x-auto text-nowrap pb-2 pt-2 skip-scrollbar cursor-pointer">
          <li @click="pushTo('/')">Все товары</li>
          <li @click="pushTo('/')">Черный мёд</li>
          <li @click="pushTo('/')">Косметика</li>
          <li @click="pushTo('/')">Капли</li>
          <li @click="pushTo('/')">Свечи</li>
        </ul>
      </div>
      <hr class="opacity-85 mt-1 mb-4">
    </div>
    <div class="grid grid-cols-2 gap-3 mt-4 md:grid-cols-3 lg:grid-cols-4">
      <div class="flex flex-col justify-center items-center" v-for="n in 16" :key="n">
        <div class="w-full aspect-1/3 bg-gray-100 rounded-2xl">
          <img src="" alt="">
        </div>
        <div class="text-center flex flex-col items-center ">
          <div class="text-4xl font-semibold mt-4 opacity-85">2 300 Р</div>
          <p class="text-center mt-1 font-medium opacity-65">Lorem Ipsum - это текст-"рыба", часто используемый в печати
            и вэб-дизайне.</p>
          <button
            class="mt-3 text-xl bg-custom-green-1000 pt-3 pb-3 pl-11 pr-11 rounded-xl text-white line-clamp-1 leading-none">Заказать</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { pushTo } from "~/assets/ts/pushTo";

export default defineComponent({
  name: "catalogContainer",

  data() {
    return {
      pushTo,
    }
  }
});
</script>
<style scoped>
.skip-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>