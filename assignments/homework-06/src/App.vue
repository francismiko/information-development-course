<template>
  <div class="container">
    <!-- 可选职位 -->
    <div class="box">
      <div class="header">可选职位</div>
      <div class="positions">
        <div v-for="position in positions" :key="position"
          :class="{ 'position': true, 'highlighted': temporarySelection.has(position) }"
          @click="toggleTemporarySelection(position)">
          {{ position }}
        </div>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="actions">
      <button @click="moveSelected(true)">▶</button>
      <button @click="moveSelected(false)">◀</button>
    </div>

    <!-- 已选职位 -->
    <div class="box">
      <div class="header">已选职位</div>
      <div class="selected-positions">
        <div v-for="position in Array.from(selectedPositions)" :key="position"
          :class="{ 'position': true, 'highlighted': temporarySelection.has(position) }"
          @click="toggleTemporarySelection(position)">
          {{ position }}
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';

const positions = ref(['前端开发', '后端开发', '全栈开发', '测试开发', '运维开发', '网络管理']);
const selectedPositions = reactive(new Set());
const temporarySelection = reactive(new Set());

function toggleTemporarySelection(position) {
  if (temporarySelection.has(position)) {
    temporarySelection.delete(position);
  } else {
    temporarySelection.add(position);
  }
}

function moveSelected(toSelect) {
  if (toSelect) {
    selectPositions();
  } else {
    unselectPositions();
  }
  temporarySelection.clear();
}

function selectPositions() {
  temporarySelection.forEach(position => {
    if (!selectedPositions.has(position)) {
      selectedPositions.add(position);
      positions.value = positions.value.filter(p => p !== position);
    }
  });
}

function unselectPositions() {
  temporarySelection.forEach(position => {
    if (selectedPositions.has(position)) {
      selectedPositions.delete(position);
      positions.value.push(position);
    }
  });
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
