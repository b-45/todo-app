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
  getters: {
    todos(state){
      return state.todos
    },
  },
  mutations: {
    addTodo(state, todo){
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false
      })
    },
    retrieveTodos(state, todos){
      state.todos = todos
    }
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
    retrieveTodos(context){
      context.state.loading = true
      db.collection('todos').get()
        .then(querySnapshot => {
          let tempTodos = []
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              title: doc.data().title,
              completed: doc.data().completed,
              timestamp: doc.data().timestamp,
            }
            tempTodos.push(data)
          })
          context.state.loading = false
          const tempTodosSorted = tempTodos.sort((a, b) => {
            return a.timestamp.seconds - b.timestamp.seconds
          })
          context.commit('retrieveTodos', tempTodosSorted)
      })
    },
  }  
})