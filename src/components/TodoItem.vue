<template>
  <li class="flex items-center justify-between mb-2 text-grey-dark">
    <div class="flex items-center">

      <!-- checkbox to select todo -->
      <input v-model="completed" type="checkbox" @change="doneEdit"/>

      <!-- display todo -->
      <div v-if="!editing" @dblclick="editTodo" class="font-semibold p-3 ml-2 border-1 border-solid border-black" :class="{'line-through': completed}">
        {{ title }}
      </div>

      <!-- edit todo -->
      <input v-else type="text" class="ml-4 p-3 w-full border-2 rounded border-grey-light outline-none" v-model="title" @blur="doneEdit"
        @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus />
    </div>
    
    <!-- delete todo  -->
    <div @click="removeTodo(todo.id)">
      <font-awesome-icon icon="times-circle"/>
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
        'editing': this.todo.editing,
        'cacheEdit': this.todo.cacheEdit
      }
    },
    // custom directive to handle focus when element becomes visible.
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },
  
    methods: {
      removeTodo(id) {
        this.$store.dispatch('deleteTodo', id)
      },

      editTodo() {
        this.cacheEdit = this.title
        this.editing = true
      },

      // commits change to todo when double clicked
      doneEdit() {
      // prevents displaying an empty string on todoItem
        if (this.title.trim() == '') {
          this.title = this.cacheEdit
        }
        this.editing = false
        this.$store.dispatch('updateTodo', {
          'id': this.id,
          'title': this.title,
          'completed': this.completed,
          'editing': this.editing,
        })
      },

      // Allow user to cancel editing the inline displayedTodo 
      cancelEdit() {
        this.title = this.cacheEdit
        this.editing = false
      },
    }
  }
</script>