<script setup>
import { ref } from 'vue'

const total = ref(0);
const shopList = [{
  name: 'OPPO',
  price: 2999,
  count: 3,
  total: 2999
}, {
  name: 'HUAWEI',
  price: 3999,
  count: 2,
  total: 3999
}]

shopList.forEach((product, productName) => {
  total.value += product.price * product.count;
});
</script>

<template>
  <div>
    <table>
      <thead>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>金额</th>
      </thead>
      <tbody>
        <tr v-for="item in shopList">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
    </table>
    <p>合计: ¥{{ total }}</p>
  </div>
</template>

<style scoped></style>
