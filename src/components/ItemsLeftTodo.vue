<template>
  <!-- calculate itemsLeft items left todo -->
  <div>{{ itemsLeft }} {{ (itemsLeft === 1 ) ? 'item left' : 'items left'}}</div>
</template>

<script>
  export default {
    name: 'ItemsLeftTodo',
    computed: {
      itemsLeft(){
        return this.$store.getters.itemsLeft
      }
    },
  }
</script>