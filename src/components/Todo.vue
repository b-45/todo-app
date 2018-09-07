<template>
  <div class="max-w-md mx-auto p-6">
    <!-- logo -->
    <Logo></Logo>

    <!--enter task input  -->
    <SearchBar></SearchBar>
  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  import SearchBar from '@/components/SearchBar.vue'


  export default {
    name: 'Todo',
    components: {
      Logo,
      SearchBar
    },
  }
</script>