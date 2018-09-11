<template>
 <ul class="list-reset">
        <TodoItem 
          v-for="(todo, index) in todosFiltered" 
          :key="todo.id"
          :todo="todo" 
          :index="index"
          :checkAll="!anyItemsLeft"
         >
        </TodoItem>
    </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

  export default {
    name: 'TodoList',
    components: {
      TodoItem
    },
     
    computed: {
      todosFiltered(){        
        return this.$store.getters.todosFiltered
      },
      anyItemsLeft(){
        return this.$store.getters.anyItemsLeft
      },
    }
  }
</script>

