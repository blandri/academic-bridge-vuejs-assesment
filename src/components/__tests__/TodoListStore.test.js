import { useTodoListStore } from "@/stores/todoList"
import { createPinia, setActivePinia } from "pinia"
import { beforeEach, describe, expect, test } from "vitest"

describe('TodoList Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test('count starts at two', () => {
        const listStore = useTodoListStore()
        expect(listStore.count).toBe(2)
    })

    test('todo list starts with three items', () => {
        const listStore = useTodoListStore()
        expect(listStore.todoList.length).toBe(3)
    })

    test('create todo item', () => {
        const listStore = useTodoListStore()
        
        const dummyTodo = {
            title: 'new',
            details: 'Lorem ipsum, lorem ipsum',
            date: new Date()
        }

        const initialLength = listStore.todoList.length

        listStore.createTodo(dummyTodo)

        expect(listStore.todoList.length).toBe(initialLength + 1)
    })

    test('fail to update todo item because there is no id provided', () => {
        const listStore = useTodoListStore()

        const res = listStore.updateTodo('Updated todo')

        expect(res).toBe(0)
    })

    test('delete todo item', () => {
        const listStore = useTodoListStore()

        const initialLength = listStore.todoList.length

        listStore.deleteTodo(3)

        expect(listStore.todoList.length).toBe(initialLength - 1)
    })
})