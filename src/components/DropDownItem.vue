<script setup>

const selectedValue = 'Barone LLC.'

</script>

<template>
    <div class="bg-white px-3 py-2 rounded-3xl flex gap-3 items-center font-semibold">
        <p>{{ selectedValue }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.293 9.293L12 13.586L7.707 9.293L6.293 10.707L12 16.414L17.707 10.707L16.293 9.293Z" fill="currentColor"/>
        </svg>
    </div>
</template>