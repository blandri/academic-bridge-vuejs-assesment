import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createTodos, updatesTodo } from '@/api/todos'

export const useTodoListStore = defineStore('todos', () => {
  const idCount = ref(151)
  const openEditModal = ref(false)
  const showPopOver = ref(false)
  const selectedId = ref(null)
  const creating = ref(false)
  const updating = ref(false)

  const searchResults = ref([])

  localStorage.setItem('todos', localStorage.getItem('todos') || JSON.stringify([]))
  const todoList = ref(JSON.parse(localStorage.getItem('todos')))
  
  let doneTodos = ref([])
  let doingTodos = ref([])
  let todoTodos = ref([])
  let underReviewTodos = ref([])

  const getTodos = async (search) => {
    const data = !search && todoList.value || searchResults.value
    doneTodos.value = data.filter((todo) => todo.completed === 'done')
    doingTodos.value = data.filter((todo) => todo.completed === 'doing')
    todoTodos.value = data.filter((todo) => todo.completed === 'todo')
    underReviewTodos.value = data.filter((todo) => todo.completed === 'underReview')
  }

  async function createTodo(newTodo) {
    idCount.value++
    creating.value = true
    const res = await createTodos(newTodo)
    res.date = newTodo.date
    res.details = newTodo.details
    res.image = newTodo.image
    res.id = idCount.value
    todoList.value.push(res)
    localStorage.setItem('todos', JSON.stringify(todoList.value))
    getTodos()
    creating.value = false
    showPopOver.value = false
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
      localStorage.setItem('todos', JSON.stringify(todoList.value))
      getTodos()
      updating.value = false
      onCloseEditModal()
      return 1
    }
    return 0
  }

  function deleteTodo(id) {
    const index = todoList.value.findIndex((todo) => todo.id === id)
    if(index > -1) {
      
    todoList.value.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todoList.value))
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

  function searchTodo(keyWord, reset) {
    if(!reset) {
      const match = todoList.value.filter(todo=> {
        if (todo.todo.includes(keyWord) || todo.details.includes(keyWord)) return todo
        else return 0
      })
      searchResults.value = match
      getTodos(true)
    } else {
      getTodos()
    }
    
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
    showPopOver,
    results: computed(() => searchResults),
    getTodos,
    onCloseEditModal,
    onOpenEditModal,
    createTodo,
    updateTodo,
    deleteTodo,
    searchTodo,
  }
})
