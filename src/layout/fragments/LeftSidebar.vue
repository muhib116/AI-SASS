<template>
    <div class="text-white">
        <h1 class="px-10 py-10 font-bold text-2xl uppercase mb-4">Logo Here</h1>

        <div>
            <LeftSideItem
                v-for="item in menus"
                :key="item.title"
                :item="item"
            />

        </div>
    </div>
</template>

<script setup>
    import LeftSideItem from './LeftSideItem.vue';
    import { useLeftSidebar } from './useLeftSidebar'

    const { menus } = useLeftSidebar()
</script>