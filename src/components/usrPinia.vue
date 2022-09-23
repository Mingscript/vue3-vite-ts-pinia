 <template>
     <div>{{ userStore.name }}</div>
   </template>
  
   <script lang="ts" setup>
   import { useUserStore } from '@/store/user'
  
   const userStore = useUserStore()
  // 1. 直接修改 state （不建议）
   userStore.name = '李四'
   </script>
