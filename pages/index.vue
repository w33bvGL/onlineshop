<template>
  <ul class="p-10">
    <li class="mb-5 flex gap-4 text-2xl">
      <span>1)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/carditem')">Карточка Товара
      </div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>2)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/cabinet')">Личный Кабинет
      </div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>3)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/cart')">Корзина</div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>4)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/catalog')">Каталог</div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <div class="flex gap-4">
        <span>5)</span>
        <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/referrals')">Рефералы</div>
      </div>
      <div class="flex gap-4">
        <span>5.1)</span>
        <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/referral/tree')">Дерево</div>
      </div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>6)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/product/editor')">Редактор Товар</div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>7)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/products')">Товары</div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>8)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/users')">Ползователи</div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>9)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/delivery')">Заказы</div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>9)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/user/editor')">Редактор Ползователя</div>
    </li>
    <li class="mb-5 flex gap-4 text-2xl">
      <span>10)</span>
      <div class="text-custom-green-1000 hover:underline cursor-pointer" @click="pushTo('/deiivery/editor')">Редактор Товаров</div>
    </li>
  </ul>
</template>
<script lang="ts">
import { pushTo } from "assets/ts/pushTo";

export default defineComponent({
  name: 'indexView',

  data() {
    return {
      pushTo,
    }
  },
})
</script>