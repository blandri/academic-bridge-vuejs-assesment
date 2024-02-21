<script setup>
import MoreIcon from './icons/iconMore.vue'
import CalendarIcon from './icons/iconCalendar.vue'
</script>

<template>
    <div id="card" class="bg-white rounded-[30px] p-5 grid cursor-pointer" draggable="true">
      
        <div class="h-32 rounded-xl overflow-hidden">
            <slot name="image"></slot>
        </div>
      
      <div class="grid">
        <div class="flex justify-between items-center font-bold mt-3">
          <slot name="title"></slot>
          <div class="text-second-text">
            <MoreIcon />
          </div>
        </div>
        <div class="mt-2 text-second-text text-xs font-semibold">
            <slot name="details"></slot>
        </div>
        <div class="flex justify-between mt-4 text-second-text">
            <div class="flex items-center gap-2 text-sm mt-1">
                <CalendarIcon />
                <slot name="date"></slot>
            </div>
            <div>
              <div class="flex relative">
                <div class="w-7 h-7 rounded-full overflow-hidden absolute right-10 border-2 border-white">
                    <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
                </div>
                <div class="w-7 h-7 rounded-full overflow-hidden absolute right-6 border-2 border-white">
                    <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
                </div>
                <div class="w-7 h-7 bg-back-color text-page-blue text-[10px] font-bold grid place-items-center rounded-full absolute right-2 border-2 border-white">+3</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </template>