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
      <!--check all todo button  -->
      <CheckAllTodos :anyItemsLeft = "anyItemsLeft"></CheckAllTodos>

      <!--items left  -->
      <ItemsLeftTodo></ItemsLeftTodo>
    </div>

     <div class="flex items-center justify-between border-t pt-4 text-grey-darkest">
      <!-- filter todo buttons -->
      <FilterTodos></FilterTodos>

    </div>

  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  import InputBar from '@/components/InputBar.vue'
  import TodoList from '@/components/TodoList.vue'
  import CheckAllTodos from '@/components/CheckAllTodos.vue'
  import ItemsLeftTodo from '@/components/ItemsLeftTodo.vue'
  import FilterTodos from '@/components/FilterTodos.vue'



  export default {
    name: 'Todo',
    components: {
      Logo,
      InputBar,
      TodoList,
      CheckAllTodos,
      ItemsLeftTodo,
      FilterTodos
    },

    created() {
      this.$store.dispatch('retrieveTodos')
    },
  }
</script>