import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import cover from '../assets/profile.jpg'
import { createTodos, updatesTodo } from '@/api/todos'
import { onClosePopOver } from '@/components/TodoSection.vue'

export const useTodoListStore = defineStore('todos', () => {
  const openEditModal = ref(false)
  const selectedId = ref(null)
  const creating = ref(false)
  const updating = ref(false)

  const todoList = ref([])
  let doneTodos = ref([])
  let doingTodos = ref([])
  let todoTodos = ref([])
  let underReviewTodos = ref([])

  const getTodos = async () => {
    const data = todoList.value
    doneTodos.value = data.filter((todo) => todo.completed === 'done')
    doingTodos.value = data.filter((todo) => todo.completed === 'doing')
    todoTodos.value = data.filter((todo) => todo.completed === 'todo')
    underReviewTodos.value = data.filter((todo) => todo.completed === 'underReview')
  }

  async function createTodo(newTodo) {
    creating.value = true
    const res = await createTodos(newTodo)
    res.date = newTodo.date
    res.details = newTodo.details
    todoList.value.push(res)

    creating.value = false
    getTodos()
    onClosePopOver()

    return res
  }

  async function updateTodo(id, todo, details, date, image, completed) {
    updating.value = true
    await updatesTodo(id ? id : selectedId.value, { todo, completed })

    const index = todoList.value.findIndex((todo) =>
      id ? todo.id === id : todo.id === selectedId.value
    )

    if (index > -1) {
      todoList.value[index].todo = todo || todoList.value[index].todo
      todoList.value[index].details = details || todoList.value[index].details
      todoList.value[index].date = date || todoList.value[index].date
      todoList.value[index].image = image || todoList.value[index].image
      todoList.value[index].completed = completed || todoList.value[index].completed

      getTodos()
      onCloseEditModal()
      return 1
    }
    return 0
  }

  function deleteTodo(id) {
    const index = todoList.value.findIndex((todo) => todo.id === id)
    if(index > -1) {
      
    todoList.value.splice(index, 1)

    getTodos()
    return 1
    }
    return 0
  }

  function onCloseEditModal() {
    openEditModal.value = false
  }

  function onOpenEditModal(id) {
    openEditModal.value = true
    selectedId.value = id
  }

  return {
    creating: computed(() => creating.value),
    updating: computed(() => updating.value),
    done: computed(() => doneTodos.value),
    doing: computed(() => doingTodos.value),
    underReview: computed(() => underReviewTodos.value),
    todo: computed(() => todoTodos.value),
    selectedId,
    todoList,
    openEditModal,
    getTodos,
    onCloseEditModal,
    onOpenEditModal,
    createTodo,
    updateTodo,
    deleteTodo
  }
})
