<template>
  <div class="bg-white pt-6 pb-6 pl-3 pr-3 cart-recs rounded-2xl">
    <div class="flex justify-between items-center flex-col">
      <h1 class="text-start  w-full mb-4 font-semibold opacity-85 text-3xl lg:text-xl">Рекомендации</h1>
      <div class="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-1">
        <div class="flex flex-col justify-center items-center" v-for="n in 2" :key="n">
        <div class="w-full aspect-1/3 bg-gray-100 rounded-2xl">
          <img src="https://afriqueclair.com/wp-content/uploads/2020/09/1200x1486-5.png">
        </div>
        <div class="text-center flex flex-col items-center ">
          <div class="text-4xl font-semibold mt-4 opacity-85">2 300 ₽</div>
          <p class="text-center mt-1 font-medium opacity-65">Lorem Ipsum - это текст-"рыба", часто используемый в печати
            и вэб-дизайне.</p>
          <button
            class="mt-3 text-xl bg-custom-green-1000 pt-3 pb-3 pl-11 pr-11 rounded-xl text-white line-clamp-1 leading-none">Заказать</button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cart-recs {
  max-width: 390px;
  min-width: 390px;
}

@media screen and (max-width:1024px) {
  .cart-recs {
    max-width: 100%;
    min-width: 100%;
  }
}
</style>
