<template>
    <div
        class="markdown"
        v-html="content"
    >
    </div>
</template>

<script setup>
    import markdownit from 'markdown-it'
    import './gpt.css'
    import 'highlight.js/styles/atom-one-dark.min.css'
    import { computed } from 'vue'

    const props = defineProps({
        content: String
    })

    const md = markdownit()
    const content = computed(() => md.render(props.content))
</script>