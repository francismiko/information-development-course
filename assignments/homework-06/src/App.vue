<template>
  <div class="container">
    <div class="box">
      <div class="header">可选职位</div>
      <div class="positions">
        <div v-for="position in positions" :key="position"
          :class="{ 'position': true, 'highlighted': temporarySelection.includes(position) }"
          @click="addToTemporarySelection(position, false)">
          {{ position }}
        </div>
      </div>
    </div>

    <div class="actions">
      <button @click="moveSelected(true)">》</button>
      <button @click="moveSelected(false)">《</button>
    </div>

    <div class="box">
      <div class="header">已选职位</div>
      <div class="selected-positions">
        <div v-for="position in selectedPositions" :key="position"
          :class="{ 'position': true, 'highlighted': temporarySelection.includes(position) }"
          @click="addToTemporarySelection(position, true)">
          {{ position }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const positions = ref(['前端开发', '后端开发', '全栈开发', '测试开发', '运维开发', '网络管理']);
const selectedPositions = ref([]);
const temporarySelection = ref([]);

function addToTemporarySelection(position, isSelected) {
  if (!temporarySelection.value.includes(position)) {
    temporarySelection.value.push(position);
  } else {
    temporarySelection.value = temporarySelection.value.filter(p => p !== position);
  }
}

function moveSelected(toSelect) {
  if (toSelect) {
    temporarySelection.value.forEach(position => {
      if (!selectedPositions.value.includes(position)) {
        selectedPositions.value.push(position);
        positions.value = positions.value.filter(p => p !== position);
      }
    });
  } else {
    temporarySelection.value.forEach(position => {
      if (selectedPositions.value.includes(position)) {
        positions.value.push(position);
      }
    });
    selectedPositions.value = selectedPositions.value.filter(
      position => !temporarySelection.value.includes(position)
    );
  }
  temporarySelection.value = [];
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.box {
  border: 1px solid rgb(107, 107, 107);
  padding: 10px;
}

.box {
  width: 100px;
  height: 300px;
}

.positions,
.selected-positions {
  max-height: 200px;
  overflow-y: auto;
}

.header {
  font-weight: bold;
  margin-bottom: 10px;
}

.position {
  margin: 5px;
  cursor: pointer;
}

.highlighted {
  border: 1px solid white;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin: 5px;
}
</style>
