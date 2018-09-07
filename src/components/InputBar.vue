<template>
  <div>
    <input type="text" 
      class="form-input w-full mb-4" 
      placeholder="Enter task" 
      v-model="newTodo" 
      @keyup.enter="addTodo">
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        newTodo: '',
        iDForTodo: 3,
      }
    },

    methods: {
      addTodo() {
        //check if empty
        if (this.newTodo.trim().length == 0) {
          return
        }
        this.$store.dispatch('addTodo', {
          id: this.iDForTodo,
          title: this.newTodo,
        })
        this.newTodo = ''
        this.iDForTodo++
      },
    },

  }
</script>