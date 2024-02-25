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
        'bg-white dark:bg-[rgba(13,12,34,.93)] rounded-[30px] p-8 w-[90%] md:w-[40%] xl:w-[25%]': true,
        'ease-in-out duration-500': true,
        'scale-0': !todoListStore.openEditModal,
        'scale-1': todoListStore.openEditModal
      }"
    >
      <div class="flex items-center text-center dark:text-white">
        <h1 class="font-bold text-lg w-full">{{ $t('edit') }} todo {{ $t('card') }}</h1>
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
          id="title-e"
          v-model="formData.title"
          :placeholder="$t('title')"
          class="bg-transparent border-b-[1.9px] dark:border-green-400 dark:focus:border-green-400 focus:border-page-blue focus:outline-none"
        />
        <textarea
          name="details"
          id="details-e"
          v-model="formData.details"
          placeholder="Details"
          rows="2"
          class="bg-transparent border-b-[1.9px] dark:border-green-400 dark:focus:border-green-400 resize-none focus:border-page-blue focus:outline-none"
        ></textarea>
        <div
          class="mt-3 border dark:border-green-400 p-1 grid place-items-center h-24 rounded-md border-dashed text-sm text-second-text"
        >
          <div v-if="formData.image" class="h-full w-full overflow-hidden grid place-items-center">
            <img :src="formData.image" alt="" class="h-full">
          </div>
          <div v-if="!formData.image">
            <input
            v-on:change="onImageUpload($event.target)"
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
        </div>
        <button
          type="submit"
          class="bg-page-blue disabled:bg-second-text dark:disabled:bg-side-dark dark:disabled:text-normal-text-dark disabled:cursor-not-allowed text-white rounded-lg p-1 font-semibold mt-4 flex items-center justify-center gap-2"
        >
          <div v-if="todoListStore.updating" class="h-6 w-6 animate-spin">
            <LoadingIcon />
          </div>
          <div v-if="!todoListStore.updating" class="flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[17px] h-[17px] mt-[2px]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M21 13H13V21H11V13H3V11H11V3H13V11H21V13Z" fill="currentColor" />
          </svg>
          {{ $t('edit') }}
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '../stores/todoList'
import LoadingIcon from './icons/iconLoading.vue';

const todoListStore = useTodoListStore()
let formData = ref({
  title: '',
  details: '',
  tag: '',
  image: ''
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

  formData.value = {
    title: '',
    details: '',
    tag: '',
    image: ''
  }
}

const onImageUpload = (event) => {
  if (event.files.length) {
      formData.value.image = URL.createObjectURL(event.files[0]);
  }
  console.log(formData.value.image)
}
</script>
