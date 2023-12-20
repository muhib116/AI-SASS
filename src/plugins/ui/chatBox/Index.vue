<template>
    <div class="flex gap-4">
        <div
            v-if="type == 'prompt'"
            class="w-10 h-10 bg-red-400 rounded-full text-white flex items-center justify-center flex-shrink-0 flex-grow-0"
        >
            US
        </div>
        <div
            v-if="type == 'content'"
            class="w-10 h-10 bg-green-400 rounded-full text-white flex items-center justify-center flex-shrink-0 flex-grow-0"
        >
            AI
        </div>

        <Markdown
            v-if="markdown"
            :content="content"
        />
        <div
            v-else
            class="markdown"    
            v-html="content"
        ></div>
    </div>
</template>

<script setup>
    import { Markdown } from '@/plugins/ui'

    defineProps({
        type: {
            type: String,
            default: 'prompt'
        },
        content: String,
        markdown: {
            type: Boolean,
            default: true
        }
    })
</script>