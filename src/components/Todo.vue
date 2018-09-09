<template>
  <div class="max-w-md mx-auto p-6">
    
    <!-- logo -->
    <Logo></Logo>

    <!--enter task input  -->
    <InputBar></InputBar>
   
    <!-- display list of todos  -->
    <TodoList></TodoList>

  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  import InputBar from '@/components/InputBar.vue'
  import TodoList from '@/components/TodoList.vue';


  export default {
    name: 'Todo',
    components: {
      Logo,
      InputBar,
      TodoList
    },

    created() {
      this.$store.dispatch('retrieveTodos')
    },
  }
</script>