<template>
  <div
    :class="{
      'absolute left-0 top-0 w-full h-full grid place-items-center bg-[rgba(13,12,34,.5)]': true,
      'ease-in-out duration-500': true,
      invisible: !todoListStore.openEditModal
    }"
  >
    <div
      :class="{
        'bg-white dark:bg-[rgba(13,12,34,.93)] rounded-[30px] p-8 w-[25%]': true,
        'ease-in-out duration-500': true,
        'scale-0': !todoListStore.openEditModal,
        'scale-1': todoListStore.openEditModal
      }"
    >
      <div class="flex items-center text-center dark:text-white">
        <h1 class="font-bold text-lg w-full">Edit todo card</h1>
        <svg
          @click="onClose"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 rotate-[44deg] cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M21 13H13V21H11V13H3V11H11V3H13V11H21V13Z" fill="currentColor" />
        </svg>
      </div>
      <form @submit.prevent="onSubmit" action="" class="mt-8 grid gap-5 text-second-text">
        <input
          type="text"
          name="title"
          v-model="formData.title"
          placeholder="Title"
          class="bg-transparent border-b-[1.9px] dark:border-green-400 dark:focus:border-green-400 focus:border-page-blue focus:outline-none"
        />
        <textarea
          name="details"
          v-model="formData.details"
          placeholder="Details"
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
            Upload Image
          </label>
        </div>
        <button
          type="submit"
          class="bg-page-blue text-white rounded-lg p-1 font-semibold mt-4 flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[17px] h-[17px] mt-[2px]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M21 13H13V21H11V13H3V11H11V3H13V11H21V13Z" fill="currentColor" />
          </svg>
          Edit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '../stores/todoList'

const todoListStore = useTodoListStore()
const formData = ref({
  title: '',
  details: '',
  tag: ''
})

function onClose() {
  todoListStore.onCloseEditModal()
}

const onSubmit = () => {
  const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
  useTodoListStore().updateTodo(
    null,
    formData.value.title,
    formData.value.details,
    date,
    formData.value.image,
    formData.value.tag
  )
  onClose()
}

const onImageUpload = (e) => {
  console.log(e.target.value)
}
</script>
