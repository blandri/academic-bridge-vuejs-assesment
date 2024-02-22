<script setup>
import LogoutIcon from '../components/icons/iconLogout.vue'
import AppsIcon from '../components/icons/iconApps.vue'
import InboxIcon from '../components/icons/iconInbox.vue'
import SettingsIcon from '../components/icons/iconSettings.vue'
import CalendarIcon from '../components/icons/iconCalendar.vue'
import StatsIcon from '../components/icons/IconStatistics.vue'
import SearchIcon from '../components/icons/iconSearch.vue'
import TodoSection from '../components/TodoSection.vue'
import DropDownItem from '../components/DropDownItem.vue'
import EditModal from '@/components/EditModal.vue'
</script>

<template>
  <main class="bg-back-color h-screen px-5 lg:px-10 pt-10 pb-8 font-poppins">
    <div class="h-full flex gap-6 text-black-hue">
      <div class="bg-white w-fit h-full rounded-[33px] p-5 flex flex-col justify-between">
        <div class="h-11 w-11">
          <img alt="Logo" class="w-full h-full" :src="LogoPicture" />
        </div>
        <div class="h-full mt-16 flex flex-col items-center gap-10">
          <div class="h-10 w-10 rounded-full bg-page-blue text-white grid place-items-center">
            <AppsIcon />
          </div>
          <div class="text-second-text">
            <StatsIcon />
          </div>
          <div class="text-second-text">
            <InboxIcon />
          </div>
          <div class="text-second-text">
            <CalendarIcon />
          </div>
          <div class="text-second-text">
            <SettingsIcon />
          </div>
        </div>
        <div class="grid gap-7 place-items-center">
          <div class="rounded-full h-8 w-8 overflow-hidden">
            <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
          </div>
          <div class="text-second-text">
            <LogoutIcon />
          </div>
        </div>
      </div>
      <div class="w-full pt-10">
        <h1 class="text-3xl">Boards</h1>
        <div class="mt-5 flex justify-between">
          <DropDownItem />
          <div class="flex gap-4 justify-end w-[60%] md:w-[50%] ease-in-out duration-300">
            <div class="bg-white px-3 py-2 rounded-3xl flex items-center ease-in-out duration-300">
              <div class="mt-[2px] absolute">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search"
                class="placeholder:text-sm w-full pl-6 focus:outline-none"
              />
            </div>
            <div class="flex relative w-[65%] md:w-[40%] lg:w-[25%] xl:w-[18%] ease-in-out duration-300">
              <div
                class="w-10 h-10 rounded-full overflow-hidden absolute right-20 border-2 border-back-color"
              >
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
              </div>
              <div
                class="w-10 h-10 rounded-full overflow-hidden absolute right-14 border-2 border-back-color"
              >
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
              </div>
              <div
                class="w-10 h-10 rounded-full overflow-hidden absolute right-8 border-2 border-back-color"
              >
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
              </div>
              <div
                class="w-10 h-10 bg-page-blue text-white text-xs grid place-items-center rounded-full absolute right-2 border-2 border-back-color"
              >
                +3
              </div>
            </div>
          </div>
        </div>
        <TodoSection />
      </div>
    </div>
    <EditModal />
  </main>
</template>

<script>
import LogoPicture from '../assets/logo.jpg'

export default {
  data() {
    return {
      imageUrl: LogoPicture
    }
  }
}
</script>
