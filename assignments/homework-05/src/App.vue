<script setup>
import { ref, onMounted } from 'vue';

const boardX = ref(700);
const ballX = ref(0);
const ballY = ref(0);
const rateX = ref(0.1);
const rateY = ref(0.1);
const fail = ref(false);

const updateGame = () => {
  if (!fail.value) {
    ballX.value += rateX.value * 80;
    ballY.value += rateY.value * 80;

    if (ballX.value < 0 || ballX.value >= 1440) {
      rateX.value = -rateX.value;
    }

    if (ballY.value < 0) {
      rateY.value = -rateY.value;
    }

    if (window.innerHeight - ballY.value >= 25 && window.innerHeight - ballY.value <= 40) {
      if (ballX.value >= boardX.value && ballX.value <= boardX.value + 100) {
        rateY.value = -rateY.value;
      }
    }

    if (ballY.value - window.innerHeight >= 10) {
      fail.value = true;
      rateX.value = 0;
      rateY.value = 0;
    }
  }
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'a') {
    boardX.value -= 60;
  } else if (e.key === 'd') {
    boardX.value += 60;
  }
  boardX.value = Math.max(0, Math.min(boardX.value, 1340));
});

onMounted(() => {
  setInterval(updateGame, 16);
});
</script>

<template>
  <div style="width: 100vw;">
    <div class="board" :style="{ left: boardX + 'px' }"></div>
    <div class="ball" :style="{ top: ballY + 'px', left: ballX + 'px' }"></div>
    <p v-if="fail" class="game-over">游戏结束</p>
  </div>
</template>

<style scoped>
.board {
  width: 100px;
  height: 10px;
  position: absolute;
  background-color: rgb(136, 136, 248);
  bottom: 10px;
}

.ball {
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
}

.game-over {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: rgb(255, 255, 255);
}
</style>
