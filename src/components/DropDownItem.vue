<template>
  <div class="relative font-semibold">
    <div
      @click="expand = !expand"
      class="cursor-pointer bg-white dark:bg-side-dark px-2 md:px-3 py-1 md:py-2 text-sm md:text-inherit rounded-3xl flex gap-2 md:gap-3 items-center"
    >
      <div v-if="props.language">
        <div
          v-if="selectedValue === 'en'"
          :class="{ 'flex gap-2 items-center cursor-pointer rounded-2xl': true }"
        >
          <div class="h-5 w-5 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/english.webp" alt="" />
          </div>

          English
        </div>
        <div
          v-if="selectedValue === 'fr'"
          :class="{ 'flex gap-2 items-center cursor-pointer rounded-2xl': true }"
        >
          <div class="h-5 w-5 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/french.webp" alt="" />
          </div>

          French
        </div>
      </div>
      <div v-if="!props.language">Barone LLC.</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.293 9.293L12 13.586L7.707 9.293L6.293 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div
      v-if="props.language"
      :class="{
        'absolute z-10 top-[120%] w-full bg-white dark:bg-side-dark px-1 py-2 rounded-3xl ease-in-out duration-300': true,
        'invisible -translate-y-2': !expand
      }"
    >
      <div v-for="(option, index) in languageOptions" :key="index">
        <div
          @click="onlanguageChange('en')"
          v-if="option === 'en'"
          :class="{
            'flex gap-2 items-center p-2 cursor-pointer hover:bg-page-blue hover:text-white rounded-2xl': true,
            'ease-in-out duration-300': expand
          }"
        >
          <div class="h-5 w-5 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/english.webp" alt="" />
          </div>

          {{ option }}
        </div>
        <div
          @click="onlanguageChange('fr')"
          v-if="option === 'fr'"
          :class="{
            'flex gap-2 items-center p-2 cursor-pointer hover:bg-page-blue hover:text-white rounded-2xl': true,
            'ease-in-out duration-300': expand
          }"
        >
          <div class="h-5 w-5 rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/french.webp" alt="" />
          </div>

          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expand = ref(false)

const languageOptions = ref(['en', 'fr'])
const selectedValue = ref(localStorage.getItem('lang'))

function onlanguageChange(lang) {
  localStorage.setItem('lang', lang)
  selectedValue.value = localStorage.getItem('lang')
  window.location.reload()
}

const props = defineProps({
  language: {
    type: Boolean
  }
})
</script>
