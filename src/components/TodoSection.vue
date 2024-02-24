<script setup>
import TodoCardItem from './TodoCardItem.vue'
import StatusItem from './StatusItem.vue'
import LoadingIcon from './icons/iconLoading.vue';
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'
import { watchEffect } from 'vue'
</script>

<template>
  <div class="mt-8 h-[80%] overflow-auto pr-2">
    <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 h-full">
      <div
        @dragover.prevent
        @dragenter.prevent
        @drop="onDrop($event, 'todo')"
        class="flex flex-col gap-4 h-full"
      >
        <StatusItem tagName="todo">
          <template #color>
            <div class="bg-todo rounded-[5px] w-[14px] h-[14px]" />
          </template>
          <template #name>{{ $t('toDo') }}</template>
        </StatusItem>
        <TodoCardItem
          v-for="(item, index) in todo"
          :key="index"
          :id="item.id"
          :dragging="isDragging"
          @dragstart="onDrag($event, item.id, 'todo')"
          @dragend="onDragEnd()"
        >
          <template v-if="item.image" #image>
            <img alt="Profile picture" class="w-full h-32 mb-3 rounded-xl" :src="item.image" />
          </template>
          <template #title>
            <p>{{ item.todo }}</p>
          </template>
          <template #details>
            <p>{{ item.details }}</p>
          </template>
          <template #date>
            <p>{{ item.date }}</p>
          </template>
        </TodoCardItem>
        <div
          v-if="activeColumn && activeColumn !== 'todo'"
          class="border-2 border-[rgba(3,86,159,.5)] border-dashed rounded-[30px] h-32 w-full"
        ></div>
      </div>
      <div
        @dragover.prevent
        @dragenter.prevent
        @drop="onDrop($event, 'doing')"
        class="hidden sm:flex flex-col gap-4"
      >
        <StatusItem tagName="doing">
          <template #color>
            <div class="bg-doing rounded-[5px] w-[14px] h-[14px]" />
          </template>
          <template #name>{{ $t('doing') }}</template>
        </StatusItem>
        <TodoCardItem
          v-for="(item, index) in doing"
          :key="index"
          :id="item.id"
          :dragging="isDragging"
          @dragstart="onDrag($event, item.id, 'doing')"
          @dragend="onDragEnd()"
        >
          <template v-if="item.image" #image>
            <img alt="Profile picture" class="w-full h-32 mb-3 rounded-xl" :src="item.image" />
          </template>
          <template #title>
            <p>{{ item.todo }}</p>
          </template>
          <template #details>
            <p>{{ item.details }}</p>
          </template>
          <template #date>
            <p>{{ item.date }}</p>
          </template>
        </TodoCardItem>
        <div
          v-if="activeColumn && activeColumn !== 'doing'"
          class="border-2 border-[rgba(3,86,159,.5)] border-dashed rounded-[30px] h-32 w-full"
        ></div>
      </div>
      <div
        @dragover.prevent
        @dragenter.prevent
        @drop="onDrop($event, 'underReview')"
        class="hidden md:flex flex-col gap-4"
      >
        <StatusItem tagName="underReview">
          <template #color>
            <div class="bg-under-review rounded-[5px] w-[14px] h-[14px]" />
          </template>
          <template #name>{{ $t('underReview') }}</template>
        </StatusItem>
        <TodoCardItem
          v-for="(item, index) in underReview"
          :key="index"
          :id="item.id"
          :dragging="isDragging"
          @dragstart="onDrag($event, item.id, 'underReview')"
          @dragend="onDragEnd()"
        >
          <template v-if="item.image" #image>
            <img alt="Profile picture" class="w-full h-32 mb-3 rounded-xl" :src="item.image" />
          </template>
          <template #title>
            <p>{{ item.todo }}</p>
          </template>
          <template #details>
            <p>{{ item.details }}</p>
          </template>
          <template #date>
            <p>{{ item.date }}</p>
          </template>
        </TodoCardItem>
        <div
          v-if="activeColumn && activeColumn !== 'underReview'"
          class="border-2 border-[rgba(3,86,159,.5)] border-dashed rounded-[30px] h-32 w-full"
        ></div>
      </div>
      <div
        @dragover.prevent
        @dragenter.prevent
        @drop="onDrop($event, 'done')"
        class="hidden lg:flex flex-col gap-4"
      >
        <StatusItem tagName="done">
          <template #color>
            <div class="bg-done rounded-[5px] w-[14px] h-[14px]" />
          </template>
          <template #name>{{ $t('done') }}</template>
        </StatusItem>
        <TodoCardItem
          v-for="(item, index) in done"
          :key="index"
          :id="item.id"
          :dragging="isDragging"
          @dragstart="onDrag($event, item.id, 'done')"
          @dragend="onDragEnd()"
        >
          <template v-if="item.image" #image>
            <img alt="Profile picture" class="w-full h-32 mb-3 rounded-xl" :src="item.image" />
          </template>
          <template #title>
            <p>{{ item.todo }}</p>
          </template>
          <template #details>
            <p>{{ item.details }}</p>
          </template>
          <template #date>
            <p>{{ item.date }}</p>
          </template>
        </TodoCardItem>
        <div
          v-if="activeColumn && activeColumn !== 'done'"
          class="border-2 border-[rgba(3,86,159,.5)] border-dashed rounded-[30px] h-32 w-full"
        ></div>
      </div>
    </div>
  </div>
  <div
    :class="{
      'absolute left-0 top-0 w-full h-full grid place-items-center bg-[rgba(13,12,34,.5)]': true,
      'ease-in-out duration-500': true,
      invisible: !showPopOver
    }"
  >
    <div
      :class="{
        'bg-white dark:bg-[rgba(13,12,34,.93)] rounded-[30px] p-8 w-[70%] md:w-[40%] lg:w-[25%]': true,
        'ease-in-out duration-500': true,
        'scale-0': !showPopOver,
        'scale-1': showPopOver
      }"
    >
      <div class="flex items-center text-center gap-3 dark:text-white">
        <h1 class="font-bold text-lg w-full">
          {{ $t('add') }} {{ $t('a') }} {{ $t('new') }} todo {{ $t('card') }} {{ $t('to') }}
          <span
            :class="{
              'ml-1': true,
              'text-todo': formData.tag === 'todo',
              'text-done': formData.tag === 'done',
              'text-under-review': formData.tag === 'underReview',
              'text-doing': formData.tag === 'doing'
            }"
          >
            {{ formData.tag }}
          </span>
        </h1>
        <svg
          @click="onClosePopOver"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 rotate-[44deg] cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M21 13H13V21H11V13H3V11H11V3H13V11H21V13Z" fill="currentColor" />
        </svg>
      </div>
      <form @submit.prevent="onSubmit" action="" class="mt-8 grid gap-5">
        <input
          type="text"
          name="title"
          id="title"
          v-model="formData.title"
          :placeholder="$t('title')"
          class="bg-transparent border-b-[1.9px] dark:border-green-400 dark:focus:border-green-400 focus:border-page-blue focus:outline-none"
        />
        <textarea
          name="details"
          v-model="formData.details"
          placeholder="Details"
          id="details"
          rows="2"
          class="bg-transparent border-b-[1.9px] dark:border-green-400 dark:focus:border-green-400 resize-none focus:border-page-blue focus:outline-none"
        ></textarea>
        <div
          class="border dark:border-green-400 p-2 rounded-md border-dashed text-sm text-second-text"
        >
          <input
            v-on:change="onImageUpload"
            type="file"
            accept=".png, .jpg"
            className="invisible absolute"
            id="actual-btn"
          />
          <label htmlFor="actual-btn" className="grid place-items-center gap-1 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 21 23" fill="none">
              <path
                d="M18.375 15.8125V20.125H2.625V15.8125H0V20.125C0 21.7062 1.18125 23 2.625 23H18.375C19.8188 23 21 21.7062 21 20.125V15.8125H18.375ZM3.9375 7.1875L5.78812 9.21437L9.1875 5.50562V17.25H11.8125V5.50562L15.2119 9.21437L17.0625 7.1875L10.5 0L3.9375 7.1875Z"
                fill="currentColor"
              />
            </svg>
            {{ $t('upload') }} Image
          </label>
        </div>
        <button
          type="submit"
          class="bg-page-blue text-white rounded-lg p-1 font-semibold mt-4 flex items-center justify-center gap-2"
        >
          <div v-if="todoStore.creating" class="h-6 w-6 animate-spin">
            <LoadingIcon />
          </div>
          <div v-if="!todoStore.creating" class="flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[17px] h-[17px]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M21 13H13V21H11V13H3V11H11V3H13V11H21V13Z" fill="currentColor" />
          </svg>
          {{ $t('add') }}
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const todoStore = useTodoListStore()
let done = ref([])
let doing = ref([])
let todo = ref([])
let underReview = ref([])

const showPopOver = ref(false)
const isDragging = ref(-1)
const activeColumn = ref('')

todoStore.getTodos()

watchEffect(() => {
  done.value = todoStore.done
  doing.value = todoStore.doing
  underReview.value = todoStore.underReview
  todo.value = todoStore.todo
})

const formData = ref({
  title: '',
  details: '',
  tag: ''
})

export const onTagClick = (tagName) => {
  showPopOver.value = true
  formData.value.tag = tagName
}

export const onClosePopOver = () => {
  showPopOver.value = false
}

const onSubmit = () => {
  const newTodo = {
    todo: formData.value.title,
    details: formData.value.details,
    completed: formData.value.tag,
    image: formData.value.image || '',
    date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
  }
  todoStore.createTodo(newTodo)
}
let idd = ''
const onDrop = (event, status) => {
  todoStore.updateTodo(idd, null, null, null, null, status)
  isDragging.value = 0
}

const onDrag = (event, id, column) => {
  isDragging.value = id
  idd = id
  activeColumn.value = column
}

const onDragEnd = () => {
  isDragging.value = 0
  activeColumn.value = false
}
</script>
