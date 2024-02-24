import { useTodoListStore } from '@/stores/todoList'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'

describe('TodoList Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('create todo item', async () => {
    const listStore = useTodoListStore()

    const dummyTodo = {
      title: 'new',
      details: 'Lorem ipsum, lorem ipsum',
      date: new Date()
    }

    const initialLength = listStore.todoList.length

    await listStore.createTodo(dummyTodo)
    expect(listStore.todoList.length).toBe(initialLength + 1)
  })

  test('update todo item', async () => {
    const listStore = useTodoListStore()

    const dummyTodo = {
      title: 'new',
      details: 'Lorem ipsum, lorem ipsum',
      date: new Date()
    }

    const newTodo = await listStore.createTodo(dummyTodo)
    const dummyTodoId = newTodo.id
    const res = await listStore.updateTodo(dummyTodoId, 'Updated todo')

    expect(res).toBe(1)
  })

  test('delete todo item', async () => {
    const listStore = useTodoListStore()

    const dummyTodo = {
      title: 'new',
      details: 'Lorem ipsum, lorem ipsum',
      date: new Date()
    }

    const newTodo = await listStore.createTodo(dummyTodo)
    const dummyTodoId = newTodo.id

    const res = listStore.deleteTodo(dummyTodoId)

    expect(res).toBe(1)
  })
})
