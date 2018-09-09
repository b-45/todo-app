<template>
  <li class="flex items-center justify-between mb-2 text-grey-dark">
    <div class="flex items-center">
      <!-- checkbox to select todo -->
      <input v-model="completed" type="checkbox" />
      <!-- display todo -->
      <div class="font-semibold p-3 ml-2 border-1 border-solid border-black">
        {{ title }}
      </div>
      <!-- delete todo  -->
      <div @click="removeTodo(todo.id)">
        <font-awesome-icon icon="times-circle" />
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todo'],
    data() {
      return {
        'id': this.todo.id,
        'title': this.todo.title,
        'completed': this.todo.completed,
      }
    },
    methods: {
        removeTodo(id) {
        this.$store.dispatch('deleteTodo', id)
      },
    }
  }
</script>