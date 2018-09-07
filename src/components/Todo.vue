<template>
  <div class="max-w-md mx-auto p-6">
    <!-- logo -->
    <Logo></Logo>

    <!--enter task input  -->
    <InputBar></InputBar>
  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  import InputBar from '@/components/InputBar.vue'


  export default {
    name: 'Todo',
    components: {
      Logo,
      InputBar
    },
  }
</script>