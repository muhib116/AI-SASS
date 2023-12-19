<template>
    <router-link 
        :to="item.to" 
        class="relative group opacity-60 hover:opacity-100"
        exact-active-class="active-link opacity-100"
    >
        <span class="overlay absolute inset-0 inset-x-5 rounded-lg group-hover:bg-white/10"></span>
        <div class="flex items-center gap-4 px-10 py-4 relative z-10 text-lg">
            <Icon
                :name="item.icon"
                :custom="item.iconType"
                :color="item.color"
                weight="bold"
                size="30"
            />
            {{ item.title }}
        </div>
    </router-link>
</template>

<script setup>
    import { Icon } from '@/plugins/ui'

    defineProps({
        item: Object
    })
</script>

<style scoped>
    .active-link .overlay{
        background: white;
        opacity: 20%;
    }
</style>