<template>
  <div>
    <div class="checkbox-group">
      <div v-for="item in items" :key="item.id" class="checkbox-item">
        <input type="checkbox" v-model="item.checked" @change="updateSelection" />
        <label>{{ item.label }}</label>
      </div>
    </div>
    <button @click="selectAll">全选</button>
    <button @click="invertSelection">反选</button>
    <button @click="deselectAll">全不选</button>
    <div>
      <p>选中的内容：</p>
      <div v-for="item in selectedItems" :key="item.id">{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const items = ref([
  { id: 1, label: 'foo1', checked: false },
  { id: 2, label: 'foo2', checked: false },
  { id: 3, label: 'foo3', checked: false },
  { id: 4, label: 'foo4', checked: false },
  { id: 5, label: 'foo5', checked: false },
]);

const selectedItems = computed(() => {
  return items.value.filter(item => item.checked);
});

const selectAll = () => {
  items.value.forEach(item => (item.checked = true));
};

const invertSelection = () => {
  items.value.forEach(item => (item.checked = !item.checked));
};

const deselectAll = () => {
  items.value.forEach(item => (item.checked = false));
};

const updateSelection = () => {
  // 可以在这里处理复选框状态的变化
};
</script>

<style scoped>
.checkbox-group {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.checkbox-item {
  margin-right: 10px;
}
</style>
