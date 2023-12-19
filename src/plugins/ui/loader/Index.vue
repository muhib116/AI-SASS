<template>
    <div v-if="active" class="grid gap-4 relative text-center justify-center">
        <div 
            v-bind="$attr"
            class="
                w-12 h-12 rounded-full animate-spin mx-auto
                border-8 border-dashed border-purple-500 border-t-transparent
            "
        ></div>
        <h3 v-if="content" class="opacity-50">{{ content }}...</h3>
    </div>
</template>

<script setup>
    defineOptions({
        name: 'PreLoader',
        inheritAttrs: false
    })
    defineProps({
        content: String,
        active: {
            type: Boolean,
            default: false
        }
    })
</script>