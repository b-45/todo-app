<template>
 <ul class="list-reset">
        <TodoItem 
          v-for="(todo, index) in todos" 
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
       todos(){        
        return this.$store.getters.todos
      },
        anyItemsLeft(){
        return this.$store.getters.anyItemsLeft
      },
    }
  }
</script>

