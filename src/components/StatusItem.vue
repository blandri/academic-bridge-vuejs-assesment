<template>
  <button
    @click="onTagClick(props.tagName)"
    class="flex items-center gap-2 font-semibold text-sm pl-2 mb-1"
  >
    <slot name="color"></slot>
    <slot name="name"></slot>
    <div class="text-second-text ml-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M21 13H13V21H11V13H3V11H11V3H13V11H21V13Z" fill="currentColor" />
      </svg>
    </div>
  </button>
</template>

<script setup>
import { onTagClick } from './TodoSection.vue'

const props = defineProps({
  tagName: {
    type: String,
    required: true
  }
})
</script>
