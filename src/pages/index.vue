<template>
  <div>131</div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn v-for="(item,index) in navigatorData" :key="index" push :color="item.color" :text-color="item.textColor"
      :label="item.name" @click="turnToRouter(item)" />
    <q-input v-model="dataNow" label="Standard" />
    <q-btn @click="increment">{{dataNow}}</q-btn>

  </div>

</template>
<script lang="ts" setup>
import router from '@/router'
import { ref, onMounted, reactive, nextTick, Ref, computed } from 'vue';
//reactive 深度监听 shallowReactive 监听一层
//ref用来做函数运算时出错？因为ref用来响应对象时用的是reactive的原理即proxy所以需要取.value然后进行更改
//reactive 仅对对象类型有效，对string、number原始类型无效

type Count = {
  count: number,
  name?: string
}

let text: Ref = ref({ count: 0 })
let dataNow:Ref =  ref(Date.now())
let reactData: Count = reactive({ count: 0 })
let navigatorData: Array<any> = [
  {
    name: '学习canvas',
    textColor: 'primary',
    color: 'white',
    link: 'canvas/present'
  },
  {
    name: 'work',
    textColor: 'primary',
    color: 'white',
    link: 'canvas/present'
  },
  {
    name: 'study',
    textColor: 'primary',
    color: 'white',
    link: 'canvas/present'
  },
  {
    name: 'marry',
    textColor: 'primary',
    color: 'white',
    link: 'canvas/present'
  }
]
const now = computed(() => dataNow)

onMounted(() => {
  navigatorData = []
})

const increment = (() => {
  console.log("🚀 ~ file: index.vue ~ line 62 ~ increment ~ text", text.value.count++)

  nextTick(() => {
    console.log("视图更新完成")
  })
})
const turnToRouter = ((item: any) => {
  router.push(item.link)
})



</script>


<style>

</style>