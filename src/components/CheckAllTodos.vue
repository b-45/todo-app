<template>
    <!-- check all todos -->
    <label>
      <input type="checkbox" :checked="!anyItemsLeft" @change="checkAll">
      <div class="ml-4 inline-block">Check All</div>
    </label>
</template>

<script>
  export default {
    name: 'CheckAllTodos',
    computed: {
      anyItemsLeft() {
        return this.$store.getters.anyItemsLeft
      }
    },

    methods: {
      checkAll() {
        this.$store.dispatch('checkAll', event.target.checked)
      }
    }


  }
</script>