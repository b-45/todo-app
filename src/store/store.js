import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loading: true,
    filter: 'all',
    todos: [],
  },
  getters: {},
  mutations: {
    addTodo(state, todo){
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false
      })
    },
  },
  actions: {
    addTodo(context, todo){
      db.collection('todos').add({
        title:todo.title,
        completed:false,
        timestamp: new Date(),
      })
      .then(docRef => {
        context.commit('addTodo', {
          id: docRef.id,
          title: todo.title,
          completed: false  
        })
      })
    },
  }  
})