<template>
    <div class="flex h-screen">
        <aside class="w-[400px] bg-gray-800 overflow-y-auto">
            <LeftSidebar />
        </aside>
        <main class="bg-gray-100 w-full h-full p-10 overflow-y-auto">
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
    import LeftSidebar from './fragments/LeftSidebar.vue'
</script>