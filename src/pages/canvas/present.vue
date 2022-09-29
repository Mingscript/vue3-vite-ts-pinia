<template>
  <q-card dark bordered class="bg-grey-9 my-card">
    <q-card-section>
      <div class="text-h6">canvas-present</div>

    </q-card-section>

    <!-- <q-separator dark inset /> -->

    <q-card-section>
      <canvas width="500" height="300" id="present"></canvas>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
onMounted(() => {
  initCanvas()
})
const initCanvas = () => {
  let box: HTMLCanvasElement = document.getElementById('present') as HTMLCanvasElement
  if (box.getContext) {
    let ctx = box.getContext('2d')
    // ctx.moveTo(50,50)
    // ctx.lineTo(50,200)
    // ctx.lineTo(200,200)
    // ctx.lineTo(200,50)
    // ctx.lineTo(50,50)
    // ctx.stroke()  

    // ctx.fillRect(100,100,50,50)
    // ctx.clearRect(115,115,20,20)
    ctx?.moveTo(50, 50)
    ctx?.quadraticCurveTo(200, 200, 350, 50)
    ctx?.stroke()

    ctx?.beginPath() // 开启路径
    ctx?.moveTo(50, 200)
    ctx?.quadraticCurveTo(100, 300, 350, 250)
    // 绘制
    ctx?.stroke();


  }
}
</script>

<style scoped>
canvas {
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 8px;
}
</style>