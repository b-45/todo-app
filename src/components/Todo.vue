<template>
  <div class="max-w-md mx-auto p-6">

    <!-- logo -->
    <Logo></Logo>

    <!--input todo -->
    <InputBar></InputBar>

    <!-- display list of todos  -->
    <TodoList></TodoList>

    <!--checkAllTodos & itemsLeftTodo -->
    <div class="flex items-center justify-between border-t pt-4 font-semibold text-grey-darker mb-4">

    <!--items left  -->
    <ItemsLeftTodo></ItemsLeftTodo>
    
  </div>

  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  import InputBar from '@/components/InputBar.vue'
  import TodoList from '@/components/TodoList.vue'
  import ItemsLeftTodo from '@/components/ItemsLeftTodo.vue';


  export default {
    name: 'Todo',
    components: {
      Logo,
      InputBar,
      TodoList,
      ItemsLeftTodo
    },

    created() {
      this.$store.dispatch('retrieveTodos')
    },
  }
</script>