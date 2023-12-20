<template>
    <router-link 
        :to="item.to" 
        class="relative group opacity-60 hover:opacity-100"
        exact-active-class="active-link opacity-100"
    >
        <span class="overlay absolute inset-0 inset-x-5 rounded-lg group-hover:bg-white/10"></span>
        <div class="flex items-center gap-4 px-10 py-4 relative z-10">
            <div class="w-8 h-8">
                <Icon
                    :name="item.icon"
                    :custom="item.iconType"
                    :color="item.color"
                    weight="bold"
                    size="30"
                />
            </div>
            <h3 
                :title="item.title"
                class="fex-shrink-0 truncate"
            >
                {{ item.title }}
            </h3>
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
    .active-link{
        opacity: 100%;
    }
    .active-link .overlay{
        background: white;
        opacity: 20%;
    }
</style>