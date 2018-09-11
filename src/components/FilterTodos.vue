<template>
  <div>
    <!-- filter all todo -->
    <button
      class="bg-white text-grey-dark font-semibold py-1 px-4 border border-grey-light rounded shadow focus:outline-none" 
      :class="{active: filter == 'all'}"
      @click="changeFilter('all')">All</button>
      <!-- filter active todos  -->
    <button
      class="bg-white text-grey-dark font-semibold py-1 px-4 border border-grey-light rounded shadow focus:outline-none" 
      :class="{active: filter == 'active'}"
      @click="changeFilter('active')">Active</button>
      <!-- filter completed todos  -->
    <button
      class="bg-white text-grey-dark font-semibold py-1 px-4 border border-grey-light rounded shadow focus:outline-none"         
      :class="{active: filter == 'completed'}"
      @click="changeFilter('completed')">Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'FilterTodos',
    computed: {
      filter(){
        return this.$store.state.filter
      }
    },
    methods: {
      changeFilter(filter){
        this.$store.dispatch('updateFilter', filter)
      },
    }
  }
</script>

<style scoped>
  .active{
  background: #5661b3;
  color:whitesmoke;
}
</style>