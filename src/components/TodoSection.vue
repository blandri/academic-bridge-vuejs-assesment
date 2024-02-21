<script setup>
import TodoCardItem from './TodoCardItem.vue';
import StatusItem from './StatusItem.vue'
</script>

<template>
    <div class="mt-8 h-[80%] overflow-auto pr-2">
        <div class="grid grid-cols-4 gap-5">
          <div class="flex flex-col gap-4">
          <StatusItem>
            <template #color>
                <div class="bg-todo rounded-[5px] w-[14px] h-[14px]"/>
            </template>
            <template #name>To do</template>
          </StatusItem>
          <TodoCardItem>
            <template #image>
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
            </template>
            <template #title>
                <p>Make a new Post</p>
            </template>
            <template #details>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
            </template>
            <template #date>
                <p>12/21/22</p>
            </template>
          </TodoCardItem>
          </div>
          <div class="flex flex-col gap-4">
            <StatusItem>
            <template #color>
                <div class="bg-doing rounded-[5px] w-[14px] h-[14px]"/>
            </template>
            <template #name>Doing</template>
          </StatusItem>
          <TodoCardItem>
            <template #image>
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
            </template>
            <template #title>
                <p>Make a new Post</p>
            </template>
            <template #details>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
            </template>
            <template #date>
                <p>12/21/22</p>
            </template>
          </TodoCardItem>
          </div>
          <div class="flex flex-col gap-4">
            <StatusItem>
            <template #color>
                <div class="bg-under-review rounded-[5px] w-[14px] h-[14px]"/>
            </template>
            <template #name>Under review</template>
          </StatusItem>
          <TodoCardItem>
            <template #image>
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
            </template>
            <template #title>
                <p>Make a new Post</p>
            </template>
            <template #details>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
            </template>
            <template #date>
                <p>12/21/22</p>
            </template>
          </TodoCardItem>
          </div>
          <div class="flex flex-col gap-4">
            <StatusItem>
            <template #color>
                <div class="bg-done rounded-[5px] w-[14px] h-[14px]"/>
            </template>
            <template #name>Done</template>
          </StatusItem>
          <TodoCardItem>
            <template #image>
                <img alt="Profile picture" class="w-full h-full" src="@/assets/profile.jpg" />
            </template>
            <template #title>
                <p>Make a new Post</p>
            </template>
            <template #details>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
            </template>
            <template #date>
                <p>12/21/22</p>
            </template>
          </TodoCardItem>
          
          </div>
        </div>
    </div>
</template>

<script>
  const cards = document.querySelectorAll("#card")

  cards.forEach(card => {
    card.addEventListener("dragstart", () => {
        console.log(card)
    })
  })
</script>