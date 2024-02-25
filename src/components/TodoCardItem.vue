<template>
  <div
    :class="{
      'border-2 dark:border-title-text-dark border-dashed  rounded-[30px]': props.dragging === id
    }"
  >
    <div
      id="card"
      :class="{
        'bg-white dark:bg-side-dark rounded-[30px] p-5 grid cursor-pointer': true,
        'opacity-15': props.dragging === id
      }"
      draggable="true"
    >
      <div class="h-fit">
        <slot name="image"></slot>
      </div>

      <div class="grid">
        <div class="flex justify-between items-center font-bold dark:text-white">
          <slot name="title"></slot>
          <div class="text-second-text dark:text-inherit relative">
            <div id="more-icon" @click="() => onOpenMoreClick(index)"><MoreIcon /></div>
            <div
              :class="{
                'bg-white dark:bg-side-dark absolute z-10 border dark:border-title-text-dark p-1 font-normal text-sm text-black-hue dark:text-white rounded-lg right-2 top-[120%] ease-in-out': true,
                'invisible -translate-y-1': !openMore[index]
              }"
            >
              <div
                @click="onUpdateClick(props.id, index)"
                class="flex gap-2 items-center px-2 py-1 cursor-pointer hover:bg-back-color dark:hover:bg-title-text-dark rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.137 3.47C14.9964 3.32955 14.8058 3.25066 14.607 3.25066C14.4083 3.25066 14.2176 3.32955 14.077 3.47L4.88401 12.662C4.79002 12.756 4.72272 12.8734 4.68901 13.002L3.68901 16.832C3.656 16.9586 3.65667 17.0916 3.69094 17.2178C3.72522 17.344 3.79191 17.4591 3.8844 17.5516C3.9769 17.6441 4.09197 17.7108 4.2182 17.7451C4.34444 17.7793 4.47744 17.78 4.60401 17.747L8.43201 16.747C8.56109 16.7132 8.6788 16.6455 8.77301 16.551L17.965 7.359C18.1055 7.21837 18.1844 7.02775 18.1844 6.829C18.1844 6.63025 18.1055 6.43963 17.965 6.299L15.137 3.47ZM6.08801 13.579L14.607 5.061L16.374 6.828L7.85601 15.347L5.46301 15.972L6.08801 13.579Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 19.25C3.80109 19.25 3.61032 19.329 3.46967 19.4697C3.32902 19.6103 3.25 19.8011 3.25 20C3.25 20.1989 3.32902 20.3897 3.46967 20.5303C3.61032 20.671 3.80109 20.75 4 20.75H19C19.1989 20.75 19.3897 20.671 19.5303 20.5303C19.671 20.3897 19.75 20.1989 19.75 20C19.75 19.8011 19.671 19.6103 19.5303 19.4697C19.3897 19.329 19.1989 19.25 19 19.25H4Z"
                    fill="currentColor"
                  />
                </svg>
                <p>{{ $t('edit') }}</p>
              </div>
              <div
                @click="onDeleteClick(props.id, index)"
                class="flex gap-2 items-center px-2 py-1 text-red-600 cursor-pointer hover:bg-back-color dark:hover:bg-title-text-dark rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-4"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M27 8C27 9.657 22.075 11 16 11C9.925 11 5 9.657 5 8M27 8C27 6.343 22.075 5 16 5C9.925 5 5 6.343 5 8M27 8L24 26C24 26 23 28 16 28C9 28 8 26 8 26L5 8M18.5 16.5L13.5 21.5M13.5 16.5L18.5 21.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>{{ $t('delete') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2 text-second-text text-xs font-semibold w-full truncate">
          <slot name="details"></slot>
        </div>
        <div class="flex justify-between mt-4 text-second-text">
          <div class="flex items-center gap-2 text-sm mt-1">
            <CalendarIcon />
            <slot name="date"></slot>
          </div>
          <div>
            <div class="flex relative">
              <div
                class="w-7 h-7 rounded-full overflow-hidden absolute right-10 border-2 border-white dark:border-side-dark"
              >
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
              </div>
              <div
                class="w-7 h-7 rounded-full overflow-hidden absolute right-6 border-2 border-white dark:border-side-dark"
              >
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
              </div>
              <div
                class="w-7 h-7 bg-back-color text-page-blue text-[10px] font-bold grid place-items-center rounded-full absolute right-2 border-2 border-white dark:border-side-dark"
              >
                +3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MoreIcon from './icons/iconMore.vue'
import CalendarIcon from './icons/iconCalendar.vue'
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'

const todoListStore = useTodoListStore()
const openMore = ref([])

function onOpenMoreClick(index) {
  openMore.value[index] = !openMore.value[index]
}

function onDeleteClick(id, index) {
  todoListStore.deleteTodo(id)
  openMore.value[index] = false
}

function onUpdateClick(id, index) {
  todoListStore.onOpenEditModal(id)
  openMore.value[index] = false
}

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  dragging: {
    type: Number
  }
});console.log('--<', props.id)
</script>
