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
import { ref, onMounted } from 'vue'
import LogoPicture from '../assets/logo.jpg'

onMounted(() => {
  localStorage.setItem('lang', localStorage.getItem('lang') || 'en')
  localStorage.setItem('theme', localStorage.getItem('theme') || 'light')
  activeTheme.value = localStorage.getItem('theme')
})
</script>

<template>
  <main
    :class="{
      'bg-back-color dark:bg-back-color-dark h-screen px-2 md:px-5 lg:px-10 pt-10 pb-8 font-poppins ease-in-out': true,
      dark: activeTheme === 'dark'
    }"
  >
    <div class="h-full flex gap-3 md:gap-7 text-black-hue dark:text-normal-text-dark">
      <div
        class="bg-white dark:bg-side-dark w-fit h-full rounded-[33px] p-3 md:p-4 flex flex-col justify-between"
      >
        <div class="h-11 w-11 dark:rounded-full dark:h-[60px] dark:overflow-hidden">
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
      <div class="w-full pt-4 md:pt-[19px]">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl md:text-3xl dark:text-title-text-dark">{{ $t('board') }}</h1>
          <div class="flex items-center gap-3">
            <DropDownItem :language="true" />
            <div
              class="h-fit p-1 md:p-[7px] mr-3 text-second-text border border-second-text dark:border-normal-text-dark rounded-full cursor-pointer"
            >
              <svg
                v-if="activeTheme === 'dark'"
                @click="onThemeChange('light')"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 md:w-5 h-4 md:h-5"
                viewBox="0 0 256 256"
                fill="none"
              >
                <path
                  d="M120 40V16C120 13.8783 120.843 11.8434 122.343 10.3431C123.843 8.84285 125.878 8 128 8C130.122 8 132.157 8.84285 133.657 10.3431C135.157 11.8434 136 13.8783 136 16V40C136 42.1217 135.157 44.1566 133.657 45.6569C132.157 47.1571 130.122 48 128 48C125.878 48 123.843 47.1571 122.343 45.6569C120.843 44.1566 120 42.1217 120 40ZM192 128C192 140.658 188.246 153.032 181.214 163.556C174.182 174.081 164.186 182.284 152.492 187.128C140.797 191.972 127.929 193.24 115.514 190.77C103.099 188.301 91.6957 182.205 82.7452 173.255C73.7946 164.304 67.6992 152.901 65.2297 140.486C62.7603 128.071 64.0277 115.203 68.8717 103.508C73.7157 91.8138 81.9188 81.8184 92.4435 74.7859C102.968 67.7535 115.342 64 128 64C144.968 64.0185 161.236 70.7673 173.234 82.7656C185.233 94.7639 191.981 111.032 192 128ZM176 128C176 118.506 173.185 109.226 167.911 101.333C162.636 93.4391 155.14 87.2868 146.369 83.6538C137.598 80.0208 127.947 79.0702 118.636 80.9223C109.325 82.7744 100.772 87.346 94.0589 94.0589C87.346 100.772 82.7744 109.325 80.9223 118.636C79.0702 127.947 80.0208 137.598 83.6538 146.369C87.2868 155.14 93.4391 162.636 101.333 167.911C109.226 173.185 118.506 176 128 176C140.726 175.987 152.928 170.925 161.927 161.927C170.925 152.928 175.987 140.726 176 128ZM58.34 69.66C59.8411 71.1611 61.8771 72.0044 64 72.0044C66.1229 72.0044 68.1589 71.1611 69.66 69.66C71.1611 68.1589 72.0044 66.1229 72.0044 64C72.0044 61.8771 71.1611 59.8411 69.66 58.34L53.66 42.34C52.1589 40.8389 50.1229 39.9956 48 39.9956C45.8771 39.9956 43.8411 40.8389 42.34 42.34C40.8389 43.8411 39.9956 45.8771 39.9956 48C39.9956 50.1229 40.8389 52.1589 42.34 53.66L58.34 69.66ZM58.34 186.34L42.34 202.34C40.8389 203.841 39.9956 205.877 39.9956 208C39.9956 210.123 40.8389 212.159 42.34 213.66C43.8411 215.161 45.8771 216.004 48 216.004C50.1229 216.004 52.1589 215.161 53.66 213.66L69.66 197.66C70.4033 196.917 70.9929 196.034 71.3951 195.063C71.7974 194.092 72.0044 193.051 72.0044 192C72.0044 190.949 71.7974 189.908 71.3951 188.937C70.9929 187.966 70.4033 187.083 69.66 186.34C68.9167 185.597 68.0343 185.007 67.0632 184.605C66.092 184.203 65.0512 183.996 64 183.996C62.9488 183.996 61.908 184.203 60.9368 184.605C59.9657 185.007 59.0833 185.597 58.34 186.34ZM192 72C193.051 72.0008 194.092 71.7946 195.063 71.3931C196.034 70.9916 196.917 70.4027 197.66 69.66L213.66 53.66C215.161 52.1589 216.004 50.1229 216.004 48C216.004 45.8771 215.161 43.8411 213.66 42.34C212.159 40.8389 210.123 39.9956 208 39.9956C205.877 39.9956 203.841 40.8389 202.34 42.34L186.34 58.34C185.22 59.4588 184.457 60.8849 184.148 62.4375C183.839 63.9902 183.997 65.5997 184.603 67.0623C185.209 68.5249 186.235 69.7748 187.552 70.6538C188.869 71.5327 190.417 72.0012 192 72ZM197.66 186.34C196.159 184.839 194.123 183.996 192 183.996C189.877 183.996 187.841 184.839 186.34 186.34C184.839 187.841 183.996 189.877 183.996 192C183.996 194.123 184.839 196.159 186.34 197.66L202.34 213.66C203.083 214.403 203.966 214.993 204.937 215.395C205.908 215.797 206.949 216.004 208 216.004C209.051 216.004 210.092 215.797 211.063 215.395C212.034 214.993 212.917 214.403 213.66 213.66C214.403 212.917 214.993 212.034 215.395 211.063C215.797 210.092 216.004 209.051 216.004 208C216.004 206.949 215.797 205.908 215.395 204.937C214.993 203.966 214.403 203.083 213.66 202.34L197.66 186.34ZM48 128C48 125.878 47.1571 123.843 45.6569 122.343C44.1566 120.843 42.1217 120 40 120H16C13.8783 120 11.8434 120.843 10.3431 122.343C8.84285 123.843 8 125.878 8 128C8 130.122 8.84285 132.157 10.3431 133.657C11.8434 135.157 13.8783 136 16 136H40C42.1217 136 44.1566 135.157 45.6569 133.657C47.1571 132.157 48 130.122 48 128ZM128 208C125.878 208 123.843 208.843 122.343 210.343C120.843 211.843 120 213.878 120 216V240C120 242.122 120.843 244.157 122.343 245.657C123.843 247.157 125.878 248 128 248C130.122 248 132.157 247.157 133.657 245.657C135.157 244.157 136 242.122 136 240V216C136 213.878 135.157 211.843 133.657 210.343C132.157 208.843 130.122 208 128 208ZM240 120H216C213.878 120 211.843 120.843 210.343 122.343C208.843 123.843 208 125.878 208 128C208 130.122 208.843 132.157 210.343 133.657C211.843 135.157 213.878 136 216 136H240C242.122 136 244.157 135.157 245.657 133.657C247.157 132.157 248 130.122 248 128C248 125.878 247.157 123.843 245.657 122.343C244.157 120.843 242.122 120 240 120Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                v-if="activeTheme === 'light'"
                @click="onThemeChange('dark')"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 256 256"
                fill="none"
              >
                <path
                  d="M233.54 142.23C232.514 141.202 231.227 140.472 229.818 140.12C228.408 139.767 226.929 139.806 225.54 140.23C210.286 144.842 194.066 145.228 178.609 141.349C163.153 137.469 149.038 129.469 137.769 118.201C126.501 106.932 118.501 92.8173 114.621 77.3606C110.742 61.9039 111.128 45.6843 115.74 30.43C116.168 29.04 116.209 27.5597 115.859 26.1481C115.508 24.7366 114.78 23.4473 113.751 22.4189C112.723 21.3905 111.433 20.6619 110.022 20.3115C108.61 19.961 107.13 20.002 105.74 20.43C84.6503 26.8905 66.1354 39.8379 52.83 57.43C41.1941 72.8786 34.0965 91.2657 32.3346 110.526C30.5727 129.786 34.2163 149.155 42.8561 166.459C51.4958 183.762 64.7894 198.314 81.2433 208.478C97.6972 218.643 116.66 224.018 136 224C158.563 224.07 180.527 216.734 198.52 203.12C216.112 189.815 229.06 171.3 235.52 150.21C235.943 148.825 235.982 147.352 235.634 145.946C235.285 144.541 234.561 143.256 233.54 142.23ZM188.9 190.34C171.955 203.103 150.971 209.315 129.809 207.833C108.648 206.351 88.734 197.275 73.7334 182.276C58.7327 167.277 49.6552 147.363 48.1717 126.202C46.6882 105.041 52.8988 84.0556 65.66 67.11C73.974 56.1306 84.7227 47.2305 97.06 41.11C96.3572 46.0423 96.003 51.0179 96 56C96.0291 83.5736 106.996 110.009 126.493 129.507C145.991 149.004 172.426 159.971 200 160C204.992 159.998 209.978 159.644 214.92 158.94C208.794 171.279 199.887 182.028 188.9 190.34Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-5 flex justify-between">
          <div class="hidden md:block">
            <DropDownItem />
          </div>
          <div class="flex gap-4 justify-end w-full sm:w-[60%] md:w-[50%] lg:w-[55%] ease-in-out duration-300">
            <div
              class="bg-white dark:bg-side-dark px-3 py-2 rounded-3xl flex items-center ease-in-out duration-300"
            >
              <div class="mt-[2px] absolute">
                <SearchIcon />
              </div>
              <input
                type="text"
                :placeholder="$t('search')"
                class="placeholder:text-sm w-full pl-6 focus:outline-none bg-transparent"
              />
            </div>
            <div
              class="flex relative w-[65%] md:w-[40%] lg:w-[25%] xl:w-[18%] ease-in-out duration-300"
            >
              <div
                class="w-10 h-10 rounded-full overflow-hidden absolute right-20 border-2 border-back-color dark:border-back-color-dark"
              >
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
              </div>
              <div
                class="w-10 h-10 rounded-full overflow-hidden absolute right-14 border-2 border-back-color dark:border-back-color-dark"
              >
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
              </div>
              <div
                class="w-10 h-10 rounded-full overflow-hidden absolute right-8 border-2 border-back-color dark:border-back-color-dark"
              >
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
              </div>
              <div
                class="w-10 h-10 bg-page-blue text-white text-xs grid place-items-center rounded-full absolute right-2 border-2 border-back-color dark:border-back-color-dark"
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
const activeTheme = ref(localStorage.getItem('theme'))

function onThemeChange(theme) {
  localStorage.setItem('theme', theme)
  activeTheme.value = localStorage.getItem('theme')
}

export default {
  data() {
    return {
      imageUrl: LogoPicture
    }
  }
}
</script>
