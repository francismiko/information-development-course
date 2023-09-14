<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const fruits = ref([
      { id: 1, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
      { id: 2, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
      { id: 3, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
      { id: 4, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
      { id: 5, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
      { id: 6, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
      { id: 7, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
      { id: 8, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
      { id: 9, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
      { id: 10, image: 'https://th.bing.com/th/id/OIP.-Y9W58cVwHMaH021cnmzGgHaIY?w=159&h=181&c=7&r=0&o=5&dpr=2&pid=1.7', name: 'Apple', price: '$1', description: 'Fresh apple', sold: 100, reviews: 50 },
    ]);

    const groupedFruits = computed(() => {
      let groups = [];
      for (let i = 0; i < fruits.value.length; i += 5) {
        groups.push(fruits.value.slice(i, i + 5));
      }
      return groups;
    });

    return {
      groupedFruits
    };
  }
}
</script>
<template>
  <div class="fruit-shop">
    <div class="fruit-row" v-for="(row, index) in groupedFruits" :key="index">
      <div class="fruit-item" v-for="fruit in row" :key="fruit.id">
        <img :src="fruit.image" alt="fruit.name" class="fruit-image"/>
        <div class="fruit-info">
          <div class="price">{{ fruit.price }}</div>
          <div class="description">{{ fruit.description }}</div>
          <div class="extra-info">
            <span class="sold">成交量:{{ fruit.sold }}</span>
            <span class="reviews">评价数量:{{ fruit.reviews }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fruit-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fruit-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.fruit-item {
  flex: 1;
  padding: 20px 20px 5px 20px;
  box-sizing: border-box;
  border: 1px solid grey;
}

.fruit-image {
  width: 100%;
  height: auto;
  display: block;
}

.fruit-info {
  padding: 2px;
}

.extra-info {
  display: flex;
  justify-content: space-between;
}
</style>
