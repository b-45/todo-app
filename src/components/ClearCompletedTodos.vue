<template>
    <!-- clear completed todos -->
    <button class="bg-white text-grey-dark font-semibold py-1 px-4 border border-grey-light rounded shadow focus:outline-none"
      v-if="showClearCompletedButton" @click="clearCompleted">
      Clear Completed</button>
</template>

<script>
  export default {
    name: 'ClearCompletedTodos',
    computed: {
      showClearCompletedButton() {
        return this.$store.getters.showClearCompletedButton
      }
    },
    methods: {
      clearCompleted() {
        this.$store.dispatch('clearCompleted')
      }
    }
  }
</script>