<template>
    <div class="flex gap-4 items-start">
        <div 
            class="p-2 relative"
        >
            <span
                class="absolute inset-0 rounded-lg opacity-20"
                :style="{
                    backgroundColor: currentNavigation.color
                }"
            ></span>
            <Icon 
                :name="currentNavigation.icon"
                :color="currentNavigation.color"
                :weight="currentNavigation.weight"
            />
        </div>
        <div>
            <h1 class="font-bold text-lg leading-[20px] mb-1">
                {{ currentNavigation.title }}
            </h1>
            <p class="font-light text-sm max-w-[600px] opacity-30 italic">
                {{ currentNavigation.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import { menus } from '@/utilities/navigation.js'
    import { Icon } from '@/plugins/ui'


    const route = useRoute()
    const currentNavigation = ref({})

    onMounted(() => {
        currentNavigation.value = menus.find(item => item.to?.name == route.name)
    })
</script>