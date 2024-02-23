import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import cover from '../assets/profile.jpg'

export const useTodoListStore = defineStore('todos', () => {
  const count = ref(2)
  const openEditModal = ref(false)
  const selectedId = ref(null)

  const todoList = ref([
    {
      id: 0,
      title: 'Workout',
      details: 'Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum',
      tag: 'todo',
      image: '',
      date: '03/01/24'
    },
    {
      id: 1,
      title: 'Workout',
      details: 'Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum',
      tag: 'done',
      image: cover,
      date: '03/01/24'
    },
    {
      id: 2,
      title: 'Workout',
      details: 'Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum',
      tag: 'underReview',
      image: cover,
      date: '03/01/24'
    }
  ])

  const getTodos = (tag) =>
    computed(() => {
      return todoList.value.filter((todo) => todo.tag === tag)
    })

  function createTodo(newTodo) {
    newTodo.id = count.value++
    todoList.value.push(newTodo)
  }

  function updateTodo(id, title, details, date, image, tag) {
    const index = todoList.value.findIndex((todo) => id ? todo.id === id : todo.id === selectedId.value)
    if (index > -1) {
      todoList.value[index].title = title || todoList.value[index].title
      todoList.value[index].details = details || todoList.value[index].details
      todoList.value[index].date = date || todoList.value[index].date
      todoList.value[index].image = image || todoList.value[index].image
      todoList.value[index].tag = tag || todoList.value[index].tag
      return 1
    }
    return 0
  }

  function deleteTodo(id) {
    const index = todoList.value.findIndex((todo) => todo.id === id)
    todoList.value.splice(index, 1)
  }

  function onCloseEditModal() {
    openEditModal.value = false
  }

  function onOpenEditModal(id) {
    openEditModal.value = true
    selectedId.value = id
  }

  return {
    count,
    todoList,
    openEditModal,
    onCloseEditModal,
    onOpenEditModal,
    selectedId,
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
  }
})
