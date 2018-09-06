<template>
  <div class="max-w-md mx-auto p-6">
    <!-- logo -->
    <Logo></Logo>
  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'

  export default {
    name: 'Todo',
    components: {
      Logo,
    },
  }
</script>